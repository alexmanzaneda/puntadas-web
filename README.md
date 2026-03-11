# Puntadas 👜

Tienda online de bolsos artesanales. Proyecto construido desde cero con Next.js, TypeScript y Tailwind CSS.

## 🚀 Stack tecnológico

| Tecnología | Versión | Uso |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15 (App Router) | Framework principal |
| [React](https://react.dev/) | 19 | UI |
| [TypeScript](https://www.typescriptlang.org/) | 5 | Tipado estático |
| [Tailwind CSS](https://tailwindcss.com/) | 3 | Estilos |

## 📂 Estructura del proyecto

```
src/
├── app/                  # Rutas y layouts (Next.js App Router)
│   ├── layout.tsx        # Layout raíz (Navbar, fuentes, metadata)
│   ├── page.tsx          # Página de inicio
│   └── catalogue/        # Ruta /catalogue
├── components/
│   ├── layout/           # Navbar, Footer
│   ├── shop/             # Componentes de tienda (tarjetas, grids...)
│   └── ui/               # Componentes base reutilizables (Button, Badge...)
├── data/
│   └── products.ts       # Catálogo de productos (mock data)
├── types/
│   └── index.ts          # Interfaces TypeScript
└── lib/
    ├── constants.ts      # Constantes globales
    └── utils.ts          # Funciones de utilidad
```

## 🛠️ Instalación

Requisitos previos: [Node.js](https://nodejs.org/) (v18 o superior).

1. **Clona el repositorio**:
   ```bash
   git clone https://github.com/your-username/puntadas-web.git
   cd puntadas-web
   ```

2. **Instala las dependencias**:
   ```bash
   npm install
   ```

3. **Arranca el servidor de desarrollo**:
   ```bash
   npm run dev
   ```

4. Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

## 📦 Scripts disponibles

| Comando | Descripción |
|---|---|
| `npm run dev` | Servidor de desarrollo con hot-reload |
| `npm run build` | Compilación para producción |
| `npm run start` | Servidor de producción (requiere build previo) |
| `npm run lint` | Análisis estático del código |