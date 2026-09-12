import type { Contenido } from './types';

/**
 * ════════════════════════════════════════════════════════════════════════
 *  CONTENIDO EN ESPAÑOL (rioplatense, voseo)
 * ════════════════════════════════════════════════════════════════════════
 *
 *  Todo el texto visible del sitio en español está en este archivo.
 *  Ningún componente tiene copy escrito dentro del markup.
 *
 *  Las traducciones a portugués e inglés van en content.pt.ts y
 *  content.en.ts con exactamente la misma forma (el tipo `Contenido` lo
 *  obliga: si falta una clave, el build falla).
 *
 *  ──────────────────────────────────────────────────────────────────────
 *  CONTENIDO CONFIRMADO POR EL CLIENTE — 4 sep 2026
 *
 *  Los plazos, condiciones comerciales y textos del FAQ que no salían
 *  del catálogo quedaron confirmados por Marco. Se publican tal como
 *  están escritos acá.
 *
 *  Queda UN punto abierto, anotado en plan.md: el alcance real del
 *  asesoramiento técnico. Hasta definirlo, el sitio promete solo lo que
 *  es seguro —recomendación de producto, presentación y dilución— y no
 *  menciona visitas a planta ni acompañamiento de arranque.
 *  ──────────────────────────────────────────────────────────────────────
 */
