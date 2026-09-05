import type { Contenido, Locale } from './types';
import { DEFAULT_LOCALE } from './types';
import { contenidoEs } from './content.es';
import { contenidoPt } from './content.pt';
import { contenidoEn } from './content.en';

/**
 * Registro de contenido por idioma.
 *
 * Solo figuran los idiomas efectivamente traducidos. El selector de
 * idioma, el hreflang y las rutas con prefijo leen de acá: para agregar
 * o quitar un idioma del sitio alcanza con tocar este objeto.
 */
const registro: Readonly<Partial<Record<Locale, Contenido>>> = {
  es: contenidoEs,
  pt: contenidoPt,
  en: contenidoEn,
};

/** Idiomas realmente publicados, en orden. */
export const localesDisponibles: readonly Locale[] = Object.keys(
  registro,
) as readonly Locale[];

/**
 * Los idiomas publicados que NO son el por defecto: son los que llevan
 * prefijo en la URL (/pt, /en) y los que generan rutas con `[lang]`.
 */
export const localesSecundarios: readonly Locale[] = localesDisponibles.filter(
  (locale) => locale !== DEFAULT_LOCALE,
);

/** Contenido de un idioma; cae al idioma por defecto si todavía no existe. */
export function obtenerContenido(locale: Locale = DEFAULT_LOCALE): Contenido {
  return registro[locale] ?? contenidoEs;
}

export { contenidoEs, contenidoPt, contenidoEn };
