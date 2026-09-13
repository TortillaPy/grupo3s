import type { Contenido } from './types';

/**
 * ════════════════════════════════════════════════════════════════════════
 *  CONTENT IN US ENGLISH
 * ════════════════════════════════════════════════════════════════════════
 *
 *  Translated from content.es.ts. Same shape — the `Contenido` type
 *  enforces it: a missing key breaks the build.
 *
 *  Product names are NOT translated: they are trademarks.
 *  Image paths (`src`) are identical across locales; only `alt` and
 *  captions change.
 */
export const contenidoEn: Contenido = {
  locale: 'en',
  htmlLang: 'en-US',

  meta: {
    inicio: {
      titulo:
        '3S Grupo Industrial | Industrial chemicals and wastewater treatment in Paraguay',
      descripcion:
        'We formulate a range of products in Asunción for degreasing, disinfection, coagulation and flocculation, and odor control at meat plants, tanneries and food processors.',
    },
    productos: {
      titulo: 'Industrial chemical product catalog | 3S Grupo Industrial',
      descripcion:
        'All 19 products from 3S Grupo Industrial: coagulants and flocculants for effluent, disinfectants, degreasers, detergents, laundry and hand hygiene. With a spec sheet for each one.',
    },
    gracias: {
      titulo: 'We received your request | 3S Grupo Industrial',
      descripcion:
        'Your quote request came through. A 3S Grupo Industrial technician will get back to you within the next 24 business hours.',
    },
    privacidad: {
      titulo: 'Privacy policy | 3S Grupo Industrial',
      descripcion:
        'How 3S Grupo Industrial S.R.L. handles the data you submit through the quote request form.',
    },
    noEncontrado: {
      titulo: 'Page not found | 3S Grupo Industrial',
      descripcion: 'The page you were looking for does not exist or has moved.',
    },
    ficha: {
      tituloPlantilla: '{producto} · {familia} | 3S Grupo Industrial',
      descripcionPlantilla:
        '{resumen} Available in {presentaciones}. Part of the product range we formulate in Asunción, with delivery throughout Paraguay.',
    },
  },

  nav: {
    enlaces: [
      { texto: 'Why 3S', href: '/#beneficios' },
      { texto: 'On site', href: '/#galeria' },
      { texto: 'Products', href: '/productos' },
      { texto: 'Get a quote', href: '/#presupuesto' },
      { texto: 'FAQ', href: '/#faq' },
    ],
    cta: 'Request a quote',
    abrirMenu: 'Open the navigation menu',
    cerrarMenu: 'Close the navigation menu',
    saltarAlContenido: 'Skip to main content',
    activarModoOscuro: 'Switch to dark mode',
    activarModoClaro: 'Switch to light mode',
    irAlInicio: 'Go to the home page',
    navegacionPrincipal: 'Main navigation',
    navegacionMovil: 'Main navigation on mobile',
    idioma: 'Language',
  },

  hero: {
    volanta: '3S Grupo Industrial S.R.L. · Asunción, Paraguay',
    titular: 'Clean operations. Compliant effluent. Production keeps moving.',
    subtitulo:
      'We formulate a range of products for every stage in Asunción: degreasing, disinfection, coagulation and flocculation, and odor control. For meat plants, tanneries and food processors, in sizes from 5 to 1,000 liters, including products with sanitary registration.',
    ctaPrimario: 'Request a quote',
    ctaSecundario: 'See the products',
    imagen: {
      src: '/src/assets/images/aplicaciones/policloruro-de-aluminio-3s.png',
      alt: 'Clarifier tanks at an industrial wastewater treatment plant in operation, dosing 3S products.',
      epigrafe: 'On-site effluent treatment — dosing Policloruro de Aluminio 3S.',
    },
    senales: [
      {
        icono: 'truck',
        titulo: 'Delivery across Paraguay',
        detalle: 'Freight quoted by volume and destination.',
      },
      {
        icono: 'flask-conical',
        titulo: 'Our own laboratory',
        detalle: 'Formulated locally in our Asunción laboratory, with restocking that does not depend on an imported brand.',
      },
      {
        icono: 'file-text',
        titulo: 'Sanitary registration',
        detalle: 'The paperwork your audit needs on file.',
      },
    ],
  },

  problemaSolucion: {
    titulo: 'From environmental fine to a process under control',
    problema: {
      titulo: 'What happens today',
      texto:
        'Effluent leaves the plant out of spec and your permit hangs on the next inspection. You buy whatever is available locally, the operator adjusts dosing by eye, and when the sludge will not settle or the odor shows up, there is no one to call. Every improvised fix costs extra product, plant hours and the risk of a shutdown.',
    },
    solucion: {
      titulo: 'How it changes with 3S',
      texto:
        'We formulate a range of products in Asunción to support the main stages of your plant: degreasing, disinfection, effluent coagulation and flocculation, and odor control. One supplier, with sizes from 5 to 1,000 liters, products with sanitary registration and local restocking that does not depend on imports.',
    },
  },

  recorrido: {
    volanta: 'The 3S circuit',
    titulo: 'Four stages working in sequence',
    bajada:
      'The product line supports the journey from cleaning the process area through effluent treatment and odor control.',
    aviso:
      'This order represents the general workflow. Exact product selection and application depend on each plant\'s process.',
    verProductos: 'View products for this stage',
    items: [
      {
        id: 'desengrasa',
        titulo: 'Degrease',
        texto:
          'Remove grease and adhered residue from equipment, floors and surfaces before sanitizing.',
      },
      {
        id: 'desinfecta',
        titulo: 'Disinfect',
        texto:
          'Reduce the microbiological load on process areas and surfaces after cleaning.',
      },
      {
        id: 'coagulacion-floculacion',
        titulo: 'Coagulation and Flocculation',
        texto:
          'Support solids separation and clarification during effluent treatment.',
      },
      {
        id: 'control-olor',
        titulo: 'Odor control',
        texto:
          'Complete the journey with solutions that prevent, neutralize and reduce unwanted odors.',
      },
    ],
  },

  beneficios: {
    volanta: 'Why 3S',
    titulo: 'Why plants choose us',
    bajada:
      'Nineteen products covering the whole circuit: from degreasing the line to discharging the effluent.',
    items: [
      {
        icono: 'droplets',
        titulo: 'Parameters under control',
        texto:
          'Coagulants and flocculants to bring down solids, color and organic load before discharge.',
      },
      {
        icono: 'flask-conical',
        titulo: 'The complete line',
        texto:
          'Degreasing, disinfection, coagulation and flocculation, and odor control. One supplier instead of five.',
      },
      {
        icono: 'gauge',
        titulo: 'Concentrated products',
        texto:
          'Used diluted, they go a long way per cubic meter treated. Real cost per application drops.',
      },
      {
        icono: 'headset',
        titulo: 'Technical guidance',
        texto:
          'We tell you which product goes at each point of your process and at what dilution.',
      },
      {
        icono: 'shield-check',
        titulo: 'Sanitary registration',
        texto:
          'Nearly the whole line has it, and White Clean adds registration with DINAVISA and INTN approval — the health authority and the technical standards institute of Paraguay.',
      },
      {
        icono: 'leaf',
        titulo: 'Biodegradable, phosphate free',
        texto:
          'Stronger, Bioperacid and White Clean are 100 % biodegradable and phosphate free.',
      },
    ],
  },

  galeria: {
    volanta: 'On site',
    titulo: 'The products at work',
    bajada:
      'Our products applied on site, at meat plants, food processors and treatment stations. Tap an image to see it full size.',
    cerrar: 'Close the gallery',
    anterior: 'Previous image',
    siguiente: 'Next image',
    de: 'of',
    items: [
      {
        src: '/src/assets/images/aplicaciones/stronger.png',
        alt: 'Worker foam-washing a slaughter room.',
        epigrafe:
          'Stronger in a slaughter room: enzymatic degreasing foam on equipment and floors.',
      },
      {
        src: '/src/assets/images/aplicaciones/desinal.png',
        alt: 'Foam being applied over a meat production line.',
        epigrafe:
          'Desinal on a meat line: degreasing and bactericidal action in a single application.',
      },
      {
        src: '/src/assets/images/aplicaciones/decuat.png',
        alt: 'Disinfection of a conveyor belt at a food processing plant.',
        epigrafe:
          'Decuat on a conveyor belt: disinfection with fifth-generation quaternary ammonium.',
      },
      {
        src: '/src/assets/images/aplicaciones/purson-plus.png',
        alt: 'Plastic crate washing tunnel at a food processing plant.',
        epigrafe:
          'Purson Plus in the crate washing tunnel: non-foaming alkaline degreaser.',
      },
      {
        src: '/src/assets/images/aplicaciones/sulfato-de-aluminio-3s.png',
        alt: 'Water clarification tanks at a treatment plant.',
        epigrafe:
          'Sulfato de Aluminio 3S in clarification: coagulation in treatment tanks.',
      },
      {
        src: '/src/assets/images/aplicaciones/sanitol.png',
        alt: 'Worker washing hands at the entrance to a production area.',
        epigrafe:
          'Sanitol at the plant entrance: pH-neutral antibacterial soap for frequent use.',
      },
    ],
  },

  comoComprar: {
    volanta: 'How we work',
    titulo: 'How we work',
    bajada:
      'Three steps from your inquiry to the product working in your plant.',
    pasos: [
      {
        titulo: 'Tell us what you treat',
        texto:
          'Message us on WhatsApp or leave your details in the form. Your industry and the problem you need to solve are enough to start.',
      },
      {
        titulo: 'We recommend and quote',
        texto:
          'We tell you which product and container size fit your process, and send the quote with freight included.',
      },
      {
        titulo: 'We deliver to your plant',
        texto:
          'We ship anywhere in Paraguay, in the size you choose, from the 5-liter jug to the 1,000-liter IBC tote.',
      },
    ],
  },

  especificaciones: {
    volanta: 'Catalog',
    titulo: 'The complete line',
    bajada:
      'All nineteen catalog products with their type, container sizes and registration. The data your quality department needs before approving a supplier.',
    columnas: {
      producto: 'Product',
      tipo: 'What it is',
      presentaciones: 'Container sizes',
      registro: 'Registration',
    },
    sinRegistro: 'Not applicable',
    verFicha: 'View spec sheet',
  },

  precio: {
    volanta: 'Pricing and sizes',
    titulo: 'Quote by container size',
    bajada:
      'We do not publish list prices because cost per liter changes with volume and freight destination. Pick the size you need and we will send the number over WhatsApp the same day.',
    etiquetaPresentaciones: 'Available sizes',
    ctaVariante: 'Quote this size',
    nota:
      'The quote includes freight to your plant, calculated by volume and destination.',
  },

  presupuesto: {
    titulo: 'Request your quote',
    bajada:
      'Tell us what you need to treat and we will reply with the formulation, the dosing and the price within 24 business hours.',
    campos: {
      nombre: 'Full name',
      email: 'Email',
      telefono: 'Phone',
      telefonoOpcional: 'optional',
      producto: 'Product of interest',
      productoPlaceholder: 'Choose a product or family',
      mensaje: 'Tell us what you need',
    },
    enviar: 'Send request',
    enviando: 'Sending…',
    reintentar: 'Try sending again',
    opcionGeneral: 'Not sure which one I need yet',
    privacidad:
      'We use your details only to answer this quote request. You can read how we handle them in our {enlace}.',
    privacidadEnlace: 'privacy policy',
    obligatorio: 'required',
    errores: {
      nombre: 'Enter your name so we know who we are talking to.',
      email: 'We need an email address to send you the quote.',
      emailFormato: 'Check the email address: something looks missing.',
      producto: 'Choose the product or family you are interested in.',
      mensaje: 'Briefly tell us what you need to solve.',
      envio:
        'We could not send your request. What you wrote is still here: check your connection and try again, or message us on WhatsApp.',
      sinConfigurar:
        'The form is not configured yet. Please message us on WhatsApp in the meantime.',
    },
  },

  testimonios: {
    volanta: 'Social proof',
    titulo: 'What our customers say',
    avisoPlaceholder:
      'Example content. This section will be filled with real, authorized reviews before the site goes live.',
    items: [
      {
        esPlaceholder: true,
        texto:
          'Example review. The verbatim testimonial from a real customer goes here, with written authorization.',
        autor: 'Contact name',
        cargo: 'Plant manager',
        empresa: 'Customer company',
      },
      {
        esPlaceholder: true,
        texto:
          'Example review. The verbatim testimonial from a real customer goes here, with written authorization.',
        autor: 'Contact name',
        cargo: 'Environmental manager',
        empresa: 'Customer company',
      },
      {
        esPlaceholder: true,
        texto:
          'Example review. The verbatim testimonial from a real customer goes here, with written authorization.',
        autor: 'Contact name',
        cargo: 'Quality manager',
        empresa: 'Customer company',
      },
    ],
  },

  faq: {
    titulo: 'Frequently asked questions',
    bajada: 'What we get asked most before a first order.',
    items: [
      {
        pregunta: 'Do you deliver throughout Paraguay?',
        respuesta:
          'Yes, we ship to all seventeen departments of Paraguay. Freight is agreed based on volume and destination, and it is included in the quote before you confirm.',
      },
      {
        pregunta: 'How long does delivery take?',
        respuesta:
          'Stocked products ship within 24 to 48 business hours of confirmation. Custom formulations take 5 to 10 business days depending on volume. The committed date always appears on the quote.',
      },
      {
        pregunta: 'What if the product does not give the expected result?',
        respuesta:
          'First we review the application with you: in most cases the fix is the dilution or the application point, and we correct that at no charge. If testing confirms the batch was out of specification, we replace it in full. We do not do retail-style refunds: we do replacement and technical adjustment.',
      },
      {
        pregunta: 'What warranty do the products carry?',
        respuesta:
          'Nearly the whole line holds sanitary registration, and White Clean also carries registration with DINAVISA (the health authority of Paraguay) and approval from INTN (its national standards institute). The warranty covers that the product meets the specification stated on its data sheet, within the stated shelf life and stored under the conditions listed there.',
      },
      {
        pregunta: 'What payment methods do you accept?',
        respuesta:
          'Bank transfer and check. For customers with an open account we work with terms based on payment history. Conditions are agreed at the quoting stage: we issue a legal invoice in every case.',
      },
      {
        pregunta: 'Can I request a sample before buying?',
        respuesta:
          'Get in touch and we will look at it based on the product and the volume you need. For effluent treatment it also helps to tell us what you are treating and with what equipment, so we can recommend the right coagulant and flocculant.',
      },
      {
        pregunta: 'Do you provide technical data sheets and SDS?',
        respuesta:
          'Yes. Ask us for the technical data sheet and the safety data sheet for the product you are interested in and we will send them: that is what your health and safety department needs for the file and for training whoever handles the product.',
      },
      {
        pregunta: 'Is there a minimum order?',
        respuesta:
          'Not for catalog sizes: you can start with a single jerrican. Sizes run from 5 liters to 1,000 liters depending on the product, and powders come in 25-kilo bags.',
      },
    ],
  },

  ctaFinal: {
    titulo: 'Tell us what you need to solve and we will tell you with what',
    texto:
      'No commitment. Your industry and the problem are enough for us to tell you which product fits, in what size and what it costs.',
    ctaPrimario: 'Message us on WhatsApp',
    ctaSecundario: 'Request a quote by form',
  },

  footer: {
    horario: 'Monday to Friday, 7:30 a.m. to 5:00 p.m.',
    cobertura: 'Delivery across Paraguay',
    tituloFamilias: 'Product families',
    tituloEtapas: 'Process stages',
    descripcion:
      'Paraguayan chemical laboratory for industrial wastewater treatment, sanitary hygiene and professional cleaning.',
    tituloContacto: 'Contact',
    tituloEnlaces: 'This site',
    privacidad: 'Privacy policy',
    derechos: 'All rights reserved.',
    enlaces: [
      { texto: 'Why 3S', href: '/#beneficios' },
      { texto: 'On site', href: '/#galeria' },
      { texto: 'How we work', href: '/#como-comprar' },
      { texto: 'Products', href: '/productos' },
      { texto: 'Get a quote', href: '/#presupuesto' },
      { texto: 'Frequently asked questions', href: '/#faq' },
    ],
  },

  gracias: {
    titulo: 'We received your request',
    texto:
      'Your inquiry is already in our inbox. A technician will review it and reply with the formulation, the container size that suits you and the price with freight included.',
    mientrasTanto: 'In the meantime',
    ctaWhatsApp: 'Message us on WhatsApp',
    ctaCatalogo: 'See the full catalog',
    ctaInicio: 'Back to home',
  },

  privacidad: {
    titulo: 'Privacy policy',
    actualizado: 'Last updated: September 4, 2026',
    bloques: [
      {
        titulo: 'Who handles your data',
        parrafos: [
          '3S Grupo Industrial S.R.L., located at Pilar No. 1717 and Nazareth, Asunción, Paraguay, is responsible for the personal data you submit through this site.',
          'For any question about this policy, write to 3sgrupoindustrial@gmail.com or call (0972) 572 007.',
        ],
      },
      {
        titulo: 'What we collect and why',
        parrafos: [
          'Only what you type into the quote request form: name, email address, phone number if you choose to leave one, the product you are interested in and your message.',
          'We use it for one purpose: answering your inquiry and preparing your quote. We do not use it to send unsolicited advertising and we do not cross-reference it with any other database.',
        ],
      },
      {
        titulo: 'How it is transmitted',
        parrafos: [
          'This site has no server of its own and no database. The form is submitted to Web3Forms, an external service that forwards the contents to our email inbox and does not retain it permanently.',
          'Transmission is encrypted over HTTPS. Once the message reaches our inbox it stays there for as long as the business relationship lasts, or until you ask us to delete it.',
        ],
      },
      {
        titulo: 'Cookies and analytics',
        parrafos: [
          'This site sets no tracking or advertising cookies, and loads no third-party resources on open: fonts and images are served from our own domain.',
          'If we ever add an analytics tool, it will be one that uses no cookies and identifies no individuals, and we will announce it on this same page.',
        ],
      },
      {
        titulo: 'Who we share it with',
        parrafos: [
          'No one, other than the form provider mentioned above and strictly to the extent needed for the message to reach us. We do not sell or transfer personal data.',
          'We would hand it over only if a competent authority required it through a legal channel.',
        ],
      },
      {
        titulo: 'Your rights',
        parrafos: [
          'You can ask us at any time what data of yours we hold, to correct it if it is wrong, or to delete it.',
          'Write to 3sgrupoindustrial@gmail.com and we will respond. You do not need to justify the request.',
        ],
      },
      {
        titulo: 'Links to other sites',
        parrafos: [
          'When you click a WhatsApp button you leave this site and enter a third-party platform governed by its own policies. The same applies to our social media profiles.',
        ],
      },
      {
        titulo: 'Changes to this policy',
        parrafos: [
          'If we change anything, we update the date in the header. We recommend reviewing it if you are submitting your data after some time has passed.',
        ],
      },
    ],
  },

  noEncontrado: {
    titulo: 'This page does not exist',
    texto:
      'The link may have changed, or the address may have a typo. Go back to the home page and search from there, or message us and we will tell you where what you were looking for lives.',
    cta: 'Back to home',
  },

  catalogo: {
    titulo: 'Product catalog',
    bajada:
      'Nineteen products from the range we formulate in our Asunción laboratory, from effluent treatment to hand hygiene for your crew. Filter by family or browse the whole line.',
    filtrarPor: 'Filter by family',
    filtrarPorEtapa: 'Filter by process stage',
    todos: 'All',
    limpiarFiltros: 'Clear filters',
    conteo: '{n} products',
    conteoSingular: '1 product',
    verFicha: 'View spec sheet',
    sinResultados: 'No products match both filters.',
  },

  familias: [
    { id: 'limpieza-industrial', nombre: 'Industrial cleaning' },
    { id: 'desinfeccion-industrial', nombre: 'Industrial disinfection' },
    {
      id: 'efluentes-aguas-residuales',
      nombre: 'Effluent and wastewater treatment',
    },
  ],

  ficha: {
    migaInicio: 'Home',
    migaCatalogo: 'Products',
    accion: 'What it does',
    aplicacion: 'How it is applied',
    sectores: 'Where it is used',
    especificaciones: 'Technical data',
    presentaciones: 'Container sizes',
    enUso: 'On site',
    descargarFicha: 'Download technical data sheet (PDF)',
    relacionados: 'From the same family',
    ctaTitulo: 'Is this the product you need?',
    ctaTexto:
      'Message us and we will send the price for the size you need, with freight to your plant already calculated.',
    ctaBoton: 'Ask about this product',
    volver: 'Back to the catalog',
    usoProfesional: 'Professional use',
    conRegistro: 'Sanitary registration',
    fuente: 'Data taken from page {n} of the 3S product catalog.',
    rutaNavegacion: 'Breadcrumb',
  },

  categorias: [
    {
      id: 'tratamiento-efluentes',
      nombre: 'Effluent treatment',
      descripcion:
        'Coagulants, flocculants and odor control for industrial treatment plants.',
      icono: 'droplets',
    },
    {
      id: 'desinfectantes',
      nombre: 'Disinfectants',
      descripcion:
        'Quaternary ammonium, peracetic acid and peroxide for the food and healthcare industries.',
      icono: 'shield-check',
    },
    {
      id: 'desengrasantes',
      nombre: 'Degreasers',
      descripcion:
        'Alkaline, chlorinated and enzymatic, for animal, vegetable and mineral grease.',
      icono: 'flask-conical',
    },
    {
      id: 'detergentes',
      nombre: 'Detergents',
      descripcion:
        'Neutral and foaming, for equipment, utensils and process surfaces.',
      icono: 'gauge',
    },
    {
      id: 'lavanderia',
      nombre: 'Laundry',
      descripcion:
        'Bleaches and powder detergents for industrial and hospital laundries.',
      icono: 'sparkles',
    },
    {
      id: 'higiene-manos',
      nombre: 'Hand hygiene',
      descripcion:
        'Antibacterial soap for plant crews and process areas.',
      icono: 'leaf',
    },
  ],

  productos: {
    'policloruro-de-aluminio-3s': {
      resumen: 'Clarifies effluent and strips color at the coagulation stage.',
      accion:
        'Polyaluminum chloride is used mainly to remove color and colloidal matter from aqueous systems, drinking water plants and industrial effluent clarification. It replaces aluminum sulfate, aluminum chloride, ferric chloride, ferric sulfate and other conventional non-polymerized inorganic salts.',
      sectores: [
        'Industrial wastewater treatment plants',
        'Drinking water treatment plants',
        'Meat plants and slaughterhouses',
        'Tanneries',
      ],
    },
    'sulfato-de-aluminio-3s': {
      resumen: 'The classic coagulant, made from iron-free raw material.',
      accion:
        'Aluminum sulfate is an excellent-quality solution formulated from aluminum-rich, iron-free raw material and sulfuric acid, through a controlled process that guarantees its quality. It delivers excellent results in the clarification of drinking water and in the treatment of industrial effluent in general.',
      sectores: [
        'Drinking water clarification',
        'Industrial effluent in general',
        'Food and beverage plants',
      ],
    },
    'polimero-3s-anionico': {
      resumen: 'Binds the floc so it settles fast and the cake comes out drier.',
      accion:
        'High molecular weight, high anionic charge flocculant based on polyacrylamide. It can be used in the extraction industry, in industrial effluent, in effluent treatment and in drinking water treatment. It benefits any liquid-solid separation process and is especially recommended for filtration, mechanical dewatering and gravity settling, among other applications.',
      sectores: [
        'Settlers and clarifiers',
        'Mechanical sludge dewatering',
        'Drinking water treatment',
        'Extraction industry',
      ],
    },
    'polimero-3s-cationico': {
      resumen: 'Raises plant throughput and pulls water out of the sludge.',
      accion:
        'Flocculant based on solid cationic polymers of high molecular weight, with a polyacrylamide base and varying charge densities. It was developed to increase the throughput of water treatment stations, water removal from sludge and solids flocculation.',
      sectores: [
        'Water treatment stations',
        'Sludge dewatering',
        'Solids flocculation in effluent',
      ],
    },
    'odor-free': {
      resumen: 'Neutralizes odor at the source instead of masking it.',
      accion:
        'Formulated to prevent, eliminate and neutralize foul odor emissions in all types of facilities, leaving the environment clean and deodorized. Suitable for waste collection areas, restrooms, swine and poultry areas, and industrial facilities.',
      aplicacion:
        'Can be used on all types of surfaces, manually or by spraying.',
      sectores: [
        'Waste collection areas',
        'Swine and poultry facilities',
        'Wastewater treatment plants',
        'Industrial restrooms and locker rooms',
      ],
    },
    decuat: {
      resumen: 'Broad-spectrum disinfection for the entire process area.',
      accion:
        'A concentrated disinfectant and sanitizer based on the most modern and active combination of fifth-generation quaternary ammonium salts, formulated for use in all types of areas. It has a broad spectrum of disinfectant action against bacteria, fungi and Gram-positive and Gram-negative microorganisms. Ideal for food processing areas.',
      aplicacion:
        'Can be used across a wide range of applications and all types of surfaces, manually, by immersion or by spraying.',
      sectores: [
        'Food processing areas',
        'Meat plants and slaughterhouses',
        'Cold rooms and anterooms',
        'Locker rooms, restrooms and canteens',
      ],
    },
    bioperacid: {
      resumen: 'Peracetic acid at 15 %: disinfects without altering food taste.',
      accion:
        'A powerful, fast-acting disinfectant with bactericidal, fungicidal and virucidal properties, ideal for the food, pulp and paper, textile, tannery, slaughterhouse, sugar and alcohol industries. In its disinfectant action peracetic acid becomes an environmentally friendly product. It is unaffected by water hardness and only slightly reduced by the organic soil load. Its acidic character also makes it useful as a secondary descaler and deoxidizer. Hydrogen peroxide and acetic acid in the formulation contribute to its disinfectant action. It is biodegradable, phosphate free, and safely reduces the microbial load that contaminates meat during handling. Its action does not alter the taste chemistry of food.',
      aplicacion:
        'Disinfection of all types of surfaces, in industrial and hospital settings, hotels, restaurants, poultry, swine and cattle operations, and others.',
      sectores: [
        'Meat plants and slaughterhouses',
        'Tanneries',
        'Pulp, paper and textile',
        'Sugar and alcohol',
      ],
    },
    ardiox: {
      resumen: 'More germicidal power than chlorine, with no residue or taste.',
      accion:
        'A powerful, fast-acting disinfectant with broad-spectrum sanitizing qualities against germs, spores, viruses, bacteria and fungi. It leaves no residue, is effective in water purification, is non-toxic and imparts no unpleasant taste or odor at the recommended dosages. It has greater germicidal power than chlorine and hypochlorite, with strong action in the presence of organic matter and hard water, thanks to its selective penetration into the microorganism. It is widely used in hygiene and disinfection processes, especially at food processing plants.',
      aplicacion:
        'Disinfection of all types of surfaces, in industrial and hospital settings, hotels, restaurants, poultry, swine and cattle operations, and others.',
      sectores: [
        'Food processing plants',
        'Water purification',
        'Hospital and hospitality sector',
        'Poultry, swine and cattle production',
      ],
    },
    desinper: {
      resumen: 'Cleans and disinfects in one step, on a hydrogen peroxide base.',
      accion:
        'A latest-generation concentrated disinfectant designed specifically to meet professional hygiene requirements in industrial settings, particularly in the food industry. Thanks to its hydrogen peroxide base it combines high cleaning power with fast-acting disinfection. It is effective against viruses, bacteria, fungi and yeasts, and is recommended for application on all types of surfaces and equipment.',
      aplicacion:
        'Disinfection of all types of surfaces, in industrial and hospital settings, hotels, restaurants, poultry, swine and cattle operations, and others.',
      sectores: [
        'Food industry',
        'Hospital sector',
        'Hospitality and food service',
        'Poultry, swine and cattle production',
      ],
    },
    'king-klor': {
      resumen:
        'Cuts heavy grease and disinfects in the same pass, with clinging foam.',
      accion:
        'A high-concentration chlorinated alkaline degreaser used for heavy degreasing work and suited to cleaning food process surfaces and equipment. It is used in dairy, meat and food plants where grease levels run high; its chlorine content also disinfects the surfaces. It can also be applied with foaming equipment, generating a dense foam that clings in place, increasing contact surface and improving the product degreasing action.',
      sectores: [
        'Dairy plants',
        'Meat plants and slaughterhouses',
        'Food process equipment',
        'High-grease surfaces',
      ],
    },
    stronger: {
      resumen:
        'Enzymatic degreaser, 100 % biodegradable, free of chlorine and phosphates.',
      accion:
        'A concentrated enzymatic degreaser based on powerful surfactants and water-soluble solvents. It has excellent cleaning action and delivers rapid removal of proteins and animal and vegetable fats, eliminating them quickly and easily. It is stable in hard water and in large, hard-to-clean systems. Ideal for the food industry. Being free of corrosive substances — chlorine and phosphate — it is highly environmentally friendly and 100 % biodegradable.',
      aplicacion:
        'Can be used across a wide range of applications and all types of surfaces, manually, by immersion or by spraying.',
      sectores: [
        'Food industry',
        'Meat plants and slaughter rooms',
        'Large, hard-to-clean systems',
        'Plants with hard water',
      ],
    },
    desinal: {
      resumen:
        'Bactericidal degreaser for high grease loads and protein residue.',
      accion:
        'A powerful degreasing detergent with high dispersing power that is also a disinfectant, bactericide and fungicide. It removes soil quickly in areas with low and high grease loads, built-up soil and protein residue. Suitable for the food industry.',
      aplicacion:
        'Can be used across a wide range of applications and all types of surfaces, manually, by immersion or by spraying.',
      sectores: [
        'Food industry',
        'High grease load areas',
        'Areas with built-up protein residue',
      ],
    },
    enzurpon: {
      resumen:
        'Concentrated alkaline for oil and grease, usable with foaming equipment.',
      accion:
        'An alkaline degreasing detergent formulated with powerful surfactants and water-soluble solvents, supplied in concentrated form and developed specifically for cleaning processes and the removal of oil, grease residue and all types of soil.',
      aplicacion:
        'Can be used on all types of surfaces, manually or with foaming equipment.',
      sectores: [
        'Industrial machinery and equipment',
        'Plant floors and surfaces',
        'Areas with built-up oil and grease',
      ],
    },
    'purson-plus': {
      resumen:
        'Non-foaming and effective against all three grease types: mineral, animal and industrial.',
      accion:
        'A non-foaming alkaline degreaser formulated with powerful surfactants and water-soluble solvents, highly effective against all three grease types: mineral, animal and industrial. Suited to cleaning utensils in contact with hard-to-remove grease, ovens, griddles, fryers and similar equipment.',
      aplicacion: 'Can be used on all types of surfaces, manually.',
      sectores: [
        'Industrial kitchens',
        'Ovens, griddles and fryers',
        'Utensils with hard-to-remove grease',
        'Crate and tray washing',
      ],
    },
    desinox: {
      resumen:
        'Removes rust and scale while conditioning metal before painting.',
      accion:
        'A concentrated acidic liquid enhanced with surfactants, corrosion inhibitors, organic solvents and conditioners for all types of metal. It removes rust, provides light phosphating that improves paint adhesion and durability, increases corrosion resistance, removes scale from boilers, pipes, condensers and other installations, and cleans stainless steel surfaces.',
      aplicacion:
        'As a general rule, dilute 1 liter of Desinox in 10 liters of water. Apply to the surface, leave it to act for 10 minutes and then rinse with water.',
      sectores: [
        'Boilers, pipes and condensers',
        'Stainless steel equipment and surfaces',
        'Metal before painting',
        'Industrial installations with mineral scale',
      ],
    },
    madox: {
      resumen:
        'Concentrated neutral detergent that rinses fast and leaves no residue.',
      accion:
        'A neutral, concentrated, foaming liquid detergent designed for general use in the food industry. It is based on a balanced blend of foaming surfactants, sequestering agents and emulsifiers. It is phosphate free, which makes it highly soluble and allows a fast, efficient rinse without leaving residue. It delivers efficient, economical and safe cleaning. It can be used in industrial and domestic kitchens to clean dishes, cutlery, glasses, pots, pans, stoves and equipment, among others. It removes grease, oils, proteins and assorted soil. Given its effectiveness it can also be applied to general surface cleaning, such as walls, floors, counters, desks and work tables.',
      sectores: [
        'Industrial kitchens',
        'Dishware, utensils and equipment',
        'General surface cleaning',
        'Food service and hospitality',
      ],
    },
    'fine-white': {
      resumen:
        'Whitens and disinfects without stripping color from garments, unlike chlorine.',
      accion:
        'An oxygenated disinfectant bleach for laundries, institutions and industry. It is a high-concentration bleach with strong disinfecting power. It removes all types of protein-based stains: blood, vomit, feces, vegetable dyes, sauces, wine, cosmetics, medicines, coffee and others. Ideal for washing all types of textile fiber, with excellent results. Suitable for white and colored garments: it does not strip color or damage fabric the way chlorinated bleaches do.',
      sectores: [
        'Industrial laundries',
        'Hospital laundries',
        'Hospitality',
        'Institutions',
      ],
    },
    'white-clean': {
      resumen:
        'Controlled-foam powder detergent, free of chlorine and phosphates.',
      accion:
        'A controlled-foam cleaning powder formulated for manual and industrial use in washing all types of clothing. A high-yield antiseptic, ideal for improving the whiteness of garments without degrading colored fabric. It contains no chlorine bleach, which fades garments, and it is phosphate free and 100 % biodegradable. It removes grease and soil quickly and effectively, eliminating all types of protein-based stains: blood, vomit, dyes, sauces, wine and others. Ideal for professional washing machines, and also recommended for hospitals, restaurants, hotels and industry.',
      sectores: [
        'Professional washing machines',
        'Hospitals',
        'Restaurants and hotels',
        'Industries with workwear',
      ],
    },
    sanitol: {
      resumen:
        'pH-neutral antibacterial soap built for repeated use across a full shift.',
      accion:
        'An antibacterial liquid soap formulated specifically for hand cleaning, killing germs and bacteria. It delivers fast, effective germicidal action at neutral pH. Its mild surfactants and emollients preserve skin moisture and softness under frequent use, which makes it well suited to the food industry, food service and hospitality.',
      sectores: [
        'Entrance to production areas',
        'Food industry',
        'Food service and hospitality',
        'Locker rooms and restrooms',
      ],
    },
  },

  whatsapp: {
    hero: 'Hello, I would like information about 3S products for effluent treatment.',
    general: 'Hello, I would like information about 3S Grupo Industrial products.',
    flotante: 'Hello, I have a question about 3S Grupo Industrial products.',
    producto: 'Hello, I would like information about {producto}.',
    presupuesto: 'Hello, I would like a quote for {producto} in {presentacion}.',
    presupuestoSinPresentacion: 'Hello, I would like a quote for {producto}.',
    etiquetaFlotante: 'Message 3S Grupo Industrial on WhatsApp',
  },
};
