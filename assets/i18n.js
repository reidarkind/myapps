export const LOCALES = ["no", "en", "de", "es", "pt"];

export const LOCALE_LABELS = {
  no: "Norsk",
  en: "English",
  de: "Deutsch",
  es: "Español",
  pt: "Português",
};

export const HTML_LANG = {
  no: "nb",
  en: "en",
  de: "de",
  es: "es",
  pt: "pt",
};

const translations = {
  no: {
    metaTitle: "Reidar Kind — hobbyapper",
    metaDescription:
      "Oversikt over hobbyappene Bananmatte, StoreAlfabet og FactHunter. Alt lagres på telefonen. Bruk på eget ansvar.",
    skip: "Hopp til innhold",
    brand: "Reidar Kind",
    tagline: "Hobbyapper som bor på telefonen din.",
    langLabel: "Språk",
    appsTitle: "Appene",
    appsIntro:
      "Tre apper så langt. Alle åpnes i nettleseren og kan legges på hjemskjermen. Ingen appbutikk, ingen konto.",
    "bananmatte.name": "Bananmatte",
    "bananmatte.devices": "Nettbrett og telefon",
    "bananmatte.lead": "Gjør apestreker. Regn etterpå.",
    "bananmatte.body":
      "Matte- og fangstspill for 1. og 2. klasse. Du styrer en gorilla med kurv, fanger bananer og svarer på et mattespørsmål etter hver runde. Tiervenn, pluss, minus, ganging, deling og mer. Poeng og navn blir på enheten.",
    "bananmatte.cta": "Åpne Bananmatte",
    "storealfabet.name": "StoreAlfabet",
    "storealfabet.devices": "Telefon",
    "storealfabet.lead": "Alf har forsovet seg!",
    "storealfabet.body":
      "Bokstavspill for 1. og 2. klasse. Du hjelper hunden Alf til skolen, øver på bokstaver, lyder, rim og små ord, samler krystaller og diamanter, og unngår tullete bokstavzombier. Målet er å rekke skolen og kjøpe skolemelk. Rekorder blir på telefonen.",
    "storealfabet.cta": "Åpne StoreAlfabet",
    "facthunter.name": "FactHunter",
    "facthunter.devices": "Telefon",
    "facthunter.lead": "Speid kartet etter kunnskap i det fjerne.",
    "facthunter.body":
      "En tynn jakt over Wikipedia. Når du er nær, pek kameraet, se steder som skilt i gata, lås dem opp og samle dem på telefonen. Samlingen ligger i nettleseren på den telefonen — ingen sky.",
    "facthunter.cta": "Åpne FactHunter",
    madeTitle: "Slik er de laget",
    madeBody:
      "Enkle webapper (PWA) som kjører i nettleseren og kan installeres på hjemskjermen. De er bygget med Vite og TypeScript og ligger på GitHub Pages. Ingen egen server, ingen innlogging. Bananmatte og StoreAlfabet lagrer innstillinger og rekorder i localStorage. FactHunter lagrer samlingen i IndexedDB. FactHunter henter lesende oppslag fra Wikipedia; ingenting sendes til meg.",
    privacyTitle: "Personvern",
    privacyBody:
      "Alt som hører til deg, blir på telefonen. Ingen konto, ingen sky, ingen analyse og ingen sporing. Mister du telefonen, sletter nettstedsdata eller bytter nettleser uten eksport, er det som var lagret borte.",
    cautionTitle: "Bruk på eget ansvar",
    cautionBody:
      "Dette er et hobbyprosjekt. Jeg har foreløpig begrenset mulighet til å teste appene på mange forskjellige plattformer. Selv bruker jeg iPhone nå. Ting kan krasje, se rart ut eller oppføre seg annerledes på din enhet. Bruk appene på eget ansvar.",
    supportTitle: "Hold hobbyen i gang",
    supportBody:
      "Det er fint om du vil bidra. En kaffe hjelper meg å fortsette å fikle i fritiden — nye små apper, fikser og tid til å prøve flere telefoner.",
    coffeeCta: "Kjøp en kaffe",
    footer: "Hobbyprosjekt. Ingen butikk, ingen konto, ingen sky.",
  },
  en: {
    metaTitle: "Reidar Kind — hobby apps",
    metaDescription:
      "A portal to the hobby apps Bananmatte, StoreAlfabet and FactHunter. Everything stays on your phone. Use at your own risk.",
    skip: "Skip to content",
    brand: "Reidar Kind",
    tagline: "Hobby apps that live on your phone.",
    langLabel: "Language",
    appsTitle: "The apps",
    appsIntro:
      "Three so far. All open in the browser and can be added to your home screen. No app store, no account.",
    "bananmatte.name": "Bananmatte",
    "bananmatte.devices": "Tablets and phones",
    "bananmatte.lead": "Monkey around. Then do the maths.",
    "bananmatte.body":
      "A catch-and-count game for years 1 and 2. Steer a gorilla with a basket, catch bananas, and answer a maths question after each round. Number bonds, plus, minus, times, divide, and more. Scores and names stay on the device.",
    "bananmatte.cta": "Open Bananmatte",
    "storealfabet.name": "StoreAlfabet",
    "storealfabet.devices": "Phones",
    "storealfabet.lead": "Alf overslept!",
    "storealfabet.body":
      "A letter game for years 1 and 2. You help the dog Alf get to school, practise letters, sounds, rhymes and small words, collect crystals and diamonds, and dodge silly letter zombies. The goal is to reach school and buy school milk. Records stay on the phone.",
    "storealfabet.cta": "Open StoreAlfabet",
    "facthunter.name": "FactHunter",
    "facthunter.devices": "Phones",
    "facthunter.lead": "Scout the map for knowledge in the distance.",
    "facthunter.body":
      "A thin hunt on top of Wikipedia. When you are close, point the camera, see places as street signs, unlock them, and keep them on your phone. The collection lives in that browser on that phone — no cloud.",
    "facthunter.cta": "Open FactHunter",
    madeTitle: "How they are made",
    madeBody:
      "Simple web apps (PWAs) that run in the browser and can be installed on the home screen. They are built with Vite and TypeScript and hosted on GitHub Pages. No server of my own, no login. Bananmatte and StoreAlfabet keep settings and high scores in localStorage. FactHunter keeps the collection in IndexedDB. FactHunter only reads from Wikipedia; nothing is sent to me.",
    privacyTitle: "Privacy",
    privacyBody:
      "What is yours stays on the phone. No account, no cloud, no analytics, no tracking. If you lose the phone, clear site data, or switch browsers without an export, what was stored is gone.",
    cautionTitle: "Use at your own risk",
    cautionBody:
      "This is a hobby project. For now I have limited time to test the apps on many different platforms. I currently use an iPhone. Things may crash, look odd, or behave differently on your device. Use the apps at your own risk.",
    supportTitle: "Keep the hobby going",
    supportBody:
      "It is kind if you want to help. A coffee helps me keep tinkering in my spare time — more small apps, fixes, and a chance to try more phones.",
    coffeeCta: "Buy me a coffee",
    footer: "A hobby project. No store, no account, no cloud.",
  },
  de: {
    metaTitle: "Reidar Kind — Hobby-Apps",
    metaDescription:
      "Überblick über die Hobby-Apps Bananmatte, StoreAlfabet und FactHunter. Alles bleibt auf dem Telefon. Nutzung auf eigene Gefahr.",
    skip: "Zum Inhalt springen",
    brand: "Reidar Kind",
    tagline: "Hobby-Apps, die auf deinem Telefon leben.",
    langLabel: "Sprache",
    appsTitle: "Die Apps",
    appsIntro:
      "Drei bisher. Alle öffnen sich im Browser und können auf den Startbildschirm. Kein App-Store, kein Konto.",
    "bananmatte.name": "Bananmatte",
    "bananmatte.devices": "Tablets und Telefone",
    "bananmatte.lead": "Affenstreiche machen. Danach rechnen.",
    "bananmatte.body":
      "Fang- und Rechenspiel für die 1. und 2. Klasse. Du steuerst einen Gorilla mit Korb, fängst Bananen und beantwortest nach jeder Runde eine Mathefrage. Zehnerfreunde, Plus, Minus, Mal, Geteilt und mehr. Punkte und Namen bleiben auf dem Gerät.",
    "bananmatte.cta": "Bananmatte öffnen",
    "storealfabet.name": "StoreAlfabet",
    "storealfabet.devices": "Telefone",
    "storealfabet.lead": "Alf hat verschlafen!",
    "storealfabet.body":
      "Buchstabenspiel für die 1. und 2. Klasse. Du hilfst dem Hund Alf zur Schule, übst Buchstaben, Laute, Reime und kleine Wörter, sammelst Kristalle und Diamanten und weichst albernen Buchstaben-Zombies aus. Ziel ist die Schule und die Schulmilch. Rekorde bleiben auf dem Telefon.",
    "storealfabet.cta": "StoreAlfabet öffnen",
    "facthunter.name": "FactHunter",
    "facthunter.devices": "Telefone",
    "facthunter.lead": "Spähe auf der Karte nach Wissen in der Ferne.",
    "facthunter.body":
      "Eine dünne Jagd über Wikipedia. Wenn du nah bist, richte die Kamera, sieh Orte als Straßenschilder, schalte sie frei und sammle sie auf dem Telefon. Die Sammlung liegt in diesem Browser auf diesem Telefon — keine Cloud.",
    "facthunter.cta": "FactHunter öffnen",
    madeTitle: "So sind sie gemacht",
    madeBody:
      "Einfache Web-Apps (PWA), die im Browser laufen und auf den Startbildschirm können. Gebaut mit Vite und TypeScript, bereitgestellt über GitHub Pages. Kein eigener Server, keine Anmeldung. Bananmatte und StoreAlfabet speichern Einstellungen und Rekorde in localStorage. FactHunter speichert die Sammlung in IndexedDB. FactHunter liest nur von Wikipedia; nichts wird an mich gesendet.",
    privacyTitle: "Datenschutz",
    privacyBody:
      "Was dir gehört, bleibt auf dem Telefon. Kein Konto, keine Cloud, keine Analyse, keine Verfolgung. Verlierst du das Telefon, löschst Website-Daten oder wechselst den Browser ohne Export, ist das Gespeicherte weg.",
    cautionTitle: "Nutzung auf eigene Gefahr",
    cautionBody:
      "Das ist ein Hobbyprojekt. Ich habe vorerst nur begrenzte Möglichkeiten, die Apps auf vielen verschiedenen Plattformen zu testen. Selbst nutze ich gerade ein iPhone. Dinge können abstürzen, seltsam aussehen oder sich auf deinem Gerät anders verhalten. Nutzung auf eigene Gefahr.",
    supportTitle: "Das Hobby am Laufen halten",
    supportBody:
      "Es ist schön, wenn du mithelfen möchtest. Ein Kaffee hilft mir, in der Freizeit weiterzubasteln — neue kleine Apps, Korrekturen und Zeit, mehr Telefone auszuprobieren.",
    coffeeCta: "Kauf mir einen Kaffee",
    footer: "Hobbyprojekt. Kein Shop, kein Konto, keine Cloud.",
  },
  es: {
    metaTitle: "Reidar Kind — apps de hobby",
    metaDescription:
      "Portal de las apps de hobby Bananmatte, StoreAlfabet y FactHunter. Todo se guarda en el teléfono. Úsalas bajo tu responsabilidad.",
    skip: "Saltar al contenido",
    brand: "Reidar Kind",
    tagline: "Apps de hobby que viven en tu teléfono.",
    langLabel: "Idioma",
    appsTitle: "Las apps",
    appsIntro:
      "Tres por ahora. Las tres se abren en el navegador y se pueden añadir a la pantalla de inicio. Sin tienda, sin cuenta.",
    "bananmatte.name": "Bananmatte",
    "bananmatte.devices": "Tabletas y teléfonos",
    "bananmatte.lead": "Haz travesuras. Luego calcula.",
    "bananmatte.body":
      "Juego de captura y mates para 1.º y 2.º. Diriges un gorila con cesta, cazas plátanos y respondes una pregunta de mates tras cada ronda. Complementos a diez, sumas, restas, multiplicar, dividir y más. Puntos y nombres se quedan en el aparato.",
    "bananmatte.cta": "Abrir Bananmatte",
    "storealfabet.name": "StoreAlfabet",
    "storealfabet.devices": "Teléfonos",
    "storealfabet.lead": "¡Alf se ha quedado dormido!",
    "storealfabet.body":
      "Juego de letras para 1.º y 2.º. Ayudas al perro Alf a llegar al cole, practicas letras, sonidos, rimas y palabras cortas, recoges cristales y diamantes y esquivas zombis de letras un poco tontos. El objetivo es llegar y comprar la leche escolar. Los récords se quedan en el teléfono.",
    "storealfabet.cta": "Abrir StoreAlfabet",
    "facthunter.name": "FactHunter",
    "facthunter.devices": "Teléfonos",
    "facthunter.lead": "Explora el mapa en busca de saber a lo lejos.",
    "facthunter.body":
      "Una caza ligera sobre Wikipedia. Cuando estás cerca, apunta la cámara, ve lugares como señales de la calle, desbloquéalos y recógelos en el teléfono. La colección vive en ese navegador en ese teléfono — sin nube.",
    "facthunter.cta": "Abrir FactHunter",
    madeTitle: "Cómo están hechas",
    madeBody:
      "Apps web sencillas (PWA) que corren en el navegador y se pueden instalar en la pantalla de inicio. Están hechas con Vite y TypeScript y alojadas en GitHub Pages. Sin servidor propio, sin inicio de sesión. Bananmatte y StoreAlfabet guardan ajustes y récords en localStorage. FactHunter guarda la colección en IndexedDB. FactHunter solo lee de Wikipedia; no se me envía nada.",
    privacyTitle: "Privacidad",
    privacyBody:
      "Lo tuyo se queda en el teléfono. Sin cuenta, sin nube, sin analítica y sin rastreo. Si pierdes el teléfono, borras los datos del sitio o cambias de navegador sin exportar, lo guardado desaparece.",
    cautionTitle: "Úsalas bajo tu responsabilidad",
    cautionBody:
      "Esto es un proyecto de hobby. Por ahora tengo poca capacidad para probar las apps en muchas plataformas distintas. Yo uso un iPhone de momento. Pueden fallar, verse raras o comportarse de otro modo en tu aparato. Úsalas bajo tu responsabilidad.",
    supportTitle: "Mantén vivo el hobby",
    supportBody:
      "Se agradece si quieres contribuir. Un café me ayuda a seguir trasteando en el tiempo libre: más apps pequeñas, arreglos y tiempo para probar más teléfonos.",
    coffeeCta: "Invítame a un café",
    footer: "Proyecto de hobby. Sin tienda, sin cuenta, sin nube.",
  },
  pt: {
    metaTitle: "Reidar Kind — apps de hobby",
    metaDescription:
      "Portal das apps de hobby Bananmatte, StoreAlfabet e FactHunter. Tudo fica no telemóvel. Use por sua conta e risco.",
    skip: "Saltar para o conteúdo",
    brand: "Reidar Kind",
    tagline: "Apps de hobby que vivem no teu telemóvel.",
    langLabel: "Idioma",
    appsTitle: "As apps",
    appsIntro:
      "Três por agora. Todas abrem no browser e podem ir para o ecrã inicial. Sem loja, sem conta.",
    "bananmatte.name": "Bananmatte",
    "bananmatte.devices": "Tablets e telemóveis",
    "bananmatte.lead": "Faz asneiras. Depois calcula.",
    "bananmatte.body":
      "Jogo de apanha e matemática para o 1.º e 2.º ano. Controlas um gorila com cesto, apanhas bananas e respondes a uma pergunta de matemática após cada ronda. Amigos do dez, mais, menos, vezes, divisão e mais. Pontos e nomes ficam no aparelho.",
    "bananmatte.cta": "Abrir Bananmatte",
    "storealfabet.name": "StoreAlfabet",
    "storealfabet.devices": "Telemóveis",
    "storealfabet.lead": "O Alf dormiu a mais!",
    "storealfabet.body":
      "Jogo de letras para o 1.º e 2.º ano. Ajudas o cão Alf a chegar à escola, treinas letras, sons, rimas e palavras pequenas, apanhas cristais e diamantes e evitas zombies de letras um pouco parvos. O objetivo é chegar e comprar leite escolar. Os recordes ficam no telemóvel.",
    "storealfabet.cta": "Abrir StoreAlfabet",
    "facthunter.name": "FactHunter",
    "facthunter.devices": "Telemóveis",
    "facthunter.lead": "Explora o mapa à procura de saber ao longe.",
    "facthunter.body":
      "Uma caça leve por cima da Wikipédia. Quando estás perto, aponta a câmara, vê lugares como sinais na rua, desbloqueia-os e guarda-os no telemóvel. A coleção vive nesse browser nesse telemóvel — sem nuvem.",
    "facthunter.cta": "Abrir FactHunter",
    madeTitle: "Como são feitas",
    madeBody:
      "Apps web simples (PWA) que correm no browser e se podem instalar no ecrã inicial. Feitas com Vite e TypeScript e alojadas no GitHub Pages. Sem servidor próprio, sem início de sessão. Bananmatte e StoreAlfabet guardam definições e recordes em localStorage. FactHunter guarda a coleção em IndexedDB. FactHunter só lê da Wikipédia; nada me é enviado.",
    privacyTitle: "Privacidade",
    privacyBody:
      "O que é teu fica no telemóvel. Sem conta, sem nuvem, sem análise e sem rastreio. Se perderes o telemóvel, apagares os dados do sítio ou mudares de browser sem exportar, o que estava guardado desaparece.",
    cautionTitle: "Use por sua conta e risco",
    cautionBody:
      "Isto é um projeto de hobby. Por agora tenho pouca capacidade para testar as apps em muitas plataformas diferentes. Eu próprio uso um iPhone neste momento. Podem falhar, parecer estranhas ou comportar-se de outro modo no teu aparelho. Usa-as por tua conta e risco.",
    supportTitle: "Mantém o hobby a andar",
    supportBody:
      "É giro se quiseres contribuir. Um café ajuda-me a continuar a mexericar nos tempos livres — mais apps pequenas, correções e tempo para experimentar mais telemóveis.",
    coffeeCta: "Oferece-me um café",
    footer: "Projeto de hobby. Sem loja, sem conta, sem nuvem.",
  },
};

export function normalizeLocale(value) {
  if (!value || typeof value !== "string") {
    return null;
  }
  const lower = value.toLowerCase();
  if (LOCALES.includes(lower)) {
    return lower;
  }
  const base = lower.split("-")[0];
  if (base === "nb" || base === "nn" || base === "no") {
    return "no";
  }
  if (LOCALES.includes(base)) {
    return base;
  }
  return null;
}

export function detectLocale({ query, stored, languages } = {}) {
  return (
    normalizeLocale(query) ||
    normalizeLocale(stored) ||
    firstNavigatorLocale(languages) ||
    "no"
  );
}

function firstNavigatorLocale(languages) {
  if (!Array.isArray(languages)) {
    return null;
  }
  for (const language of languages) {
    const match = normalizeLocale(language);
    if (match) {
      return match;
    }
  }
  return null;
}

export function translate(locale, key) {
  const pack = translations[locale] || translations.no;
  if (pack[key] == null) {
    return translations.no[key] ?? key;
  }
  return pack[key];
}

export function translationKeys() {
  return Object.keys(translations.no);
}

export function missingKeys(locale) {
  const expected = translationKeys();
  const pack = translations[locale] || {};
  return expected.filter((key) => pack[key] == null);
}
