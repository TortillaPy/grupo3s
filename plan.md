# Plan — 3S Grupo Industrial

Estado del proyecto y todo lo que recomiendo hacer después de la entrega.
Actualizado el 4 de septiembre de 2026. Las siete fases terminadas: 67 páginas en tres idiomas, Lighthouse mobile 100/100/100/100.

---

## 1. Punto pendiente de definición

### Alcance del asesoramiento técnico

Es lo único del sitio que quedó sin confirmar, y no es un detalle de
redacción: define qué promete la marca.

El catálogo dice que 3S es un *Laboratorio de Productos Químicos*, pero no
declara ningún servicio asociado a la venta. Hoy el sitio promete la
versión conservadora: **"te decimos qué producto va en cada punto de tu
proceso y en qué dilución aplicarlo"**. Nada más.

Las opciones, de menor a mayor compromiso:

| Nivel | Qué promete | Qué exige de 3S |
| --- | --- | --- |
| **A. Recomendación** (el actual) | Producto, presentación y dilución por WhatsApp o teléfono | Nada nuevo |
| **B. Diagnóstico** | Analizar el proceso del cliente y armar el plan de productos por punto de aplicación | Alguien con criterio técnico dedicando tiempo a cada consulta |
| **C. Acompañamiento en planta** | Visita, prueba en sitio, ajuste de dosis con el operario | Un técnico disponible para viajar, y una política de a partir de qué volumen |

**Mi recomendación: el nivel B.** Es lo que separa a 3S de un
distribuidor, es sostenible sin contratar a nadie, y es exactamente el
argumento que le falta al catálogo de la competencia local. El nivel C
funciona mejor ofrecido caso por caso durante la negociación que
prometido en el sitio a cualquiera que entre.

Cuando lo definas, se cambia en `src/data/content.es.ts`:
`hero.senales`, `beneficios.items` (la tarjeta "Asesoramiento técnico") y
`comoComprar.pasos`. Tres lugares, un archivo.

---

## 2. Fases del desarrollo

| Fase | Qué incluye | Estado |
| --- | --- | --- |
| F0 | Insumos: catálogo transcrito, 54 imágenes, logotipo | ✅ terminada |
| F1 | Astro + Tailwind, tokens de marca, tipografías, Layout, capa de datos, hero | ✅ terminada |
| F2 | Header sticky, problema/solución, beneficios, galería con lightbox, cómo trabajamos, botón flotante de WhatsApp | ✅ terminada |
| F3 | Tabla de los 18 productos, presupuesto por presentación, testimonios, FAQ, CTA final, footer, privacidad y 404 | ✅ terminada |
| F4 | `/productos` con filtro por categoría y ficha `/productos/[slug]` | ✅ terminada |
| F5 | Formulario de presupuesto con Web3Forms y sus cuatro estados | ✅ terminada |
| F6 | JSON-LD completo, sitemap, robots, recorrido por teclado, Lighthouse, README de despliegue | ✅ terminada |
| F7 | Portugués de Brasil e inglés de EE. UU. | ✅ terminada |

---

## 3. Lo que recomiendo hacer después de publicar

Ordenado por relación entre esfuerzo y retorno.

### 3.1 Alta prioridad

**Fichas técnicas y hojas de seguridad en PDF.**
Cada producto tiene el campo `fichaTecnica` en `products.ts` esperando
la ruta del PDF; en cuanto lo cargues, la ficha muestra el enlace. Un jefe de calidad que puede bajar la
ficha y la MSDS sin escribirle a nadie avanza solo hasta la decisión de
compra. Es lo que más rápido convierte una visita en una consulta seria,
y ninguno de los dos competidores que miramos lo ofrece.

**Fotos propias de planta y laboratorio.**
Las fotos actuales salen del catálogo y son chicas —entre 300 y 400 px de
ancho—. Se ven bien al tamaño que las usamos, pero limitan el diseño: no
se puede hacer un hero a ancho completo ni una galería grande. Con una
tarde de fotos en 1600 × 1200 el sitio sube un escalón entero. Lo que
haría falta: la planta de producción, el laboratorio con alguien
trabajando, el depósito con los IBC apilados, una entrega en planta de un
cliente, y los 18 envases fotografiados con la misma luz y el mismo
fondo.

**Google Business Profile.**
El sitio ya emite el marcado `LocalBusiness` con la dirección de Pilar
1717. Reclamar la ficha de Google Maps hace que esos datos se conecten y
que 3S aparezca en las búsquedas de "productos químicos industriales
Asunción". Es gratis y toma veinte minutos.

**Access key de Web3Forms.**
El formulario está funcionando y probado, pero no envía hasta que
cargues `PUBLIC_WEB3FORMS_KEY` en el `.env` y en el panel del hosting.
Es gratis, toma cinco minutos y es lo primero que hay que hacer antes de
publicar: sin eso, el camino B de conversión no existe.

**Correo del dominio.**
Hoy el sitio muestra `ventas@3sgrupoindustrial.com.py`, que todavía no
existe. Un formulario que responde desde un Gmail personal pierde
credibilidad frente a un comprador industrial. Google Workspace o Zoho
Mail resuelven esto por poco dinero al mes.

