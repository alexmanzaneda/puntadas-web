-- =============================================================================
-- Puntadas BCN · Bucket de imágenes de producto
-- Ejecutar en: Supabase → SQL Editor (2º, después del esquema)
-- =============================================================================
-- Bucket público de lectura (las fotos se ven en la web sin token).
-- Solo los administradores pueden subir, reemplazar o borrar.
-- Las fotos se convierten a webp antes de subir (panel), pero se aceptan
-- formatos de móvil por si la conversión se hace en servidor.
-- =============================================================================

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'product-images',
  'product-images',
  true,
  15 * 1024 * 1024,   -- 15 MB (fotos de móvil sin comprimir)
  array['image/webp', 'image/jpeg', 'image/png', 'image/avif', 'image/heic', 'image/heif']
)
on conflict (id) do update
  set public             = excluded.public,
      file_size_limit    = excluded.file_size_limit,
      allowed_mime_types = excluded.allowed_mime_types;

-- La lectura pública la da el propio bucket (public = true) vía URL pública.
-- No se crea política SELECT para anon: así nadie puede LISTAR el bucket entero.

create policy "product-images: lectura admin"
  on storage.objects for select to authenticated
  using (bucket_id = 'product-images' and (select public.is_admin()));

create policy "product-images: subida admin"
  on storage.objects for insert to authenticated
  with check (bucket_id = 'product-images' and (select public.is_admin()));

create policy "product-images: edición admin"
  on storage.objects for update to authenticated
  using (bucket_id = 'product-images' and (select public.is_admin()))
  with check (bucket_id = 'product-images' and (select public.is_admin()));

create policy "product-images: borrado admin"
  on storage.objects for delete to authenticated
  using (bucket_id = 'product-images' and (select public.is_admin()));
