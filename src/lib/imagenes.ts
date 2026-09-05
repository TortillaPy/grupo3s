import type { ImageMetadata } from 'astro';

/**
 * Resuelve la ruta que guarda `products.ts` al módulo de imagen que
 * necesita el componente `<Image />` de Astro.
 *
 * Las imágenes viven en `src/assets/images/` —no en `public/`— para que
 * Astro las procese: genera WebP y AVIF, calcula `width` y `height`, y
 * emite el `srcset`. Eso es lo que evita el CLS y baja el peso.
 *
 * Para reemplazar una foto placeholder por la real: pisá el archivo en
 * `src/assets/images/` conservando el nombre. Si cambiás el nombre,
 * actualizá también el `src` en `products.ts`.
 */
const archivos = import.meta.glob<{ default: ImageMetadata }>(
  '/src/assets/images/**/*.{jpg,jpeg,png,webp,avif}',
  { eager: true },
);

export function resolverImagen(ruta: string): ImageMetadata {
  const modulo = archivos[ruta];
  if (modulo === undefined) {
    throw new Error(
      `No existe la imagen "${ruta}". Poné el archivo en src/assets/images/ ` +
        `o corregí el campo "src" en src/data/products.ts. ` +
        `Disponibles: ${Object.keys(archivos).join(', ')}`,
    );
  }
  return modulo.default;
}
