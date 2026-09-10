// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import icon from 'astro-icon';

// El dominio real. Astro lo usa para la URL canónica, el sitemap y las
// URLs absolutas de Open Graph. Si cambia el dominio, se cambia acá y
// en `config.site.url` (src/data/config.ts).
const SITE_URL = 'https://3sgrupoindustrial.com.py';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'never',

  // Español sin prefijo (/), portugués e inglés bajo /pt y /en.
  // Las páginas traducidas se agregan en la fase 7; la configuración
  // ya está lista para que sumarlas no requiera refactor.
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'pt', 'en'],
    routing: {
      prefixDefaultLocale: false,
      redirectToDefaultLocale: false,
    },
  },

  integrations: [
    // Solo se empaquetan los íconos listados: el resto de Lucide no entra al build.
    icon({
      include: {
        lucide: [
          'truck',
          'flask-conical',
          'file-text',
          'droplets',
          'shield-check',
          'leaf',
          'sparkles',
          'facebook',
          'instagram',
          'linkedin',
          'gauge',
          'headset',
          'menu',
          'x',
          'chevron-left',
          'chevron-right',
          'chevron-down',
          'arrow-right',
          'maximize-2',
          'phone',
          'mail',
          'map-pin',
          'check',
          'alert-circle',
          'loader-circle',
          'sun',
          'moon',
        ],
        'simple-icons': ['whatsapp'],
      },
    }),
    // El sitemap declara las alternativas de idioma de cada URL, que es
    // lo que le dice a Google que /pt/productos y /en/productos son la
    // misma página en otro idioma y no contenido duplicado.
    sitemap({
      i18n: {
        defaultLocale: 'es',
        locales: {
          es: 'es-PY',
          pt: 'pt-BR',
          en: 'en-US',
        },
      },
    }),
  ],

  vite: {
    plugins: [tailwindcss()],
  },
});
