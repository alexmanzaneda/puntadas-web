# Supabase · Puntadas BCN

Proyecto `puntadasbcn` (organización de Sara, plan gratuito). No hay integración con GitHub ni CLI enlazada: **los scripts se aplican a mano en el SQL Editor** del panel de Supabase.

## Orden de ejecución (primera vez)

| # | Archivo | Qué hace |
|---|---|---|
| 1 | `migrations/20261023000001_catalog_schema.sql` | Tablas, RLS, función `is_admin()` y vista `catalog` |
| 2 | `migrations/20261023000002_storage_product_images.sql` | Bucket `product-images` y sus permisos |
| 3 | `seed.sql` | Carga los productos actuales de `src/data/products.ts` (se puede repetir sin duplicar) |

Abre cada archivo, copia todo, pégalo en **SQL Editor → New query → Run**. Si uno falla, no sigas con el siguiente.

## Comprobación rápida

```sql
select category, count(*) from public.catalog group by category;   -- 23 Bolso · 6 Neceser · 10 Correa · 8 Accesorio
select count(*) from public.product_images;                         -- 57
```

Comprueba también que el precio **no** es accesible públicamente: en *Table Editor → product_private* debe aparecer el candado de RLS activo, sin políticas para `anon`.

## Dar acceso de administrador (propietaria y devs)

1. *Authentication → Users → Add user → Send invitation* con su email (o que entre una vez con el enlace mágico desde el panel).
2. En el SQL Editor:

```sql
insert into public.admins (user_id, name)
select id, 'Nombre' from auth.users where email = 'correo@ejemplo.com';
```

Recomendado: *Authentication → Sign In / Providers → desactivar "Allow new users to sign up"*, para que solo entren usuarios invitados.

## Modelo

- `products`: ficha pública. `id` = slug de la URL `/product/<id>` → **no cambiarlo**.
- `product_images.path`: `/images/...` = imagen antigua en `public/` del repo; cualquier otra ruta = archivo en el bucket `product-images`.
- `product_private`: precio y notas internas. **Solo admins** (precio bajo consulta, nunca en la web).
- `is_visible = false` oculta un producto sin borrarlo; `in_stock = false` lo muestra como *Agotado*.
- La web lee de la vista `catalog` (solo productos visibles, con sus imágenes ordenadas).

## Cambios futuros del esquema

Nuevo archivo en `migrations/` con fecha delante (`AAAAMMDDHHMMSS_descripcion.sql`). Nunca editar un archivo ya aplicado: crea otro que haga el cambio. Así el día que enlacemos la CLI (`supabase link` + `supabase db push`) el historial ya está listo.

`seed.sql` se generó desde `src/data/products.ts`. Cuando la web lea de Supabase, la fuente de verdad pasa a ser la base de datos y `products.ts` se elimina.
