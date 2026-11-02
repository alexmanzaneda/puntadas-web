# DESIGN.md · Puntadas

Identidad visual de puntadasbcn.com. Es la referencia para cualquier pantalla nueva (incluido el futuro panel de la propietaria) y la base de la futura skill `marca-puntadas`. Si algo de aquí choca con el código, manda este documento: arregla el código o actualiza el documento, pero no los dejes distintos.

Estado: **v2, octubre 2026**. Rediseño completo inspirado en la dirección de arte de Polène Paris, aplicado a todas las vistas (home, catálogo, ficha, el taller, contacto, preguntas frecuentes, páginas legales y 404). Solo fotos de la sesión nueva (`original-photos/puntadasbcn/postAI/`).

---

## 1. La idea

> **Minimalismo cálido de boutique: tonos hueso, piedra y arena, tinta carbón, mucho aire, y la pieza cosida a mano como única protagonista.**

- **Referente:** Polène Paris. Se toma el principio (nombre grande y centrado, menú a pantalla completa con fotos, fotos sobre fondos de piedra, mayúsculas pequeñas en la navegación, líneas finísimas, footer sobrio), nunca su logotipo, textos ni composiciones exactas.
- **Lo que solo tiene Puntadas:** las telas (vichy, pana, ikat, toile, flores), los volantes y el bordado a mano. Las fotos de cerca y la pila de telas del taller lo cuentan mejor que cualquier texto.
- **Lo que se puede tocar:** el **nombre bordado en vivo** (`#personaliza`). Escribes un nombre, lo ves bordado en la Tote Dinos y el botón abre WhatsApp con el mensaje escrito.
- **Nada de precios.** Toda acción acaba en WhatsApp.

## 2. Color

| Token | Valor | Uso |
|---|---|---|
| `--paper` · `bg-paper` | `#F9F6F0` | Hueso: fondo de toda la web |
| `--stone` · `bg-stone` | `#F2EFE9` | Piedra: fondo de todas las fotos de producto, paneles suaves |
| `--sand` · `bg-sand` | `#E6E2DD` | Arena: un escalón más; segundo panel del hero y sección de personalización |
| `--ink` · `text-ink` / `bg-ink` | `#1C1B1A` | Carbón: todo el texto corrido y el botón principal |
| `--ink-soft` | `#33312E` | Hover del botón principal |
| `--muted` · `text-muted` | `#6B6660` | Solo lo secundario: etiquetas, notas, categoría en tarjetas (≥ 4.5:1 sobre hueso y piedra; **sobre arena usa carbón**) |
| `--line` · `border-line` | `rgba(28,27,26,.14)` | Líneas divisorias ultrafinas de 1 px |

Reglas:
- **Nunca `#FFFFFF` ni negro puro.** Nada de colores saturados en la interfaz: el color lo ponen las piezas.
- Sin degradados, sin sombras, sin `rounded-*` (esquinas rectas en todo).
- Las fotos de estudio llevan fondo blanco y se funden con la piedra con `.blend` (`mix-blend-mode: multiply`), aplicada al **contenedor**, no al `<img>`.

## 3. Tipografía

| Familia | Uso | Carga |
|---|---|---|
| **Cormorant Garamond** (`font-display`) | Nombre de la marca, `h1`–`h3`, nombres de pieza. Pesos 300/400/500; cursiva solo para el nombre bordado en vivo. **No se cambia.** | `next/font/google`, variable `--font-display` |
| **DM Sans** (`font-sans`) | Párrafos (peso 300), menús, botones, etiquetas (400). | `next/font/google`, variable `--font-text` |

Escala (tokens en `globals.css`, clases de Tailwind). **Ningún texto de la web es más grande que `PUNTADAS` en la cabecera**, tampoco el del footer ni el nombre bordado en vivo (limitado con `min(…, var(--step-brand))`):