export const contenidoEs: Contenido = {
  locale: 'es',
  htmlLang: 'es-PY',

  meta: {
    inicio: {
      titulo:
        'Tratamiento de efluentes industriales en Paraguay | 3S Grupo Industrial',
      descripcion:
        'Productos para desengrase, desinfección, coagulación y floculación, y control de olor, elaborados en Asunción para frigoríficos, curtiembres y plantas de alimentos.',
    },
    productos: {
      titulo:
        'Catálogo de productos químicos industriales | 3S Grupo Industrial',
      descripcion:
        'Los 18 productos de 3S Grupo Industrial: coagulantes y floculantes para efluentes, desinfectantes, desengrasantes, detergentes, lavandería e higiene de manos. Con ficha de cada uno.',
    },
    gracias: {
      titulo: 'Recibimos tu solicitud | 3S Grupo Industrial',
      descripcion:
        'Tu solicitud de presupuesto llegó. Un técnico de 3S Grupo Industrial se comunica con vos dentro de las próximas 24 horas hábiles.',
    },
    privacidad: {
      titulo: 'Política de privacidad | 3S Grupo Industrial',
      descripcion:
        'Cómo 3S Grupo Industrial S.R.L. trata los datos que dejás en el formulario de solicitud de presupuesto.',
    },
    noEncontrado: {
      titulo: 'Página no encontrada | 3S Grupo Industrial',
      descripcion: 'La página que buscabas no existe o cambió de dirección.',
    },
    ficha: {
      tituloPlantilla: '{producto} | 3S Grupo Industrial',
      descripcionPlantilla:
        '{resumen} Presentaciones de {presentaciones}. Fabricado en Asunción por 3S Grupo Industrial, con envío a todo el Paraguay.',
    },
  },

  nav: {
    enlaces: [
      { texto: 'Por qué 3S', href: '/#beneficios' },
      { texto: 'En planta', href: '/#galeria' },
      { texto: 'Productos', href: '/productos' },
      { texto: 'Presupuesto', href: '/#presupuesto' },
      { texto: 'Preguntas', href: '/#faq' },
    ],
    cta: 'Pedir presupuesto',
    abrirMenu: 'Abrir el menú de navegación',
    cerrarMenu: 'Cerrar el menú de navegación',
    saltarAlContenido: 'Saltar al contenido principal',
    activarModoOscuro: 'Activar modo oscuro',
    activarModoClaro: 'Activar modo claro',
  },

  hero: {
    titular: 'Tu proceso limpio. Tu efluente dentro de norma. Tu planta en marcha.',
    subtitulo:
      'Elaboramos una gama de productos en Asunción para cada etapa: desengrase, desinfección, coagulación y floculación, y control de olor. Para frigoríficos, curtiembres y plantas de alimentos, en presentaciones de 5 a 1000 litros y con productos que cuentan con registro sanitario.',
    ctaPrimario: 'Solicitar presupuesto',
    ctaSecundario: 'Ver los productos',
    imagen: {
      src: '/src/assets/images/aplicaciones/policloruro-de-aluminio-3s.png',
      alt: 'Piletas de una planta de tratamiento de efluentes industriales en operación, con productos 3S en dosificación.',
      epigrafe: 'Tratamiento de efluentes en planta — dosificación de Policloruro de Aluminio 3S.',
    },
    senales: [
      {
        icono: 'truck',
        titulo: 'Envío a todo el país',
        detalle: 'Tarifa de flete a convenir según volumen y destino.',
      },
      {
        icono: 'flask-conical',
        titulo: 'Laboratorio propio',
        detalle: 'Fabricación nacional: no somos revendedores de marca importada.',
      },
      {
        icono: 'file-text',
        titulo: 'Con registro sanitario',
        detalle: 'La documentación que tu auditoría necesita en el legajo.',
      },
    ],
  },

  problemaSolucion: {
    titulo: 'De la multa ambiental al proceso bajo control',
    problema: {
      titulo: 'Lo que pasa hoy',
      texto:
        'El efluente sale fuera de parámetro y la habilitación queda colgando de la próxima inspección. Probás con lo que consigas en plaza, la dosificación la ajusta el operario a ojo, y cuando el lodo no decanta o el olor aparece, no hay a quién llamar. Cada corrección improvisada cuesta producto de más, horas de planta y riesgo de parada.',
    },
    solucion: {
      titulo: 'Cómo cambia con 3S',
      texto:
        'Elaboramos una gama de productos en Asunción que acompaña las etapas principales de tu planta: desengrase, desinfección, coagulación y floculación del efluente, y control de olor. Un solo proveedor, con presentaciones de 5 a 1000 litros, productos que cuentan con registro sanitario y reposición local sin depender de una importación.',
    },
  },

  recorrido: {
    volanta: 'El circuito 3S',
    titulo: 'Cuatro momentos que trabajan en secuencia',
    bajada:
      'La línea acompaña el recorrido desde la limpieza del área de proceso hasta el tratamiento del efluente y el control de olores.',
    aviso:
      'El orden representa el ciclo general de trabajo. La selección y la aplicación exactas se definen según el proceso de cada planta.',
    verProductos: 'Ver productos de esta etapa',
    items: [
      {
        id: 'desengrasa',
        titulo: 'Desengrasa',
        texto:
          'Retira grasa y residuos adheridos de equipos, pisos y superficies antes de la sanitización.',
      },
      {
        id: 'desinfecta',
        titulo: 'Desinfecta',
        texto:
          'Reduce la carga microbiológica en las áreas y superficies del proceso ya limpias.',
      },
      {
        id: 'coagulacion-floculacion',
        titulo: 'Coagulación y Floculación',
        texto:
          'Favorece la separación de sólidos y la clarificación durante el tratamiento del efluente.',
      },
      {
        id: 'control-olor',
        titulo: 'Control de olor',
        texto:
          'Completa el recorrido con soluciones para prevenir, neutralizar y reducir olores no deseados.',
      },
    ],
  },

  beneficios: {
    titulo: 'Por qué las plantas nos eligen',
    bajada:
      'Dieciocho productos que cubren el circuito completo: del desengrase de la línea a la descarga del efluente.',
    items: [
      {
        icono: 'droplets',
        titulo: 'Parámetros bajo control',
        texto:
          'Coagulantes y floculantes para bajar sólidos, color y carga orgánica antes de la descarga.',
      },
      {
        icono: 'flask-conical',
        titulo: 'La línea completa',
        texto:
          'Desengrase, desinfección, coagulación y floculación, y control de olor. Un proveedor en lugar de cinco.',
      },
      {
        icono: 'gauge',
        titulo: 'Producto concentrado',
        texto:
          'Se usa diluido y rinde por metro cúbico tratado. El costo real por aplicación baja.',
      },
      {
        icono: 'headset',
        titulo: 'Asesoramiento técnico',
        texto:
          'Te decimos qué producto va en cada punto de tu proceso y en qué dilución aplicarlo.',
      },
      {
        icono: 'shield-check',
        titulo: 'Con registro sanitario',
        texto:
          'Casi toda la línea lo tiene, y White Clean suma registro DINAVISA y aprobación del INTN.',
      },
      {
        icono: 'leaf',
        titulo: 'Biodegradables y sin fosfatos',
        texto:
          'Stronger, Bioperacid y White Clean son 100 % biodegradables y libres de fosfatos.',
      },
    ],
  },

  galeria: {
    titulo: 'Los productos, trabajando',
    bajada:
      'Nuestros productos aplicados en planta, en frigoríficos, plantas de alimentos y estaciones de tratamiento. Tocá una imagen para verla en grande.',
    cerrar: 'Cerrar la galería',
    anterior: 'Imagen anterior',
    siguiente: 'Imagen siguiente',
    de: 'de',
    // Fotos de uso real tomadas del catálogo institucional de 3S.
    items: [
      {
        src: '/src/assets/images/aplicaciones/stronger.png',
        alt: 'Operario lavando con espuma desengrasante una sala de faena.',
        epigrafe: 'Stronger en una sala de faena: espuma desengrasante enzimática sobre equipos y pisos.',
      },
      {
        src: '/src/assets/images/aplicaciones/desinal.png',
        alt: 'Aplicación de espuma sobre una línea de producción cárnica.',
        epigrafe: 'Desinal sobre línea cárnica: desengrase y acción bactericida en la misma aplicación.',
      },
      {
        src: '/src/assets/images/aplicaciones/decuat.png',
        alt: 'Desinfección de una cinta transportadora en una planta de alimentos.',
        epigrafe: 'Decuat en una cinta transportadora: desinfección con amonio cuaternario de quinta generación.',
      },
      {
        src: '/src/assets/images/aplicaciones/purson-plus.png',
        alt: 'Túnel de lavado de cajones plásticos en una planta de alimentos.',
        epigrafe: 'Purson Plus en el túnel de lavado de cajones: desengrasante alcalino sin espuma.',
      },
      {
        src: '/src/assets/images/aplicaciones/sulfato-de-aluminio-3s.png',
        alt: 'Tanques de clarificación de agua en una planta de tratamiento.',
        epigrafe: 'Sulfato de Aluminio 3S en clarificación: coagulación en tanques de tratamiento.',
      },
      {
        src: '/src/assets/images/aplicaciones/sanitol.png',
        alt: 'Operario lavándose las manos en el ingreso a un sector productivo.',
        epigrafe: 'Sanitol en el ingreso a planta: jabón antibacterial de pH neutro para uso frecuente.',
      },
    ],
  },

  comoComprar: {
    titulo: 'Cómo trabajamos',
    bajada:
      'Tres pasos desde el diagnóstico de tu necesidad hasta la aplicación en planta.',
    pasos: [
      {
        titulo: 'Relevamos tu necesidad',
        texto:
          'Contanos tu rubro, qué necesitás resolver y en qué punto del proceso ocurre. Con esos datos iniciamos el diagnóstico.',
      },
      {
        titulo: 'Definimos y cotizamos la solución',
        texto:
          'Te indicamos el producto, la dosis y la presentación adecuados, y preparamos el presupuesto con el flete calculado según el destino.',
      },
      {
        titulo: 'Entregamos y acompañamos',
        texto:
          'Despachamos a tu planta en cualquier punto del país y te orientamos para aplicar y ajustar correctamente la solución.',
      },
    ],
  },

  especificaciones: {
    titulo: 'La línea completa',
    bajada:
      'Los dieciocho productos del catálogo con su tipo, sus presentaciones y su registro. Los datos que tu área de calidad necesita antes de aprobar un proveedor.',
    columnas: {
      producto: 'Producto',
      tipo: 'Qué es',
      presentaciones: 'Presentaciones',
      registro: 'Registro',
    },
    sinRegistro: 'No aplica',
    verFicha: 'Ver ficha',
  },

  precio: {
    titulo: 'Presupuesto por presentación',
    bajada:
      'No publicamos precios de lista porque el costo por litro cambia según el volumen y el destino del flete. Elegí la presentación que te sirve y te pasamos el número por WhatsApp en el día.',
    etiquetaPresentaciones: 'Presentaciones disponibles',
    ctaVariante: 'Cotizar esta presentación',
    nota:
      'El presupuesto incluye el flete hasta tu planta, calculado según el volumen y el destino.',
  },

  presupuesto: {
    titulo: 'Solicitá tu presupuesto',
    bajada:
      'Contanos qué necesitás tratar y te respondemos con formulación, dosis y precio dentro de las 24 horas hábiles.',
    campos: {
      nombre: 'Nombre y apellido',
      email: 'Correo electrónico',
      telefono: 'Teléfono',
      telefonoOpcional: 'opcional',
      producto: 'Producto de interés',
      productoPlaceholder: 'Elegí un producto o categoría',
      mensaje: 'Contanos qué necesitás',
    },
    enviar: 'Enviar solicitud',
    enviando: 'Enviando…',
    reintentar: 'Reintentar el envío',
    opcionGeneral: 'Todavía no sé cuál necesito',
    privacidad:
      'Usamos tus datos solo para responderte este presupuesto. Podés leer cómo los tratamos en nuestra {enlace}.',
    privacidadEnlace: 'política de privacidad',
    obligatorio: 'obligatorio',
    errores: {
      nombre: 'Escribí tu nombre para que sepamos con quién hablamos.',
      email: 'Necesitamos un correo para enviarte el presupuesto.',
      emailFormato: 'Revisá el correo: parece que le falta algo.',
      producto: 'Elegí el producto o la familia que te interesa.',
      mensaje: 'Contanos brevemente qué necesitás resolver.',
      envio:
        'No pudimos enviar la solicitud. Lo que escribiste sigue acá: revisá tu conexión y probá de nuevo, o escribinos directo por WhatsApp.',
      sinConfigurar:
        'El formulario todavía no está configurado. Escribinos por WhatsApp mientras tanto.',
    },
  },

  testimonios: {
    titulo: 'Lo que dicen nuestros clientes',
    // ⚠ NO PUBLICAR RESEÑAS INVENTADAS.
    // Estos tres bloques son de ejemplo y se muestran marcados como tales.
    // Al recibir reseñas reales con autorización escrita del cliente:
    // reemplazar el texto y poner `esPlaceholder: false` en cada una.
    // Mientras haya alguna en `true`, la sección avisa que es contenido
    // de ejemplo y no emite marcado de reseña para buscadores.
    avisoPlaceholder:
      'Contenido de ejemplo. Esta sección se completa con reseñas reales y autorizadas antes de publicar el sitio.',
    items: [
      {
        esPlaceholder: true,
        texto:
          'Ejemplo de reseña. Acá va el testimonio textual de un cliente real, con su autorización por escrito.',
        autor: 'Nombre del referente',
        cargo: 'Jefe de planta',
        empresa: 'Empresa cliente',
      },
      {
        esPlaceholder: true,
        texto:
          'Ejemplo de reseña. Acá va el testimonio textual de un cliente real, con su autorización por escrito.',
        autor: 'Nombre del referente',
        cargo: 'Responsable ambiental',
        empresa: 'Empresa cliente',
      },
      {
        esPlaceholder: true,
        texto:
          'Ejemplo de reseña. Acá va el testimonio textual de un cliente real, con su autorización por escrito.',
        autor: 'Nombre del referente',
        cargo: 'Gerente de calidad',
        empresa: 'Empresa cliente',
      },
    ],
  },

  faq: {
    titulo: 'Preguntas frecuentes',
    bajada: 'Lo que más nos consultan antes de la primera compra.',
    items: [
      {
        pregunta: '¿Hacen envíos a todo el país?',
        respuesta:
          'Sí, despachamos a los diecisiete departamentos. La tarifa de flete se conviene según el volumen y el destino, y queda incluida en el presupuesto antes de que confirmes.',
      },
      {
        pregunta: '¿Cuánto tardan en entregar?',
        respuesta:
          'Los productos de stock salen en 24 a 48 horas hábiles desde la confirmación. Las formulaciones a medida llevan entre 5 y 10 días hábiles según el volumen. La fecha comprometida siempre figura en el presupuesto.',
      },
      {
        pregunta: '¿Qué pasa si el producto no me da el resultado esperado?',
        respuesta:
          'Primero revisamos la aplicación con vos: en la mayoría de los casos el ajuste está en la dilución o en el punto de aplicación, y eso lo corregimos sin cargo. Si se confirma que el lote salió fuera de especificación, lo reponemos completo. No trabajamos con devolución de dinero tipo comercio minorista: trabajamos con reposición y ajuste técnico.',
      },
      {
        pregunta: '¿Qué garantía tienen los productos?',
        respuesta:
          'Casi toda la línea tiene registro sanitario, y White Clean suma además registro DINAVISA y aprobación del INTN. La garantía cubre que el producto cumpla la especificación declarada en su ficha técnica, dentro de la vida útil indicada y almacenado en las condiciones que ahí figuran.',
      },
      {
        pregunta: '¿Qué medios de pago aceptan?',
        respuesta:
          'Transferencia bancaria y cheque. Para clientes con cuenta abierta manejamos plazos según el historial. Las condiciones se acuerdan al momento del presupuesto: emitimos factura legal en todos los casos.',
      },
      {
        pregunta: '¿Puedo pedir una muestra antes de comprar?',
        respuesta:
          'Escribinos y lo vemos según el producto y el volumen que necesites. Para tratamiento de efluentes conviene además que nos cuentes qué estás tratando y con qué equipamiento, así te recomendamos el coagulante y el floculante que corresponden.',
      },
      {
        pregunta: '¿Entregan ficha técnica y hoja de seguridad?',
        respuesta:
          'Sí. Pedinos la ficha técnica y la hoja de datos de seguridad del producto que te interesa y te las mandamos: es lo que tu área de higiene y seguridad necesita para el legajo y para capacitar al personal que lo manipula.',
      },
      {
        pregunta: '¿Hay un volumen mínimo de compra?',
        respuesta:
          'No para las presentaciones de catálogo: podés arrancar con un bidón. Las presentaciones van de 5 litros a 1000 litros según el producto, y en polvo el envase es de 25 kilos.',
      },
    ],
  },

  ctaFinal: {
    titulo: 'Contanos qué necesitás resolver y te decimos con qué',
    texto:
      'Sin compromiso. Con el rubro y el problema alcanza para que te digamos qué producto va, en qué presentación y cuánto sale.',
    ctaPrimario: 'Escribir por WhatsApp',
    ctaSecundario: 'Pedir presupuesto por formulario',
  },

  footer: {
    descripcion:
      'Laboratorio paraguayo de productos químicos para el tratamiento de aguas residuales industriales, la higiene sanitaria y la limpieza profesional.',
    tituloContacto: 'Contacto',
    tituloEnlaces: 'El sitio',
    privacidad: 'Política de privacidad',
    derechos: 'Todos los derechos reservados.',
    enlaces: [
      { texto: 'Por qué 3S', href: '/#beneficios' },
      { texto: 'En planta', href: '/#galeria' },
      { texto: 'Cómo trabajamos', href: '/#como-comprar' },
      { texto: 'Productos', href: '/productos' },
      { texto: 'Presupuesto', href: '/#presupuesto' },
      { texto: 'Preguntas frecuentes', href: '/#faq' },
    ],
  },

  gracias: {
    titulo: 'Recibimos tu solicitud',
    texto:
      'Tu consulta ya está en nuestra casilla. Un técnico la revisa y te responde con la formulación, la presentación que te conviene y el precio con el flete incluido.',
    mientrasTanto: 'Mientras tanto',
    ctaWhatsApp: 'Escribinos por WhatsApp',
    ctaCatalogo: 'Ver el catálogo completo',
    ctaInicio: 'Volver al inicio',
  },

  privacidad: {
    titulo: 'Política de privacidad',
    actualizado: 'Última actualización: 4 de septiembre de 2026',
    bloques: [
      {
        titulo: 'Quién trata tus datos',
        parrafos: [
          '3S Grupo Industrial S.R.L., con domicilio en Pilar N.° 1717 casi Nazareth, Asunción, Paraguay, es responsable de los datos personales que dejás en este sitio.',
          'Para cualquier consulta sobre esta política podés escribirnos a 3sgrupoindustrial@gmail.com o al (0972) 572 007.',
        ],
      },
      {
        titulo: 'Qué datos recogemos y para qué',
        parrafos: [
          'Solo los que escribís vos en el formulario de solicitud de presupuesto: nombre, correo electrónico, teléfono si querés dejarlo, el producto que te interesa y tu mensaje.',
          'Los usamos con un único fin: responder tu consulta y prepararte el presupuesto. No los usamos para enviarte publicidad que no hayas pedido ni los cruzamos con ninguna otra base.',
        ],
      },
      {
        titulo: 'Cómo se envían',
        parrafos: [
          'Este sitio no tiene servidor propio ni base de datos. El formulario se envía a Web3Forms, un servicio externo que reenvía el contenido a nuestra casilla de correo y no lo conserva de forma permanente.',
          'La transmisión va cifrada por HTTPS. Una vez que el mensaje llega a nuestro correo, queda guardado ahí mientras dure la relación comercial o hasta que nos pidas que lo borremos.',
        ],
      },
      {
        titulo: 'Cookies y medición',
        parrafos: [
          'Este sitio no instala cookies de seguimiento ni de publicidad, y no carga recursos de terceros al abrirse: las tipografías y las imágenes se sirven desde nuestro propio dominio.',
          'Si en el futuro incorporamos una herramienta de medición, será una que no use cookies ni identifique a personas, y lo anunciaremos en esta misma página.',
        ],
      },
      {
        titulo: 'Con quién los compartimos',
        parrafos: [
          'Con nadie, salvo el proveedor del formulario que ya mencionamos y en la medida estrictamente necesaria para que el mensaje llegue. No vendemos ni cedemos datos personales.',
          'Podríamos entregarlos únicamente si una autoridad competente lo requiere por una vía legal.',
        ],
      },
      {
        titulo: 'Tus derechos',
        parrafos: [
          'Podés pedirnos en cualquier momento que te digamos qué datos tuyos tenemos, que los corrijamos si están mal, o que los eliminemos.',
          'Escribinos a 3sgrupoindustrial@gmail.com y te respondemos. No hace falta que justifiques el pedido.',
        ],
      },
      {
        titulo: 'Enlaces a otros sitios',
        parrafos: [
          'Cuando hacés clic en un botón de WhatsApp salís de este sitio y entrás a una plataforma de terceros, que se rige por sus propias políticas. Lo mismo vale para nuestros perfiles en redes sociales.',
        ],
      },
      {
        titulo: 'Cambios en esta política',
        parrafos: [
          'Si cambiamos algo, actualizamos la fecha del encabezado. Te recomendamos revisarla si vas a dejarnos tus datos después de un tiempo.',
        ],
      },
    ],
  },

  noEncontrado: {
    titulo: 'Esta página no existe',
    texto:
      'Puede que el enlace haya cambiado o que la dirección tenga un error de tipeo. Volvé al inicio y buscá desde ahí, o escribinos y te decimos dónde está lo que buscabas.',
    cta: 'Volver al inicio',
  },

  catalogo: {
    titulo: 'Catálogo de productos',
    bajada:
      'Dieciocho productos fabricados en nuestro laboratorio en Asunción, del tratamiento del efluente a la higiene de manos del personal. Filtrá por familia o mirá la línea completa.',
    filtrarPor: 'Filtrar por familia',
    todos: 'Todos',
    conteo: '{n} productos',
    conteoSingular: '1 producto',
    verFicha: 'Ver ficha',
    sinResultados: 'No hay productos en esta familia.',
    etapaActiva: 'Etapa del recorrido: {etapa}',
    quitarEtapa: 'Ver la línea completa',
  },

  ficha: {
    migaInicio: 'Inicio',
    migaCatalogo: 'Productos',
    accion: 'Qué hace',
    aplicacion: 'Cómo se aplica',
    sectores: 'Dónde se usa',
    especificaciones: 'Ficha técnica',
    presentaciones: 'Presentaciones',
    enUso: 'En planta',
    descargarFicha: 'Descargar ficha técnica (PDF)',
    relacionados: 'De la misma familia',
    ctaTitulo: '¿Te sirve este producto?',
    ctaTexto:
      'Escribinos y te pasamos el precio de la presentación que necesites, con el flete hasta tu planta ya calculado.',
    ctaBoton: 'Consultar por este producto',
    volver: 'Volver al catálogo',
    usoProfesional: 'De uso profesional',
    conRegistro: 'Con registro sanitario',
    fuente: 'Datos tomados de la página {n} del catálogo institucional de 3S.',
  },

  categorias: [
    {
      id: 'tratamiento-efluentes',
      nombre: 'Tratamiento de efluentes',
      descripcion:
        'Coagulantes, floculantes y control de olores para plantas de tratamiento industrial.',
      icono: 'droplets',
    },
    {
      id: 'desinfectantes',
      nombre: 'Desinfectantes',
      descripcion:
        'Amonio cuaternario, ácido peracético y peróxido para industria alimentaria y sanitaria.',
      icono: 'shield-check',
    },
    {
      id: 'desengrasantes',
      nombre: 'Desengrasantes',
      descripcion:
        'Alcalinos, clorados y enzimáticos para grasa animal, vegetal y mineral.',
      icono: 'flask-conical',
    },
    {
      id: 'detergentes',
      nombre: 'Detergentes',
      descripcion:
        'Neutros y espumantes para equipos, utensilios y superficies de proceso.',
      icono: 'gauge',
    },
    {
      id: 'lavanderia',
      nombre: 'Lavandería',
      descripcion:
        'Blanqueadores y detergentes en polvo para lavanderías industriales y hospitalarias.',
      icono: 'sparkles',
    },
    {
      id: 'higiene-manos',
      nombre: 'Higiene de manos',
      descripcion:
        'Jabón antibacterial para el personal de planta y sectores de proceso.',
      icono: 'leaf',
    },
  ],

  /**
   * Copy por producto, indexado por el `slug` de products.ts.
   *
   * El campo `accion` es la transcripción del bloque ACCIÓN del catálogo
   * impreso, corregida de ortografía y puntuación pero sin cambiarle el
   * sentido ni agregarle afirmaciones que el catálogo no hace.
   * El `resumen` sí es copy nuevo: una línea orientada al beneficio para
   * la tarjeta del catálogo.
   */
  productos: {
    'policloruro-de-aluminio-3s': {
      resumen:
        'Clarifica el efluente y le saca el color en la etapa de coagulación.',
      accion:
        'El policloruro de aluminio se utiliza principalmente para remover color y materia coloidal en sistemas acuosos, plantas potabilizadoras y clarificación de efluentes industriales. Reemplaza al sulfato de aluminio, el cloruro de aluminio, el cloruro férrico, el sulfato férrico y otras sales inorgánicas convencionales no polimerizadas.',
      sectores: [
        'Plantas de tratamiento de efluentes industriales',
        'Plantas potabilizadoras',
        'Frigoríficos y plantas de faena',
        'Curtiembres',
      ],
    },
    'sulfato-de-aluminio-3s': {
      resumen:
        'Coagulante clásico, fabricado con materia prima libre de hierro.',
      accion:
        'El sulfato de aluminio es una solución de excelente calidad, manufacturada a partir de una materia prima rica en aluminio y libre de hierro, y de ácido sulfúrico, mediante un proceso controlado que garantiza su calidad. Con el sulfato de aluminio se obtienen excelentes resultados cuando se emplea en la clarificación de aguas para consumo humano y en el tratamiento de efluentes de la industria en general.',
      sectores: [
        'Clarificación de agua para consumo humano',
        'Efluentes industriales en general',
        'Plantas de alimentos y bebidas',
      ],
    },
    'polimero-3s-anionico': {
      resumen:
        'Junta el flóculo para que decante rápido y la torta salga más seca.',
      accion:
        'Floculante aniónico de alto peso molecular y alta carga aniónica, basado en poliacrilamida. Puede usarse en la industria de la extracción, en efluentes industriales, en tratamiento de efluentes y en tratamiento de agua potable. Es beneficioso para cualquier proceso de separación líquido-sólido y está especialmente recomendado para filtración, deshidratación mecánica y sedimentación por gravedad, entre otras aplicaciones.',
      sectores: [
        'Sedimentadores y clarificadores',
        'Deshidratado mecánico de lodos',
        'Tratamiento de agua potable',
        'Industria extractiva',
      ],
    },
    'polimero-3s-cationico': {
      resumen:
        'Sube el rendimiento de la planta y le saca agua al lodo.',
      accion:
        'Floculante basado en polímeros catiónicos sólidos de alto peso molecular, con base poliacrilamida y distintas densidades de carga. Está desarrollado para aumentar el rendimiento de las estaciones de tratamiento de agua, la remoción de agua del lodo y la floculación de sólidos.',
      sectores: [
        'Estaciones de tratamiento de agua',
        'Deshidratado de lodos',
        'Floculación de sólidos en efluentes',
      ],
    },
    'odor-free': {
      resumen:
        'Neutraliza el olor donde se genera, en vez de taparlo con perfume.',
      accion:
        'Indicado para prevenir, eliminar y neutralizar las emisiones de malos olores en todo tipo de establecimientos, dejando el ambiente limpio y desodorizado. Aplicable en áreas de recolección de basura, baños, áreas porcinas y avícolas, e instalaciones industriales.',
      aplicacion:
        'Puede usarse sobre superficies de todo tipo, de forma manual o por aspersión.',
      sectores: [
        'Áreas de recolección de residuos',
        'Instalaciones porcinas y avícolas',
        'Plantas de tratamiento de efluentes',
        'Baños y vestuarios industriales',
      ],
    },
    decuat: {
      resumen:
        'Desinfección de amplio espectro para toda el área de proceso.',
      accion:
        'Es un desinfectante y sanitizante concentrado a base de la más moderna y activa combinación de sales de amonio cuaternario de 5.ª generación, especialmente formulado para su uso en todo tipo de áreas. Tiene un gran espectro de acción desinfectante sobre bacterias, hongos y microorganismos Gram+ y Gram-. Ideal para áreas de procesamiento de alimentos.',
      aplicacion:
        'Puede usarse en un gran rango de aplicaciones y superficies de todo tipo, en forma manual, por inmersión o por aspersión.',
      sectores: [
        'Áreas de procesamiento de alimentos',
        'Frigoríficos y plantas de faena',
        'Cámaras frigoríficas y antecámaras',
        'Vestuarios, sanitarios y comedores',
      ],
    },
    bioperacid: {
      resumen:
        'Ácido peracético al 15 %: desinfecta sin alterar el gusto del alimento.',
      accion:
        'Es un poderoso desinfectante de rápida acción, con propiedades bactericidas, fungicidas y virucidas, ideal para la industria de alimentos, papel y celulosa, textil, curtiembres, mataderos, azúcar y alcohol. En su acción desinfectante el ácido peracético se convierte en un producto amigable con el medio ambiente. No lo afecta la dureza del agua y solo lo reduce levemente la carga orgánica de suciedad. Su carácter ácido lo hace útil también como desincrustante y desoxidante secundario. Contribuyen a su acción desinfectante el peróxido de hidrógeno y el ácido acético presentes en su formulación. Es un producto biodegradable, libre de fosfatos, que reduce de forma segura la carga microbiana que contamina las carnes durante su manipulación. Su acción no altera la química del gusto en los alimentos.',
      aplicacion:
        'Desinfección de superficies de todo tipo, en sectores industriales, hospitalarios, hoteles, restaurantes, avícolas, porcinos, bovinos y otros.',
      sectores: [
        'Frigoríficos y mataderos',
        'Curtiembres',
        'Papel, celulosa y textil',
        'Azúcar y alcohol',
      ],
    },
    ardiox: {
      resumen:
        'Más poder germicida que el cloro, y sin residuos ni sabor.',
      accion:
        'Es un poderoso desinfectante de rápida acción, con cualidades sanitizantes de amplio espectro sobre gérmenes, esporas, virus, bacterias y hongos. No deja residuos, es eficaz en la purificación de agua, no es tóxico y no imparte sabores ni olores desagradables en las dosificaciones recomendadas. Posee mayor poder germicida que el cloro y el hipoclorito, con gran capacidad de acción en presencia de materia orgánica y aguas duras, debido a su efecto selectivo de penetración en el microorganismo para su destrucción. Es ampliamente utilizado en procesos de higiene y desinfección, especialmente en plantas procesadoras de alimentos.',
      aplicacion:
        'Desinfección de superficies de todo tipo, en sectores industriales, hospitalarios, hoteles, restaurantes, avícolas, porcinos, bovinos y otros.',
      sectores: [
        'Plantas procesadoras de alimentos',
        'Purificación de agua',
        'Sector hospitalario y hotelero',
        'Producción avícola, porcina y bovina',
      ],
    },
    desinper: {
      resumen:
        'Limpia y desinfecta en un solo paso, con base de peróxido de hidrógeno.',
      accion:
        'Desinfectante concentrado de última generación, diseñado especialmente para cubrir los requerimientos de higiene profesional en ámbitos industriales, en particular en industrias alimentarias. Gracias a su formulación basada en peróxido de hidrógeno combina un alto poder de limpieza con una desinfección de rápida acción. Es eficaz contra virus, bacterias, hongos y levaduras, y está recomendado para su aplicación en todo tipo de superficies y equipamiento.',
      aplicacion:
        'Desinfección de superficies de todo tipo, en sectores industriales, hospitalarios, hoteles, restaurantes, avícolas, porcinos, bovinos y otros.',
      sectores: [
        'Industria alimentaria',
        'Sector hospitalario',
        'Hotelería y gastronomía',
        'Producción avícola, porcina y bovina',
      ],
    },
    'king-klor': {
      resumen:
        'Desengrasa lo pesado y desinfecta en la misma pasada, con espuma adherente.',
      accion:
        'Es un desengrasante alcalino clorado de alta concentración, utilizado para trabajos desengrasantes pesados y útil para la limpieza de superficies y equipos de procesos de alimentos. Se usa en fábricas de lácteos, cárnicos y productos alimenticios donde se maneja un alto nivel de grasa; además, su contenido de cloro permite la desinfección de las superficies. También puede aplicarse con equipos espumadores, generando una espuma densa que permanece adherida, lo que aumenta la superficie de contacto y mejora la acción desengrasante del producto.',
      sectores: [
        'Fábricas de lácteos',
        'Plantas cárnicas y frigoríficos',
        'Equipos de proceso de alimentos',
        'Superficies con alto nivel de grasa',
      ],
    },
    stronger: {
      resumen:
        'Desengrasante enzimático 100 % biodegradable, sin cloro ni fosfatos.',
      accion:
        'Es un desengrasante enzimático concentrado a base de poderosos tensoactivos y solventes hidrosolubles. Posee excelente acción de limpieza y proporciona una remoción rápida de proteínas y grasas animales y vegetales, eliminándolas de forma fácil y rápida. Es estable en aguas duras y en sistemas grandes, difíciles de limpiar. Ideal para industrias alimenticias. Además, al ser un producto libre de sustancias corrosivas —cloro y fosfato—, es altamente respetuoso con el medio ambiente y 100 % biodegradable.',
      aplicacion:
        'Puede usarse en un gran rango de aplicaciones y superficies de todo tipo, en forma manual, por inmersión o por aspersión.',
      sectores: [
        'Industrias alimenticias',
        'Frigoríficos y salas de faena',
        'Sistemas grandes y difíciles de limpiar',
        'Plantas con agua dura',
      ],
    },
    desinal: {
      resumen:
        'Desengrasante bactericida para carga de grasa alta y residuos proteicos.',
      accion:
        'Es un poderoso detergente desengrasante con alto poder dispersante, desinfectante, bactericida y fungicida. Permite una rápida remoción de la suciedad en áreas con baja y alta carga de grasa, suciedad acumulada y residuos proteicos. Apto para industrias alimentarias.',
      aplicacion:
        'Puede usarse en un gran rango de aplicaciones y superficies de todo tipo, en forma manual, por inmersión o por aspersión.',
      sectores: [
        'Industrias alimentarias',
        'Áreas con alta carga de grasa',
        'Sectores con residuos proteicos acumulados',
      ],
    },
    enzurpon: {
      resumen:
        'Alcalino concentrado para aceite y grasa, aplicable con espumador.',
      accion:
        'Es un detergente desengrasante alcalino formulado a base de poderosos tensioactivos y solventes hidrosolubles, presentado en forma concentrada, especialmente desarrollado para procesos de limpieza y eliminación de aceite, restos de grasa y todo tipo de suciedad.',
      aplicacion:
        'Puede usarse en superficies de todo tipo, de forma manual o con equipos espumadores.',
      sectores: [
        'Maquinaria y equipos industriales',
        'Pisos y superficies de planta',
        'Sectores con aceite y grasa acumulada',
      ],
    },
    'purson-plus': {
      resumen:
        'Sin espuma y eficaz contra los tres tipos de grasa: mineral, animal e industrial.',
      accion:
        'Es un desengrasante alcalino sin espuma, formulado a base de poderosos tensioactivos y solventes hidrosolubles, altamente eficaz contra los tres tipos de grasa: mineral, animal e industrial. Indicado para la limpieza de utensilios en contacto con grasas de difícil eliminación, hornos, planchas, freidoras y similares.',
      aplicacion: 'Puede usarse en superficies de todo tipo, de forma manual.',
      sectores: [
        'Cocinas industriales',
        'Hornos, planchas y freidoras',
        'Utensilios con grasa de difícil eliminación',
        'Lavado de cajones y bandejas',
      ],
    },
    madox: {
      resumen:
        'Detergente neutro concentrado que enjuaga rápido y no deja residuo.',
      accion:
        'Detergente líquido neutro, concentrado y espumante, diseñado para uso general en la industria alimentaria. Está basado en una mezcla equilibrada de tensioactivos espumantes, agentes secuestrantes y emulsificantes. Es un producto libre de fosfatos, lo que lo hace altamente soluble y permite un enjuague rápido y eficiente sin dejar residuos. Proporciona una limpieza eficiente, económica y segura. Puede aplicarse en cocinas industriales y domésticas para limpiar platos, cubiertos, vasos, ollas, sartenes, estufas y equipos, entre otros. Elimina grasas, aceites, proteínas y diversas suciedades. Por su eficacia también puede aplicarse a la limpieza general de superficies, como paredes, pisos, mostradores, escritorios y mesas de trabajo.',
      sectores: [
        'Cocinas industriales',
        'Vajilla, utensilios y equipos',
        'Limpieza general de superficies',
        'Gastronomía y hotelería',
      ],
    },
    'fine-white': {
      resumen:
        'Blanquea y desinfecta sin decolorar la ropa de color, a diferencia del cloro.',
      accion:
        'Blanqueador desinfectante oxigenado para lavanderías, instituciones e industrias. Es un blanqueador de alta concentración y gran poder de desinfección. Elimina todo tipo de manchas de origen proteico: sangre, vómitos, heces, colorantes vegetales, salsas, vinos, cosméticos, medicamentos, café y otros. Es idóneo para el lavado de todo tipo de fibra textil, con resultados óptimos. Aplicable en prendas blancas y de color: no decolora ni daña como los blanqueadores clorados.',
      sectores: [
        'Lavanderías industriales',
        'Lavanderías hospitalarias',
        'Hotelería',
        'Instituciones',
      ],
    },
    'white-clean': {
      resumen:
        'Detergente en polvo de espuma controlada, sin cloro ni fosfatos.',
      accion:
        'Polvo limpiador de espuma controlada, formulado para uso manual e industrial en el lavado de todo tipo de ropa. Antiséptico de alto rendimiento, ideal para mejorar el blanco de las prendas sin degradar la ropa de color. No contiene blanqueador clorado, que destiñe las prendas, y es un producto libre de fosfatos, 100 % biodegradable. Remueve rápida y eficazmente la grasa y la suciedad, eliminando todo tipo de manchas de origen proteico: sangre, vómito, colorantes, salsas, vino y otras. Ideal para lavarropas de uso profesional, y también recomendado para su uso en hospitales, restaurantes, hoteles e industrias.',
      sectores: [
        'Lavarropas de uso profesional',
        'Hospitales',
        'Restaurantes y hoteles',
        'Industrias con ropa de trabajo',
      ],
    },
    sanitol: {
      resumen:
        'Jabón antibacterial de pH neutro para el uso repetido de todo un turno.',
      accion:
        'Jabón líquido antibacterial especialmente formulado para la limpieza de manos, que elimina gérmenes y bacterias. Proporciona una rápida y efectiva acción germicida con pH neutro. Sus suaves tensioactivos y emolientes conservan la humedad y la suavidad de la piel frente a usos frecuentes, lo que lo hace idóneo para la industria alimenticia, la gastronomía y la hotelería.',
      sectores: [
        'Ingreso a sectores productivos',
        'Industria alimenticia',
        'Gastronomía y hotelería',
        'Vestuarios y sanitarios',
      ],
    },
  },

  whatsapp: {
    hero: 'Hola, quiero información sobre los productos de 3S para tratamiento de efluentes.',
    general:
      'Hola, quiero información sobre los productos de 3S Grupo Industrial.',
    flotante:
      'Hola, tengo una consulta sobre los productos de 3S Grupo Industrial.',
    producto: 'Hola, quiero información sobre {producto}.',
    presupuesto:
      'Hola, quiero cotizar {producto} en presentación de {presentacion}.',
    presupuestoSinPresentacion: 'Hola, quiero cotizar {producto}.',
    etiquetaFlotante: 'Escribir por WhatsApp a 3S Grupo Industrial',
  },
};
