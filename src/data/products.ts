import {
  ETAPAS_FLUJO,
  FAMILIAS_CATALOGO,
  type Producto,
} from './types';

/**
 * ════════════════════════════════════════════════════════════════════════
 *  CATÁLOGO 3S — datos duros del producto (no se traducen)
 * ════════════════════════════════════════════════════════════════════════
 *
 *  Los 18 productos del catálogo impreso, páginas 2 a 19. Nombres,
 *  presentaciones y registro sanitario están transcritos tal como
 *  figuran ahí.
 *
 *  El copy traducible de cada producto (resumen, acción, aplicación,
 *  sectores) vive en `content.es.ts → productos[slug]`, indexado por el
 *  mismo `slug` que se usa acá.
 *
 *  ⚠ El `slug` es la URL de la ficha: /productos/<slug>. Cambiarlo
 *    después de publicar rompe el enlace y el posicionamiento.
 *
 *  Las tres imágenes de cada producto salen del catálogo:
 *    · imagen      envases recortados sobre fondo blanco
 *    · marca       banner con el nombre y el descriptor
 *    · aplicacion  foto de uso real en planta
 *
 *  Los precios se cargan en `presentaciones[].precio` y solo se muestran
 *  si `config.precios.isVisible` es `true`.
 */

const REGISTRO_SANITARIO = 'Posee registro sanitario';

