import assert from "node:assert/strict";
import test from "node:test";
import {
  LOCALES,
  detectLocale,
  missingKeys,
  normalizeLocale,
  translate,
  translationKeys,
} from "../assets/i18n.js";

test("every locale has the same keys as Norwegian", () => {
  for (const locale of LOCALES) {
    assert.deepEqual(missingKeys(locale), [], locale);
  }
});

test("normalizeLocale maps regional codes", () => {
  assert.equal(normalizeLocale("nb-NO"), "no");
  assert.equal(normalizeLocale("nn"), "no");
  assert.equal(normalizeLocale("pt-BR"), "pt");
  assert.equal(normalizeLocale("de-AT"), "de");
  assert.equal(normalizeLocale("fr"), null);
});

test("detectLocale prefers query, then storage, then browser, then Norwegian", () => {
  assert.equal(detectLocale({ query: "en", stored: "de", languages: ["es"] }), "en");
  assert.equal(detectLocale({ stored: "pt", languages: ["de"] }), "pt");
  assert.equal(detectLocale({ languages: ["sv-SE", "de-DE"] }), "de");
  assert.equal(detectLocale({ languages: ["fr-FR"] }), "no");
});

test("translate falls back to Norwegian", () => {
  const key = translationKeys()[0];
  assert.equal(translate("no", key), translate("xx", key));
  assert.ok(translate("en", "coffeeCta").length > 0);
});
