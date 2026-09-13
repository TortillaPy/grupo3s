# Guía para aparecer en Google — 3S Grupo Industrial

Objetivo: que una persona en Paraguay que busque **“3s grupo industrial”** o simplemente **“3S”** encuentre la empresa en la primera página.

El sitio ya está preparado técnicamente (etapa `codex/08-seo-google`): títulos con la marca primero, datos estructurados `Organization`, `LocalBusiness` y `WebSite` con el nombre alternativo “3S”, sitemap limpio, horario y dirección visibles. Lo que falta **no se resuelve con código**: son acciones en servicios de Google y fuera del sitio. Esta guía las ordena por impacto.

> “3S” es una búsqueda muy ambigua (hay muchas empresas y productos con esa sigla). Para esa consulta, Google se apoya sobre todo en la **ubicación de quien busca** y en la **ficha de Google Business Profile**. Por eso el paso 1 es el más importante.

## Datos oficiales (NAP)

Usá **exactamente** estos datos en todos lados: Google, redes, directorios. Las variaciones (otro formato de teléfono, otra forma de escribir la dirección) le restan confianza a Google.

| Dato | Valor |
| --- | --- |
| Nombre | 3S Grupo Industrial S.R.L. |
| Dirección | Pilar N° 1717 c/ Nazareth, Asunción, Paraguay |
| Teléfono y WhatsApp | (0972) 572 007 · +595 972 572 007 |
| Correo | 3sgrupoindustrial@gmail.com |
| Horario | Lunes a viernes, de 07:30 a 17:00 |
| Sitio web | https://3sgrupoindustrial.com.py |

Si alguno de estos datos cambia, se actualiza primero en `src/data/config.ts` (y el horario visible en `footer.horario` de `src/data/content.*.ts`) y después en cada servicio externo.

## Cuentas y roles

Una misma cuenta de Google puede administrar el SEO de muchos clientes. La regla es que **cada empresa sea dueña de sus propias cuentas** y el asesor entre como invitado con permisos de administración.

**Por qué el cliente tiene que ser el dueño**

- **Continuidad:** si la relación con el asesor termina, la empresa conserva su ficha, sus reseñas y su historial de Search Console.
- **Riesgo repartido:** si la cuenta del asesor se suspende o se bloquea, no se pierde el acceso a todos los clientes a la vez.
- **Seguridad:** nunca se comparten contraseñas. Cada persona entra con su cuenta y la empresa puede quitar accesos cuando quiera.

### Google Business Profile

| Rol | Puede | No puede |
| --- | --- | --- |
| **Propietario principal** | Todo: editar, responder reseñas, gestionar usuarios, transferir la propiedad o eliminar la ficha | — (hay uno solo por ficha) |
| **Propietario** | Casi todo, incluso agregar y quitar usuarios | Transferir la propiedad principal |
| **Administrador** | Editar datos, fotos y publicaciones; responder reseñas | Gestionar usuarios, eliminar la ficha |

Para agregar a alguien: con la cuenta propietaria, abrí la ficha → menú ⋮ → **Configuración del perfil** → **Personas y acceso** → **Agregar**, escribí el correo y elegí el rol. La persona acepta la invitación desde su correo.

### Google Search Console

| Rol | Puede | No puede |
| --- | --- | --- |
| **Propietario verificado** | Todo; es quien verificó el dominio (registro TXT) | — |
| **Propietario delegado** | Lo mismo que el verificado, incluso gestionar usuarios | — (pierde el acceso si se elimina la verificación que lo respalda) |
| **Usuario completo** | Ver todos los informes, enviar sitemaps, pedir indexación | Gestionar usuarios ni propietarios |
| **Usuario restringido** | Ver la mayoría de los informes | Hacer acciones sobre la propiedad |

Para agregar a alguien: **Configuración** → **Usuarios y permisos** → **Agregar usuario**, con permiso **Propietario** o **Completo**.

### Configuración recomendada para 3S

| Servicio | Empresa (`3sgrupoindustrial@gmail.com`) | Asesor (cuenta de trabajo) |
| --- | --- | --- |
| Business Profile | Propietario principal | Propietario (o Administrador) |
| Search Console | Propietario verificado | Propietario delegado (o Completo) |

Buenas prácticas para quien administra varios clientes:

- Usar una **cuenta de Google de trabajo**, separada del Gmail personal.
- Activar la **verificación en dos pasos**, idealmente con llave de seguridad o app autenticadora, en la cuenta del asesor y en la de cada empresa.
- Llevar un registro por cliente con quién es el propietario principal, qué roles tiene cada persona y cuándo se otorgaron.
- Al terminar un servicio, pedir al cliente que quite el acceso o quitarlo uno mismo. Nunca transferir la propiedad principal a la cuenta del asesor.

