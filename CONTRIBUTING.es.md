# Cómo colaborar

🇬🇧 [Read in English](CONTRIBUTING.md)

Gracias por sumarte al sitio de 3S Grupo Industrial. Es un proyecto
Astro chico, estático y sin backend — la barrera de entrada es baja,
pero hay algunas convenciones que mantienen el código consistente a
medida que más gente lo toca. Leé esto antes de abrir un PR.

Para entender qué *es* el proyecto y cómo está organizado, empezá por
el [README](README.es.md).

## Puesta en marcha

```bash
git clone git@github.com:TortillaPy/grupo3s.git
cd grupo3s
npm install
cp .env.example .env     # completá PUBLIC_WEB3FORMS_KEY, ver el README
npm run dev               # http://localhost:4321
```

Hace falta Node.js 18+ y npm. No hay base de datos, no hay más API keys
que la del proveedor del formulario, y no hay servicios externos que
simular.

## Reglas de base de este código

No son preferencias de estilo: son patrones de los que el proyecto ya
depende. Romperlos hace fallar el build (TypeScript lo detecta) o
reintroduce en silencio un bug que ya se había corregido una vez.

### 1. El contenido vive en `src/data/`, nunca en el markup

Ningún componente tiene texto escrito adentro de su template. Si estás
agregando o cambiando un texto visible, va en `content.es.ts` (y sus
equivalentes `.pt` y `.en` — ver el punto siguiente), no adentro de un
`.astro`.

### 2. El sitio es trilingüe, y TypeScript lo obliga

`src/data/content.es.ts`, `content.pt.ts` y `content.en.ts` implementan
todos el mismo tipo `Contenido` (`src/data/types.ts`). Si agregás,
renombrás o sacás una clave de contenido, tenés que hacerlo en **los
tres archivos** dentro del mismo PR, o `npm run build` falla en el
chequeo de tipos antes de tocar el build. El español es la fuente de
verdad — ante la duda sobre una redacción, escribí primero el español y
traducí desde ahí.

No traduzcas los nombres de producto ni los `slug`: son los mismos en
los tres idiomas a propósito (ver la sección "Idiomas" del README para
el porqué).

### 3. Los colores y las medidas salen de los tokens de diseño, no de literales

Cada color de marca es una custom property de CSS declarada una sola
vez en `src/styles/global.css`, adentro del bloque `@theme`, y se usa a
través de las utilidades de Tailwind que genera (`bg-hueso`,
`text-grafito`, `text-verde-oscuro`, …). No uses un color crudo de la
paleta de Tailwind (`bg-white`, `text-gray-500`, valores hex sueltos)
para nada que deba verse "de marca" o que aparezca sobre una superficie
normal de la página — se va a ver inconsistente, y se va a romper en
silencio en modo oscuro, porque solo las utilidades basadas en token
saben adaptarse al tema.

Hay dos excepciones, y están comentadas donde aparecen: los colores que
van sobre los paneles permanentemente oscuros (el hero, el logotipo
oscuro del footer, el lightbox de la galería) quedan fijados con un
valor literal a propósito, porque esos paneles no cambian entre modo
claro y oscuro. Si agregás uno nuevo de este tipo, seguí el patrón
existente y dejá un comentario explicando *por qué* está fijado — la
próxima persona (o vos mismo en seis meses) necesita ese contexto para
no "corregirlo" de vuelta a un token.

### 4. El modo oscuro se maneja por token — no armes clases `dark:` a mano para colores de marca

Si un color ya es un token (`--color-*` en `global.css`), o ya tiene
una reasignación bajo `.dark`, o a propósito no la tiene (porque es uno
de los colores fijos de panel oscuro de arriba). Agregar un override
`dark:bg-...` a nivel de componente para un color que ya es un token
casi siempre está mal — significa que el valor oscuro del token está
mal, y la corrección va en `global.css`, no repartida por los
componentes. El único lugar legítimo para un override `dark:bg-[...]`
es un botón o panel de relleno sólido cuyo token se aclaró para su rol
de *texto* en modo oscuro y ahora necesita que su rol de *relleno
sólido* quede fijado — ese patrón está documentado en `Button.astro` y
`Section.astro`.

### 5. La accesibilidad es estructural, no decorativa

Este proyecto tiene 100 de Lighthouse en accesibilidad, y hay
comentarios en el código específicamente para mantenerlo así — los
ratios de contraste están calculados y escritos al lado del color que
justifican. Si tocás un color de texto, un estilo de foco o un elemento
interactivo:

- Mantené el texto de cuerpo en 4,5:1 de contraste mínimo contra su
  fondo (AA). Si no estás seguro, calculalo — no lo estimes a ojo.
- Nunca saques el estilo de `:focus-visible`. Si un componente necesita
  un tratamiento de foco distinto (por ejemplo sobre un panel oscuro),
  seguí el patrón existente de `.bg-carbon :focus-visible` en vez de
  sacar el contorno.
- Todo elemento interactivo necesita un nombre accesible (`aria-label`,
  texto visible o texto `sr-only`) — no alcanza con un color o un
  ícono.
