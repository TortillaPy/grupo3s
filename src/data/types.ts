/**
 * Tipos compartidos de toda la capa de datos.
 *
 * Regla del proyecto: prohibido `any`. Todo lo editable pasa por acá,
 * así el editor avisa si falta un campo o sobra una clave.
 */

/* ── Idiomas ─────────────────────────────────────────────────────────── */

export const LOCALES = ['es', 'pt', 'en'] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = 'es';

/* ── Marca y contacto ────────────────────────────────────────────────── */

export interface Direccion {
  readonly calle: string;
  readonly ciudad: string;
  readonly departamento: string;
  readonly pais: string;
  readonly codigoPais: string;
}

export interface Telefono {
  /** Formato E.164 sin `+`, listo para wa.me y para href="tel:". */
  readonly e164: string;
  /** Como se muestra en pantalla. */
  readonly visible: string;
}

export interface RedSocial {
  readonly nombre: string;
  readonly url: string;
  /** Nombre del ícono de Lucide, sin el prefijo `lucide:`. */
  readonly icono: string;
}

export interface Contacto {
  readonly whatsapp: Telefono;
  readonly telefonos: readonly Telefono[];
  readonly email: string;
  readonly direccion: Direccion;
  readonly redes: readonly RedSocial[];
  /** Horario en formato schema.org, p. ej. "Mo-Fr 07:30-17:00". */
  readonly horarioSchema: string;
}

/* ── Precios ─────────────────────────────────────────────────────────── */

export type Moneda = 'PYG' | 'USD';

/**
 * Interruptor único de precios.
 *
 * Con `isVisible: false` no se renderiza ningún precio en la página Y
 * el JSON-LD omite el nodo `offers`. Google exige `price` + `priceCurrency`
 * reales en `offers`: publicar un precio inventado es motivo de acción
 * manual, así que las dos cosas se prenden juntas o no se prenden.
 */
export interface ConfigPrecios {
  readonly isVisible: boolean;
  readonly moneda: Moneda;
  /** Texto que reemplaza al precio mientras está oculto. */
  readonly leyendaSinPrecio: string;
}

export interface Precio {
  readonly monto: number;
  readonly moneda: Moneda;
}

/* ── Productos ───────────────────────────────────────────────────────── */

export const CATEGORIAS = [
  'tratamiento-efluentes',
  'desinfectantes',
  'desengrasantes',
  'detergentes',
  'lavanderia',
  'higiene-manos',
] as const;
export type CategoriaId = (typeof CATEGORIAS)[number];

export interface Presentacion {
  /** Como se muestra: "200 L", "25 kg". */
  readonly etiqueta: string;
  readonly cantidad: number;
  readonly unidad: 'L' | 'kg';
  readonly precio?: Precio;
}

/**
 * Imagen procesada por Astro desde `src/assets/images/`.
 * No lleva ancho ni alto: Astro los deduce del archivo, así que cambiar
 * la foto por otra de distinto tamaño no obliga a tocar los datos.
 */
export interface Imagen {
  readonly src: string;
  /** Vacío si la imagen es decorativa. */
  readonly alt: string;
}

/** Imagen servida desde `public/`: ahí sí hacen falta las medidas. */
export interface ImagenFija extends Imagen {
  readonly ancho: number;
  readonly alto: number;
}

export interface EspecificacionTecnica {
  readonly clave: string;
  readonly valor: string;
}

/**
 * Datos duros del producto: no se traducen.
 * El copy traducible (descripción, aplicaciones, beneficios) vive en
 * `content.<locale>.ts`, indexado por este mismo `slug`.
 */
export interface Producto {
  readonly slug: string;
  /** Nombre comercial. Es marca: no se traduce. */
  readonly nombre: string;
  readonly categoria: CategoriaId;
  readonly presentaciones: readonly Presentacion[];
  /** Foto del envase, recortada sobre fondo blanco. */
  readonly imagen: Imagen;
  /** Banner de marca del producto, tal como figura en el catálogo. */
  readonly marca: Imagen;
  /** Foto de uso real en planta. */
  readonly aplicacion: Imagen;
  /** Aparece en la galería y el bloque de destacados de la portada. */
  readonly destacado: boolean;
  /** El catálogo lo marca como «DE USO PROFESIONAL». */
  readonly usoProfesional: boolean;
  /** Texto del registro sanitario, tal cual figura en el catálogo. */
  readonly registro?: string;
  readonly especificaciones: readonly EspecificacionTecnica[];
  /** Ruta a la ficha técnica en PDF dentro de /public, si existe. */
  readonly fichaTecnica?: string;
  /** Página del catálogo impreso de la que salieron estos datos. */
  readonly paginaCatalogo: number;
}

/* ── Contenido traducible ────────────────────────────────────────────── */