Para el cliente hay una guía paso a paso lista para enviar, en PDF, fuera del repositorio: `output/pdf/guia-google-business-search-console-3s.pdf`.

---

## 1. Google Business Profile (prioridad máxima)

**Qué es:** la ficha de empresa que aparece en Google Maps y en el panel lateral de la búsqueda.
**Por qué importa:** para búsquedas de marca y locales, es la señal más fuerte. Sin ficha, “3S” desde Asunción difícilmente muestre la empresa.
**Requisitos:** una cuenta de Google de la empresa (recomendado: 3sgrupoindustrial@gmail.com) y acceso a la dirección o al teléfono para verificar.

**Pasos**

1. Entrá a https://business.google.com con la cuenta de la empresa.
2. Buscá “3S Grupo Industrial”. Si ya existe una ficha, usá **Reclamar esta empresa**. Si no existe, elegí **Agregar tu empresa**.
3. Nombre: **3S Grupo Industrial S.R.L.** No agregues palabras clave al nombre (por ejemplo “3S Químicos Efluentes Asunción”): va contra las políticas de Google y puede causar la suspensión de la ficha.
4. Categoría principal: la que mejor describa la actividad entre las que ofrece Google, por ejemplo **Proveedor de productos químicos** o **Fabricante de productos químicos**. Podés sumar categorías secundarias afines.
5. Ubicación: **Pilar N° 1717 c/ Nazareth, Asunción**. Confirmá el pin en el mapa.
   - Si no se atiende público en ese lugar, marcá que es una **empresa de servicio a domicilio** y ocultá la dirección. Como área de servicio, indicá Paraguay o los departamentos atendidos.
6. Teléfono: **0972 572 007**. Sitio web: **https://3sgrupoindustrial.com.py**.
7. Horario: lunes a viernes, de 07:30 a 17:00.
8. Verificación: Google ofrecerá postal, teléfono, correo o video según el caso. Completala; sin verificación la ficha no se muestra bien.
9. Completá la ficha:
   - **Descripción:** en la redacción institucional (“Elaboramos una gama de productos…”), mencionando Asunción, limpieza industrial, desinfección industrial y tratamiento de efluentes. Sin promesas que no figuren en el sitio.
   - **Productos:** cargá las tres familias (Limpieza industrial, Desinfección industrial, Tratamiento de efluentes y aguas residuales) y los productos principales, con enlace a su ficha en el sitio.
   - **Fotos reales:** logo, fachada o ingreso, laboratorio, envases y productos en planta. No uses imágenes de stock.
10. Mantenimiento: publicá novedades cada tanto y respondé todas las reseñas.

**Cómo verificar:** buscá “3S Grupo Industrial” y “3S” en Google Maps desde Asunción. En el panel de la ficha, **Rendimiento** muestra búsquedas, llamadas y clics al sitio.

## 2. Google Search Console

**Qué es:** la herramienta con la que Google informa cómo rastrea e indexa el sitio.
**Por qué importa:** permite pedir la indexación de inmediato, enviar el sitemap y detectar errores.
**Requiere autorización:** la verificación recomendada agrega un **registro TXT en el DNS** del dominio (hoy gestionado a través de Cloudflare). Según las reglas del proyecto, **no se modifica el DNS sin autorización explícita del responsable**.

**Pasos**

1. Entrá a https://search.google.com/search-console con la cuenta de la empresa.
2. **Agregar propiedad → Dominio** → `3sgrupoindustrial.com.py`.
3. Google muestra un registro TXT. Quien administre el DNS lo agrega en Cloudflare → DNS → Registros, tipo **TXT**, nombre **@**, con el valor indicado.
4. Volvé a Search Console y presioná **Verificar**. El DNS puede tardar algunas horas en propagarse.
5. **Sitemaps** → enviá `https://3sgrupoindustrial.com.py/sitemap-index.xml`. Tiene que figurar como “Correcto”, con 66 URLs descubiertas.
6. **Inspección de URLs** → pegá `https://3sgrupoindustrial.com.py/` → **Solicitar indexación**. Repetí con `/productos`, `/pt` y `/en`.
7. En las semanas siguientes, revisá:
   - **Páginas:** qué está indexado y por qué algo no lo está. `gracias` y la 404 deben figurar como “Excluida por la etiqueta noindex”, y eso es correcto.
   - **Mejoras / resultados enriquecidos:** migas de pan, productos y preguntas frecuentes, sin errores.
   - **Core Web Vitals:** todo en “Buena”.
8. Validación opcional de datos estructurados: https://search.google.com/test/rich-results con la portada y una ficha.

