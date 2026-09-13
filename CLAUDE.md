# Reglas del proyecto

## Flujo de trabajo aprobado

- `main` representa producción. `development` es la única rama de integración; “dev” significa `development`.
- Crear cada etapa en una rama `codex/NN-descripcion` desde `development` actualizado. No commitear directamente en `main` ni en `development`.
- Abrir un PR por etapa con base `development`. Presentar alcance, cambios, pruebas y pendientes; esperar aprobación explícita antes del merge.
- Después de integrar una etapa aprobada, crear la siguiente rama desde `development` actualizado.
- No interpretar la aprobación de una etapa como autorización de deploy. Solo tras la aprobación integral abrir e integrar el PR `development` → `main` y publicar.
- Antes de publicar ramas, comprobar que las integraciones de hosting separan previews y producción. No ejecutar `npm run deploy` durante las etapas.
- Al iniciar, verificar el commit desplegado y registrar un tag de respaldo. No asumir que `origin/main` coincide con producción sin evidencia o confirmación.
- Preservar cambios locales y ramas pendientes. No incorporar trabajo anterior ni mover referencias por fuerza sin revisar su alcance.
- Cada etapa: commits claros y pequeños, validación técnica y revisión del diff antes del PR. No iniciar una etapa si la anterior no está integrada en `development`.
- Tras aprobar y mergear una etapa, eliminar su rama local y remota si no contiene trabajo pendiente.
- Antes de cualquier operación Git importante, verificar rama actual, estado del working tree, diferencias con `development` y cambios sin commitear.
- Sin comandos destructivos: nada de `git reset --hard`, `git checkout --` ni force push. Buscar con `rg` y editar con parches puntuales.

## Seguridad y pruebas

- No modificar DNS, dominios, variables sensibles ni configuración de producción sin autorización explícita.
- No exponer claves, tokens ni valores de `.env`.
- Nunca enviar formularios reales ni mensajes de WhatsApp durante las pruebas; validar solo campos y enlaces generados.

## Entornos de hosting

- Vercel es exclusivamente desarrollo: development para la versión integrada y ramas de etapa para previews.
- Cloudflare es producción: publicar únicamente main tras aprobación final.
- Configurar y verificar estos filtros en los proveedores; documentar la intención en el repositorio no modifica sus ajustes remotos.
- La detección Accept-Language del Worker se verifica en un entorno aislado de Workers: Vercel no ejecuta wrangler.jsonc ni replica automáticamente ese runtime.

## Contenido y diseño

- Mantener contenido en `src/data/` y las traducciones es/en/pt sincronizadas; conservar slugs y URLs.
- Familias: Limpieza industrial; Desinfección industrial; Tratamiento de efluentes y aguas residuales.
- Recorrido: Desengrasa; Desinfecta; Coagulación y Floculación; Control de olor.
- Familias y etapas son dimensiones diferentes. No forzar clasificaciones ni inventar funciones técnicas; validar asignaciones dudosas con el PO.
- Usar la redacción institucional “Elaboramos una gama de productos…” con concordancia y traducciones naturales.
- Dar protagonismo al logo en portada, preservando proporciones, verdes y separación de grises. Validar claro/oscuro y móvil/escritorio.
- Consultar CONTRIBUTING.md y CONTRIBUTING.es.md para las convenciones de código. Ejecutar verificaciones pertinentes antes de presentar cada etapa.
- El catálogo tiene 19 productos. El orden de familias y del recorrido es imperativo y el flujo de las páginas debe reflejarlo.
- Policloruro de Aluminio 3S figura como “Coagulante en solución”. Correo oficial: `3sgrupoindustrial@gmail.com`. Nunca usar variantes de “Fabricamos”.
- No eliminar productos, no cambiar slugs publicados salvo necesidad estricta, no reemplazar logo ni favicon y no agregar librerías innecesarias.

## SEO

- Objetivo: que quien busque “3s grupo industrial” o “3S” desde Paraguay encuentre la empresa en la primera página.
- Title y description únicos por página e idioma; canonical y hreflang coherentes; `noindex` en gracias y 404, fuera del sitemap.
- Los datos estructurados deben coincidir con el contenido visible: no inventar precios, certificaciones, horarios ni datos comerciales.
- Si una mejora SEO requiere una decisión de negocio, detenerse y consultarla. Las acciones externas (Search Console, Business Profile) están en [docs/guia-google.md](docs/guia-google.md).
- Validar con `npm run build`, `npm run test:locale`, `git diff --check`, auditoría de enlaces y metadatos sobre `dist/` y revisión en navegador (1440×900, 390×844, 375×667; claro y oscuro).

## Entregas

El seguimiento y las condiciones de aprobación están en [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md).
