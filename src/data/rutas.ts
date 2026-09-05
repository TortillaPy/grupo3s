import type { Locale } from './types';
import { DEFAULT_LOCALE } from './types';

/**
 * Prefija una ruta interna con el idioma que corresponda.
 *
 * El idioma por defecto (español) no lleva prefijo, así que la URL
 * canónica del sitio en español queda limpia:
 *
 *   rutaLocal('/productos', 'es')      → '/productos'
 *   rutaLocal('/productos', 'pt')      → '/pt/productos'
 *   rutaLocal('/#beneficios', 'en')    → '/en/#beneficios'
 *   rutaLocal('/', 'pt')               → '/pt'
 *
 * Los enlaces externos y los anclajes sueltos se devuelven sin tocar.
 */
export function rutaLocal(href: string, locale: Locale): string {
  if (locale === DEFAULT_LOCALE) return href;
  if (!href.startsWith('/')) return href;
  if (href === '/') return `/${locale}`;
  return `/${locale}${href}`;
}
