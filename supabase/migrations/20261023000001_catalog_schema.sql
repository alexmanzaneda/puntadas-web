-- =============================================================================
-- Puntadas BCN · Esquema del catálogo
-- Ejecutar en: Supabase → SQL Editor (en orden, 1º este archivo)
-- =============================================================================
-- Tablas:
--   categories        Categorías fijas (Bolso, Neceser…). Lectura pública.
--   collections       Subcolecciones / filtros (Ganchillo, Denim…). Lectura pública.
--   products          Ficha pública del producto (SIN precio).
--   product_images    Imágenes ordenadas de cada producto.
--   product_private   Datos internos (precio, notas). Solo administradores.
--   admins            Usuarios con permiso de escritura (propietaria + devs).
-- =============================================================================


-- -----------------------------------------------------------------------------
-- Administradores
-- -----------------------------------------------------------------------------
create table public.admins (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  name       text not null,
  created_at timestamptz not null default now()
);

comment on table public.admins is 'Usuarios que pueden crear/editar productos desde el panel.';

-- security definer: las políticas RLS lo usan sin que el usuario necesite leer la tabla admins
create or replace function public.is_admin()
returns boolean
language sql
stable
security definer
set search_path = ''
as $$
  select exists (
    select 1 from public.admins where user_id = (select auth.uid())
  );
$$;

revoke execute on function public.is_admin() from public, anon;
grant execute on function public.is_admin() to authenticated;


-- -----------------------------------------------------------------------------
-- Utilidad: updated_at automático
-- -----------------------------------------------------------------------------
create or replace function public.set_updated_at()
returns trigger
language plpgsql
set search_path = ''
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;


-- -----------------------------------------------------------------------------
-- Categorías y colecciones
-- Los nombres coinciden con ProductCategory / ProductType de src/types/index.ts
-- -----------------------------------------------------------------------------
create table public.categories (
  name        text primary key,                 -- 'Bolso'
  slug        text not null unique,             -- 'bolsos' → /catalogue/bolsos
  label       text not null,                    -- 'Bolsos' (texto para la propietaria)
  sort_order  smallint not null default 0
);

create table public.collections (
  name        text primary key,                 -- 'Ganchillo'
  category    text references public.categories (name) on update cascade,  -- null = sirve para cualquier categoría
  is_featured boolean not null default false,   -- 'Nueva colección' → destacada en la home
  sort_order  smallint not null default 0
);


-- -----------------------------------------------------------------------------
-- Productos (datos públicos)
-- -----------------------------------------------------------------------------
create table public.products (
  id          text primary key
              check (id ~ '^[a-z0-9áéíóúüñ]+(-[a-z0-9áéíóúüñ]+)*$'),   -- slug: es la URL /product/<id>, no cambiarlo
  name        text not null check (length(trim(name)) > 0),
  description text not null default '',
  category    text not null references public.categories (name) on update cascade,
  collection  text references public.collections (name) on update cascade,
  in_stock    boolean not null default true,              -- false → se muestra "Agotado"
  is_visible  boolean not null default true,              -- false → oculto de la web (no se borra)
  sort_order  integer not null default 0,                 -- menor = aparece antes
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

comment on table public.products is 'Catálogo público. El precio vive en product_private (bajo consulta).';

create index products_category_idx   on public.products (category) where is_visible;
create index products_collection_idx on public.products (collection) where is_visible;

create trigger products_set_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();


-- -----------------------------------------------------------------------------
-- Imágenes de producto
-- path:
--   '/images/...'            → imagen antigua servida desde /public del repo
--   'productos/<id>/x.webp'  → imagen subida desde el panel al bucket product-images
-- -----------------------------------------------------------------------------
create table public.product_images (
  id          uuid primary key default gen_random_uuid(),
  product_id  text not null references public.products (id) on delete cascade on update cascade,
  path        text not null,
  alt         text,
  position    smallint not null default 0,      -- 0 = imagen principal
  created_at  timestamptz not null default now(),
  unique (product_id, position) deferrable initially deferred   -- permite reordenar en una transacción
);

create index product_images_product_idx on public.product_images (product_id, position);


-- -----------------------------------------------------------------------------
-- Datos internos (precio bajo consulta)
-- -----------------------------------------------------------------------------
create table public.product_private (
  product_id  text primary key references public.products (id) on delete cascade on update cascade,
  price       numeric(8, 2) check (price is null or price >= 0),
  notes       text,
  updated_at  timestamptz not null default now()
);

comment on table public.product_private is 'Solo administradores. Nunca exponer en la web.';

create trigger product_private_set_updated_at
  before update on public.product_private
  for each row execute function public.set_updated_at();


-- =============================================================================
-- Seguridad (RLS)
-- Público (anon): solo lectura de lo visible.  Admins: todo.
-- =============================================================================
alter table public.admins          enable row level security;
alter table public.categories      enable row level security;
alter table public.collections     enable row level security;
alter table public.products        enable row level security;
alter table public.product_images  enable row level security;
alter table public.product_private enable row level security;

-- Permisos base de tabla (RLS filtra después)
revoke all on public.admins, public.product_private from anon;
grant select on public.categories, public.collections, public.products, public.product_images to anon, authenticated;
grant insert, update, delete on public.categories, public.collections, public.products, public.product_images to authenticated;
grant select, insert, update, delete on public.product_private to authenticated;
grant select on public.admins to authenticated;

-- admins: cada admin puede ver la lista; altas/bajas solo desde el SQL Editor
create policy "admins: lectura entre admins"
  on public.admins for select to authenticated
  using ((select public.is_admin()));

-- categories / collections
create policy "categories: lectura pública"
  on public.categories for select to anon, authenticated
  using (true);
create policy "categories: escritura admin"
  on public.categories for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

create policy "collections: lectura pública"
  on public.collections for select to anon, authenticated
  using (true);
create policy "collections: escritura admin"
  on public.collections for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- products
create policy "products: lectura pública de visibles"
  on public.products for select to anon, authenticated
  using (is_visible or (select public.is_admin()));
create policy "products: alta admin"
  on public.products for insert to authenticated
  with check ((select public.is_admin()));
create policy "products: edición admin"
  on public.products for update to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));
create policy "products: borrado admin"
  on public.products for delete to authenticated
  using ((select public.is_admin()));

-- product_images (visibles si su producto lo es)
create policy "product_images: lectura pública"
  on public.product_images for select to anon, authenticated
  using (
    exists (
      select 1 from public.products p
      where p.id = product_id and (p.is_visible or (select public.is_admin()))
    )
  );
create policy "product_images: escritura admin"
  on public.product_images for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));

-- product_private: solo admins
create policy "product_private: solo admin"
  on public.product_private for all to authenticated
  using ((select public.is_admin())) with check ((select public.is_admin()));


-- =============================================================================
-- Vista de catálogo (lo que consume la web)
-- security_invoker: respeta el RLS de quien consulta (anon solo ve lo visible)
-- =============================================================================
create view public.catalog
with (security_invoker = true)
as
select
  p.id,
  p.name,
  p.description,
  p.category,
  p.collection,
  p.in_stock,
  p.sort_order,
  p.created_at,
  p.updated_at,
  coalesce(
    (select array_agg(i.path order by i.position)
       from public.product_images i
      where i.product_id = p.id),
    '{}'
  ) as images
from public.products p
where p.is_visible;

grant select on public.catalog to anon, authenticated;
