import type { ContextoWhatsApp, Locale } from './types';
import { DEFAULT_LOCALE } from './types';
import { config } from './config';
import { obtenerContenido } from './content';

/**
 * Arma la URL de WhatsApp con el mensaje ya escrito, según desde dónde
 * se hizo clic.
 *
 * El texto de cada plantilla vive en `content.<locale>.ts → whatsapp`,
 * así que cambiar lo que dice el mensaje no toca este archivo.
 *
 *   buildWhatsAppUrl({ tipo: 'hero' })
 *   → …?text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20productos…
 *
 *   buildWhatsAppUrl({ tipo: 'presupuesto', producto: 'Coagulante PAC',
 *                      presentacion: '200 L' })
 *   → …?text=Hola%2C%20quiero%20cotizar%20Coagulante%20PAC%20en…
 */
export function buildWhatsAppUrl(
  contexto: ContextoWhatsApp,
  locale: Locale = DEFAULT_LOCALE,
): string {
  const mensaje = construirMensaje(contexto, locale);
  const base = `https://wa.me/${config.contacto.whatsapp.e164}`;
  return `${base}?text=${encodeURIComponent(mensaje)}`;
}

function construirMensaje(
  contexto: ContextoWhatsApp,
  locale: Locale,
): string {
  const plantillas = obtenerContenido(locale).whatsapp;

  switch (contexto.tipo) {
    case 'hero':
      return plantillas.hero;

    case 'general':
      return plantillas.general;

    case 'flotante':
      return plantillas.flotante;

    case 'producto':
      return plantillas.producto.replace('{producto}', contexto.producto);

    case 'presupuesto': {
      if (contexto.presentacion === undefined) {
        return plantillas.presupuestoSinPresentacion.replace(
          '{producto}',
          contexto.producto,
        );
      }
      return plantillas.presupuesto
        .replace('{producto}', contexto.producto)
        .replace('{presentacion}', contexto.presentacion);
    }
  }
}

/** Atributos que llevan todos los enlaces externos del sitio. */
export const ATRIBUTOS_ENLACE_EXTERNO = {
  target: '_blank',
  rel: 'noopener noreferrer',
} as const;