- Respetá `prefers-reduced-motion`. Las animaciones se desactivan, no
  se acortan.

### 6. Las imágenes van en `src/assets/images/`, no en `public/`

Todo lo que se referencia desde `src/assets/images/` pasa por el
pipeline de imágenes de Astro (WebP responsive, `width`/`height`
explícitos, cero desplazamiento de layout). `public/` es solo para
archivos que tienen que servirse tal cual, byte a byte (favicon,
`robots.txt`, la imagen de Open Graph). Mirá la sección "Las imágenes"
del README para las convenciones de nombre y recorte antes de sumar
fotos de producto nuevas.

### 7. Los comentarios explican el *por qué*, no el *qué*

El estilo de comentarios del código es deliberado: un comentario existe
solo cuando la intención del código no es obvia leyéndolo — una
restricción, un trade-off, un número que parece arbitrario pero no lo
es. No agregues comentarios que repitan lo que el código ya dice, y
tampoco dejes sin explicar una decisión que no sea obvia.

### 8. No sumes una dependencia para ahorrarte unas líneas

Es un sitio estático con el objetivo explícito de casi cero JavaScript
y sin backend. Antes de sumar un paquete de npm, fijate si el problema
es lo bastante chico como para resolverlo con unas líneas de
TypeScript o CSS puro — hasta ahora, casi siempre fue la decisión
correcta. Si de verdad necesitás una dependencia, explicá por qué en la
descripción del PR.

## Flujo de git

- Hosting: Vercel es desarrollo (rama de integración y previews); Cloudflare es producción (solo main después de aprobación final). Verificar estos ajustes en cada proveedor.
- `main` es producción; `development` es la rama de integración (también llamada “dev”).
- Crear cada etapa desde `development` actualizado, con nombre `codex/NN-descripcion`.
- Nunca commitear directamente en `main` ni en `development`. Abrir un PR acotado por etapa con destino a `development`.
- Presentar cambios y verificaciones, y esperar aprobación explícita antes de mergear cada etapa. Crear la siguiente rama desde `development` actualizado después del merge aprobado.
- Usar mensajes de commit como `feat:`, `fix:`, `docs:` o `refactor:` con un resumen claro.
- Verificar las ramas configuradas en el hosting antes de pushear. Los previews deben estar separados de producción; no ejecutar `npm run deploy` durante las etapas.
- Tras la revisión integral y aprobación final, abrir el PR de release de `development` a `main`, mergear y desplegar. Aprobar una etapa no autoriza publicar producción.
- Verificar el commit desplegado y crear un tag de respaldo al comenzar. Preservar ramas existentes y cambios sin commitear.
- Consultar [CLAUDE.md](CLAUDE.md) y el [plan de implementación](docs/IMPLEMENTATION_PLAN.md).

## Antes de abrir un PR

Repasá esta lista; la mayor parte es un solo comando:

```bash
npm run build   # corre astro check (tipos) + el build estático — tiene que pasar con 0 errores
```

- [ ] `npm run build` pasa sin errores ni warnings nuevos.
- [ ] Si tocaste contenido: los tres idiomas (`content.es.ts`,
      `content.pt.ts`, `content.en.ts`) se actualizaron juntos.
- [ ] Si tocaste un color, un fondo o algo visual: lo revisaste en modo
      claro **y** en modo oscuro (`npm run dev`, el botón del header
      alterna).
- [ ] Si tocaste un formulario, un link o la navegación: lo probaste a
      mano — el chequeo de tipos no detecta un `href` roto ni un
      anchor muerto.
- [ ] Si agregaste una imagen: está en `src/assets/images/`, no en
      `public/`, y sigue las convenciones de nombre y recorte que ya
      existen.
- [ ] Ninguna dependencia de npm nueva sin una razón en la descripción
      del PR.

Todavía no hay suite de tests — el chequeo de tipos de `npm run build`
más una pasada manual por las páginas afectadas es la vara actual. Si
estás sumando algo genuinamente difícil de verificar a mano, decilo en
la descripción del PR en vez de saltear el chequeo en silencio.

## Reportar bugs o proponer cambios

Abrí un issue de GitHub con:

- Qué esperabas vs. qué pasó.
- La página/ruta y, si es visual, una captura (modo claro **y** oscuro
  si el bug tiene que ver con el tema — la mayoría de los bugs de modo
  oscuro reportados hasta ahora fueron exactamente esto: un componente
  que se ve bien en claro pero usa un color crudo en vez de un token).
- Navegador/dispositivo si es específico del renderizado.

Para una funcionalidad nueva o un cambio grande, abrí primero un issue
para acordar el enfoque antes de invertir tiempo en un PR — es un
código chico y con criterio propio, y es más fácil alinear la dirección
antes de que exista el código que después.

## Conducta

Sé directo y sé amable — no están en tensión. Discrepá sobre el código,
no sobre la persona. Es un proyecto comercial chico con un cliente real
y un plazo real detrás, así que mantené el feedback constructivo y
acotado a lo que tenés adelante.
