import {
  HTML_LANG,
  LOCALES,
  LOCALE_LABELS,
  detectLocale,
  translate,
} from "./i18n.js";

const STORAGE_KEY = "myapps-lang";

const elements = {
  html: document.documentElement,
  title: document.querySelector("title"),
  metaDescription: document.querySelector('meta[name="description"]'),
  skip: document.querySelector("[data-i18n=skip]"),
  brand: document.querySelector("[data-i18n=brand]"),
  tagline: document.querySelector("[data-i18n=tagline]"),
  langGroup: document.querySelector("[data-lang-group]"),
  i18n: document.querySelectorAll("[data-i18n]"),
};

function readQueryLang() {
  return new URLSearchParams(window.location.search).get("lang");
}

function currentLocale() {
  return detectLocale({
    query: readQueryLang(),
    stored: window.localStorage.getItem(STORAGE_KEY),
    languages: [...(navigator.languages || []), navigator.language],
  });
}

function setLocale(locale) {
  window.localStorage.setItem(STORAGE_KEY, locale);
  const url = new URL(window.location.href);
  url.searchParams.set("lang", locale);
  window.history.replaceState({}, "", url);
  render(locale);
}

function render(locale) {
  const t = (key) => translate(locale, key);
  elements.html.lang = HTML_LANG[locale];
  elements.title.textContent = t("metaTitle");
  if (elements.metaDescription) {
    elements.metaDescription.setAttribute("content", t("metaDescription"));
  }
  elements.i18n.forEach((node) => {
    const key = node.getAttribute("data-i18n");
    if (key) {
      node.textContent = t(key);
    }
  });
  if (elements.langGroup) {
    elements.langGroup.setAttribute("aria-label", t("langLabel"));
    elements.langGroup.querySelectorAll("[data-lang]").forEach((button) => {
      const active = button.getAttribute("data-lang") === locale;
      button.setAttribute("aria-pressed", String(active));
      button.classList.toggle("is-active", active);
    });
  }
}

function buildLangSwitcher() {
  if (!elements.langGroup) {
    return;
  }
  elements.langGroup.replaceChildren();
  for (const locale of LOCALES) {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "lang-btn";
    button.setAttribute("data-lang", locale);
    button.setAttribute("aria-label", LOCALE_LABELS[locale]);
    button.textContent = locale.toUpperCase();
    button.addEventListener("click", () => setLocale(locale));
    elements.langGroup.append(button);
  }
}

buildLangSwitcher();
render(currentLocale());