| Clase | Tamaño | Uso |
|---|---|---|
| `text-brand` | 28 → 64 px, tracking 0.1em | Solo `PUNTADAS` en la cabecera y el menú. Tamaño fijo: no cambia al hacer scroll |
| `text-head` | 26 → 50 px | `h1` y `h2` |
| `text-lead` | 22 → 28 px | `h3`, nombres en listas, enlaces del menú |
| `text-body` | 16–17 px, interlineado 1.7 | Texto corrido, en carbón |
| `text-small` | 14 px | Notas, enlaces del footer |
| `.label` | 13 px, MAYÚSCULAS, tracking 0.16em | Menú, botones, categorías, etiquetas de formulario, ruta de navegación |

Reglas:
- Titulares en dos líneas como máximo.
- **No poner etiquetas en mayúsculas encima de cada título** (el típico "kicker"): es un tic de plantilla. Las mayúsculas pequeñas son para navegar y actuar, no para decorar.
- Nada de numeración decorativa (01, 02, 03).

## 4. Espacio y retícula

- Márgenes laterales `px-gutter`: 20 px en móvil, 40 px desde 768 px.
- Separación entre secciones `pt-section` / `mt-section`: 96 px en móvil, 160 px en escritorio.
- Retícula de 12 columnas en escritorio, asimétrica pero equilibrada (por ejemplo, 5 + 5 con una columna de aire, o 7 + 5 en la ficha).
- Rejillas de producto: 2 columnas en móvil, 3 en tablet, 4 en escritorio; fotos en proporción 4:5.
- **En escritorio, toda foto se ve entera sin hacer scroll**: nada de fotos de producto a media página de alto. Una foto sola se limita a la altura de la ventana (`h-[calc(100svh-var(--header)-…)]`); varias, en rejilla. La única foto a sangre es la portada de la home.

## 5. Componentes

- **Cabecera** (`layout/Navbar.tsx`): altura fija, siempre hueso translúcido (`backdrop-blur`) con una línea gris clara debajo, para que se intuya lo que pasa por detrás. Desde 1280 px: las cuatro secciones a la izquierda y `PUNTADAS` centrado; a la derecha, de momento, nada. Por debajo de 1280 px (móvil y tablet), icono de menú a la izquierda (las cuatro secciones no caben junto al nombre centrado).
- **Menú a pantalla completa** (solo móvil y tablet): cuatro fotos de categoría (`categoryCovers` en `lib/categories.ts`) con etiqueta, una lista en serif separada por líneas finas y los enlaces a WhatsApp e Instagram. Se cierra con la ×, con Escape o al navegar.
- **Botones** (uno por acción):
  - `.btn`: carbón plano, texto hueso en `.label`, 48 px de alto, esquinas rectas; hover a `--ink-soft` en 500 ms.
  - `.btn-outline`: solo un filo de 1 px que se rellena al pasar. Para acciones secundarias.
- **Enlaces** (`.link-line`): subrayado de 1 px que se dibuja de izquierda a derecha en 600 ms. También marca el filtro activo (`aria-current`).
- **Tarjeta de pieza** (`shop/ProductCard.tsx`): foto sobre piedra (4:5) con zoom lento, nombre en serif y categoría en `.label` debajo (`showCategory={false}` dentro de una categoría). Sin precio.
- **Footer** (`layout/Footer.tsx`): una línea fina arriba, una frase, tres columnas de enlaces (Catálogo, Ayuda, Síguenos) y la línea legal. Sin repetir `PUNTADAS` ni el número de teléfono.
- **Cabecera de página** (`ui/PageHeader.tsx`): título y entradilla.
- **Acordeón** (`ui/Accordion.tsx`): filas separadas por líneas finas, signo +/− dibujado; preguntas frecuentes y detalles de la ficha.
- **Páginas de texto** (`ui/LegalPage.tsx`): título del apartado a la izquierda, texto a la derecha, separados por líneas finas.
- **Contacto:** siempre las constantes de `lib/constants.ts` (`WHATSAPP_URL`, `whatsappLink(mensaje)`, `INSTAGRAM_URL`). **El número de teléfono (+34 604 52 96 18) solo se muestra en la página de contacto**; en el resto de la web, enlaces que abren WhatsApp.

## 6. Vistas