**Cómo verificar:** buscá `site:3sgrupoindustrial.com.py` en Google; deberían aparecer las páginas del sitio. En **Rendimiento**, filtrá por la consulta “3s” y “3s grupo industrial” y seguí impresiones, clics y posición media.

## 3. Bing Webmaster Tools (opcional)

Bing también alimenta otros buscadores y asistentes.

1. Entrá a https://www.bing.com/webmasters.
2. Elegí **Importar desde Google Search Console** (una vez verificado el paso 2). Se importan el sitio y el sitemap sin tocar el DNS otra vez.

## 4. Redes sociales y `sameAs`

**Por qué importa:** perfiles oficiales con el mismo nombre y datos confirman a Google que “3S Grupo Industrial” es una entidad real y reconocible.

1. Creá o completá **Facebook**, **Instagram** y **LinkedIn** (página de empresa) con el nombre, la dirección, el teléfono, el horario y el sitio exactamente iguales a la tabla de datos oficiales.
2. Cuando existan, cargá sus URLs en `src/data/config.ts → contacto.redes` (campo `url`). Eso muestra automáticamente los íconos en el footer y agrega los perfiles al `sameAs` del JSON-LD. El cambio se hace en una rama `codex/` con su PR, como cualquier otro.

## 5. Reseñas reales

**Por qué importa:** la cantidad y la calidad de reseñas en Google Business Profile influyen en el posicionamiento local y en la decisión de contacto.

- Pedí a clientes reales (frigoríficos, curtiembres, plantas de alimentos) que dejen una reseña en la ficha. Desde el panel de la ficha, **Pedir reseñas** genera el enlace para compartir.
- Respondé todas las reseñas, también las negativas, con tono profesional.
- **No** compres reseñas ni las escribas en nombre de clientes: Google lo detecta y puede sancionar la ficha.
- En el sitio, la sección de testimonios está oculta mientras tenga textos de ejemplo. Para publicarla, con **autorización escrita** de cada cliente, se reemplazan los textos en `src/data/content.*.ts` y se pone `esPlaceholder: false`. El sitio **no** debe marcar esas reseñas con schema `Review` o `AggregateRating`: Google no admite reseñas propias autopublicadas como resultado enriquecido.

## 6. Menciones y directorios locales

**Por qué importa:** menciones consistentes del nombre, la dirección y el teléfono en sitios paraguayos refuerzan la relevancia local, y los enlaces desde sitios reales suman autoridad.

- Registrá la empresa, con los datos oficiales exactos, en directorios empresariales de Paraguay, cámaras o gremios industriales de los que 3S forme parte, y guías de proveedores del sector.
- Pedí a clientes, distribuidores o socios reales que enlacen al sitio desde su página de proveedores, si corresponde.
- Evitá directorios de spam o paquetes de “miles de enlaces”: perjudican.

## 7. Contenido pendiente en el sitio

Estas mejoras requieren material o decisiones del responsable. Cada una se implementa en su propia rama y PR.

| Mejora | Qué hace falta | Dónde se carga |
| --- | --- | --- |
| Fichas técnicas en PDF | Los PDF aprobados de cada producto | `public/` y `fichaTecnica` en `src/data/products.ts` |
| Coordenadas en el schema | Latitud y longitud confirmadas del establecimiento | Agregar `geo` al `LocalBusiness` en `src/layouts/Layout.astro` |
| Precios visibles | Decisión comercial y precios reales | `precio` en `products.ts` y `precios.isVisible` en `config.ts` |
| Páginas propias por familia o etapa | Decisión de arquitectura del PO y textos únicos por página | Nuevas rutas (hoy son filtros `?familia=` / `?etapa=` que apuntan a `/productos`) |
| Descripciones de fichas más cortas | Validar redacción con el PO (hoy muchas superan los 160 caracteres y Google las recorta) | `meta.ficha.descripcionPlantilla` y `resumen` en `content.*.ts` |

## 8. Seguimiento

| Momento | Qué revisar |
| --- | --- |
| Semana 1–2 | Ficha de Business Profile verificada. Search Console verificado, sitemap “Correcto”, portada indexada (`site:3sgrupoindustrial.com.py`). |
| Mes 1 | Search Console → Rendimiento: impresiones para “3s grupo industrial” y “3s”. Páginas indexadas cerca de 66. Sin errores de datos estructurados. Primeras reseñas. |
| Mes 3 | Posición media de la consulta de marca (objetivo: primera página). Llamadas, WhatsApp y visitas al sitio desde la ficha. Redes enlazadas en `sameAs`. |

Los resultados de búsqueda no son inmediatos: Google puede tardar desde días hasta algunas semanas en reflejar los cambios. La consulta completa **“3s grupo industrial”** debería mejorar primero; **“3S”** sola depende sobre todo de la ficha local y de la ubicación de quien busca.
