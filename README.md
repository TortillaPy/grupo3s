# Landing 3S Grupo Industrial

Sitio estático (Astro 7 + Tailwind 4) para **3S Grupo Industrial S.R.L.** —
productos químicos y biológicos para tratamiento de aguas residuales
industriales e higiene sanitaria.

Sin backend, sin base de datos, sin funciones serverless. El resultado de
`npm run build` es una carpeta `dist/` que se sube tal cual a Cloudflare
Pages, Netlify, Vercel o GitHub Pages.

> **Terminado: las siete fases.** 67 páginas en tres idiomas, los dos
> caminos de conversión funcionando y Lighthouse mobile en 100 en las
> cuatro categorías. Lo que queda por hacer del lado del cliente está
> en `plan.md`.

## Correr el proyecto

```bash
npm install
cp .env.example .env     # completá PUBLIC_WEB3FORMS_KEY
npm run dev              # http://localhost:4321
```

| Comando | Qué hace |
| --- | --- |
| `npm run dev` | Servidor de desarrollo con recarga en caliente |
| `npm run build` | Chequeo de tipos + build estático en `dist/` |
| `npm run preview` | Sirve `dist/` como lo haría el hosting |
| `npm run check` | Solo el chequeo de tipos |

## Dónde se cambia cada cosa

Todo el contenido editable vive en `src/data/`. Ningún componente tiene
texto escrito adentro del markup.

| Quiero cambiar… | Archivo | Campo |
| --- | --- | --- |
| **El número de WhatsApp** | `src/data/config.ts` | `contacto.whatsapp` |
| **Teléfonos, correo, dirección** | `src/data/config.ts` | `contacto` |
| **Redes sociales** | `src/data/config.ts` | `contacto.redes` (las que tienen `url: ''` no se muestran) |
| **Mostrar u ocultar precios** | `src/data/config.ts` | `precios.isVisible` |
| **Los precios** | `src/data/products.ts` | `presentaciones[].precio` |
| **Productos, presentaciones, especificaciones** | `src/data/products.ts` | — |
| **Cualquier texto en español** | `src/data/content.es.ts` | — |
| **Las imágenes** | `src/assets/images/` | pisá el archivo conservando el nombre |
| **Los colores de marca** | `src/styles/global.css` | bloque `@theme` |

### El interruptor de precios

`config.precios.isVisible` controla **dos cosas a la vez**: si se
renderiza el componente de precio, y si el JSON-LD emite el nodo
`offers`. Están atados a propósito. Google exige `price` y
`priceCurrency` reales dentro de `offers`, y publicar un precio inventado
para conseguir el fragmento enriquecido es motivo de acción manual sobre
el dominio. Cuando cargues precios reales en `products.ts`, poné el
booleano en `true` y las dos cosas se prenden juntas.

### Las imágenes

Van en `src/assets/images/` (no en `public/`) para que Astro las procese:
genera WebP en varios tamaños, calcula `width` y `height` y emite el
`srcset`. Eso es lo que evita el desplazamiento de layout.

Son las del catálogo institucional, recortadas. Hay tres juegos de 18,
uno por producto, nombrados por el `slug` del producto:

| Carpeta | Qué contiene |
| --- | --- |
| `productos/` | Envases recortados sobre fondo blanco |
| `marcas/` | Banner con el nombre y el descriptor de cada producto |
| `aplicaciones/` | Foto de uso real en planta |
| `marca/` | Logotipo de 3S |
| `public/og/` | Imagen de previsualización 1200 × 630 para WhatsApp y redes |

Para reemplazar una foto: pisá el archivo **conservando el nombre**. Si
cambiás el nombre, actualizá el campo `src` correspondiente en
`products.ts` o en `content.es.ts`.

Lo que todavía conviene reemplazar por fotos propias de mejor calidad:
la del hero (hoy es la foto de aplicación del Policloruro de Aluminio,
en 400 × 410 px, que se ve bien pero es chica) y las seis de la galería.
Cualquier foto nueva de planta o laboratorio en 1600 × 1200 mejora
bastante el resultado.

## Contenido confirmado

Los plazos, condiciones comerciales y textos del FAQ quedaron
confirmados por el cliente el 4 de septiembre de 2026 y se publican tal
como están escritos en `content.es.ts`.

Queda un punto abierto, desarrollado en `plan.md`: **el alcance real del
asesoramiento técnico**. Hasta definirlo, el sitio promete solo lo que
es seguro —recomendación de producto, presentación y dilución— y no
menciona visitas a planta ni acompañamiento de arranque.

## Estructura