| Vista | Estructura |
|---|---|
| Home | Hero con `public/images/Portada.webp` a sangre bajo la cabecera y el titular en una tarjeta hueso → Novedades (cuatro piezas iguales en fila) → Qué hay en el taller (4 categorías, sin recuentos sueltos) → Con su nombre (personalización, sobre arena) → Así se hace un encargo (tres fotos que crecen) → El taller → Encarga la tuya (telas a sangre con tarjeta) |
| Categoría | Título centrado, entradilla, foto panorámica opcional (Correas), filtros como pestañas de texto, recuento, rejilla |
| Ficha | Fotos en rejilla de dos columnas o una sola limitada a la altura de la ventana (carrusel con contador en móvil) + columna fija con ruta, nombre, disponibilidad, descripción, "Encargar por WhatsApp", compartir y acordeón de detalles; "Más bolsos" debajo |
| El taller | Retrato a la izquierda (cabe entero en pantalla) y título, entradilla y texto a la derecha; debajo, "Cómo se hace" en tres fotos |
| Contacto | Canales con líneas finas (WhatsApp, Instagram, horario) y el proceso en cuatro pasos |
| FAQ, devoluciones, privacidad, cookies | Plantillas de texto con acordeón o apartados |

Lo que el diseño pide a la base de datos (fase 2): `cutout_image` (recorte con fondo blanco), `lifestyle_images[]`, `alt` por imagen, `is_featured` / orden de Novedades (hoy `NEW_ARRIVAL_IDS` en `app/page.tsx`), `personalizable` y `materials`. Las portadas de categoría pasarían a la tabla `categories`.

## 7. Fotografía

- **Catálogo:** fondo blanco, de frente, con aire alrededor; la web lo funde con la piedra. Mismo encuadre y luz en todas.
- **Detalle:** de cerca, sin fondo blanco forzado, con la luz igualada a la foto principal (prompt con foto de referencia, ver historial).
- **Contexto:** taller, telas, terraza. Evitar escenas generadas por IA presentadas como reales. Excepción decidida por la marca: la portada de la home (`Portada.webp`), generada con Gemini; se le ha quitado la marca ✦ desde el original.
- Sin la marca ✦ de Gemini y revisando que la etiqueta "puntadasbcn · Hecho a mano" no salga deformada.
- Webp ≤ 300 KB, siempre `next/image` con `sizes` y `alt` en castellano.

## 8. Movimiento

Solo `transform` y `opacity`; con `prefers-reduced-motion` o sin JavaScript todo se ve desde el inicio.

- **Zoom lento** de las fotos al pasar: `.img-zoom` dentro de un `.group`, `scale(1.03)` en 700 ms `ease-out`.
- **Entradas** con `data-reveal` (sube 20 px y aparece), escalonadas con `style={{ '--delay': '80ms' }}`; las activa `RevealObserver`.
- **Hero:** la portada aparece despacio (`.settle`).
- **Cabecera:** fija; no cambia de tamaño ni de fondo al hacer scroll.
- **Foto a sangre** del contacto: deriva muy lenta (`.drift`).

## 9. Voz

Castellano, tuteo, frases cortas. Se habla de telas, costuras, plazos y cómo se encarga. Sin superlativos ("increíble", "el mejor", "exclusivo"). Los botones dicen lo que hacen: "Encargar por WhatsApp", "Ver la colección", "Pedirla con «Vera»".

## 10. Revisión

```bash
node .claude/skills/design-taste-frontend/scripts/inspect.mjs http://localhost:3000/<ruta> --allow hairline,micro-label,palette-cream
```

Las reglas `hairline`, `micro-label` y `palette-cream` se permiten a propósito (líneas finas, mayúsculas pequeñas y fondo hueso son parte de esta identidad). En páginas de texto (FAQ, legales, contacto) el inspector pedirá fotos y un elemento dominante: no aplica. El aviso de "focal point" en el hero viene de que el nombre de la marca sea lo más grande, que es una decisión de marca.

Si cambias `tailwind.config.ts`, **reinicia `npm run dev`**: la configuración no se recarga sola.
