# Implementación por etapas — 3S

## Protocolo

Una rama por etapa desde development actualizado, PR a development, aprobación explícita y merge. No iniciar la siguiente etapa antes de aprobar e integrar la anterior. Al finalizar: revisión integral, PR development → main, aprobación final y deploy. Las correcciones adicionales también requieren rama y PR.

## Etapas y aceptación

| Etapa | Rama | Alcance | Aceptación |
| --- | --- | --- | --- |
| 0 | codex/00-reglas-desarrollo | Verificar producción y hosting; respaldo; development; reglas; build base | Base confirmada, producción aislada, reglas revisadas |
| 1 | codex/01-modelo-catalogo | Separar familias y etapas; orden central; tabla por producto; múltiples funciones y clasificación principal | PO valida tabla; productos completos; slugs preservados |
| 2 | codex/02-portada-marca | Hero con logo grande centrado; grises y verdes originales; textos institucionales; CTA catálogo y formulario; movimiento reducido | Capturas móvil/escritorio, claro/oscuro; marca nítida, sin bloqueo de entrada |
| 3 | codex/03-recorrido-productos | Recorrido horizontal/vertical de cuatro etapas; textos traducidos; destinos filtrados mínimos funcionales | PO reconoce recorrido; enlaces pertinentes; no implica receta técnica universal |
| 4 | codex/04-catalogo-fichas | Filtros por familia y etapa; URL compartible; limpiar y estado vacío; fichas y selectores; ItemList consistente | Sin pérdidas/duplicados; complementarios accesibles; tres idiomas; anclas únicas |
| 5 | codex/05-contenido-institucional | Reescribir Fabricamos y equivalentes; metadatos y accesibilidad; tres idiomas | PO valida redacción; sin nuevas afirmaciones técnicas |
| 6 | codex/06-deteccion-idioma | Worker mínimo para Accept-Language; entrada /; preferencia manual; q y regiones; fallback es; rutas explícitas; cache y SEO | Pruebas reales de Workers sin bucles ni contaminación de cache |
| 7 | ramas codex/07-* si hay ajustes | Build, pruebas integrales, navegación, formulario sin envíos reales no autorizados, idiomas y recursos | Aprobación integral del preview por el PO |
| 8 | codex/08-seo-google | Auditoría SEO: indexación, metadatos, datos estructurados, SEO local, rendimiento y accesibilidad; guía de Google | Sin duplicados ni rutas rotas; schema alineado con lo visible; tres idiomas; diseño intacto |
| 9 | PR development → main | Release aprobado, deploy y smoke check, registro de versión y sincronización | Producción verificada y respaldo disponible |

**Pendiente para la etapa 9 — historial de `main`.** `main` contiene el merge del PR #3 (`1c61572`), su revert (`bf77829`) y el hotfix #5 (`04e633d`). Su contenido coincide con `production-2026-09-12`. Por ese revert, cualquier merge hacia `main` entra en conflicto (`IMPLEMENTATION_PLAN.md`, `site.ts`, `types.ts`), y `products.ts` se combina sin marcar conflicto, con riesgo de perder cambios de la etapa 01 en silencio. Antes del release, y con aprobación explícita, preparar desde `main` una rama que revierta `bf77829`, verificar que `development` → `main` quede limpio y comparar el árbol resultante con `development`. Nunca traer `main` hacia `development` ni hacia ramas de etapa.

**Preparación de la etapa 9 — rama `codex/09-release`.** Incorpora los scripts de validación usados en la etapa 8: `npm run audit:seo` (`scripts/seo-audit.mjs`, auditoría de `dist/` sin dependencias) y `scripts/browser-review.cjs` (revisión en navegador con Playwright, sin red externa ni envíos). Por indicación del responsable, el PR de esta rama se abre recién al culminar la etapa 9.

Familias: Limpieza industrial → Desinfección industrial → Tratamiento de efluentes y aguas residuales.

Recorrido: Desengrasa → Desinfecta → Coagulación y Floculación → Control de olor.

Revisar detergentes, lavandería e higiene de manos sin asignarles desengrase por obligación. Mantener complementarios y validar ambigüedades. No migrar a Content Collections sin necesidad.

## Auditoría inicial — 2026-09-12

