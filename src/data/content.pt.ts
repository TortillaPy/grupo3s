import type { Contenido } from './types';

/**
 * ════════════════════════════════════════════════════════════════════════
 *  CONTEÚDO EM PORTUGUÊS DO BRASIL
 * ════════════════════════════════════════════════════════════════════════
 *
 *  Traduzido de content.es.ts. A forma é a mesma — o tipo `Contenido`
 *  obriga: se faltar uma chave, o build falha.
 *
 *  Os nomes dos produtos NÃO se traduzem: são marca registrada.
 *  Os caminhos das imagens (`src`) também são iguais em todos os idiomas;
 *  o que muda é o `alt` e a legenda.
 */
export const contenidoPt: Contenido = {
  locale: 'pt',
  htmlLang: 'pt-BR',

  meta: {
    inicio: {
      titulo:
        'Tratamento de efluentes industriais no Paraguai | 3S Grupo Industrial',
      descripcion:
        'Produtos para desengraxe, desinfecção, coagulação e floculação, e controle de odor, elaborados em Assunção para frigoríficos, curtumes e plantas de alimentos.',
    },
    productos: {
      titulo: 'Catálogo de produtos químicos industriais | 3S Grupo Industrial',
      descripcion:
        'Os 18 produtos da 3S Grupo Industrial: coagulantes e floculantes para efluentes, desinfetantes, desengraxantes, detergentes, lavanderia e higiene das mãos. Com a ficha de cada um.',
    },
    gracias: {
      titulo: 'Recebemos a sua solicitação | 3S Grupo Industrial',
      descripcion:
        'A sua solicitação de orçamento chegou. Um técnico da 3S Grupo Industrial entra em contato dentro das próximas 24 horas úteis.',
    },
    privacidad: {
      titulo: 'Política de privacidade | 3S Grupo Industrial',
      descripcion:
        'Como a 3S Grupo Industrial S.R.L. trata os dados que você deixa no formulário de solicitação de orçamento.',
    },
    noEncontrado: {
      titulo: 'Página não encontrada | 3S Grupo Industrial',
      descripcion: 'A página que você procurava não existe ou mudou de endereço.',
    },
    ficha: {
      tituloPlantilla: '{producto} | 3S Grupo Industrial',
      descripcionPlantilla:
        '{resumen} Embalagens de {presentaciones}. Fabricado em Assunção pela 3S Grupo Industrial, com entrega em todo o Paraguai.',
    },
  },

  nav: {
    enlaces: [
      { texto: 'Por que a 3S', href: '/#beneficios' },
      { texto: 'Na planta', href: '/#galeria' },
      { texto: 'Produtos', href: '/productos' },
      { texto: 'Orçamento', href: '/#presupuesto' },
      { texto: 'Perguntas', href: '/#faq' },
    ],
    cta: 'Pedir orçamento',
    abrirMenu: 'Abrir o menu de navegação',
    cerrarMenu: 'Fechar o menu de navegação',
    saltarAlContenido: 'Ir para o conteúdo principal',
    activarModoOscuro: 'Ativar modo escuro',
    activarModoClaro: 'Ativar modo claro',
  },

  hero: {
    titular: 'Seu processo limpo. Seu efluente dentro da norma. Sua planta em operação.',
    subtitulo:
      'Elaboramos uma gama de produtos em Assunção para cada etapa: desengraxe, desinfecção, coagulação e floculação, e controle de odor. Para frigoríficos, curtumes e plantas de alimentos, em embalagens de 5 a 1000 litros e com produtos que contam com registro sanitário.',
    ctaPrimario: 'Solicitar orçamento',
    ctaSecundario: 'Ver os produtos',
    imagen: {
      src: '/src/assets/images/aplicaciones/policloruro-de-aluminio-3s.png',
      alt: 'Tanques de uma estação de tratamento de efluentes industriais em operação, com produtos 3S sendo dosados.',
      epigrafe: 'Tratamento de efluentes em planta — dosagem de Policloruro de Aluminio 3S.',
    },
    senales: [
      {
        icono: 'truck',
        titulo: 'Entrega em todo o Paraguai',
        detalle: 'Frete a combinar conforme o volume e o destino.',
      },
      {
        icono: 'flask-conical',
        titulo: 'Laboratório próprio',
        detalle: 'Fabricação nacional: não somos revendedores de marca importada.',
      },
      {
        icono: 'file-text',
        titulo: 'Com registro sanitário',
        detalle: 'A documentação que a sua auditoria precisa ter no dossiê.',
      },
    ],
  },

  problemaSolucion: {
    titulo: 'Da multa ambiental ao processo sob controle',
    problema: {
      titulo: 'O que acontece hoje',
      texto:
        'O efluente sai fora do parâmetro e a licença fica dependendo da próxima fiscalização. Você usa o que encontra no mercado, a dosagem quem ajusta é o operador no olho, e quando o lodo não decanta ou o odor aparece, não há a quem recorrer. Cada correção improvisada custa produto a mais, horas de planta e risco de parada.',
    },
    solucion: {
      titulo: 'Como muda com a 3S',
      texto:
        'Elaboramos uma gama de produtos em Assunção que acompanha as principais etapas da sua planta: desengraxe, desinfecção, coagulação e floculação do efluente, e controle de odor. Um único fornecedor, com embalagens de 5 a 1000 litros, produtos que contam com registro sanitário e reposição local sem depender de importação.',
    },
  },

  recorrido: {
    volanta: 'O circuito 3S',
    titulo: 'Quatro etapas que trabalham em sequência',
    bajada:
      'A linha acompanha o percurso desde a limpeza da área de processo até o tratamento do efluente e o controle de odores.',
    aviso:
      'A ordem representa o ciclo geral de trabalho. A seleção e a aplicação exatas são definidas conforme o processo de cada planta.',
    verProductos: 'Ver produtos desta etapa',
    items: [
      {
        id: 'desengrasa',
        titulo: 'Desengraxa',
        texto:
          'Remove gordura e resíduos aderidos de equipamentos, pisos e superfícies antes da sanitização.',
      },
      {
        id: 'desinfecta',
        titulo: 'Desinfeta',
        texto:
          'Reduz a carga microbiológica nas áreas e superfícies do processo depois da limpeza.',
      },
      {
        id: 'coagulacion-floculacion',
        titulo: 'Coagulação e Floculação',
        texto:
          'Favorece a separação de sólidos e a clarificação durante o tratamento do efluente.',
      },
      {
        id: 'control-olor',
        titulo: 'Controle de odor',
        texto:
          'Completa o percurso com soluções para prevenir, neutralizar e reduzir odores indesejados.',
      },
    ],
  },

  beneficios: {
    titulo: 'Por que as plantas nos escolhem',
    bajada:
      'Dezoito produtos que cobrem o circuito inteiro: do desengraxe da linha até a descarga do efluente.',
    items: [
      {
        icono: 'droplets',
        titulo: 'Parâmetros sob controle',
        texto:
          'Coagulantes e floculantes para baixar sólidos, cor e carga orgânica antes da descarga.',
      },
      {
        icono: 'flask-conical',
        titulo: 'A linha completa',
        texto:
          'Desengraxe, desinfecção, coagulação e floculação, e controle de odor. Um fornecedor em vez de cinco.',
      },
      {
        icono: 'gauge',
        titulo: 'Produto concentrado',
        texto:
          'Usa-se diluído e rende por metro cúbico tratado. O custo real por aplicação cai.',
      },
      {
        icono: 'headset',
        titulo: 'Assessoria técnica',
        texto:
          'Dizemos qual produto vai em cada ponto do seu processo e em que diluição aplicá-lo.',
      },
      {
        icono: 'shield-check',
        titulo: 'Com registro sanitário',
        texto:
          'Quase toda a linha tem, e o White Clean soma registro DINAVISA e aprovação do INTN, os órgãos sanitário e de normas técnicas do Paraguai.',
      },
      {
        icono: 'leaf',
        titulo: 'Biodegradáveis e sem fosfatos',
        texto:
          'Stronger, Bioperacid e White Clean são 100 % biodegradáveis e livres de fosfatos.',
      },
    ],
  },

  galeria: {
    titulo: 'Os produtos, trabalhando',
    bajada:
      'Nossos produtos aplicados em planta, em frigoríficos, plantas de alimentos e estações de tratamento. Toque em uma imagem para vê-la ampliada.',
    cerrar: 'Fechar a galeria',
    anterior: 'Imagem anterior',
    siguiente: 'Próxima imagem',
    de: 'de',
    items: [
      {
        src: '/src/assets/images/aplicaciones/stronger.png',
        alt: 'Operador lavando com espuma desengraxante uma sala de abate.',
        epigrafe:
          'Stronger em uma sala de abate: espuma desengraxante enzimática sobre equipamentos e pisos.',
      },
      {
        src: '/src/assets/images/aplicaciones/desinal.png',
        alt: 'Aplicação de espuma sobre uma linha de produção de carnes.',
        epigrafe:
          'Desinal sobre linha de carnes: desengraxe e ação bactericida na mesma aplicação.',
      },
      {
        src: '/src/assets/images/aplicaciones/decuat.png',
        alt: 'Desinfecção de uma esteira transportadora em uma planta de alimentos.',
        epigrafe:
          'Decuat em uma esteira transportadora: desinfecção com amônio quaternário de quinta geração.',
      },
      {
        src: '/src/assets/images/aplicaciones/purson-plus.png',
        alt: 'Túnel de lavagem de caixas plásticas em uma planta de alimentos.',
        epigrafe:
          'Purson Plus no túnel de lavagem de caixas: desengraxante alcalino sem espuma.',
      },
      {
        src: '/src/assets/images/aplicaciones/sulfato-de-aluminio-3s.png',
        alt: 'Tanques de clarificação de água em uma estação de tratamento.',
        epigrafe:
          'Sulfato de Alumínio 3S na clarificação: coagulação em tanques de tratamento.',
      },
      {
        src: '/src/assets/images/aplicaciones/sanitol.png',
        alt: 'Operador lavando as mãos na entrada de um setor produtivo.',
        epigrafe:
          'Sanitol na entrada da planta: sabonete antibacteriano de pH neutro para uso frequente.',
      },
    ],
  },

  comoComprar: {
    titulo: 'Como trabalhamos',
    bajada:
      'Três passos do diagnóstico da sua necessidade até a aplicação na planta.',
    pasos: [
      {
        titulo: 'Avaliamos a sua necessidade',
        texto:
          'Conte o seu setor, o que precisa resolver e em que ponto do processo isso ocorre. Com esses dados iniciamos o diagnóstico.',
      },
      {
        titulo: 'Definimos e orçamos a solução',
        texto:
          'Indicamos o produto, a dosagem e a embalagem adequados, e preparamos o orçamento com o frete calculado conforme o destino.',
      },
      {
        titulo: 'Entregamos e acompanhamos',
        texto:
          'Despachamos para qualquer ponto do Paraguai e orientamos a aplicação e os ajustes necessários para a solução funcionar corretamente.',
      },
    ],
  },

  especificaciones: {
    titulo: 'A linha completa',
    bajada:
      'Os dezoito produtos do catálogo com o seu tipo, as suas embalagens e o seu registro. Os dados que a sua área de qualidade precisa antes de aprovar um fornecedor.',
    columnas: {
      producto: 'Produto',
      tipo: 'O que é',
      presentaciones: 'Embalagens',
      registro: 'Registro',
    },
    sinRegistro: 'Não se aplica',
    verFicha: 'Ver ficha',
  },

  precio: {
    titulo: 'Orçamento por embalagem',
    bajada:
      'Não publicamos tabela de preços porque o custo por litro muda conforme o volume e o destino do frete. Escolha a embalagem que serve e enviamos o número pelo WhatsApp no mesmo dia.',
    etiquetaPresentaciones: 'Embalagens disponíveis',
    ctaVariante: 'Orçar esta embalagem',
    nota:
      'O orçamento inclui o frete até a sua planta, calculado conforme o volume e o destino.',
  },

  presupuesto: {
    titulo: 'Solicite o seu orçamento',
    bajada:
      'Conte o que você precisa tratar e respondemos com a formulação, a dosagem e o preço dentro de 24 horas úteis.',
    campos: {
      nombre: 'Nome e sobrenome',
      email: 'E-mail',
      telefono: 'Telefone',
      telefonoOpcional: 'opcional',
      producto: 'Produto de interesse',
      productoPlaceholder: 'Escolha um produto ou família',
      mensaje: 'Conte o que você precisa',
    },
    enviar: 'Enviar solicitação',
    enviando: 'Enviando…',
    reintentar: 'Tentar enviar de novo',
    opcionGeneral: 'Ainda não sei qual preciso',
    privacidad:
      'Usamos os seus dados apenas para responder a este orçamento. Você pode ler como os tratamos na nossa {enlace}.',
    privacidadEnlace: 'política de privacidade',
    obligatorio: 'obrigatório',
    errores: {
      nombre: 'Escreva o seu nome para sabermos com quem falamos.',
      email: 'Precisamos de um e-mail para enviar o orçamento.',
      emailFormato: 'Confira o e-mail: parece que está faltando algo.',
      producto: 'Escolha o produto ou a família que interessa.',
      mensaje: 'Conte brevemente o que você precisa resolver.',
      envio:
        'Não conseguimos enviar a solicitação. O que você escreveu continua aqui: confira a sua conexão e tente de novo, ou fale direto pelo WhatsApp.',
      sinConfigurar:
        'O formulário ainda não está configurado. Fale pelo WhatsApp enquanto isso.',
    },
  },

  testimonios: {
    titulo: 'O que dizem nossos clientes',
    avisoPlaceholder:
      'Conteúdo de exemplo. Esta seção será preenchida com avaliações reais e autorizadas antes da publicação do site.',
    items: [
      {
        esPlaceholder: true,
        texto:
          'Exemplo de avaliação. Aqui vai o depoimento textual de um cliente real, com a autorização por escrito.',
        autor: 'Nome do responsável',
        cargo: 'Gerente de planta',
        empresa: 'Empresa cliente',
      },
      {
        esPlaceholder: true,
        texto:
          'Exemplo de avaliação. Aqui vai o depoimento textual de um cliente real, com a autorização por escrito.',
        autor: 'Nome do responsável',
        cargo: 'Responsável ambiental',
        empresa: 'Empresa cliente',
      },
      {
        esPlaceholder: true,
        texto:
          'Exemplo de avaliação. Aqui vai o depoimento textual de um cliente real, com a autorização por escrito.',
        autor: 'Nome do responsável',
        cargo: 'Gerente de qualidade',
        empresa: 'Empresa cliente',
      },
    ],
  },

  faq: {
    titulo: 'Perguntas frequentes',
    bajada: 'O que mais nos perguntam antes da primeira compra.',
    items: [
      {
        pregunta: 'Vocês entregam em todo o Paraguai?',
        respuesta:
          'Sim, despachamos para os dezessete departamentos do Paraguai. O frete é combinado conforme o volume e o destino, e já vem incluído no orçamento antes de você confirmar.',
      },
      {
        pregunta: 'Quanto tempo leva a entrega?',
        respuesta:
          'Os produtos de estoque saem em 24 a 48 horas úteis a partir da confirmação. As formulações sob medida levam de 5 a 10 dias úteis conforme o volume. A data assumida sempre consta no orçamento.',
      },
      {
        pregunta: 'E se o produto não der o resultado esperado?',
        respuesta:
          'Primeiro revisamos a aplicação com você: na maioria dos casos o ajuste está na diluição ou no ponto de aplicação, e isso corrigimos sem custo. Se for confirmado que o lote saiu fora de especificação, repomos o produto inteiro. Não trabalhamos com devolução de dinheiro tipo varejo: trabalhamos com reposição e ajuste técnico.',
      },
      {
        pregunta: 'Que garantia têm os produtos?',
        respuesta:
          'Quase toda a linha tem registro sanitário, e o White Clean soma ainda registro DINAVISA (órgão sanitário do Paraguai) e aprovação do INTN (instituto paraguaio de normas técnicas). A garantia cobre que o produto cumpra a especificação declarada na sua ficha técnica, dentro da validade indicada e armazenado nas condições que ali constam.',
      },
      {
        pregunta: 'Quais formas de pagamento vocês aceitam?',
        respuesta:
          'Transferência bancária e cheque. Para clientes com conta aberta trabalhamos com prazos conforme o histórico. As condições são acertadas no momento do orçamento: emitimos fatura legal paraguaia em todos os casos.',
      },
      {
        pregunta: 'Posso pedir uma amostra antes de comprar?',
        respuesta:
          'Fale conosco e avaliamos conforme o produto e o volume de que você precisa. Para tratamento de efluentes, convém também nos contar o que você está tratando e com que equipamento, assim indicamos o coagulante e o floculante corretos.',
      },
      {
        pregunta: 'Vocês fornecem ficha técnica e FISPQ?',
        respuesta:
          'Sim. Peça a ficha técnica e a ficha de dados de segurança do produto que interessa e enviamos: é o que a sua área de segurança do trabalho precisa para o dossiê e para treinar quem manipula o produto.',
      },
      {
        pregunta: 'Existe um volume mínimo de compra?',
        respuesta:
          'Não para as embalagens de catálogo: você pode começar com uma bombona. As embalagens vão de 5 litros a 1000 litros conforme o produto, e em pó a embalagem é de 25 quilos.',
      },
    ],
  },

  ctaFinal: {
    titulo: 'Conte o que você precisa resolver e dizemos com o quê',
    texto:
      'Sem compromisso. Com o ramo e o problema já dá para dizermos qual produto vai, em que embalagem e quanto custa.',
    ctaPrimario: 'Escrever pelo WhatsApp',
    ctaSecundario: 'Pedir orçamento pelo formulário',
  },

  footer: {
    descripcion:
      'Laboratório paraguaio de produtos químicos para o tratamento de águas residuais industriais, a higiene sanitária e a limpeza profissional.',
    tituloContacto: 'Contato',
    tituloEnlaces: 'O site',
    privacidad: 'Política de privacidade',
    derechos: 'Todos os direitos reservados.',
    enlaces: [
      { texto: 'Por que a 3S', href: '/#beneficios' },
      { texto: 'Na planta', href: '/#galeria' },
      { texto: 'Como trabalhamos', href: '/#como-comprar' },
      { texto: 'Produtos', href: '/productos' },
      { texto: 'Orçamento', href: '/#presupuesto' },
      { texto: 'Perguntas frequentes', href: '/#faq' },
    ],
  },

  gracias: {
    titulo: 'Recebemos a sua solicitação',
    texto:
      'A sua consulta já está na nossa caixa de entrada. Um técnico vai analisá-la e responder com a formulação, a embalagem que mais convém e o preço com o frete incluído.',
    mientrasTanto: 'Enquanto isso',
    ctaWhatsApp: 'Fale pelo WhatsApp',
    ctaCatalogo: 'Ver o catálogo completo',
    ctaInicio: 'Voltar ao início',
  },

  privacidad: {
    titulo: 'Política de privacidade',
    actualizado: 'Última atualização: 4 de setembro de 2026',
    bloques: [
      {
        titulo: 'Quem trata os seus dados',
        parrafos: [
          '3S Grupo Industrial S.R.L., com endereço na Pilar N.° 1717 esquina Nazareth, Assunção, Paraguai, é responsável pelos dados pessoais que você deixa neste site.',
          'Para qualquer dúvida sobre esta política, escreva para 3sgrupoindustrial@gmail.com ou ligue para (0972) 572 007.',
        ],
      },
      {
        titulo: 'Que dados coletamos e para quê',
        parrafos: [
          'Somente os que você escreve no formulário de solicitação de orçamento: nome, e-mail, telefone se quiser deixar, o produto que interessa e a sua mensagem.',
          'Usamos esses dados com uma única finalidade: responder à sua consulta e preparar o orçamento. Não os usamos para enviar publicidade não solicitada nem os cruzamos com nenhuma outra base.',
        ],
      },
      {
        titulo: 'Como são enviados',
        parrafos: [
          'Este site não tem servidor próprio nem banco de dados. O formulário é enviado ao Web3Forms, um serviço externo que encaminha o conteúdo à nossa caixa de e-mail e não o conserva de forma permanente.',
          'A transmissão é criptografada por HTTPS. Depois que a mensagem chega ao nosso e-mail, fica guardada ali enquanto durar a relação comercial ou até que você peça a exclusão.',
        ],
      },
      {
        titulo: 'Cookies e medição',
        parrafos: [
          'Este site não instala cookies de rastreamento nem de publicidade, e não carrega recursos de terceiros ao abrir: as fontes e as imagens são servidas do nosso próprio domínio.',
          'Se no futuro incorporarmos alguma ferramenta de medição, será uma que não use cookies nem identifique pessoas, e anunciaremos nesta mesma página.',
        ],
      },
      {
        titulo: 'Com quem compartilhamos',
        parrafos: [
          'Com ninguém, exceto o provedor do formulário já mencionado e na medida estritamente necessária para que a mensagem chegue. Não vendemos nem cedemos dados pessoais.',
          'Poderíamos entregá-los somente se uma autoridade competente exigir por via legal.',
        ],
      },
      {
        titulo: 'Os seus direitos',
        parrafos: [
          'Você pode nos pedir a qualquer momento que informemos quais dados seus temos, que os corrijamos se estiverem errados, ou que os excluamos.',
          'Escreva para 3sgrupoindustrial@gmail.com e respondemos. Não precisa justificar o pedido.',
        ],
      },
      {
        titulo: 'Links para outros sites',
        parrafos: [
          'Ao clicar em um botão de WhatsApp você sai deste site e entra em uma plataforma de terceiros, regida pelas próprias políticas. O mesmo vale para os nossos perfis em redes sociais.',
        ],
      },
      {
        titulo: 'Mudanças nesta política',
        parrafos: [
          'Se mudarmos alguma coisa, atualizamos a data do cabeçalho. Recomendamos revisá-la se for nos deixar os seus dados depois de um tempo.',
        ],
      },
    ],
  },

  noEncontrado: {
    titulo: 'Esta página não existe',
    texto:
      'Pode ser que o link tenha mudado ou que o endereço tenha um erro de digitação. Volte ao início e busque a partir de lá, ou fale conosco que dizemos onde está o que você procurava.',
    cta: 'Voltar ao início',
  },

  catalogo: {
    titulo: 'Catálogo de produtos',
    bajada:
      'Dezoito produtos fabricados no nosso laboratório em Assunção, do tratamento do efluente à higiene das mãos da equipe. Filtre por família ou veja a linha completa.',
    filtrarPor: 'Filtrar por família',
    filtrarPorEtapa: 'Filtrar por etapa do processo',
    todos: 'Todos',
    limpiarFiltros: 'Limpar filtros',
    conteo: '{n} produtos',
    conteoSingular: '1 produto',
    verFicha: 'Ver ficha',
    sinResultados: 'Não há produtos que correspondam aos dois filtros.',
  },

  familias: [
    { id: 'limpieza-industrial', nombre: 'Limpeza industrial' },
    { id: 'desinfeccion-industrial', nombre: 'Desinfecção industrial' },
    {
      id: 'efluentes-aguas-residuales',
      nombre: 'Tratamento de efluentes e águas residuais',
    },
  ],

  ficha: {
    migaInicio: 'Início',
    migaCatalogo: 'Produtos',
    accion: 'O que faz',
    aplicacion: 'Como se aplica',
    sectores: 'Onde se usa',
    especificaciones: 'Ficha técnica',
    presentaciones: 'Embalagens',
    enUso: 'Na planta',
    descargarFicha: 'Baixar ficha técnica (PDF)',
    relacionados: 'Da mesma família',
    ctaTitulo: 'Este produto serve para você?',
    ctaTexto:
      'Fale conosco e enviamos o preço da embalagem de que você precisa, com o frete até a sua planta já calculado.',
    ctaBoton: 'Consultar sobre este produto',
    volver: 'Voltar ao catálogo',
    usoProfesional: 'De uso profissional',
    conRegistro: 'Com registro sanitário',
    fuente: 'Dados extraídos da página {n} do catálogo institucional da 3S.',
  },

  categorias: [
    {
      id: 'tratamiento-efluentes',
      nombre: 'Tratamento de efluentes',
      descripcion:
        'Coagulantes, floculantes e controle de odor para estações de tratamento industrial.',
      icono: 'droplets',
    },
    {
      id: 'desinfectantes',
      nombre: 'Desinfetantes',
      descripcion:
        'Amônio quaternário, ácido peracético e peróxido para a indústria alimentícia e a área da saúde.',
      icono: 'shield-check',
    },
    {
      id: 'desengrasantes',
      nombre: 'Desengraxantes',
      descripcion:
        'Alcalinos, clorados e enzimáticos para gordura animal, vegetal e mineral.',
      icono: 'flask-conical',
    },
    {
      id: 'detergentes',
      nombre: 'Detergentes',
      descripcion:
        'Neutros e espumantes para equipamentos, utensílios e superfícies de processo.',
      icono: 'gauge',
    },
    {
      id: 'lavanderia',
      nombre: 'Lavanderia',
      descripcion:
        'Alvejantes e detergentes em pó para lavanderias industriais e hospitalares.',
      icono: 'sparkles',
    },
    {
      id: 'higiene-manos',
      nombre: 'Higiene das mãos',
      descripcion:
        'Sabonete antibacteriano para a equipe de planta e setores de processo.',
      icono: 'leaf',
    },
  ],

  productos: {
    'policloruro-de-aluminio-3s': {
      resumen: 'Clarifica o efluente e retira a cor na etapa de coagulação.',
      accion:
        'O policloreto de alumínio é utilizado principalmente para remover cor e matéria coloidal em sistemas aquosos, estações de potabilização e clarificação de efluentes industriais. Substitui o sulfato de alumínio, o cloreto de alumínio, o cloreto férrico, o sulfato férrico e outros sais inorgânicos convencionais não polimerizados.',
      sectores: [
        'Estações de tratamento de efluentes industriais',
        'Estações de potabilização',
        'Frigoríficos e plantas de abate',
        'Curtumes',
      ],
    },
    'sulfato-de-aluminio-3s': {
      resumen: 'Coagulante clássico, fabricado com matéria-prima livre de ferro.',
      accion:
        'O sulfato de alumínio é uma solução de excelente qualidade, fabricada a partir de matéria-prima rica em alumínio e livre de ferro, e de ácido sulfúrico, mediante um processo controlado que garante a sua qualidade. Com o sulfato de alumínio obtêm-se excelentes resultados na clarificação de águas para consumo humano e no tratamento de efluentes da indústria em geral.',
      sectores: [
        'Clarificação de água para consumo humano',
        'Efluentes industriais em geral',
        'Plantas de alimentos e bebidas',
      ],
    },
    'polimero-3s-anionico': {
      resumen:
        'Junta o floco para que decante rápido e a torta saia mais seca.',
      accion:
        'Floculante aniônico de alto peso molecular e alta carga aniônica, à base de poliacrilamida. Pode ser usado na indústria extrativa, em efluentes industriais, no tratamento de efluentes e no tratamento de água potável. É benéfico para qualquer processo de separação líquido-sólido e é especialmente recomendado para filtração, desidratação mecânica e sedimentação por gravidade, entre outras aplicações.',
      sectores: [
        'Decantadores e clarificadores',
        'Desidratação mecânica de lodos',
        'Tratamento de água potável',
        'Indústria extrativa',
      ],
    },
    'polimero-3s-cationico': {
      resumen: 'Aumenta o rendimento da estação e retira água do lodo.',
      accion:
        'Floculante à base de polímeros catiônicos sólidos de alto peso molecular, com base poliacrilamida e diferentes densidades de carga. Foi desenvolvido para aumentar o rendimento das estações de tratamento de água, a remoção de água do lodo e a floculação de sólidos.',
      sectores: [
        'Estações de tratamento de água',
        'Desidratação de lodos',
        'Floculação de sólidos em efluentes',
      ],
    },
    'odor-free': {
      resumen: 'Neutraliza o odor onde ele se gera, em vez de mascará-lo.',
      accion:
        'Indicado para prevenir, eliminar e neutralizar as emissões de maus odores em todo tipo de estabelecimento, deixando o ambiente limpo e desodorizado. Aplicável em áreas de coleta de lixo, banheiros, áreas de suínos e aves, e instalações industriais.',
      aplicacion:
        'Pode ser usado sobre superfícies de todo tipo, de forma manual ou por aspersão.',
      sectores: [
        'Áreas de coleta de resíduos',
        'Instalações de suínos e aves',
        'Estações de tratamento de efluentes',
        'Banheiros e vestiários industriais',
      ],
    },
    decuat: {
      resumen: 'Desinfecção de amplo espectro para toda a área de processo.',
      accion:
        'É um desinfetante e sanitizante concentrado à base da mais moderna e ativa combinação de sais de amônio quaternário de 5.ª geração, especialmente formulado para uso em todo tipo de área. Tem amplo espectro de ação desinfetante sobre bactérias, fungos e microrganismos Gram+ e Gram-. Ideal para áreas de processamento de alimentos.',
      aplicacion:
        'Pode ser usado em uma ampla gama de aplicações e superfícies de todo tipo, de forma manual, por imersão ou por aspersão.',
      sectores: [
        'Áreas de processamento de alimentos',
        'Frigoríficos e plantas de abate',
        'Câmaras frias e antecâmaras',
        'Vestiários, sanitários e refeitórios',
      ],
    },
    bioperacid: {
      resumen:
        'Ácido peracético a 15 %: desinfeta sem alterar o sabor do alimento.',
      accion:
        'É um poderoso desinfetante de ação rápida, com propriedades bactericidas, fungicidas e virucidas, ideal para a indústria de alimentos, papel e celulose, têxtil, curtumes, matadouros, açúcar e álcool. Em sua ação desinfetante o ácido peracético se converte em um produto amigável ao meio ambiente. Não é afetado pela dureza da água e é apenas levemente reduzido pela carga orgânica de sujeira. Seu caráter ácido o torna útil também como desincrustante e desoxidante secundário. Contribuem para a sua ação desinfetante o peróxido de hidrogênio e o ácido acético presentes na formulação. É um produto biodegradável, livre de fosfatos, que reduz de forma segura a carga microbiana que contamina as carnes durante o manuseio. Sua ação não altera a química do sabor nos alimentos.',
      aplicacion:
        'Desinfecção de superfícies de todo tipo, em setores industriais, hospitalares, hotéis, restaurantes, avícolas, suinícolas, bovinos e outros.',
      sectores: [
        'Frigoríficos e matadouros',
        'Curtumes',
        'Papel, celulose e têxtil',
        'Açúcar e álcool',
      ],
    },
    ardiox: {
      resumen: 'Mais poder germicida que o cloro, e sem resíduos nem sabor.',
      accion:
        'É um poderoso desinfetante de ação rápida, com qualidades sanitizantes de amplo espectro sobre germes, esporos, vírus, bactérias e fungos. Não deixa resíduos, é eficaz na purificação de água, não é tóxico e não confere sabores ou odores desagradáveis nas dosagens recomendadas. Possui maior poder germicida que o cloro e o hipoclorito, com grande capacidade de ação na presença de matéria orgânica e águas duras, devido ao seu efeito seletivo de penetração no microrganismo para a sua destruição. É amplamente utilizado em processos de higiene e desinfecção, especialmente em plantas processadoras de alimentos.',
      aplicacion:
        'Desinfecção de superfícies de todo tipo, em setores industriais, hospitalares, hotéis, restaurantes, avícolas, suinícolas, bovinos e outros.',
      sectores: [
        'Plantas processadoras de alimentos',
        'Purificação de água',
        'Setor hospitalar e hoteleiro',
        'Produção avícola, suína e bovina',
      ],
    },
    desinper: {
      resumen:
        'Limpa e desinfeta em um único passo, à base de peróxido de hidrogênio.',
      accion:
        'Desinfetante concentrado de última geração, desenvolvido especialmente para cobrir os requisitos de higiene profissional em ambientes industriais, em particular nas indústrias alimentícias. Graças à formulação à base de peróxido de hidrogênio, combina alto poder de limpeza com desinfecção de ação rápida. É eficaz contra vírus, bactérias, fungos e leveduras, e é recomendado para aplicação em todo tipo de superfície e equipamento.',
      aplicacion:
        'Desinfecção de superfícies de todo tipo, em setores industriais, hospitalares, hotéis, restaurantes, avícolas, suinícolas, bovinos e outros.',
      sectores: [
        'Indústria alimentícia',
        'Setor hospitalar',
        'Hotelaria e gastronomia',
        'Produção avícola, suína e bovina',
      ],
    },
    'king-klor': {
      resumen:
        'Desengraxa o pesado e desinfeta na mesma passada, com espuma aderente.',
      accion:
        'É um desengraxante alcalino clorado de alta concentração, utilizado para trabalhos de desengraxe pesado e útil para a limpeza de superfícies e equipamentos de processos de alimentos. É usado em fábricas de laticínios, carnes e produtos alimentícios onde se maneja alto nível de gordura; além disso, o seu teor de cloro permite a desinfecção das superfícies. Também pode ser aplicado com equipamentos espumadores, gerando uma espuma densa que permanece aderida, o que aumenta a superfície de contato e melhora a ação desengraxante do produto.',
      sectores: [
        'Fábricas de laticínios',
        'Plantas de carnes e frigoríficos',
        'Equipamentos de processo de alimentos',
        'Superfícies com alto nível de gordura',
      ],
    },
    stronger: {
      resumen:
        'Desengraxante enzimático 100 % biodegradável, sem cloro nem fosfatos.',
      accion:
        'É um desengraxante enzimático concentrado à base de poderosos tensoativos e solventes hidrossolúveis. Possui excelente ação de limpeza e proporciona remoção rápida de proteínas e gorduras animais e vegetais, eliminando-as de forma fácil e rápida. É estável em águas duras e em sistemas grandes, difíceis de limpar. Ideal para indústrias alimentícias. Além disso, por ser um produto livre de substâncias corrosivas — cloro e fosfato —, é altamente respeitoso com o meio ambiente e 100 % biodegradável.',
      aplicacion:
        'Pode ser usado em uma ampla gama de aplicações e superfícies de todo tipo, de forma manual, por imersão ou por aspersão.',
      sectores: [
        'Indústrias alimentícias',
        'Frigoríficos e salas de abate',
        'Sistemas grandes e difíceis de limpar',
        'Plantas com água dura',
      ],
    },
    desinal: {
      resumen:
        'Desengraxante bactericida para alta carga de gordura e resíduos proteicos.',
      accion:
        'É um poderoso detergente desengraxante com alto poder dispersante, desinfetante, bactericida e fungicida. Permite a rápida remoção da sujeira em áreas com baixa e alta carga de gordura, sujeira acumulada e resíduos proteicos. Apto para indústrias alimentícias.',
      aplicacion:
        'Pode ser usado em uma ampla gama de aplicações e superfícies de todo tipo, de forma manual, por imersão ou por aspersão.',
      sectores: [
        'Indústrias alimentícias',
        'Áreas com alta carga de gordura',
        'Setores com resíduos proteicos acumulados',
      ],
    },
    enzurpon: {
      resumen:
        'Alcalino concentrado para óleo e gordura, aplicável com espumador.',
      accion:
        'É um detergente desengraxante alcalino formulado à base de poderosos tensoativos e solventes hidrossolúveis, apresentado de forma concentrada, especialmente desenvolvido para processos de limpeza e eliminação de óleo, restos de gordura e todo tipo de sujeira.',
      aplicacion:
        'Pode ser usado em superfícies de todo tipo, de forma manual ou com equipamentos espumadores.',
      sectores: [
        'Maquinário e equipamentos industriais',
        'Pisos e superfícies de planta',
        'Setores com óleo e gordura acumulada',
      ],
    },
    'purson-plus': {
      resumen:
        'Sem espuma e eficaz contra os três tipos de gordura: mineral, animal e industrial.',
      accion:
        'É um desengraxante alcalino sem espuma, formulado à base de poderosos tensoativos e solventes hidrossolúveis, altamente eficaz contra os três tipos de gordura: mineral, animal e industrial. Indicado para a limpeza de utensílios em contato com gorduras de difícil eliminação, fornos, chapas, fritadeiras e similares.',
      aplicacion: 'Pode ser usado em superfícies de todo tipo, de forma manual.',
      sectores: [
        'Cozinhas industriais',
        'Fornos, chapas e fritadeiras',
        'Utensílios com gordura de difícil eliminação',
        'Lavagem de caixas e bandejas',
      ],
    },
    madox: {
      resumen:
        'Detergente neutro concentrado que enxágua rápido e não deixa resíduo.',
      accion:
        'Detergente líquido neutro, concentrado e espumante, desenvolvido para uso geral na indústria alimentícia. É baseado em uma mistura equilibrada de tensoativos espumantes, agentes sequestrantes e emulsificantes. É um produto livre de fosfatos, o que o torna altamente solúvel e permite um enxágue rápido e eficiente sem deixar resíduos. Proporciona uma limpeza eficiente, econômica e segura. Pode ser aplicado em cozinhas industriais e domésticas para limpar pratos, talheres, copos, panelas, frigideiras, fogões e equipamentos, entre outros. Elimina gorduras, óleos, proteínas e diversas sujeiras. Pela sua eficácia também pode ser aplicado à limpeza geral de superfícies, como paredes, pisos, balcões, escrivaninhas e mesas de trabalho.',
      sectores: [
        'Cozinhas industriais',
        'Louça, utensílios e equipamentos',
        'Limpeza geral de superfícies',
        'Gastronomia e hotelaria',
      ],
    },
    'fine-white': {
      resumen:
        'Alveja e desinfeta sem descolorir a roupa colorida, ao contrário do cloro.',
      accion:
        'Alvejante desinfetante oxigenado para lavanderias, instituições e indústrias. É um alvejante de alta concentração e grande poder de desinfecção. Elimina todo tipo de mancha de origem proteica: sangue, vômito, fezes, corantes vegetais, molhos, vinhos, cosméticos, medicamentos, café e outros. É ideal para a lavagem de todo tipo de fibra têxtil, com resultados ótimos. Aplicável em peças brancas e coloridas: não descolore nem danifica como os alvejantes clorados.',
      sectores: [
        'Lavanderias industriais',
        'Lavanderias hospitalares',
        'Hotelaria',
        'Instituições',
      ],
    },
    'white-clean': {
      resumen: 'Detergente em pó de espuma controlada, sem cloro nem fosfatos.',
      accion:
        'Pó de limpeza de espuma controlada, formulado para uso manual e industrial na lavagem de todo tipo de roupa. Antisséptico de alto rendimento, ideal para melhorar o branco das peças sem degradar a roupa colorida. Não contém alvejante clorado, que desbota as peças, e é um produto livre de fosfatos, 100 % biodegradável. Remove rápida e eficazmente a gordura e a sujeira, eliminando todo tipo de mancha de origem proteica: sangue, vômito, corantes, molhos, vinho e outras. Ideal para lavadoras de uso profissional, e também recomendado para uso em hospitais, restaurantes, hotéis e indústrias.',
      sectores: [
        'Lavadoras de uso profissional',
        'Hospitais',
        'Restaurantes e hotéis',
        'Indústrias com roupa de trabalho',
      ],
    },
    sanitol: {
      resumen:
        'Sabonete antibacteriano de pH neutro para o uso repetido de um turno inteiro.',
      accion:
        'Sabonete líquido antibacteriano especialmente formulado para a limpeza das mãos, que elimina germes e bactérias. Proporciona uma ação germicida rápida e efetiva com pH neutro. Seus suaves tensoativos e emolientes conservam a umidade e a maciez da pele frente a usos frequentes, o que o torna ideal para a indústria alimentícia, a gastronomia e a hotelaria.',
      sectores: [
        'Entrada de setores produtivos',
        'Indústria alimentícia',
        'Gastronomia e hotelaria',
        'Vestiários e sanitários',
      ],
    },
  },

  whatsapp: {
    hero: 'Olá, quero informações sobre os produtos da 3S para tratamento de efluentes.',
    general: 'Olá, quero informações sobre os produtos da 3S Grupo Industrial.',
    flotante: 'Olá, tenho uma dúvida sobre os produtos da 3S Grupo Industrial.',
    producto: 'Olá, quero informações sobre {producto}.',
    presupuesto: 'Olá, quero orçar {producto} na embalagem de {presentacion}.',
    presupuestoSinPresentacion: 'Olá, quero orçar {producto}.',
    etiquetaFlotante: 'Escrever pelo WhatsApp para a 3S Grupo Industrial',
  },
};
