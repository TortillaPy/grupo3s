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
- Pendientes: verificar y corregir las políticas remotas de ramas; crear el proyecto productivo independiente en Cloudflare; crear tag de respaldo; publicar development y rama de etapa; abrir PR sin merge.
- Build base ejecutado con éxito: 67 páginas; Astro check: 0 errores, 0 warnings, 0 hints.
- Aclaración del usuario: Vercel será desarrollo y Cloudflare producción. La configuración remota aún no está verificada ni modificada.
- El conector Vercel reconoce el equipo team_ioP9MpejBnkRtWvhJ5vMsiEF, pero list_projects devuelve una lista vacía y grupo3s devuelve 404. El status histórico de GitHub no demuestra acceso actual al proyecto.
- development se mantiene local sin upstream a main para evitar pushes/pulls ambiguos. No se publicó ninguna rama ni tag; no se creó PR ni se mergeó.
- La etapa 0 está preparada localmente, pendiente de corregir la separación real de hosting.

## Segunda verificación de hosting — 2026-09-12

- Cloudflare ya está autenticado mediante OAuth como marcoantonsson@gmail.com, cuenta d36de7e06c8009c38013b9346396db86.
- Consultar deployments de grupo3s devuelve error 10007: el Worker no existe en esa cuenta. Esto no prueba que no exista bajo otro nombre o cuenta.
- La consulta Pages project list terminó correctamente sin proyectos listados.
- Vercel list_teams sigue mostrando tortillapys-projects y list_projects sigue devolviendo una lista vacía.
- No existe vínculo local .vercel/project.json. La configuración local de Wrangler sigue apuntando a grupo3s y dist.
- Falta identificar los proyectos remotos reales mediante sus URLs de dashboard o acceso a las cuentas correspondientes. No se puede verificar el commit desplegado ni los filtros de ramas todavía.
- No se cambiaron configuraciones de hosting, ni se publicó, mergeó o desplegó ningún cambio.

## Verificación por dominios públicos — 2026-09-12

- `https://grupo3s.vercel.app/` responde HTTP 200 con `server: Vercel`.
- `https://3sgrupoindustrial.com.py/` responde HTTP 200 con `server: cloudflare`.
- Los documentos HTML de ambas portadas son idénticos byte por byte (SHA-256 local `104d87c407485e01dc48c455d717e1bbe9d7255ee038b9755104121f031e21ae`; comparación sin diferencias).
- La ficha pública conserva “Coagulante inorgánico polimerizado” y usa los hashes de logos anteriores. Esto coincide con `main` en `47ac11b` y descarta las ramas de correcciones y logo como fuente del despliegue actual.
- El dominio productivo usa la red de Cloudflare, pero no corresponde a un proyecto Workers/Pages accesible en la cuenta autenticada. La evidencia indica que Cloudflare está actuando como proxy/CDN delante del despliegue de Vercel.
- Estado actual: Vercel y Cloudflare muestran el mismo build. La arquitectura solicitada —Vercel para desarrollo y un despliegue independiente en Cloudflare para producción— todavía no existe.
- No se modificará DNS ni se creará el Worker productivo durante las etapas. Esa migración se preparará y verificará en preview, y requerirá aprobación final antes del cambio de producción.