```
src/
  components/layout/     Header\n  components/ui/         Button, WhatsAppLink, Section, BotonWhatsAppFlotante
  components/sections/   una sección de la landing por archivo
  data/                  todo el contenido editable (ver tabla de arriba)
  layouts/Layout.astro   <head>, meta, canónica, hreflang, JSON-LD
  lib/imagenes.ts        resuelve las rutas de products.ts a módulos de imagen
  styles/                tokens de marca y fuentes self-hosted
public/                  robots.txt, favicon, imagen de Open Graph
```

## Idiomas

Español rioplatense (`es-PY`) en la raíz, portugués de Brasil (`pt-BR`)
bajo `/pt` e inglés de Estados Unidos (`en-US`) bajo `/en`. El selector
está en el header y **mantiene la página**: si estás en la ficha del
Decuat y cambiás a inglés, vas a `/en/productos/decuat`, no a la
portada.

Cada idioma es un archivo en `src/data/`: `content.es.ts`,
`content.pt.ts`, `content.en.ts`. Los tres tienen exactamente la misma
forma porque el tipo `Contenido` lo obliga: si falta una clave, el build
falla antes de publicar nada.

**Para agregar o quitar un idioma** alcanza con tocar el objeto
`registro` en `src/data/content.ts`. El selector, el `hreflang`, el
sitemap y las rutas con prefijo leen de ahí: aparecen y desaparecen
solos.

Los nombres de los productos no se traducen —son marca— y los `slug`
son los mismos en los tres idiomas, así que `/productos/decuat`,
`/pt/productos/decuat` y `/en/productos/decuat` son la misma ficha en
tres idiomas y así lo declaran entre sí con `hreflang` recíproco, tanto
en el `<head>` como en el sitemap.

## Resultados de la auditoría

Lighthouse mobile, medido sobre `npm run preview`:

| Página | Perf. | Accesibilidad | Buenas prácticas | SEO |
| --- | --- | --- | --- | --- |
| `/` | 100 | 100 | 100 | 100 |
| `/productos` | 100 | 100 | 100 | 100 |
| `/productos/bioperacid` | 100 | 100 | 100 | 100 |
| `/pt` | 100 | 100 | 100 | 100 |
| `/en/productos/stronger` | 100 | 100 | 100 | 100 |

Desplazamiento acumulado de layout: **0** en todas. Bloqueo del hilo
principal: **0 ms**. Todo el JavaScript va inlineado en el HTML y suma
muy por debajo de los 30 KB comprimidos del objetivo.

Dos correcciones de accesibilidad salieron de esta auditoría y quedaron
documentadas en el código:

- El gris de la banda del flyer (`#8b8b8b`) da 3,3:1 sobre el fondo
  hueso y no llega al 4,5:1 que exige AA en texto normal. El token
  `--color-gris` es ahora una versión oscurecida que conserva el sesgo
  cálido y da 4,9:1; el gris original quedó como `--color-gris-marca`,
  solo para fondos y overlays sobre foto.
- En el catálogo, las tarjetas de producto colgaban del `h1` con un
  `h3`, saltando el `h2`. La tarjeta ahora recibe el nivel por prop:
  2 en el catálogo, 3 dentro de la sección "De la misma familia" de una
  ficha, que ya tiene su propio `h2`.

## Despliegue

El resultado de `npm run build` es la carpeta `dist/`: HTML, CSS,
imágenes y nada más. No hay servidor que mantener ni base de datos que
respaldar.

### Cloudflare Pages (recomendado)

Ancho de banda ilimitado en el plan gratuito y presencia en Sudamérica,
que es lo que se nota desde Paraguay.

1. Subí el proyecto a un repositorio de GitHub o GitLab.
2. En el panel de Cloudflare: **Workers & Pages → Create → Pages →
   Connect to Git**, y elegí el repositorio.
3. Configuración de build:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
4. En **Settings → Environment variables**, agregá
   `PUBLIC_WEB3FORMS_KEY` con tu access key, para Production y para
   Preview. **Sin esto el formulario no envía.**
5. Guardá y desplegá. Cada `git push` a la rama principal republica solo.

Para conectar el dominio: **Custom domains → Set up a custom domain**,
escribí `3sgrupoindustrial.com.py`, y cargá en NIC.py los servidores de
nombres que Cloudflare te indique.

### Netlify

Misma idea, con un tope de 100 GB de tráfico al mes en el plan gratuito.

1. **Add new site → Import an existing project**, elegí el repositorio.
2. Build command `npm run build`, publish directory `dist`.
3. **Site configuration → Environment variables**: agregá
   `PUBLIC_WEB3FORMS_KEY`.
4. **Domain management → Add a domain** para conectar el dominio.

### Sin repositorio, subiendo la carpeta