- Referencias remotas actualizadas. origin/main: 47ac11b86ec58ab20f2de23b4c8c2ef87d21422a.
- development local parte de ese commit. La equivalencia del contenido desplegado con este estado fue confirmada mediante huellas funcionales y comparación de HTML público.
- Rama de logos preservada: feat/logo-alta-resolucion, bb422b9.
- Rama de correcciones preservada: fix/correcciones-pendientes, 1a302f4 (anclas, tipo del coagulante y CLAUDE.md anterior). No incorporada automáticamente.
- No existe .github en la base. wrangler.jsonc sirve dist con nombre grupo3s. npm run deploy ejecuta build y wrangler deploy.
- No se ejecutó deploy.
- GitHub informa un status Vercel exitoso para origin/main. Esto no demuestra que sea el despliegue productivo actual ni confirma su filtro de ramas.
- Pendientes: verificar y corregir las políticas remotas de ramas y preparar el proyecto productivo independiente en Cloudflare.
- Build base ejecutado con éxito: 67 páginas; Astro check: 0 errores, 0 warnings, 0 hints.
- Aclaración del usuario: Vercel será desarrollo y Cloudflare producción. La configuración remota aún no está verificada ni modificada.
- El conector Vercel reconoce el equipo team_ioP9MpejBnkRtWvhJ5vMsiEF, pero list_projects devuelve una lista vacía y grupo3s devuelve 404. El status histórico de GitHub no demuestra acceso actual al proyecto.
- development se publicó desde `47ac11b` sin upstream a main para evitar pushes/pulls ambiguos. También se publicó el tag anotado `production-2026-09-12` como respaldo de la producción inicial.
- La rama `codex/00-reglas-desarrollo` se publicó y abrió el PR #1 hacia development. No se mergeó.
- La etapa 0 está preparada y publicada, pendiente de aprobar el PR y de completar la separación real de hosting.

## Segunda verificación de hosting — 2026-09-12

- Cloudflare ya está autenticado mediante OAuth como marcoantonsson@gmail.com, cuenta d36de7e06c8009c38013b9346396db86.
- Consultar deployments de grupo3s devuelve error 10007: el Worker no existe en esa cuenta. Esto no prueba que no exista bajo otro nombre o cuenta.
- La consulta Pages project list terminó correctamente sin proyectos listados.
- Vercel list_teams sigue mostrando tortillapys-projects y list_projects sigue devolviendo una lista vacía.
- No existe vínculo local .vercel/project.json. La configuración local de Wrangler sigue apuntando a grupo3s y dist.
- El acceso al panel web confirmó que el proyecto de Vercel se llama `grupo3s` y está conectado a `TortillaPy/grupo3s`.
- No se cambiaron configuraciones de hosting, ni se publicó, mergeó o desplegó ningún cambio.

## Verificación por dominios públicos — 2026-09-12

- `https://grupo3s.vercel.app/` responde HTTP 200 con `server: Vercel`.
- `https://3sgrupoindustrial.com.py/` responde HTTP 200 con `server: cloudflare`.
- Los documentos HTML de ambas portadas son idénticos byte por byte (SHA-256 local `104d87c407485e01dc48c455d717e1bbe9d7255ee038b9755104121f031e21ae`; comparación sin diferencias).
- La ficha pública conserva “Coagulante inorgánico polimerizado” y usa los hashes de logos anteriores. Esto coincide con `main` en `47ac11b` y descarta las ramas de correcciones y logo como fuente del despliegue actual.
- El dominio productivo usa la red de Cloudflare, pero no corresponde a un proyecto Workers/Pages accesible en la cuenta autenticada. La evidencia indica que Cloudflare está actuando como proxy/CDN delante del despliegue de Vercel.
- Estado actual: Vercel y Cloudflare muestran el mismo build. La arquitectura solicitada —Vercel para desarrollo y un despliegue independiente en Cloudflare para producción— todavía no existe.
- No se modificará DNS ni se creará el Worker productivo durante las etapas. Esa migración se preparará y verificará en preview, y requerirá aprobación final antes del cambio de producción.

## Verificación del panel de Vercel — 2026-09-12

