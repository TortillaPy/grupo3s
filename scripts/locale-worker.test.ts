import assert from 'node:assert/strict';
import test from 'node:test';

import { localeDeAcceptLanguage, localeDeCookie } from '../src/worker.ts';

test('usa español cuando el header falta o no coincide', () => {
  assert.equal(localeDeAcceptLanguage(null), 'es');
  assert.equal(localeDeAcceptLanguage('de-DE, fr;q=0.8'), 'es');
});

test('respeta regiones, pesos q y el orden de empate', () => {
  assert.equal(localeDeAcceptLanguage('en-US,en;q=0.9,es;q=0.8'), 'en');
  assert.equal(localeDeAcceptLanguage('en;q=0.5,pt-BR;q=0.9'), 'pt');
  assert.equal(localeDeAcceptLanguage('pt;q=0,es;q=0.7,en;q=0.7'), 'es');
});

test('acepta solo una preferencia manual válida', () => {
  assert.equal(localeDeCookie('tema=dark; 3s_locale=pt'), 'pt');
  assert.equal(localeDeCookie('3s_locale=en; tema=light'), 'en');
  assert.equal(localeDeCookie('3s_locale=fr'), undefined);
  assert.equal(localeDeCookie('3s_locale=%E0%A4%A'), undefined);
});
