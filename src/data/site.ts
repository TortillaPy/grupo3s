/**
 * ════════════════════════════════════════════════════════════════════════
 *  PUNTO ÚNICO DE IMPORTACIÓN
 * ════════════════════════════════════════════════════════════════════════
 *
 *  Los componentes importan siempre desde acá:
 *
 *      import { config, obtenerContenido, buildWhatsAppUrl } from '@data/site';
 *
 *  El contenido está repartido en varios archivos porque el sitio es
 *  trilingüe y un único archivo se vuelve inmanejable, pero para quien
 *  edita sigue habiendo un mapa corto:
 *
 *    · config.ts        WhatsApp, teléfonos, dirección, redes,
 *                       interruptor de precios, proveedor del formulario
 *    · products.ts      catálogo: slugs, presentaciones, especificaciones,
 *                       imágenes y precios
 *    · content.es.ts    TODO el texto visible en español
 *    · content.pt.ts    idem en portugués (fase 7)
 *    · content.en.ts    idem en inglés (fase 7)
 *    · types.ts         la forma que deben tener los tres anteriores
 *
 *  ¿Dónde cambio…?
 *    el número de WhatsApp  → config.ts, `contacto.whatsapp`
 *    los precios            → config.ts, `precios.isVisible` + products.ts
 *    las imágenes           → products.ts, `imagen.src`
 *    cualquier texto        → content.es.ts
 */

export { config } from './config';
export { productos, productosDestacados, buscarProducto } from './products';
export {
  obtenerContenido,
  localesDisponibles,
  localesSecundarios,
  contenidoEs,
  contenidoPt,
  contenidoEn,
} from './content';
export { buildWhatsAppUrl, ATRIBUTOS_ENLACE_EXTERNO } from './whatsapp';
export { rutaLocal } from './rutas';
export {
  LOCALES,
  DEFAULT_LOCALE,
  CATEGORIAS,
  FAMILIAS_CATALOGO,
  ETAPAS_FLUJO,
} from './types';

export type {
  Beneficio,
  CategoriaId,
  Categoria,
  Config,
  ConfigPrecios,
  Contacto,
  Contenido,
  ContextoWhatsApp,
  CopyProducto,
  Direccion,
  EnlaceNav,
  EspecificacionTecnica,
  EtapaFlujoId,
  FamiliaCatalogoId,
  Imagen,
  Locale,
  MetaPagina,
  Moneda,
  Paso,
  PasoRecorrido,
  Precio,
  Presentacion,
  Pregunta,
  Producto,
  ProveedorFormulario,
  RedSocial,
  SenalConfianza,
  Telefono,
  Testimonio,
} from './types';