const productosSinOrdenar: readonly Producto[] = [
  /* ── Tratamiento de efluentes ──────────────────────────────────── */
  {
    slug: 'policloruro-de-aluminio-3s',
    nombre: 'Policloruro de Aluminio 3S',
    familia: 'efluentes-aguas-residuales',
    etapas: ['coagulacion-floculacion'],
    etapaPrincipal: 'coagulacion-floculacion',
    categoria: 'tratamiento-efluentes',
    destacado: true,
    usoProfesional: true,
    paginaCatalogo: 15,
    presentaciones: [
      { etiqueta: '1000 L', cantidad: 1000, unidad: 'L' },
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/policloruro-de-aluminio-3s.png',
      alt: 'Contenedor IBC de 1000 litros de Policloruro de Aluminio 3S.',
    },
    marca: {
      src: '/src/assets/images/marcas/policloruro-de-aluminio-3s.png',
      alt: 'Policloruro de Aluminio 3S, para tratamiento de efluentes.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/policloruro-de-aluminio-3s.png',
      alt: 'Piletas de tratamiento de efluentes industriales en operación.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Coagulante en solución' },
      { clave: 'Función', valor: 'Remoción de color y materia coloidal' },
      {
        clave: 'Reemplaza a',
        valor: 'Sulfato y cloruro de aluminio, cloruro y sulfato férrico',
      },
      { clave: 'Presentaciones', valor: '1000 L · 200 L' },
      { clave: 'Uso', valor: 'Profesional' },
    ],
  },
  {
    slug: 'sulfato-de-aluminio-3s',
    nombre: 'Sulfato de Aluminio 3S',
    familia: 'efluentes-aguas-residuales',
    etapas: ['coagulacion-floculacion'],
    etapaPrincipal: 'coagulacion-floculacion',
    categoria: 'tratamiento-efluentes',
    destacado: true,
    usoProfesional: true,
    paginaCatalogo: 16,
    presentaciones: [
      { etiqueta: '1000 L', cantidad: 1000, unidad: 'L' },
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/sulfato-de-aluminio-3s.png',
      alt: 'Contenedor IBC de Sulfato de Aluminio 3S.',
    },
    marca: {
      src: '/src/assets/images/marcas/sulfato-de-aluminio-3s.png',
      alt: 'Sulfato de Aluminio 3S, para tratamiento de efluentes.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/sulfato-de-aluminio-3s.png',
      alt: 'Tanques de clarificación de agua en una planta de tratamiento.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Coagulante en solución' },
      { clave: 'Materia prima', valor: 'Rica en aluminio, libre de hierro' },
      {
        clave: 'Función',
        valor: 'Clarificación de agua de consumo y de efluentes industriales',
      },
      { clave: 'Presentaciones', valor: '1000 L · 200 L' },
      { clave: 'Uso', valor: 'Profesional' },
    ],
  },
  {
    slug: 'polimero-3s-anionico',
    nombre: 'Polímero 3S Aniónico',
    familia: 'efluentes-aguas-residuales',
    etapas: ['coagulacion-floculacion'],
    etapaPrincipal: 'coagulacion-floculacion',
    categoria: 'tratamiento-efluentes',
    destacado: true,
    usoProfesional: true,
    paginaCatalogo: 14,
    presentaciones: [{ etiqueta: '25 kg', cantidad: 25, unidad: 'kg' }],
    imagen: {
      src: '/src/assets/images/productos/polimero-3s-anionico.png',
      alt: 'Envase de 25 kilos de Polímero 3S Aniónico.',
    },
    marca: {
      src: '/src/assets/images/marcas/polimero-3s-anionico.png',
      alt: 'Polímero 3S Aniónico, floculante aniónico.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/polimero-3s-anionico.png',
      alt: 'Canal de efluente industrial con lodo floculado en superficie.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Floculante aniónico' },
      { clave: 'Base', valor: 'Poliacrilamida de alto peso molecular' },
      { clave: 'Carga', valor: 'Aniónica alta' },
      {
        clave: 'Aplicación',
        valor: 'Filtración, deshidratación mecánica y sedimentación por gravedad',
      },
      { clave: 'Presentaciones', valor: '25 kg' },
      { clave: 'Uso', valor: 'Profesional' },
    ],
  },
  {
    slug: 'polimero-3s-cationico',
    nombre: 'Polímero 3S Catiónico',
    familia: 'efluentes-aguas-residuales',
    etapas: ['coagulacion-floculacion'],
    etapaPrincipal: 'coagulacion-floculacion',
    categoria: 'tratamiento-efluentes',
    destacado: true,
    usoProfesional: true,
    paginaCatalogo: 13,
    presentaciones: [{ etiqueta: '25 kg', cantidad: 25, unidad: 'kg' }],
    imagen: {
      src: '/src/assets/images/productos/polimero-3s-cationico.png',
      alt: 'Envase de 25 kilos de Polímero 3S Catiónico.',
    },
    marca: {
      src: '/src/assets/images/marcas/polimero-3s-cationico.png',
      alt: 'Polímero 3S Catiónico, floculante catiónico.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/polimero-3s-cationico.png',
      alt: 'Efluente industrial en canal con lodo separado por floculación.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Floculante catiónico sólido' },
      { clave: 'Base', valor: 'Poliacrilamida de alto peso molecular' },
      { clave: 'Carga', valor: 'Catiónica, en distintas densidades' },
      {
        clave: 'Aplicación',
        valor: 'Remoción de agua del lodo y floculación de sólidos',
      },
      { clave: 'Presentaciones', valor: '25 kg' },
      { clave: 'Uso', valor: 'Profesional' },
    ],
  },
  {
    slug: 'odor-free',
    nombre: 'Odor Free',
    familia: 'efluentes-aguas-residuales',
    etapas: ['control-olor'],
    etapaPrincipal: 'control-olor',
    categoria: 'tratamiento-efluentes',
    destacado: true,
    usoProfesional: false,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 17,
    presentaciones: [
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '25 L', cantidad: 25, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/odor-free.png',
      alt: 'Bidones de 65 y 25 litros de Odor Free.',
    },
    marca: {
      src: '/src/assets/images/marcas/odor-free.png',
      alt: 'Odor Free, neutralizador de olores concentrado.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/odor-free.png',
      alt: 'Aspersión de neutralizador de olores en instalaciones pecuarias.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Neutralizador de olores concentrado' },
      { clave: 'Función', valor: 'Previene, elimina y neutraliza malos olores' },
      { clave: 'Aplicación', valor: 'Manual o por aspersión' },
      { clave: 'Presentaciones', valor: '65 L · 25 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },

  /* ── Desinfectantes ───────────────────────────────────────────── */
  {
    slug: 'decuat',
    nombre: 'Decuat',
    familia: 'desinfeccion-industrial',
    etapas: ['desinfecta'],
    etapaPrincipal: 'desinfecta',
    categoria: 'desinfectantes',
    destacado: true,
    usoProfesional: true,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 9,
    presentaciones: [
      { etiqueta: '1000 L', cantidad: 1000, unidad: 'L' },
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '30 L', cantidad: 30, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/decuat.png',
      alt: 'Presentaciones de Decuat: contenedor IBC, tambor y bidones.',
    },
    marca: {
      src: '/src/assets/images/marcas/decuat.png',
      alt: 'Decuat, desinfectante industrial concentrado de amonio cuaternario de quinta generación.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/decuat.png',
      alt: 'Desinfección de una cinta transportadora en una planta de alimentos.',
    },
    especificaciones: [
      {
        clave: 'Principio activo',
        valor: 'Sales de amonio cuaternario de 5.ª generación',
      },
      {
        clave: 'Espectro',
        valor: 'Bacterias, hongos y microorganismos Gram+ y Gram-',
      },
      { clave: 'Aplicación', valor: 'Manual, por inmersión o por aspersión' },
      { clave: 'Presentaciones', valor: '1000 L · 200 L · 65 L · 30 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
      { clave: 'Uso', valor: 'Profesional' },
    ],
  },
  {
    slug: 'bioperacid',
    nombre: 'Bioperacid',
    familia: 'desinfeccion-industrial',
    etapas: ['desinfecta'],
    etapaPrincipal: 'desinfecta',
    categoria: 'desinfectantes',
    destacado: true,
    usoProfesional: true,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 12,
    presentaciones: [
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '30 L', cantidad: 30, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/bioperacid.png',
      alt: 'Bidones de 65 y 30 litros de Bioperacid.',
    },
    marca: {
      src: '/src/assets/images/marcas/bioperacid.png',
      alt: 'Bioperacid, desinfectante bactericida, fungicida y virucida a base de ácido peracético al 15 por ciento.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/bioperacid.png',
      alt: 'Línea de despiece en un frigorífico durante la desinfección.',
    },
    especificaciones: [
      { clave: 'Principio activo', valor: 'Ácido peracético 15 %' },
      { clave: 'Coadyuvantes', valor: 'Peróxido de hidrógeno y ácido acético' },
      { clave: 'Espectro', valor: 'Bactericida, fungicida y virucida' },
      { clave: 'Función secundaria', valor: 'Desincrustante y desoxidante' },
      { clave: 'Biodegradable', valor: 'Sí, libre de fosfatos' },
      { clave: 'Presentaciones', valor: '65 L · 30 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },
  {
    slug: 'ardiox',
    nombre: 'Ardiox',
    familia: 'desinfeccion-industrial',
    etapas: ['desinfecta'],
    etapaPrincipal: 'desinfecta',
    categoria: 'desinfectantes',
    destacado: false,
    usoProfesional: true,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 11,
    presentaciones: [
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '30 L', cantidad: 30, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/ardiox.png',
      alt: 'Bidones de 65 y 30 litros de Ardiox.',
    },
    marca: {
      src: '/src/assets/images/marcas/ardiox.png',
      alt: 'Ardiox, desinfectante químico selectivo bactericida, fungicida y virucida.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/ardiox.png',
      alt: 'Personal aplicando desinfectante en pasillos de una planta industrial.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Desinfectante químico selectivo' },
      {
        clave: 'Espectro',
        valor: 'Gérmenes, esporas, virus, bacterias y hongos',
      },
      {
        clave: 'Poder germicida',
        valor: 'Mayor que el del cloro y el hipoclorito',
      },
      { clave: 'Residuos', valor: 'No deja residuos ni altera sabor u olor' },
      {
        clave: 'Tolerancia',
        valor: 'Activo en presencia de materia orgánica y aguas duras',
      },
      { clave: 'Presentaciones', valor: '65 L · 30 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },
  {
    slug: 'desinper',
    nombre: 'Desinper',
    familia: 'desinfeccion-industrial',
    etapas: ['desinfecta'],
    etapaPrincipal: 'desinfecta',
    categoria: 'desinfectantes',
    destacado: false,
    usoProfesional: false,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 10,
    presentaciones: [
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '30 L', cantidad: 30, unidad: 'L' },
      { etiqueta: '25 L', cantidad: 25, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/desinper.png',
      alt: 'Presentaciones de Desinper en tambor y bidones.',
    },
    marca: {
      src: '/src/assets/images/marcas/desinper.png',
      alt: 'Desinper, desinfectante industrial concentrado bactericida y fungicida.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/desinper.png',
      alt: 'Desinfección de superficies y transporte en distintos sectores industriales.',
    },
    especificaciones: [
      { clave: 'Base', valor: 'Peróxido de hidrógeno' },
      { clave: 'Espectro', valor: 'Virus, bacterias, hongos y levaduras' },
      {
        clave: 'Doble función',
        valor: 'Limpieza y desinfección en un solo paso',
      },
      { clave: 'Presentaciones', valor: '200 L · 65 L · 30 L · 25 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },

  /* ── Desengrasantes ───────────────────────────────────────────── */
  {
    slug: 'king-klor',
    nombre: 'King Klor',
    familia: 'limpieza-industrial',
    etapas: ['desengrasa', 'desinfecta'],
    etapaPrincipal: 'desengrasa',
    categoria: 'desengrasantes',
    destacado: true,
    usoProfesional: true,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 4,
    presentaciones: [
      { etiqueta: '1000 L', cantidad: 1000, unidad: 'L' },
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '30 L', cantidad: 30, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/king-klor.png',
      alt: 'Presentaciones de King Klor en contenedor IBC, tambor y bidones.',
    },
    marca: {
      src: '/src/assets/images/marcas/king-klor.png',
      alt: 'King Klor, desengrasante desinfectante industrial.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/king-klor.png',
      alt: 'Aplicación de espuma desengrasante con equipo espumador sobre equipos de proceso.',
    },
    especificaciones: [
      {
        clave: 'Tipo',
        valor: 'Desengrasante alcalino clorado de alta concentración',
      },
      {
        clave: 'Doble función',
        valor: 'Desengrasa y desinfecta por su contenido de cloro',
      },
      { clave: 'Aplicación', valor: 'Manual o con equipo espumador' },
      {
        clave: 'Sectores',
        valor: 'Lácteos, cárnicos y alimentos con alto nivel de grasa',
      },
      { clave: 'Presentaciones', valor: '1000 L · 200 L · 65 L · 30 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },
  {
    slug: 'stronger',
    nombre: 'Stronger',
    familia: 'limpieza-industrial',
    etapas: ['desengrasa'],
    etapaPrincipal: 'desengrasa',
    categoria: 'desengrasantes',
    destacado: true,
    usoProfesional: true,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 2,
    presentaciones: [
      { etiqueta: '1000 L', cantidad: 1000, unidad: 'L' },
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '30 L', cantidad: 30, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/stronger.png',
      alt: 'Presentaciones de Stronger en contenedor IBC, tambor y bidones.',
    },
    marca: {
      src: '/src/assets/images/marcas/stronger.png',
      alt: 'Stronger, desengrasante de uso industrial.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/stronger.png',
      alt: 'Operario lavando con espuma una sala de faena en un frigorífico.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Desengrasante enzimático concentrado' },
      { clave: 'Base', valor: 'Tensoactivos y solventes hidrosolubles' },
      { clave: 'Libre de', valor: 'Cloro y fosfatos' },
      { clave: 'Biodegradable', valor: '100 %' },
      { clave: 'Estabilidad', valor: 'Estable en aguas duras' },
      { clave: 'Aplicación', valor: 'Manual, por inmersión o por aspersión' },
      { clave: 'Presentaciones', valor: '1000 L · 200 L · 65 L · 30 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },
  {
    slug: 'desinal',
    nombre: 'Desinal',
    familia: 'limpieza-industrial',
    etapas: ['desengrasa', 'desinfecta'],
    etapaPrincipal: 'desengrasa',
    categoria: 'desengrasantes',
    destacado: false,
    usoProfesional: true,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 3,
    presentaciones: [
      { etiqueta: '1000 L', cantidad: 1000, unidad: 'L' },
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '30 L', cantidad: 30, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/desinal.png',
      alt: 'Presentaciones de Desinal en contenedor IBC, tambor y bidones.',
    },
    marca: {
      src: '/src/assets/images/marcas/desinal.png',
      alt: 'Desinal, desengrasante de uso industrial bactericida de gran versatilidad.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/desinal.png',
      alt: 'Aplicación de espuma desengrasante sobre una línea de producción cárnica.',
    },
    especificaciones: [
      {
        clave: 'Tipo',
        valor: 'Detergente desengrasante con alto poder dispersante',
      },
      {
        clave: 'Acción adicional',
        valor: 'Desinfectante, bactericida y fungicida',
      },
      {
        clave: 'Carga de suciedad',
        valor: 'Baja y alta carga de grasa y residuos proteicos',
      },
      { clave: 'Aplicación', valor: 'Manual, por inmersión o por aspersión' },
      { clave: 'Presentaciones', valor: '1000 L · 200 L · 65 L · 30 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },
  {
    slug: 'enzurpon',
    nombre: 'Enzurpon',
    familia: 'limpieza-industrial',
    etapas: ['desengrasa'],
    etapaPrincipal: 'desengrasa',
    categoria: 'desengrasantes',
    destacado: false,
    usoProfesional: false,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 5,
    presentaciones: [
      { etiqueta: '1000 L', cantidad: 1000, unidad: 'L' },
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '30 L', cantidad: 30, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/enzurpon.png',
      alt: 'Presentaciones de Enzurpon en contenedor IBC, tambor y bidones.',
    },
    marca: {
      src: '/src/assets/images/marcas/enzurpon.png',
      alt: 'Enzurpon, desengrasante de uso industrial tensioactivo solvente hidrosoluble.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/enzurpon.png',
      alt: 'Limpieza a presión de maquinaria industrial con desengrasante.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Detergente desengrasante alcalino concentrado' },
      { clave: 'Base', valor: 'Tensioactivos y solventes hidrosolubles' },
      {
        clave: 'Función',
        valor: 'Eliminación de aceite, restos de grasa y suciedad general',
      },
      { clave: 'Aplicación', valor: 'Manual o con equipo espumador' },
      { clave: 'Presentaciones', valor: '1000 L · 200 L · 65 L · 30 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },
  {
    slug: 'purson-plus',
    nombre: 'Purson Plus',
    familia: 'limpieza-industrial',
    etapas: ['desengrasa'],
    etapaPrincipal: 'desengrasa',
    categoria: 'desengrasantes',
    destacado: false,
    usoProfesional: false,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 6,
    presentaciones: [
      { etiqueta: '1000 L', cantidad: 1000, unidad: 'L' },
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '30 L', cantidad: 30, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/purson-plus.png',
      alt: 'Presentaciones de Purson Plus en contenedor IBC, tambor y bidones.',
    },
    marca: {
      src: '/src/assets/images/marcas/purson-plus.png',
      alt: 'Purson Plus, desengrasante de uso industrial tensioactivo solvente hidrosoluble.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/purson-plus.png',
      alt: 'Túnel de lavado de cajones plásticos en una planta de alimentos.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Desengrasante alcalino sin espuma' },
      { clave: 'Base', valor: 'Tensioactivos y solventes hidrosolubles' },
      { clave: 'Eficacia', valor: 'Grasa mineral, animal e industrial' },
      {
        clave: 'Superficies',
        valor: 'Hornos, planchas, freidoras y utensilios',
      },
      { clave: 'Aplicación', valor: 'Manual' },
      { clave: 'Presentaciones', valor: '1000 L · 200 L · 65 L · 30 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },

  /* ── Detergentes ──────────────────────────────────────────────── */
  {
    slug: 'madox',
    nombre: 'Madox',
    familia: 'limpieza-industrial',
    etapas: ['desengrasa'],
    etapaPrincipal: 'desengrasa',
    categoria: 'detergentes',
    destacado: false,
    usoProfesional: false,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 7,
    presentaciones: [
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '25 L', cantidad: 25, unidad: 'L' },
      { etiqueta: '5 L', cantidad: 5, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/madox.png',
      alt: 'Presentaciones de Madox en tambor y bidones de distintos tamaños.',
    },
    marca: {
      src: '/src/assets/images/marcas/madox.png',
      alt: 'Madox, detergente líquido neutro.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/madox.png',
      alt: 'Limpieza de utensilios y superficies en una cocina industrial.',
    },
    especificaciones: [
      {
        clave: 'Tipo',
        valor: 'Detergente líquido neutro concentrado y espumante',
      },
      {
        clave: 'Composición',
        valor: 'Tensioactivos espumantes, secuestrantes y emulsificantes',
      },
      { clave: 'Libre de', valor: 'Fosfatos' },
      { clave: 'Enjuague', valor: 'Rápido, sin dejar residuos' },
      { clave: 'Presentaciones', valor: '200 L · 65 L · 25 L · 5 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },

  /* ── Lavandería ───────────────────────────────────────────────── */
  {
    slug: 'fine-white',
    nombre: 'Fine White',
    familia: 'limpieza-industrial',
    etapas: ['desinfecta'],
    etapaPrincipal: 'desinfecta',
    categoria: 'lavanderia',
    destacado: false,
    usoProfesional: true,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 18,
    presentaciones: [
      { etiqueta: '1000 L', cantidad: 1000, unidad: 'L' },
      { etiqueta: '200 L', cantidad: 200, unidad: 'L' },
      { etiqueta: '65 L', cantidad: 65, unidad: 'L' },
      { etiqueta: '30 L', cantidad: 30, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/fine-white.png',
      alt: 'Presentaciones de Fine White en contenedor IBC, tambor y bidones.',
    },
    marca: {
      src: '/src/assets/images/marcas/fine-white.png',
      alt: 'Fine White, blanqueador desinfectante de uso industrial.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/fine-white.png',
      alt: 'Lavandería industrial clasificando ropa blanca.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Blanqueador desinfectante oxigenado' },
      {
        clave: 'Manchas',
        valor: 'Sangre, vómito, heces, colorantes vegetales, vino y café',
      },
      { clave: 'Fibras', valor: 'Todo tipo de fibra textil' },
      {
        clave: 'Prendas de color',
        valor: 'No decolora ni daña como los blanqueadores clorados',
      },
      { clave: 'Presentaciones', valor: '1000 L · 200 L · 65 L · 30 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },
  {
    slug: 'white-clean',
    nombre: 'White Clean',
    familia: 'limpieza-industrial',
    etapas: ['desengrasa', 'desinfecta'],
    etapaPrincipal: 'desengrasa',
    categoria: 'lavanderia',
    destacado: false,
    usoProfesional: false,
    registro: 'Posee registro sanitario DINAVISA · Aprobado por el INTN',
    paginaCatalogo: 19,
    presentaciones: [{ etiqueta: '25 kg', cantidad: 25, unidad: 'kg' }],
    imagen: {
      src: '/src/assets/images/productos/white-clean.png',
      alt: 'Envase de 25 kilos de White Clean.',
    },
    marca: {
      src: '/src/assets/images/marcas/white-clean.png',
      alt: 'White Clean, detergente en polvo multiusos.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/white-clean.png',
      alt: 'Lavandería hospitalaria con lavarropas industriales en operación.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Detergente en polvo de espuma controlada' },
      { clave: 'Uso', valor: 'Manual e industrial' },
      { clave: 'Libre de', valor: 'Cloro y fosfatos' },
      { clave: 'Biodegradable', valor: '100 %' },
      { clave: 'Presentaciones', valor: '25 kg' },
      {
        clave: 'Registro',
        valor: 'Registro sanitario DINAVISA, aprobado por el INTN',
      },
    ],
  },

  /* ── Higiene de manos ─────────────────────────────────────────── */
  {
    slug: 'sanitol',
    nombre: 'Sanitol',
    familia: 'limpieza-industrial',
    etapas: ['desinfecta'],
    etapaPrincipal: 'desinfecta',
    categoria: 'higiene-manos',
    destacado: false,
    usoProfesional: false,
    registro: REGISTRO_SANITARIO,
    paginaCatalogo: 8,
    presentaciones: [
      { etiqueta: '10 L', cantidad: 10, unidad: 'L' },
      { etiqueta: '5 L', cantidad: 5, unidad: 'L' },
    ],
    imagen: {
      src: '/src/assets/images/productos/sanitol.png',
      alt: 'Bidones de 10 y 5 litros de Sanitol.',
    },
    marca: {
      src: '/src/assets/images/marcas/sanitol.png',
      alt: 'Sanitol, jabón líquido antibacterial para manos.',
    },
    aplicacion: {
      src: '/src/assets/images/aplicaciones/sanitol.png',
      alt: 'Operario lavándose las manos en el ingreso a un sector productivo.',
    },
    especificaciones: [
      { clave: 'Tipo', valor: 'Jabón líquido antibacterial para manos' },
      { clave: 'pH', valor: 'Neutro' },
      {
        clave: 'Emolientes',
        valor: 'Conservan la humedad de la piel en usos frecuentes',
      },
      { clave: 'Presentaciones', valor: '10 L · 5 L' },
      { clave: 'Registro', valor: 'Posee registro sanitario' },
    ],
  },
];

const ordenFamilias = new Map(
  FAMILIAS_CATALOGO.map((familia, indice) => [familia, indice]),
);
const ordenEtapas = new Map(
  ETAPAS_FLUJO.map((etapa, indice) => [etapa, indice]),
);

/**
 * Orden canónico compartido por grillas, selectores, schemas y navegación:
 * primero la familia institucional, después la función principal y por
 * último la página del catálogo impreso como desempate estable.
 */
export const productos: readonly Producto[] = [...productosSinOrdenar].sort(
  (a, b) =>
    (ordenFamilias.get(a.familia) ?? Number.MAX_SAFE_INTEGER) -
      (ordenFamilias.get(b.familia) ?? Number.MAX_SAFE_INTEGER) ||
    (ordenEtapas.get(a.etapaPrincipal) ?? Number.MAX_SAFE_INTEGER) -
      (ordenEtapas.get(b.etapaPrincipal) ?? Number.MAX_SAFE_INTEGER) ||
    a.paginaCatalogo - b.paginaCatalogo,
);

/** Producto por slug, o `undefined` si el slug no existe. */
export function buscarProducto(slug: string): Producto | undefined {
  return productos.find((producto) => producto.slug === slug);
}

/** Los que se muestran en el bloque de destacados de la portada. */
export const productosDestacados: readonly Producto[] = productos.filter(
  (producto) => producto.destacado,
);
