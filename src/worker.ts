type Locale = 'es' | 'pt' | 'en';

interface Env {
  readonly ASSETS: Fetcher;
}

interface Fetcher {
  fetch(request: Request): Promise<Response>;
}

const LOCALES = new Set<Locale>(['es', 'pt', 'en']);
const COOKIE_LOCALE = '3s_locale';

function esLocale(valor: string): valor is Locale {
  return LOCALES.has(valor as Locale);
}

export function localeDeCookie(cabecera: string | null): Locale | undefined {
  if (cabecera === null) return undefined;

  for (const parte of cabecera.split(';')) {
    const [nombre, ...resto] = parte.trim().split('=');
    if (nombre !== COOKIE_LOCALE) continue;

    let valor: string;
    try {
      valor = decodeURIComponent(resto.join('='));
    } catch {
      return undefined;
    }
    return esLocale(valor) ? valor : undefined;
  }

  return undefined;
}

export function localeDeAcceptLanguage(cabecera: string | null): Locale {
  if (cabecera === null || cabecera.trim() === '') return 'es';

  const preferencias = cabecera
    .split(',')
    .map((parte, indice) => {
      const [etiquetaCruda = '', ...parametros] = parte.trim().split(';');
      const parametroQ = parametros.find((parametro) => parametro.trim().startsWith('q='));
      const qCrudo = parametroQ?.trim().slice(2);
      const q = qCrudo === undefined ? 1 : Number(qCrudo);

      return {
        etiqueta: etiquetaCruda.toLowerCase(),
        q: Number.isFinite(q) ? Math.min(1, Math.max(0, q)) : 0,
        indice,
      };
    })
    .filter(({ q }) => q > 0)
    .sort((a, b) => b.q - a.q || a.indice - b.indice);

  for (const { etiqueta } of preferencias) {
    const idiomaBase = etiqueta.split('-')[0] ?? '';
    if (esLocale(idiomaBase)) return idiomaBase;
  }

  return 'es';
}

function agregarVary(headers: Headers): void {
  const actuales = headers.get('Vary')
    ?.split(',')
    .map((valor) => valor.trim())
    .filter(Boolean) ?? [];

  headers.set('Vary', [...new Set([...actuales, 'Accept-Language', 'Cookie'])].join(', '));
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);
    const esEntrada = url.pathname === '/' && (request.method === 'GET' || request.method === 'HEAD');

    if (!esEntrada) return env.ASSETS.fetch(request);

    const locale =
      localeDeCookie(request.headers.get('Cookie')) ??
      localeDeAcceptLanguage(request.headers.get('Accept-Language'));

    if (locale !== 'es') {
      url.pathname = `/${locale}`;
      const headers = new Headers({
        Location: url.toString(),
        'Cache-Control': 'private, no-store',
      });
      agregarVary(headers);
      return new Response(null, { status: 302, headers });
    }

    const respuesta = await env.ASSETS.fetch(request);
    const headers = new Headers(respuesta.headers);
    agregarVary(headers);
    return new Response(respuesta.body, {
      status: respuesta.status,
      statusText: respuesta.statusText,
      headers,
    });
  },
};
