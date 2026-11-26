# Café Bruma

Sitio de muestra para **Café Bruma**, una cafetería completamente ficticia. Está hecho con Next.js, React y Tailwind CSS, e incluye una presentación, una selección del menú y secciones ilustrativas de historia y ubicación.

Todos los productos, precios, horarios, textos y datos de ubicación son ficticios y no representan un negocio real. Las fotografías se cargan desde Unsplash.

## Enlaces

- Sitio desplegado: [cafe-sigma-blush.vercel.app](https://cafe-sigma-blush.vercel.app/)
- Repositorio: [github.com/blackgoku-97/cafe](https://github.com/blackgoku-97/cafe)

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

- Edita `src/app/page.tsx` para cambiar los textos, productos, precios, dirección y horarios.
- Edita `src/app/globals.css` para ajustar los colores, estilos y diseño responsive.
- Actualiza los metadatos de la página en `src/app/layout.tsx`.