export interface CopyProducto {
  /** Una línea, orientada al beneficio. Va en la tarjeta del catálogo. */
  readonly resumen: string;
  /** Campo ACCIÓN del catálogo, transcrito y corregido de ortografía. */
  readonly accion: string;
  /** Campo APLICACIÓN del catálogo. Ausente si el catálogo no lo trae. */
  readonly aplicacion?: string;
  /** Sectores donde se usa. Redactados para el cliente. */
  readonly sectores: readonly string[];
}

export interface ImagenGaleria extends Imagen {
  /** Pie de foto que se muestra en el lightbox. */
  readonly epigrafe: string;
}

export interface Categoria {
  readonly id: CategoriaId;
  readonly nombre: string;
  readonly descripcion: string;
  readonly icono: string;
}

export interface EnlaceNav {
  readonly texto: string;
  readonly href: string;
}

export interface SenalConfianza {
  readonly icono: string;
  readonly titulo: string;
  readonly detalle: string;
}

export interface Beneficio {
  readonly icono: string;
  readonly titulo: string;
  readonly texto: string;
}

export interface Paso {
  readonly titulo: string;
  readonly texto: string;
}

export interface Pregunta {
  readonly pregunta: string;
  readonly respuesta: string;
}

/**
 * Testimonio.
 *
 * ⚠ NO PUBLICAR RESEÑAS INVENTADAS. Mientras `esPlaceholder` sea `true`,
 * el componente muestra el bloque con una marca visible de contenido de
 * ejemplo. Al cargar reseñas reales —con autorización del cliente— se
 * pone `esPlaceholder: false` y recién ahí se muestran como reales.
 */
export interface Testimonio {
  readonly esPlaceholder: boolean;
  readonly texto: string;
  readonly autor: string;
  readonly cargo: string;
  readonly empresa: string;
}

export interface MetaPagina {
  readonly titulo: string;
  readonly descripcion: string;
}

export interface BloqueLegal {
  readonly titulo: string;
  readonly parrafos: readonly string[];
}

export interface Contenido {
  readonly locale: Locale;
  /** Valor del atributo lang del <html>: "es-PY", "pt-BR", "en-US". */
  readonly htmlLang: string;

  readonly meta: {
    readonly inicio: MetaPagina;
    readonly productos: MetaPagina;
    readonly gracias: MetaPagina;
    readonly privacidad: MetaPagina;
    readonly noEncontrado: MetaPagina;
    /**
     * Plantillas para las fichas de producto. Usan los marcadores
     * {producto} y {resumen}, que se reemplazan con los datos de cada
     * uno: así cada ficha tiene título y descripción propios sin
     * escribir dieciocho pares a mano.
     */
    readonly ficha: {
      readonly tituloPlantilla: string;
      readonly descripcionPlantilla: string;
    };
  };

  readonly nav: {
    readonly enlaces: readonly EnlaceNav[];
    readonly cta: string;
    readonly abrirMenu: string;
    readonly cerrarMenu: string;
    readonly saltarAlContenido: string;
  };

  readonly hero: {
    readonly titular: string;
    readonly subtitulo: string;
    readonly ctaPrimario: string;
    readonly ctaSecundario: string;
    /**
     * `epigrafe` es el pie de la foto del hero. No repite el `alt`: el
     * alt describe la imagen para quien no la ve, el epígrafe le dice a
     * quien sí la ve qué está mirando y dónde fue tomada.
     */
    readonly imagen: Imagen & { readonly epigrafe: string };
    readonly senales: readonly SenalConfianza[];
  };

  readonly problemaSolucion: {
    readonly titulo: string;
    readonly problema: { readonly titulo: string; readonly texto: string };
    readonly solucion: { readonly titulo: string; readonly texto: string };
  };

  readonly beneficios: {
    readonly titulo: string;
    readonly bajada: string;
    readonly items: readonly Beneficio[];
  };

  readonly galeria: {
    readonly titulo: string;
    readonly bajada: string;
    readonly cerrar: string;
    readonly anterior: string;
    readonly siguiente: string;
    readonly de: string;
    readonly items: readonly ImagenGaleria[];
  };

  readonly comoComprar: {
    readonly titulo: string;
    readonly bajada: string;
    readonly pasos: readonly Paso[];
  };

  readonly especificaciones: {
    readonly titulo: string;
    readonly bajada: string;
    readonly columnas: {
      readonly producto: string;
      readonly tipo: string;
      readonly presentaciones: string;
      readonly registro: string;
    };
    readonly sinRegistro: string;
    readonly verFicha: string;
  };

  readonly precio: {
    readonly titulo: string;
    readonly bajada: string;
    readonly etiquetaPresentaciones: string;
    readonly ctaVariante: string;
    readonly nota: string;
  };

