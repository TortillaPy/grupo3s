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
| 8 | PR development → main | Release aprobado, deploy y smoke check, registro de versión y sincronización | Producción verificada y respaldo disponible |

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
