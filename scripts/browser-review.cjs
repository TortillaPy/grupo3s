/**
 * Revisión visual y funcional en navegador sobre `astro preview`.
 *
 * Bloquea toda red externa (Web3Forms, WhatsApp, etc.), detecta cualquier
 * POST y nunca envía el formulario: solo dispara la validación en vacío.
 *
 * Playwright NO es dependencia del proyecto a propósito. Para usarlo:
 *   npx playwright install chromium          (una vez)
 *   npm run build && npm run preview         (en otra terminal)
 *   NODE_PATH=<node_modules con playwright> node scripts/browser-review.cjs [baseUrl] [dirCapturas]
 * El node_modules de la caché de npx se ubica con:
 *   find ~/.npm/_npx -maxdepth 4 -type d -name playwright -path '*node_modules*'
 *
 * Viewports 1440×900, 390×844 y 375×667 en claro y oscuro: desborde,
 * CTA del hero en el primer viewport, footer, menú móvil, foco de teclado,
 * formulario, catálogo con filtros, fichas de PAC y Desinox, LCP y CLS.
 * El error de consola 404 de `/ruta-que-no-existe` es intencional.
 * Las capturas no se versionan: por defecto van a la carpeta temporal.
 */
const { chromium } = require('playwright');
const path = require('node:path');
const { mkdirSync } = require('node:fs');
const { tmpdir } = require('node:os');

const base = process.argv[2] ?? 'http://localhost:4321';
const capturas = process.argv[3] ?? path.join(tmpdir(), '3s-browser-review');
mkdirSync(capturas, { recursive: true });
const problemas = [];
const notas = [];

const VIEWPORTS = [
  { nombre: '1440x900', width: 1440, height: 900 },
  { nombre: '390x844', width: 390, height: 844 },
  { nombre: '375x667', width: 375, height: 667 },
];
const RUTAS = [
  '/',
  '/pt',
  '/en',
  '/productos',
  '/productos/policloruro-de-aluminio-3s',
  '/productos/desinox',
  '/en/productos?familia=limpieza-industrial&etapa=desengrasa',
  '/pt/politica-privacidad',
  '/ruta-que-no-existe',
];

async function nuevaPagina(browser, viewport, tema) {
  const contexto = await browser.newContext({ viewport, colorScheme: tema, reducedMotion: 'reduce' });
  // Solo se permite el servidor local: bloquea Web3Forms, WhatsApp y cualquier otro envío.
  await contexto.route('**/*', (ruta) => {
    const url = ruta.request().url();
    return url.startsWith(base) ? ruta.continue() : ruta.abort();
  });
  const page = await contexto.newPage();
  const errores = [];
  page.on('console', (m) => {
    if (m.type() === 'error' || m.type() === 'warning') errores.push(`${m.type()}: ${m.text()}`);
  });
  page.on('pageerror', (e) => errores.push(`pageerror: ${e.message}`));
  page.on('request', (r) => {
    if (r.method() === 'POST') problemas.push(`POST detectado: ${r.url()}`);
  });
  return { contexto, page, errores };
}