**Testimonios reales.**
El componente está construido y hoy muestra tres bloques marcados como
contenido de ejemplo. Con tres clientes que autoricen su nombre por
escrito, la sección pasa a ser el argumento más fuerte de la página.
No se publican reseñas inventadas: además de ser deshonesto, Google
sanciona el marcado de reseñas falsas.

### 3.2 Media prioridad

**Páginas por sector.**
Este es el mayor movimiento de posicionamiento disponible después de las
fichas de producto. Una página por sector —frigoríficos, curtiembres,
lácteos, lavanderías industriales, avícolas— donde se explica el circuito
completo de higiene y tratamiento de ese rubro y se recomiendan los
productos 3S en cada punto. El que busca "tratamiento de efluentes para
frigorífico" encuentra una página escrita para él, no un catálogo
genérico. Cinco páginas, cinco búsquedas distintas.

**Analytics.**
Cloudflare Web Analytics: gratis, sin cookies, y por eso mismo sin
necesidad de banner de consentimiento. Se carga diferido para no afectar
la velocidad. Sin esto no hay forma de saber qué productos mira la gente
ni desde dónde llegan.

**Catálogo en PDF descargable.**
El catálogo institucional que ya existe, subido a `public/` y enlazado
desde el sitio. Muchos compradores industriales lo quieren para
circularlo internamente o adjuntarlo a un pedido de compra.

**Revisión de las traducciones por un hablante nativo.**
El portugués y el inglés están completos y publicados, pero conviene que
alguien del mercado los lea antes de hacer campaña ahí. En particular
los términos técnicos de cada rubro —"efluente", "abate", "curtume" en
portugués; "effluent", "rendering", "tannery" en inglés— y las
condiciones comerciales del FAQ, que en otro país pueden esperarse
distintas.

### 3.3 Cuando haya tracción

**Calculadora de dosificación.**
Una herramienta simple —caudal del efluente y tipo de industria, y
devuelve el consumo estimado de coagulante y floculante por mes— es el
tipo de página que la gente guarda y comparte, y que atrae enlaces. Se
puede hacer entera en el navegador, sin backend, respetando la
restricción del proyecto. Necesita que 3S defina los rangos de
dosificación, que hoy no están en el catálogo.

**Precios.**
Cuando decidas mostrarlos, todo el mecanismo ya está: se cargan en
`products.ts` y se pone `precios.isVisible: true` en `config.ts`. Ese
mismo booleano activa el nodo `offers` del JSON-LD, que es lo que habilita
el fragmento enriquecido de Google con el precio en el resultado de
búsqueda. Mostrar precios en B2B industrial es discutible —hay
argumentos para las dos posiciones— pero si alguna vez los mostrás, es
un cambio de una línea.

**Sección de recursos técnicos.**
Artículos cortos sobre problemas concretos: por qué el lodo no decanta,
cómo elegir entre coagulante y floculante, qué exige la normativa
paraguaya de vuelco. Es trabajo sostenido, pero construye autoridad y
posiciona por búsquedas que ningún catálogo cubre.

**Certificaciones como sello visible.**
White Clean ya tiene registro DINAVISA y aprobación del INTN. Si 3S suma
una certificación de sistema de gestión, conviene mostrarla: en una
licitación o en una auditoría de proveedor, eso puede ser la diferencia.

---

## 4. Decisiones tomadas que conviene no revertir sin pensarlo

**El precio no aparece en el JSON-LD mientras no sea real.**
Google exige `price` y `priceCurrency` verdaderos dentro de `offers`.
Publicar un precio inventado para conseguir el fragmento enriquecido es
motivo de acción manual sobre el dominio. Por eso el mismo booleano
controla las dos cosas.

**Una URL por producto.**
Las dieciocho fichas compiten por dieciocho búsquedas distintas. Una sola
landing compite por una. Los `slug` no deberían cambiar después de
publicar: rompen enlaces y borran el posicionamiento acumulado.

**Sin backend.**
El sitio entero es HTML estático. Eso lo hace prácticamente gratis de
alojar, imposible de hackear por el lado del servidor y rápido desde
cualquier conexión. El formulario va por Web3Forms; si alguna vez hace
falta algo más, conviene resolverlo con otro servicio externo antes que
levantar un servidor propio.

**Sin Google Fonts desde CDN.**
Las tipografías se sirven desde el mismo dominio. Además de ser más
rápido, evita el problema legal que ya tuvo Google Fonts en Europa por
transferencia de IP.

---

## 5. Despliegue previsto

**Cloudflare Pages**, plan gratuito: ancho de banda ilimitado y presencia
en Sudamérica. La alternativa es Netlify, que limita a 100 GB mensuales.

El dominio `3sgrupoindustrial.com.py` se registra en NIC.py, que es el
único registrante del `.py`: conviene reservarlo antes de publicar, no
después.

Al desplegar hay que cargar la variable `PUBLIC_WEB3FORMS_KEY` en el
panel del hosting. Sin eso el formulario no envía.