- El panel de despliegues identifica `main` en `47ac11b` como el despliegue **Production** que alimenta `grupo3s.vercel.app`.
- El PR #1 y su rama `codex/00-reglas-desarrollo` se construyeron correctamente como **Preview**. Las ramas `feat/logo-alta-resolucion` y `fix/correcciones-pendientes` también conservan previews independientes.
- La integración Git crea previews automáticamente para ramas y pull requests. No hay checks de despliegue ni deploy hooks configurados.
- En el plan Hobby solo están disponibles los entornos estándar. Para que `grupo3s.vercel.app` represente desarrollo, la rama de producción del proyecto deberá cambiar de `main` a `development`.
- Ese cambio moverá el alias estable de Vercel a los builds de `development`; debe hacerse como una modificación explícita de infraestructura y verificarse después con un commit identificable.

## Etapa 2 preparada — 2026-09-12

- La portada presenta a gran escala el logotipo metálico aportado por el cliente, centrado y recortado sobre transparencia para conservar únicamente el símbolo y las letras en los modos claro y oscuro.
- El recurso central mide 1565 × 1005 px y Astro genera variantes WebP adaptadas al ancho de pantalla. Los logotipos generales también pasan de 370 × 265 px a 970 × 607 px.
- El CTA principal abre la sección única `#presupuesto`, correspondiente al formulario “Solicitá tu presupuesto”; el bloque de precios usa `#precios` para evitar identificadores duplicados.
- La portada fue revisada en escritorio y a 390 × 844 px. Los dos CTA, el cambio de tema y las versiones ES/PT/EN conservan su destino y contenido.
- La animación de entrada queda desactivada con `prefers-reduced-motion: reduce`.
- El primer viewport adapta el tamaño del logo y el espaciado según ancho y alto para mostrar juntos la marca, la propuesta, la descripción y ambos CTA en escritorio y móvil; las señales de confianza comienzan después de ese plano inicial.
- Validación: 67 páginas; Astro check con 0 errores, 0 warnings y 0 hints; sin errores de consola en la portada local.

## Etapa 3 preparada — 2026-09-12

- La portada incorpora el recorrido Desengrasa → Desinfecta → Coagulación y Floculación → Control de olor inmediatamente después del bloque de problema y solución.
- El recorrido se presenta horizontalmente en escritorio y verticalmente en móvil, con conectores, numeración e iconografía que mantienen visible la secuencia.
- Cada etapa enlaza a una URL compartible del catálogo mediante `?etapa=...`; el catálogo muestra solo los productos que declaran esa función, incluso cuando un producto participa en más de una etapa.
- El estado filtrado identifica la etapa activa y ofrece volver a la línea completa. Al usar el filtro existente por categoría se elimina el parámetro de etapa para evitar estados contradictorios.
- Los textos están disponibles en español, portugués e inglés. Una nota visible aclara que el recorrido es general y que la selección y aplicación exactas dependen del proceso de cada planta.
- Validación: 67 páginas; Astro check con 0 errores, 0 warnings y 0 hints; revisión a 1280 × 720 y 390 × 844 en claro y oscuro, sin desbordamiento horizontal ni errores de consola.

## Ajuste de mensaje posterior a la etapa 3 — 2026-09-12

- El hero pasa de enumerar familias químicas a comunicar tres resultados: proceso limpio, efluente dentro de norma y planta en marcha.
- La descripción presenta la línea en el orden del recorrido aprobado: desengrase → desinfección → coagulación y floculación → control de olor.
- La descripción SEO de inicio usa la misma jerarquía. Español, portugués e inglés se actualizaron juntos con redacción natural en cada idioma.
- “La línea completa” y “Cómo cambia con 3S” adoptan el mismo orden; este último usa la fórmula institucional “Elaboramos una gama de productos…”. La ficha del Policloruro de Aluminio indica “Coagulante en solución”.
- Validación: 67 páginas; Astro check con 0 errores, 0 warnings y 0 hints. El contenido completo, incluidos ambos CTA, entra en 1280 × 720, 390 × 844 y 375 × 667, sin desbordamiento horizontal ni errores de consola.

## Etapa 4 preparada — 2026-09-12