Si preferís no usar Git: corré `npm run build` en tu máquina y arrastrá
la carpeta `dist` a Cloudflare Pages (**Upload assets**) o a Netlify
Drop. Ojo con esto: la variable de entorno se aplica **en el build**,
así que el `.env` local tiene que tener la access key antes de correr
`npm run build`.

### El dominio

`3sgrupoindustrial.com.py` se registra en **NIC.py**, que es el único
registrante del `.py`: no hay competencia de precio ni alternativa.
Conviene reservarlo antes de publicar, no después.

### Después de publicar

1. Dar de alta el sitio en **Google Search Console** y enviar
   `https://3sgrupoindustrial.com.py/sitemap-index.xml`.
2. Pasar la portada y una ficha de producto por la **prueba de
   resultados enriquecidos** de Google, para confirmar que el marcado
   `FAQPage` y `Product` se lee bien.
3. Reclamar la ficha de **Google Business Profile** con la dirección de
   Pilar 1717, que es lo que conecta el marcado `LocalBusiness` con
   Google Maps.

## Fuentes

Self-hosted, sin una sola llamada a Google Fonts. **Chivo Variable** para
titulares y **IBM Plex Sans Variable** para cuerpo, cargadas desde
`node_modules` y emitidas por Astro con hash. Solo se declara el
subconjunto `latin`, que cubre español y portugués completos: dos
archivos `.woff2` en el build en lugar de nueve.

## Páginas

Cada ruta existe en los tres idiomas: español en la raíz sin prefijo,
portugués bajo `/pt` e inglés bajo `/en`.

| Ruta | Qué es |
| --- | --- |
| `/` | La landing completa, doce secciones |
| `/productos` | Catálogo de los 18, con filtro por familia |
| `/productos/[slug]` | Una ficha por producto: 18 URLs indexables |
| `/gracias` | Confirmación después de enviar el formulario, fuera del índice |
| `/politica-privacidad` | Política de privacidad, editable en `content.es.ts → privacidad` |
| `/404` | Página de error, fuera del índice de Google |

Las fichas se generan solas con `getStaticPaths` a partir de
`products.ts`: agregar un producto ahí crea su página, su entrada en el
catálogo, su fila en la tabla de la portada y su URL en el sitemap. El
`slug` es la URL, así que **no conviene cambiarlo después de publicar**:
rompe el enlace y borra el posicionamiento acumulado.

## Faltan (ver `plan.md`)

- Fase 6: auditoría Lighthouse y despliegue
- Fase 7: portugués de Brasil e inglés de EE. UU.

## El formulario

Vive en `src/components/sections/FormPresupuesto.astro` y aparece en la
portada y en cada ficha de producto —ahí con el producto ya
preseleccionado en el select—.

**Para que envíe hay que configurar la access key.** Entrá a
https://web3forms.com, poné el correo donde querés recibir las
solicitudes, confirmá el mail que te llega, copiá la key y pegala en
`.env` como `PUBLIC_WEB3FORMS_KEY`. Al desplegar, cargá esa misma
variable en el panel de Cloudflare Pages o Netlify: sin ella el
formulario muestra un aviso y no envía.

**Para cambiar de proveedor**, poné `proveedor: 'formspree'` en
`config.formulario` y completá su endpoint en `endpoints.formspree`. El
componente no cambia.

Tiene cuatro estados visibles: normal, enviando (botón deshabilitado,
spinner y `aria-busy`), éxito (redirige a `/gracias`) y error (caja con
`role="alert"`, el botón pasa a "Reintentar el envío" y **nada de lo que
la persona escribió se pierde**). La validación corre en el cliente
antes de enviar, marca los campos con `aria-invalid`, muestra el mensaje
debajo de cada uno y lleva el foco al primero que falla.

El campo trampa antispam es `sitio_web`, definido en
`config.formulario.honeypot`: está fuera de la vista y fuera del orden
de tabulación, así que una persona no lo toca nunca. Si viene completo,
el envío se descarta sin llegar a la red.

## Marcado para buscadores

Todas las páginas emiten `Organization` y `LocalBusiness`. La portada
suma `FAQPage`, armado a partir del mismo array que renderiza el
acordeón: no puede quedar desincronizado con lo que el usuario ve, que
es justamente lo que Google exige. El catálogo emite `ItemList` y
`BreadcrumbList`; cada ficha emite `Product` con sus especificaciones
como `additionalProperty`, más su propio `BreadcrumbList`.

No se emite `Product` con `offers` mientras los precios estén ocultos.
Google pide `price` y `priceCurrency` reales dentro de `offers`, y
publicar un precio inventado para conseguir el fragmento enriquecido es
motivo de acción manual sobre el dominio.
