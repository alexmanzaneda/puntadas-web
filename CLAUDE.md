# Puntadas BCN

Web catálogo de **Puntadas**, marca pequeña de bolsos y accesorios artesanales hechos a mano en Barcelona. Producción: https://puntadasbcn.com

No es una tienda online: no hay carrito ni pago. El objetivo es enseñar las piezas y llevar al cliente a **WhatsApp / Instagram** para encargar o personalizar.

## Equipo y usuarios

- **Devs:** Alex (@alexmanzaneda) y Sara (@saravigon).
- **Propietaria de la marca:** persona mayor sin conocimientos técnicos. Cualquier herramienta pensada para ella (panel de subida de productos) debe ser extremadamente simple: móvil primero, botones grandes, pocos campos, lenguaje llano, sin jerga técnica.

## Stack

- Next.js 15 (App Router) · React 19 · TypeScript 5 · Tailwind CSS 3.4
- Hosting: **Vercel**, despliegue automático al hacer push a `main`.
- Datos: hoy en `src/data/products.ts` (estático). **En migración a Supabase** (proyecto `puntadasbcn`, cuenta de la colaboradora, plan gratuito).

## Comandos

```bash
npm run dev     # servidor local en http://localhost:3000
npm run build   # build de producción — ejecutar antes de dar algo por terminado
npm run lint
```

No hay tests automatizados.

## Estructura

```
src/
├── app/                    # Rutas (App Router)
│   ├── catalogue/<cat>/    # Una página por categoría → usa components/shop/CategoryPage
│   ├── product/[id]/       # Ficha de producto
│   └── <info>/             # contacto, nosotros, FAQ, devoluciones, políticas
├── components/
│   ├── layout/             # Navbar, Footer
│   ├── shop/               # ProductCard, ImageGallery, FilterButtons, ShareButton
│   └── ui/                 # Componentes base
├── data/products.ts        # Catálogo actual
├── lib/                    # categories (rutas por categoría), palette, constants, utils
└── types/index.ts          # Product, ProductCategory, ProductType
```

## Modelo de producto

Definido en `src/types/index.ts`.

- `category`: `Bolso | Neceser | Correa | Accesorio`. Cada una tiene su ruta en `src/lib/categories.ts`. **Usa siempre `getCategoryRoute()`**, no escribas rutas a mano.
- `type` (opcional): subcolección que alimenta los filtros de la página de categoría (`Ganchillo`, `Denim`, `Nueva colección`…). `Nueva colección` se muestra destacada en la home.
- `id`: slug en minúsculas con guiones, con prefijo de categoría (`bolso-happy-azul1`). Es la URL de la ficha (`/product/<id>`): no cambiar ids existentes, rompería enlaces compartidos.
- `price`: en euros, **dato interno**. Los precios son *bajo consulta*: no mostrarlos nunca en la web (ni tarjetas, ni ficha, ni metadatos/JSON-LD).

## Imágenes

- Formato **webp** en `public/images/<categoria>/[subcarpeta]/`, nombres en minúsculas con guiones o guiones bajos.
- Los **originales en alta resolución NO van al repo**: viven en `C:\Users\Alex\Desktop\Personal\original-photos\puntadasbcn\` (misma estructura de carpetas). Antes de comprimir o reemplazar una imagen, asegúrate de que su original está ahí.
- Objetivo de peso: ≤ 300 KB por imagen de producto. Usa siempre `next/image`.

## Diseño

- Estamos en pleno **rediseño hacia una estética editorial de alto nivel** (referentes: Paloma Wool, Jacquemus, Loewe craft). Nada de "plantilla Tailwind": evita bordes + sombras + `rounded-lg` genéricos.
- Para cualquier trabajo visual, usa la skill de diseño del repo (`design-taste-frontend`) y, cuando exista, la skill `marca-puntadas` con la identidad cerrada (paleta, tipografías, tono).
- Tipografías actuales: Poppins (texto) + Playfair Display (títulos, vía `--font-playfair`). Pendientes de revisión en el rediseño.
- Todo debe verse perfecto en **móvil**: la mayoría del tráfico llega desde Instagram/WhatsApp.

## Idioma y tono

- Todo el contenido de la web en **castellano**. Tono cercano, cálido y artesanal; tuteo.
- Comentarios en el código: castellano. Nombres de variables/componentes: inglés.

## Git

- Commits en inglés con Conventional Commits: `feat:`, `fix:`, `perf:`, `refactor:`, `docs:`.
- Se trabaja **directamente sobre `main`** y cada push despliega a producción en Vercel: ejecuta `npm run build` antes de hacer commit.

## SEO

- Metadatos globales y JSON-LD `LocalBusiness` en `src/app/layout.tsx`.
- `src/app/sitemap.ts` genera rutas estáticas + una por producto: si añades una categoría o página, añádela también ahí.

## Contacto de la marca

- WhatsApp: `https://wa.me/34630550136`
- Instagram: `@puntadasbcn` → `https://www.instagram.com/puntadasbcn/` (cualquier otro handle en el código es un error).
