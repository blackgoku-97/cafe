# Café Bruma

Sitio de muestra para **Café Bruma**, una cafetería completamente ficticia. Está hecho con Next.js, React, Tailwind CSS y Lucide React.

Incluye una portada responsive, navegación móvil, catálogo de cafés, postres y dulces con filtros por categoría, historia y ubicación de muestra.

Todos los productos, precios, horarios, textos y datos de ubicación son ficticios y no representan un negocio real. Las fotografías se cargan desde Unsplash.

## Enlaces

- Sitio desplegado: [cafe-sigma-blush.vercel.app](https://cafe-sigma-blush.vercel.app/)
- Repositorio: [github.com/blackgoku-97/cafe](https://github.com/blackgoku-97/cafe)

## Estructura del proyecto

```text
cafe-web/
├── public/                 # Recursos estáticos
├── src/
│   ├── app/
│   │   ├── favicon.ico     # Icono de la pestaña
│   │   ├── globals.css     # Estilos globales y responsive
│   │   ├── layout.tsx      # Layout raíz y metadatos
│   │   └── page.tsx        # Página principal
│   └── components/
│       ├── Footer.tsx      # Pie de página
│       ├── MenuCatalog.tsx # Catálogo y filtros de productos
│       ├── Navbar.tsx      # Navegación responsive
│       └── index.ts        # Exportaciones de componentes
├── package.json            # Dependencias y scripts
├── pnpm-lock.yaml          # Versiones bloqueadas de dependencias
└── tsconfig.json           # Configuración de TypeScript
```

## Requisitos

- Node.js
- pnpm

## Desarrollo local

Instala las dependencias e inicia el servidor de desarrollo:

```bash
pnpm install
pnpm dev
```

Abre [http://localhost:3000](http://localhost:3000) en el navegador. La página principal se encuentra en `src/app/page.tsx` y se actualiza al guardar cambios.

## Comandos

```bash
pnpm dev    # Inicia el servidor de desarrollo
pnpm lint   # Ejecuta ESLint
pnpm build  # Genera la compilación de producción
pnpm start  # Sirve la compilación de producción
```

## Personalización

- `src/components/Navbar.tsx`: navegación principal y menú móvil.
- `src/components/MenuCatalog.tsx`: productos, precios, categorías y filtros del catálogo.
- `src/components/Footer.tsx`: enlaces y contenido del pie de página.
- `src/app/page.tsx`: portada, historia y sección de ubicación.
- `src/app/globals.css`: colores, estilos y diseño responsive.
- `src/app/layout.tsx`: idioma y metadatos de la página.