- El catálogo permite combinar la familia institucional y la etapa del proceso. Ambos estados se reflejan en `familia` y `etapa`, por lo que cada resultado puede compartirse mediante su URL.
- Los filtros inválidos se descartan, el conteo se actualiza en vivo, las combinaciones vacías muestran un estado explícito y un único control restablece la línea completa.
- Las familias mantienen el orden Limpieza industrial → Desinfección industrial → Tratamiento de efluentes y aguas residuales; las etapas mantienen Desengrasa → Desinfecta → Coagulación y Floculación → Control de olor.
- El selector del formulario se agrupa por las tres familias y conserva el orden canónico de los 19 productos. Las fichas muestran su familia, enlazan sus etapas y recomiendan productos de la misma familia.
- `ItemList`, grillas, selectores y relacionados parten del mismo arreglo ordenado de productos. No se cambian slugs ni rutas publicadas.
- Validación: 67 páginas; Astro check con 0 errores, 0 warnings y 0 hints; filtros combinados, URL, estado vacío, limpieza, selector y fichas comprobados en navegador; vista móvil a 390 × 844 sin desbordamiento ni errores de consola.

## Etapa 5 preparada — 2026-09-12

- Los textos institucionales reemplazan “Fabricamos” y sus equivalentes por la fórmula “Elaboramos una gama de productos…” o una adaptación natural según el contexto.
- El catálogo, los beneficios y los metadatos reflejan los 19 productos actuales en español, portugués e inglés.
- La redacción conserva las afirmaciones técnicas del catálogo: en la ficha del Sulfato de Aluminio solo se reemplazó la descripción del proceso de fabricación por “elaborado” o “formulado”, sin agregar prestaciones.
- El encabezado, las migas de navegación y la acción accesible para cotizar una presentación anuncian sus controles en el idioma activo.
- Validación: 70 páginas; Astro check con 0 errores, 0 warnings y 0 hints; sin referencias visibles antiguas a 18 productos ni variantes institucionales de “Fabricamos”.

## Etapa 6 preparada — 2026-09-12

- Un Worker mínimo se ejecuta primero únicamente en `/`; el resto de las páginas y recursos sigue servido directamente por Cloudflare Static Assets.
- La entrada interpreta `Accept-Language`, incluidas regiones y prioridades `q`, y usa español cuando el header falta, es inválido o no coincide con `es`, `pt` o `en`.
- El selector del encabezado guarda `3s_locale` durante un año. Esa elección manual tiene prioridad sobre el header y evita que quien vuelve a español sea reenviado por la preferencia del navegador.
- Las redirecciones conservan parámetros, son temporales, declaran `Cache-Control: private, no-store` y varían por `Accept-Language` y `Cookie`. Las rutas explícitas no cambian de idioma ni agregan una redirección de barra.
- Validación: pruebas unitarias y solicitudes HTTP contra los runtimes local y remoto temporal de Wrangler; `npm run build` genera 70 páginas sin errores, warnings ni hints; `wrangler deploy --dry-run` empaqueta el Worker y el binding de assets.
- La cuenta tiene registrado `marcobacchetta95.workers.dev` y usa el patrón temporal `*-grupo3s.marcobacchetta95.workers.dev` para previews. La sesión remota confirmó en Cloudflare las redirecciones por idioma, el fallback, la preferencia manual, la conservación de parámetros y las rutas explícitas. No se ejecutó un despliegue persistente ni se modificó producción.

## Etapa 7 preparada — 2026-09-12

- La revisión integral cubre portada, navegación, catálogo, filtros combinados, estado vacío, fichas, formulario sin envío, idiomas ES/PT/EN, temas claro y oscuro, y vistas de 1440 × 900 y 390 × 844.
- El primer viewport muestra juntos el logotipo central, la propuesta de valor, la descripción y ambos CTA, sin desbordamiento horizontal en escritorio ni móvil.
- Se corrigió el menú móvil para que también se cierre al usar el CTA, los enlaces de idioma y cualquier otro destino dentro del panel.
- Se eliminó el conector horizontal que todavía unía los números de “Cómo trabajamos”.
- En la página 404, el selector de idioma ahora lleva a la portada correspondiente y no construye rutas inexistentes como `/pt/404` o `/en/404`.
- Se verificaron los 19 productos, el orden del recorrido, “Coagulante en solución”, Desinox, el correo `3sgrupoindustrial@gmail.com`, los logos de header y footer en ambos temas y la acción del CTA hacia `#presupuesto`.
- Validación: 70 páginas; Astro check con 0 errores, 0 warnings y 0 hints; 3 pruebas del Worker aprobadas; 3.598 referencias internas, anclas y recursos estáticos revisados sin faltantes; sin errores ni warnings de consola en las rutas inspeccionadas.

