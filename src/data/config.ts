import type { Config } from './types';

/**
 * ════════════════════════════════════════════════════════════════════════
 *  CONFIGURACIÓN — datos que NO se traducen
 * ════════════════════════════════════════════════════════════════════════
 *
 *  Acá se cambian: número de WhatsApp, teléfonos, dirección, redes,
 *  el interruptor de precios y el proveedor del formulario.
 *
 *  El copy (títulos, textos, FAQs, testimonios) vive en content.es.ts.
 *  Los productos viven en products.ts.
 */
export const config: Config = {
  site: {
    url: 'https://3sgrupoindustrial.com.py',
    dominio: '3sgrupoindustrial.com.py',
    nombre: '3S Grupo Industrial',
    razonSocial: '3S Grupo Industrial S.R.L.',
    logo: '/images/marca/logo-3s.png',
    imagenOg: {
      src: '/og/3s-grupo-industrial-1200x630.jpg',
      ancho: 1200,
      alto: 630,
      alt: 'Laboratorio de 3S Grupo Industrial: productos químicos para tratamiento de efluentes industriales.',
    },
    fundacion: 2018,
  },

  contacto: {
    // ⚠ NÚMERO DE WHATSAPP — se cambia SOLO acá.
    // Confirmado con el cliente: es el del flyer institucional.
    whatsapp: {
      e164: '595972572007',
      visible: '+595 972 572 007',
    },
    telefonos: [
      { e164: '595215505920', visible: '(021) 550 592' },
      { e164: '595972572007', visible: '(0972) 572 007' },
    ],
    email: '3sgrupoindustrial@gmail.com',
    direccion: {
      calle: 'Pilar N° 1717 c/ Nazareth',
      ciudad: 'Asunción',
      departamento: 'Asunción',
      pais: 'Paraguay',
      codigoPais: 'PY',
    },
    redes: [
      // Cuando existan los perfiles reales se completan las URLs.
      // Las redes sin URL no se renderizan en el footer.
      { nombre: 'Facebook', url: '', icono: 'facebook' },
      { nombre: 'Instagram', url: '', icono: 'instagram' },
      { nombre: 'LinkedIn', url: '', icono: 'linkedin' },
    ],
    horarioSchema: 'Mo-Fr 07:30-17:00',
  },

  /**
   * ⚠ INTERRUPTOR DE PRECIOS
   *
   * `isVisible: false` → no se muestra ningún precio en la página y el
   * JSON-LD omite `offers`. Al ponerlo en `true` se prenden las dos cosas
   * a la vez, y ahí sí hay que cargar `precio` en cada presentación
   * dentro de products.ts.
   */
  precios: {
    isVisible: false,
    moneda: 'PYG',
    leyendaSinPrecio: 'Precio a cotizar según volumen',
  },

  formulario: {
    // Para cambiar de proveedor: cambiar esta línea y la variable de entorno.
    proveedor: 'web3forms',
    endpoints: {
      web3forms: 'https://api.web3forms.com/submit',
      formspree: 'https://formspree.io/f/REEMPLAZAR_ID',
    },
    // La access key viaja al cliente: Web3Forms la diseña como pública.
    // Se define en .env — ver .env.example.
    accessKey: import.meta.env.PUBLIC_WEB3FORMS_KEY ?? '',
    honeypot: 'sitio_web',
    redirigirA: '/gracias',
  },

  locales: ['es', 'pt', 'en'],
  localePorDefecto: 'es',
};