(async () => {
  const browser = await chromium.launch();

  for (const viewport of VIEWPORTS) {
    for (const tema of ['light', 'dark']) {
      const { contexto, page, errores } = await nuevaPagina(browser, viewport, tema);
      for (const ruta of RUTAS) {
        const respuesta = await page.goto(base + ruta, { waitUntil: 'load' });
        const esperado404 = ruta === '/ruta-que-no-existe';
        if (!esperado404 && respuesta.status() !== 200) problemas.push(`${ruta}: HTTP ${respuesta.status()}`);
        const desborde = await page.evaluate(() => document.documentElement.scrollWidth - window.innerWidth);
        if (desborde > 0) problemas.push(`${ruta} ${viewport.nombre} ${tema}: desborde horizontal ${desborde}px`);
        const oscuro = await page.evaluate(() => document.documentElement.classList.contains('dark'));
        if (oscuro !== (tema === 'dark')) problemas.push(`${ruta} ${tema}: clase dark=${oscuro}`);

        const imagenesRotas = await page.evaluate(() =>
          [...document.images]
            .filter((img) => img.complete && img.naturalWidth === 0 && img.loading !== 'lazy')
            .map((img) => img.currentSrc || img.src),
        );
        if (imagenesRotas.length) problemas.push(`${ruta}: imágenes rotas ${imagenesRotas}`);

        if (['/', '/pt', '/en'].includes(ruta)) {
          const plano = await page.evaluate(() => {
            const alto = window.innerHeight;
            const rect = (sel) => document.querySelector(sel)?.getBoundingClientRect();
            const logo = rect('.marca-portada img');
            const volanta = rect('.hero-mensaje .volanta');
            const h1 = rect('#hero-titulo');
            const ctas = [...document.querySelectorAll('.hero-mensaje a')].map((a) => a.getBoundingClientRect());
            const estilo = getComputedStyle(document.querySelector('.hero-mensaje .volanta'));
            return {
              alto,
              logo: logo && { top: Math.round(logo.top), bottom: Math.round(logo.bottom), ancho: Math.round(logo.width) },
              volantaBottom: volanta && Math.round(volanta.bottom),
              h1Bottom: h1 && Math.round(h1.bottom),
              ctaBottom: Math.round(Math.max(...ctas.map((c) => c.bottom))),
              volantaVisible: estilo.opacity !== '0' && estilo.visibility !== 'hidden',
            };
          });
          if (plano.ctaBottom > plano.alto) problemas.push(`${ruta} ${viewport.nombre} ${tema}: CTA fuera del primer viewport (${plano.ctaBottom} > ${plano.alto})`);
          if (!plano.volantaVisible) problemas.push(`${ruta}: volanta de identidad no visible`);
          notas.push(`${ruta} ${viewport.nombre} ${tema}: logo ${plano.logo.ancho}px (${plano.logo.top}–${plano.logo.bottom}), CTA hasta ${plano.ctaBottom}/${plano.alto}`);
          if (ruta === '/') {
            await page.screenshot({ path: path.join(capturas, `inicio-${viewport.nombre}-${tema}.png`) });
          }
        }
      }

      // Pie con horario, cobertura, familias y etapas
      await page.goto(base + '/', { waitUntil: 'load' });
      const pie = await page.evaluate(() => {
        const f = document.querySelector('footer');
        return {
          texto: f.innerText,
          familias: [...f.querySelectorAll('[aria-labelledby="footer-familias"] a')].map((a) => a.getAttribute('href')),
          etapas: [...f.querySelectorAll('[aria-labelledby="footer-etapas"] a')].map((a) => a.getAttribute('href')),
        };
      });
      for (const t of ['Lunes a viernes, de 07:30 a 17:00', 'Envío a todo el Paraguay', '3sgrupoindustrial@gmail.com', '(0972) 572 007', 'Pilar N° 1717']) {
        if (!pie.texto.includes(t)) problemas.push(`footer sin "${t}"`);
      }
      if (pie.familias.join() !== '/productos?familia=limpieza-industrial,/productos?familia=desinfeccion-industrial,/productos?familia=efluentes-aguas-residuales') problemas.push(`footer familias ${pie.familias}`);
      if (pie.etapas.join() !== '/productos?etapa=desengrasa,/productos?etapa=desinfecta,/productos?etapa=coagulacion-floculacion,/productos?etapa=control-olor') problemas.push(`footer etapas ${pie.etapas}`);
      if (viewport.nombre !== '375x667') {
        await page.locator('footer').screenshot({ path: path.join(capturas, `footer-${viewport.nombre}-${tema}.png`) });
      }

      for (const e of errores) problemas.push(`consola ${viewport.nombre} ${tema}: ${e}`);
      await contexto.close();
    }
  }

  // Interacciones: escritorio y móvil, tema claro
  {
    const { contexto, page, errores } = await nuevaPagina(browser, VIEWPORTS[1], 'light');
    await page.goto(base + '/', { waitUntil: 'load' });

    // Teclado: el primer Tab enfoca el salto al contenido y se ve.
    await page.keyboard.press('Tab');
    await page.waitForTimeout(300); // la transición del salto dura 150 ms
    const foco = await page.evaluate(() => {
      const a = document.activeElement;
      const r = a.getBoundingClientRect();
      return { clase: a.className, visible: r.width > 0 && r.height > 0 && r.top >= 0 };
    });
    if (!String(foco.clase).includes('salto-contenido') || !foco.visible) problemas.push(`foco inicial ${JSON.stringify(foco)}`);

    // Menú móvil: abre, contiene enlaces, cierra al elegir un destino.
    const abrir = page.getByRole('button', { name: 'Abrir el menú de navegación' });
    await abrir.click();
    const movil = page.getByRole('navigation', { name: 'Navegación principal en móvil' });
    await movil.waitFor({ state: 'visible' });
    await page.screenshot({ path: path.join(capturas, 'menu-movil-390.png') });
    await movil.getByRole('link', { name: 'Preguntas' }).click();
    await page.waitForTimeout(400);
    if (await movil.isVisible()) problemas.push('menú móvil no se cierra al elegir un destino');
    if (!page.url().endsWith('#faq')) problemas.push(`ancla del menú móvil: ${page.url()}`);

    // Formulario: validación sin envío (campos vacíos) y labels asociados.
    await page.goto(base + '/#presupuesto', { waitUntil: 'load' });
    const formulario = await page.evaluate(() => {
      const form = document.querySelector('#presupuesto form');
      const campos = [...form.querySelectorAll('input:not([type=hidden]), select, textarea')].filter(
        (c) => c.offsetParent !== null,
      );
      const sinLabel = campos
        .filter((c) => !(c.labels && c.labels.length) && !c.getAttribute('aria-label') && !c.getAttribute('aria-labelledby'))
        .map((c) => c.name);
      return { campos: campos.map((c) => c.name), sinLabel };
    });
    if (formulario.sinLabel.length) problemas.push(`campos sin label: ${formulario.sinLabel}`);
    await page.locator('#presupuesto form [type=submit]').click();
    await page.waitForTimeout(500);
    const invalidos = await page.evaluate(() => document.querySelectorAll('#presupuesto [aria-invalid="true"]').length);
    notas.push(`formulario: campos ${formulario.campos.join(', ')}; inválidos tras enviar vacío: ${invalidos}`);
    await page.locator('#presupuesto').screenshot({ path: path.join(capturas, 'formulario-validacion-390.png') });

    for (const e of errores) problemas.push(`consola interacciones: ${e}`);
    await contexto.close();
  }

  {
    const { contexto, page, errores } = await nuevaPagina(browser, VIEWPORTS[0], 'light');
    // Catálogo: 19 tarjetas, filtros combinados y URL compartible.
    await page.goto(base + '/productos', { waitUntil: 'load' });
    const visibles = () => page.evaluate(() => [...document.querySelectorAll('[data-producto]')].filter((t) => !t.classList.contains('hidden')).length);
    const total = await visibles();
    if (total !== 19) problemas.push(`catálogo con ${total} productos visibles`);
    const familias = await page.evaluate(() => [...document.querySelectorAll('[data-filtro-familia]')].map((b) => b.textContent.trim()));
    const etapas = await page.evaluate(() => [...document.querySelectorAll('[data-filtro-etapa]')].map((b) => b.textContent.trim()));
    notas.push(`filtros familia: ${familias.join(' → ')}`);
    notas.push(`filtros etapa: ${etapas.join(' → ')}`);
    await page.locator('[data-filtro-etapa][data-valor="coagulacion-floculacion"]').click();
    const conEtapa = await visibles();
    notas.push(`Coagulación y Floculación: ${conEtapa} productos; url ${new URL(page.url()).search}`);
    if (!page.url().includes('etapa=coagulacion-floculacion')) problemas.push('filtro de etapa no actualiza URL');
    const canonica = await page.evaluate(() => document.querySelector('link[rel=canonical]').href);
    if (canonica !== 'https://3sgrupoindustrial.com.py/productos') problemas.push(`canonical con filtro: ${canonica}`);

    // Fichas pedidas
    await page.goto(base + '/productos/policloruro-de-aluminio-3s', { waitUntil: 'load' });
    const pac = await page.evaluate(() => ({ h1: document.querySelector('h1').textContent.trim(), tipo: document.body.innerText.includes('Coagulante en solución'), titulo: document.title }));
    notas.push(`PAC: ${JSON.stringify(pac)}`);
    if (!pac.tipo) problemas.push('PAC sin "Coagulante en solución" visible');
    await page.screenshot({ path: path.join(capturas, 'ficha-pac-1440.png') });
    await page.goto(base + '/productos/desinox', { waitUntil: 'load' });
    const desinox = await page.evaluate(() => ({ h1: document.querySelector('h1').textContent.trim(), titulo: document.title }));
    notas.push(`Desinox: ${JSON.stringify(desinox)}`);
    await page.screenshot({ path: path.join(capturas, 'ficha-desinox-1440.png') });

    // LCP de la portada (sin movimiento reducido para medir el caso real)
    for (const e of errores) problemas.push(`consola catálogo/fichas: ${e}`);
    await contexto.close();
  }

  for (const vp of [VIEWPORTS[0], VIEWPORTS[1]]) {
    const contexto = await browser.newContext({ viewport: vp });
    await contexto.route('**/*', (ruta) => (ruta.request().url().startsWith(base) ? ruta.continue() : ruta.abort()));
    const page = await contexto.newPage();
    await page.goto(base + '/', { waitUntil: 'load' });
    await page.waitForTimeout(1500);
    const metricas = await page.evaluate(
      () =>
        new Promise((resolver) => {
          let lcp = null;
          let cls = 0;
          new PerformanceObserver((l) => {
            const e = l.getEntries().at(-1);
            lcp = { ms: Math.round(e.startTime), elemento: e.element?.tagName + (e.element?.className ? '.' + String(e.element.className).split(' ')[0] : '') };
          }).observe({ type: 'largest-contentful-paint', buffered: true });
          new PerformanceObserver((l) => {
            for (const e of l.getEntries()) if (!e.hadRecentInput) cls += e.value;
          }).observe({ type: 'layout-shift', buffered: true });
          setTimeout(() => resolver({ lcp, cls: Number(cls.toFixed(4)) }), 300);
        }),
    );
    notas.push(`métricas locales ${vp.nombre}: LCP ${JSON.stringify(metricas.lcp)}, CLS ${metricas.cls}`);
    await contexto.close();
  }

  await browser.close();
  console.log('NOTAS');
  for (const n of notas) console.log('  ·', n);
  console.log(`PROBLEMAS (${problemas.length})`);
  for (const p of [...new Set(problemas)]) console.log('  ✗', p);
})().catch((e) => {
  console.error(e);
  process.exit(2);
});