## Etapa 7 integrada — 2026-09-12

- Con autorización explícita del responsable, `codex/07-revision-integral` se integró en `development` (`a3aff87`, merge `--no-ff`) tras un build de 70 páginas sin errores y 3 pruebas del Worker aprobadas. La rama se eliminó local y remotamente.

## Etapa 8 preparada — 2026-09-12

Objetivo: que quien busque “3s grupo industrial” o “3S” desde Paraguay encuentre la empresa en la primera página.

- **Indexación.** `robots.txt` ya no bloquea `/gracias`: antes, Google no podía leer su `noindex`, y `/pt/gracias` y `/en/gracias` no estaban bloqueadas. El sitemap excluye las confirmaciones y la 404 y pasa de 69 a 66 URLs. Las páginas `noindex` ya no emiten canonical ni hreflang; la 404 apuntaba a `/pt/404` y `/en/404`, que no existen.
- **Marca y metadatos.** El title de inicio empieza con “3S Grupo Industrial” en los tres idiomas. Las fichas suman su familia traducida, así que ya no repiten el mismo título en ES, PT y EN. Se agregó `og:locale:alternate`. Sobre el titular del hero hay una línea visible “3S Grupo Industrial S.R.L. · Asunción, Paraguay”; el eslogan no cambió.
- **Datos estructurados.** Se agregaron `WebSite` (`alternateName` “3S” y la razón social) y `WebPage` por página indexable, enlazado a las migas. `Organization` suma `contactPoint`, `areaServed` y `knowsAbout` con las familias y etapas visibles. `LocalBusiness` pierde `priceRange`, que era inventado, y conserva el horario confirmado, ahora visible en el footer. No se agregaron precios, certificaciones ni coordenadas.
- **SEO local y contenido.** El footer muestra horario, cobertura nacional y accesos a las 3 familias y las 4 etapas en orden canónico. Las volantas y el nombre accesible del selector de idioma, que estaban fijos en español, ahora se traducen. La sección de testimonios de ejemplo no se renderiza mientras tenga placeholders. La tabla de especificaciones de la portada se agrupa por familia: antes empezaba por efluentes.
- **Rendimiento.** El logo y el mensaje del hero ya no dependen del revelado por JS, y la animación del logo usa solo movimiento. La variante oculta del logo del header carga en diferido. Las anclas localizadas usan `/en#x` en lugar de `/en/#x`, así que se evita una redirección por barra final.
- **Acciones externas.** Business Profile, Search Console, redes, reseñas y directorios quedan documentados en [guia-google.md](guia-google.md).
- **Validación.**
  - `npm run build`: 70 páginas; astro check con 0 errores, 0 warnings y 0 hints.
  - `npm run test:locale`: 3/3 pruebas aprobadas.
  - `git diff --check`: sin problemas.
  - Auditoría de `dist/`: 0 errores. Titles y descriptions únicos, un h1 por página, canonical y hreflang recíprocos en las 66 páginas indexables, sitemap idéntico a esas páginas, JSON-LD válido con los tipos esperados y 7.922 referencias internas, anclas y recursos sin faltantes.
- **Revisión en navegador (Playwright sobre `astro preview`, sin red externa).**
  - 1440 × 900, 390 × 844 y 375 × 667, en claro y oscuro: sin desbordamiento horizontal y con ambos CTA dentro del primer viewport.
  - Menú móvil y salto de teclado funcionan.
  - El formulario valida los campos sin enviar nada: no hubo POST.
  - El catálogo muestra 19 productos, con familias y etapas en orden y canonical sin parámetros.
  - PAC muestra “Coagulante en solución” y la ficha de Desinox está correcta.
  - La consola solo muestra el 404 intencional de una ruta inexistente.
  - LCP local (logo central): 64–80 ms; CLS ≤ 0,004.
- **Pendientes y recomendaciones.** Muchas descripciones de ficha superan los 160 caracteres y los títulos con la familia de efluentes son largos: Google los recorta. Acortarlos requiere validar la redacción con el PO. Las páginas propias por familia o etapa quedan como decisión de arquitectura del PO.
- No se ejecutó deploy ni se modificaron `main`, Cloudflare, Vercel ni DNS.