  readonly presupuesto: {
    readonly titulo: string;
    readonly bajada: string;
    readonly campos: {
      readonly nombre: string;
      readonly email: string;
      readonly telefono: string;
      readonly telefonoOpcional: string;
      readonly producto: string;
      readonly productoPlaceholder: string;
      readonly mensaje: string;
    };
    readonly enviar: string;
    readonly enviando: string;
    readonly reintentar: string;
    /** Opción del select para quien todavía no sabe qué necesita. */
    readonly opcionGeneral: string;
    /** Aviso de privacidad debajo del botón. Usa el marcador {enlace}. */
    readonly privacidad: string;
    readonly privacidadEnlace: string;
    readonly obligatorio: string;
    readonly errores: {
      readonly nombre: string;
      readonly email: string;
      readonly emailFormato: string;
      readonly producto: string;
      readonly mensaje: string;
      readonly envio: string;
      readonly sinConfigurar: string;
    };
  };

  readonly testimonios: {
    readonly titulo: string;
    readonly avisoPlaceholder: string;
    readonly items: readonly Testimonio[];
  };

  readonly faq: {
    readonly titulo: string;
    readonly bajada: string;
    readonly items: readonly Pregunta[];
  };

  readonly ctaFinal: {
    readonly titulo: string;
    readonly texto: string;
    readonly ctaPrimario: string;
    readonly ctaSecundario: string;
  };

  readonly footer: {
    readonly descripcion: string;
    readonly tituloContacto: string;
    readonly tituloEnlaces: string;
    readonly privacidad: string;
    readonly derechos: string;
    readonly enlaces: readonly EnlaceNav[];
  };

  readonly gracias: {
    readonly titulo: string;
    readonly texto: string;
    readonly mientrasTanto: string;
    readonly ctaWhatsApp: string;
    readonly ctaCatalogo: string;
    readonly ctaInicio: string;
  };

  readonly privacidad: {
    readonly titulo: string;
    readonly actualizado: string;
    readonly bloques: readonly BloqueLegal[];
  };

  readonly noEncontrado: {
    readonly titulo: string;
    readonly texto: string;
    readonly cta: string;
  };

  readonly catalogo: {
    readonly titulo: string;
    readonly bajada: string;
    readonly filtrarPor: string;
    readonly todos: string;
    /** Usa el marcador {n}. */
    readonly conteo: string;
    readonly conteoSingular: string;
    readonly verFicha: string;
    readonly sinResultados: string;
  };

  readonly ficha: {
    readonly migaInicio: string;
    readonly migaCatalogo: string;
    readonly accion: string;
    readonly aplicacion: string;
    readonly sectores: string;
    readonly especificaciones: string;
    readonly presentaciones: string;
    readonly enUso: string;
    /** Botón de descarga del PDF. Solo se muestra si el producto tiene
     *  cargada la ruta en `fichaTecnica`. */
    readonly descargarFicha: string;
    readonly relacionados: string;
    readonly ctaTitulo: string;
    readonly ctaTexto: string;
    readonly ctaBoton: string;
    readonly volver: string;
    readonly usoProfesional: string;
    readonly conRegistro: string;
    readonly fuente: string;
  };

  readonly categorias: readonly Categoria[];
  readonly productos: Readonly<Record<string, CopyProducto>>;

  readonly whatsapp: PlantillasWhatsApp;
}

/* ── WhatsApp ────────────────────────────────────────────────────────── */

export type ContextoWhatsApp =
  | { readonly tipo: 'hero' }
  | { readonly tipo: 'general' }
  | { readonly tipo: 'flotante' }
  | { readonly tipo: 'producto'; readonly producto: string }
  | {
      readonly tipo: 'presupuesto';
      readonly producto: string;
      readonly presentacion?: string;
    };

export interface PlantillasWhatsApp {
  readonly hero: string;
  readonly general: string;
  readonly flotante: string;
  /** Usa el marcador {producto}. */
  readonly producto: string;
  /** Usa los marcadores {producto} y {presentacion}. */
  readonly presupuesto: string;
  readonly presupuestoSinPresentacion: string;
  /** Texto del aria-label del botón flotante. */
  readonly etiquetaFlotante: string;
}

/* ── Formulario ──────────────────────────────────────────────────────── */

export type ProveedorFormulario = 'web3forms' | 'formspree';

export interface ConfigFormulario {
  readonly proveedor: ProveedorFormulario;
  readonly endpoints: Readonly<Record<ProveedorFormulario, string>>;
  readonly accessKey: string;
  /** Nombre del campo trampa. Los bots lo completan; las personas no lo ven. */
  readonly honeypot: string;
  readonly redirigirA: string;
}

/* ── Configuración global ────────────────────────────────────────────── */

export interface ConfigSitio {
  readonly url: string;
  readonly dominio: string;
  readonly nombre: string;
  readonly razonSocial: string;
  readonly logo: string;
  readonly imagenOg: ImagenFija;
  readonly fundacion: number;
}

export interface Config {
  readonly site: ConfigSitio;
  readonly contacto: Contacto;
  readonly precios: ConfigPrecios;
  readonly formulario: ConfigFormulario;
  readonly locales: readonly Locale[];
  readonly localePorDefecto: Locale;
}
