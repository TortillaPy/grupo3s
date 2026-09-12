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

## Entregas

El seguimiento y las condiciones de aprobación están en [docs/IMPLEMENTATION_PLAN.md](docs/IMPLEMENTATION_PLAN.md).
