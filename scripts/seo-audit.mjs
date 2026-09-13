/**
 * Auditoría SEO del build estático (`dist/`). Sin dependencias.
 *
 * Uso, después de `npm run build`:
 *   npm run audit:seo              (audita el proyecto actual)
 *   node scripts/seo-audit.mjs <ruta-al-proyecto>
 *
 * Revisa: title/description únicos y sin placeholders, un h1 por página,
 * noindex en gracias y 404, canonical y hreflang recíprocos, sitemap igual
 * a las páginas indexables, robots.txt, JSON-LD por tipo de página,
 * enlaces/recursos/anclas internos, 19 productos en orden de familias y
 * etapas, PAC “Coagulante en solución”, Desinox y correo oficial.
 * Sale con código 1 si hay errores; los avisos (longitudes) no fallan.
 */
import { readFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const raiz = process.argv[2] ?? process.cwd();
const dist = join(raiz, 'dist');
const SITIO = 'https://3sgrupoindustrial.com.py';
const errores = [];
const avisos = [];
const fallo = (m) => errores.push(m);
const aviso = (m) => avisos.push(m);

const recorrer = (dir) =>
  readdirSync(dir).flatMap((n) => {
    const p = join(dir, n);
    return statSync(p).isDirectory() ? recorrer(p) : [p];
  });

const html = recorrer(dist).filter((p) => p.endsWith('.html'));
const rutaDe = (archivo) => {
  const r = '/' + relative(dist, archivo).replace(/\\/g, '/');
  if (r === '/index.html') return '/';
  if (r === '/404.html') return '/404';
  return r.replace(/\/index\.html$/, '');
};
const decodificar = (s) =>
  s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>');

const paginas = new Map();
for (const archivo of html) {
  const t = readFileSync(archivo, 'utf8');
  const ruta = rutaDe(archivo);
  const ids = new Set([...t.matchAll(/\sid="([^"]+)"/g)].map((m) => m[1]));
  paginas.set(ruta, { archivo, t, ids });
}

const existeRecurso = (ruta) => {
  const limpia = decodeURIComponent(ruta);
  if (limpia === '/' || paginas.has(limpia.replace(/\/$/, '') || '/')) return true;
  const f = join(dist, limpia);
  return existsSync(f) && statSync(f).isFile();
};

const titulos = new Map();
const descripciones = new Map();
const indexables = new Set();
let referencias = 0;

for (const [ruta, { t }] of paginas) {
  const titulo = decodificar(t.match(/<title>([^<]*)<\/title>/)?.[1] ?? '');
  const desc = decodificar(t.match(/<meta name="description" content="([^"]*)"/)?.[1] ?? '');
  const noindex = /<meta name="robots" content="noindex/.test(t);
  if (!titulo) fallo(`${ruta}: sin title`);
  if (!desc) fallo(`${ruta}: sin description`);
  titulos.set(titulo, [...(titulos.get(titulo) ?? []), ruta]);
  descripciones.set(desc, [...(descripciones.get(desc) ?? []), ruta]);
  if (titulo.length > 70) aviso(`${ruta}: title de ${titulo.length} caracteres`);
  if (desc.length > 175) aviso(`${ruta}: description de ${desc.length} caracteres`);

  const h1 = (t.match(/<h1[\s>]/g) ?? []).length;
  if (h1 !== 1) fallo(`${ruta}: ${h1} h1`);

  for (const patron of [/Lorem/i, /REEMPLAZAR/, /Ejemplo de reseña/, />\s*Placeholder\s*</, /Contenido de ejemplo/, /Fabricamos/, /fabricamos/]) {
    // El endpoint de Formspree de config se imprime solo si se elige ese proveedor.
    if (patron.test(t)) fallo(`${ruta}: contiene ${patron}`);
  }

  const esperadoNoindex = /(^|\/)(gracias|404)$/.test(ruta);
  if (esperadoNoindex !== noindex) fallo(`${ruta}: noindex=${noindex}, esperado ${esperadoNoindex}`);

  const canonicas = [...t.matchAll(/<link rel="canonical" href="([^"]*)"/g)].map((m) => m[1]);
  const alternas = [...t.matchAll(/<link rel="alternate" hreflang="([^"]*)" href="([^"]*)"/g)].map((m) => [m[1], m[2]]);
  if (noindex) {
    if (canonicas.length || alternas.length) fallo(`${ruta}: noindex con canonical/alternate`);
  } else {
    indexables.add(ruta);
    const esperado = SITIO + ruta;
    if (canonicas.length !== 1 || canonicas[0] !== esperado) fallo(`${ruta}: canonical ${canonicas} ≠ ${esperado}`);
    const codigos = alternas.map((a) => a[0]).sort().join(',');
    if (codigos !== 'en-US,es-PY,pt-BR,x-default') fallo(`${ruta}: hreflang ${codigos}`);
    for (const [, href] of alternas) {
      const destino = href.replace(SITIO, '') || '/';
      const pagina = paginas.get(destino);
      if (!pagina) fallo(`${ruta}: hreflang hacia inexistente ${href}`);
      else if (!pagina.t.includes(`href="${esperado}"`)) fallo(`${ruta}: hreflang no recíproco desde ${destino}`);
    }
    if (!/og:locale:alternate/.test(t)) fallo(`${ruta}: sin og:locale:alternate`);
    for (const og of ['og:title', 'og:description', 'og:url', 'og:image', 'twitter:card', 'theme-color']) {
      if (!t.includes(og)) fallo(`${ruta}: sin ${og}`);
    }
  }

  // JSON-LD
  const bloques = [...t.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)];
  if (bloques.length !== 1) fallo(`${ruta}: ${bloques.length} bloques JSON-LD`);
  let grafo = [];
  try {
    grafo = JSON.parse(bloques[0][1])['@graph'];
  } catch (e) {
    fallo(`${ruta}: JSON-LD inválido ${e.message}`);
  }
  const tipos = new Set(grafo.map((n) => n['@type']));
  const idsGrafo = new Set(grafo.map((n) => n['@id']).filter(Boolean));
  const requeridos = ['Organization', 'LocalBusiness', 'WebSite', ...(noindex ? [] : ['WebPage'])];
  if (ruta === '/' || ruta === '/pt' || ruta === '/en') requeridos.push('FAQPage');
  if (/\/productos$/.test(ruta)) requeridos.push('ItemList', 'BreadcrumbList');
  if (/\/productos\/[^/]+$/.test(ruta)) requeridos.push('Product', 'BreadcrumbList');
  for (const r of requeridos) if (!tipos.has(r)) fallo(`${ruta}: falta ${r}`);
  if (noindex && tipos.has('WebPage')) fallo(`${ruta}: WebPage en noindex`);
  for (const n of grafo) {
    if ('priceRange' in n) fallo(`${ruta}: priceRange presente`);
    if ('offers' in n) fallo(`${ruta}: offers presente sin precios visibles`);
    const refs = JSON.stringify(n).matchAll(/\{"@id":"([^"]+)"\}/g);
    for (const [, id] of refs) if (!idsGrafo.has(id)) fallo(`${ruta}: referencia @id sin nodo ${id}`);
  }
  const itemList = grafo.find((n) => n['@type'] === 'ItemList');
  if (itemList && itemList.itemListElement.length !== 19) fallo(`${ruta}: ItemList con ${itemList.itemListElement.length}`);
  const negocio = grafo.find((n) => n['@type'] === 'LocalBusiness');
  if (negocio?.openingHours !== 'Mo-Fr 07:30-17:00') fallo(`${ruta}: openingHours ${negocio?.openingHours}`);

  // Enlaces y recursos internos
  const refsHtml = [
    ...[...t.matchAll(/\s(?:href|src)="([^"]*)"/g)].map((m) => m[1]),
    ...[...t.matchAll(/\ssrcset="([^"]*)"/g)].flatMap((m) => m[1].split(',').map((s) => s.trim().split(/\s+/)[0])),
  ];
  for (const bruto of refsHtml) {
    const ref = decodificar(bruto);
    if (!ref || /^(https?:|mailto:|tel:|data:|javascript:)/.test(ref) || ref.startsWith('//')) continue;
    referencias += 1;
    const [sinHash, hash] = ref.split('#');
    const camino = sinHash.split('?')[0];
    if (camino === '') {
      if (hash && !paginas.get(ruta).ids.has(hash)) fallo(`${ruta}: ancla inexistente #${hash}`);
      continue;
    }
    if (!camino.startsWith('/')) {
      aviso(`${ruta}: referencia relativa ${ref}`);
      continue;
    }
    if (!existeRecurso(camino)) {
      fallo(`${ruta}: recurso inexistente ${ref}`);
      continue;
    }
    if (hash) {
      const destino = paginas.get(camino.replace(/\/$/, '') || '/');
      if (destino && !destino.ids.has(hash)) fallo(`${ruta}: ancla ${ref} inexistente en destino`);
    }
    if (camino.length > 1 && camino.endsWith('/') && paginas.has(camino.replace(/\/$/, ''))) {
      aviso(`enlace con barra final (redirige con drop-trailing-slash): ${ref}`);
    }
  }
}

for (const [titulo, rutas] of titulos) if (rutas.length > 1) fallo(`title duplicado "${titulo}": ${rutas}`);
for (const [desc, rutas] of descripciones) if (rutas.length > 1) fallo(`description duplicada: ${rutas}`);

// Sitemap
const sitemap = readFileSync(join(dist, 'sitemap-0.xml'), 'utf8');
const locs = new Set([...sitemap.matchAll(/<loc>([^<]*)<\/loc>/g)].map((m) => m[1].replace(SITIO, '').replace(/\/$/, '') || '/'));
for (const r of indexables) if (!locs.has(r)) fallo(`sitemap: falta ${r}`);
for (const r of locs) if (!indexables.has(r)) fallo(`sitemap: sobra ${r}`);

// robots
const robots = readFileSync(join(dist, 'robots.txt'), 'utf8');
if (/Disallow:\s*\/\S/.test(robots)) fallo('robots.txt bloquea rutas');
if (!robots.includes(`Sitemap: ${SITIO}/sitemap-index.xml`)) fallo('robots.txt sin Sitemap');

// Catálogo, orden y fichas
const FAMILIAS = ['limpieza-industrial', 'desinfeccion-industrial', 'efluentes-aguas-residuales'];
for (const prefijo of ['', '/pt', '/en']) {
  const catalogo = paginas.get(`${prefijo}/productos`).t;
  const familias = [...catalogo.matchAll(/data-familia="([^"]+)"/g)].map((m) => m[1]);
  if (familias.length !== 19) fallo(`${prefijo}/productos: ${familias.length} tarjetas`);
  const indices = familias.map((f) => FAMILIAS.indexOf(f));
  if (indices.some((v, i) => i > 0 && v < indices[i - 1])) fallo(`${prefijo}/productos: familias fuera de orden`);
  const etapas = [...catalogo.matchAll(/data-filtro-etapa data-valor="([^"]*)"/g)].map((m) => m[1]).join(',');
  if (etapas !== ',desengrasa,desinfecta,coagulacion-floculacion,control-olor') fallo(`${prefijo}/productos: etapas ${etapas}`);
  const inicio = paginas.get(prefijo || '/').t;
  const recorrido = [...inicio.matchAll(/\?etapa=([a-z-]+)/g)].map((m) => m[1]);
  if (recorrido.slice(0, 4).join(',') !== 'desengrasa,desinfecta,coagulacion-floculacion,control-olor') fallo(`${prefijo || '/'}: recorrido ${recorrido.slice(0, 4)}`);
  const tabla = [...inicio.matchAll(/scope="colgroup"[^>]*>\s*([^<]+?)\s*</g)].map((m) => m[1]);
  console.log(`tabla ${prefijo || '/'}:`, tabla.join(' → '));
  const pac = paginas.get(`${prefijo}/productos/policloruro-de-aluminio-3s`)?.t ?? '';
  if (!pac.includes('Coagulante en solución')) fallo(`${prefijo}: PAC sin "Coagulante en solución"`);
  if (!paginas.has(`${prefijo}/productos/desinox`)) fallo(`${prefijo}: falta Desinox`);
  if (!inicio.includes('3sgrupoindustrial@gmail.com')) fallo(`${prefijo || '/'}: sin correo`);
  if (inicio.includes('id="testimonios"')) fallo(`${prefijo || '/'}: testimonios placeholder visibles`);
}

console.log(`páginas: ${paginas.size}, indexables: ${indexables.size}, sitemap: ${locs.size}, referencias internas revisadas: ${referencias}`);
console.log(`avisos (${avisos.length}):`);
for (const a of [...new Set(avisos)]) console.log('  -', a);
console.log(`errores (${errores.length}):`);
for (const e of errores) console.log('  ✗', e);
process.exit(errores.length ? 1 : 0);
