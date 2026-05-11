const weddingDate = new Date("2026-08-01T19:00:00+03:00");

const cover = document.querySelector("#cover");
const content = document.querySelector("#content");
const openButton = document.querySelector("#openInvite");
const calendarLink = document.querySelector("#calendarLink");
const shareButton = document.querySelector("#shareInvite");
const scrollCue = document.querySelector("#scrollCue");
const detailsSection = document.querySelector("#details-title");
const weddingGame = document.querySelector("#weddingGame");
const gameStage = document.querySelector("#gameStage");
const gameRunner = document.querySelector("#gameRunner");
const gameObstacle = document.querySelector("#gameObstacle");
const gameObstacleImage = document.querySelector("#gameObstacleImage");
const gameButton = document.querySelector("#gameButton");
const gameScore = document.querySelector("#gameScore");
const gameStatus = document.querySelector("#gameStatus");
const languageSwitch = document.querySelector(".language-switch");
const languageButtons = document.querySelectorAll("[data-language]");
const metaDescription = document.querySelector('meta[name="description"]');
const ogTitle = document.querySelector('meta[property="og:title"]');
const ogDescription = document.querySelector('meta[property="og:description"]');

const countdownTargets = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

const translations = {
  tr: {
    "meta.title": "Gizem & Osman | Düğün Davetiyesi",
    "meta.description": "Gizem ve Osman'ın 01 Ağustos 2026 tarihli düğün davetiyesi.",
    "meta.ogTitle": "Gizem & Osman Düğün Davetiyesi",
    "meta.ogDescription": "01 Ağustos 2026 Cumartesi, saat 19:00 - Pelops Wedding",
    "language.aria": "Dil seçimi",
    "cover.aria": "Davetiyeyi aç",
    "cover.date": "01 Ağustos 2026 · 19:00",
    "cover.letter": "Düğün Davetiyesi",
    "cover.open": "Daveti Aç",
    "cover.tap": "Tıklayın",
    "opening.eyebrow": "Düğünümüze Davetlisiniz",
    "opening.titleTop": "Bu özel günümüze",
    "opening.titleBottom": "sizleri de bekleriz",
    "opening.lead":
      "Hayatımızın en güzel başlangıcını sevdiklerimizle paylaşmak istiyoruz. Mutluluğumuza ortak olmanız bize büyük sevinç verecektir.",
    "opening.scroll": "Aşağı kaydırın",
    "opening.scrollAria": "Davet detaylarına kaydır",
    "details.title": "Davet Detayları",
    "details.dateLabel": "Tarih",
    "details.dateValue": "01 Ağustos 2026 Cumartesi",
    "details.timeLabel": "Saat",
    "details.timeValue": "19:00",
    "details.venueLabel": "Mekan",
    "countdown.eyebrow": "Geri Sayım",
    "countdown.title": "Büyük güne kalan süre",
    "countdown.days": "Gün",
    "countdown.hours": "Saat",
    "countdown.minutes": "Dakika",
    "countdown.seconds": "Saniye",
    "families.eyebrow": "Ailelerimiz",
    "families.title": "Bu mutlu günümüzde",
    "families.family": "Ailesi",
    "families.father": "Babası",
    "families.mother": "Annesi",
    "rsvp.title": "Katılım Bilgisi",
    "rsvp.copy":
      "Sizleri aramızda görmekten büyük mutluluk duyarız. Yer planlamasını en güzel şekilde yapabilmemiz için katılım durumunuzu ailelerimize bildirmenizi rica ederiz.",
    "rsvp.call": "Aramak için dokunun",
    "rsvp.phoneNiyaziAria": "Niyazi MERT telefonunu ara",
    "rsvp.phoneRizaAria": "Rıza Yalçın telefonunu ara",
    "actions.eyebrow": "Not Alın",
    "actions.title": "Sizi aramızda görmek isteriz",
    "actions.calendar": "Takvime Ekle",
    "actions.map": "Konumu Aç",
    "actions.share": "Davetiyeyi Paylaş",
    "game.eyebrow": "Mini Oyun",
    "game.title": "Aşka doğru zıpla",
    "game.copy": "Ekrana dokunun veya boşluk tuşuna basın; İtalya engellerinin üzerinden birlikte zıplayın.",
    "game.aria": "Gelin ve damat zıplama oyunu",
    "game.score": "Skor",
    "game.ready": "Dokun ve zıp de",
    "game.running": "Zıp de!",
    "game.button": "Zıp De",
    "game.restart": "Tekrar Zıp De",
    "game.success": "Harika!",
    "game.tour": "İtalya turu!",
    "game.end": "Skor {score} - tekrar deneyin",
    "footer.text": "Gizem & Osman · 01 Ağustos 2026",
    "calendar.title": "Gizem & Osman Düğün Töreni",
    "calendar.details": "Gizem ve Osman'ın düğün töreni. Tarih: 01 Ağustos 2026 Cumartesi, Saat: 19:00.",
    "share.title": "Gizem & Osman Düğün Davetiyesi",
    "share.text": "Gizem ve Osman'ın düğün davetiyesi: 01 Ağustos 2026, saat 19:00.",
    "share.copied": "Bağlantı Kopyalandı",
    "share.error": "Paylaşım Açılamadı",
  },
  en: {
    "meta.title": "Gizem & Osman | Wedding Invitation",
    "meta.description": "Gizem and Osman's wedding invitation for August 1, 2026.",
    "meta.ogTitle": "Gizem & Osman Wedding Invitation",
    "meta.ogDescription": "Saturday, August 1, 2026 at 19:00 - Pelops Wedding",
    "language.aria": "Language selection",
    "cover.aria": "Open the invitation",
    "cover.date": "August 1, 2026 · 19:00",
    "cover.letter": "Wedding Invitation",
    "cover.open": "Open Invitation",
    "cover.tap": "Tap",
    "opening.eyebrow": "You Are Invited",
    "opening.titleTop": "We would love",
    "opening.titleBottom": "to celebrate with you",
    "opening.lead":
      "We want to share the most beautiful beginning of our lives with the people we love. It would bring us great joy to have you with us.",
    "opening.scroll": "Scroll down",
    "opening.scrollAria": "Scroll to invitation details",
    "details.title": "Invitation Details",
    "details.dateLabel": "Date",
    "details.dateValue": "Saturday, August 1, 2026",
    "details.timeLabel": "Time",
    "details.timeValue": "19:00",
    "details.venueLabel": "Venue",
    "countdown.eyebrow": "Countdown",
    "countdown.title": "Time left until the big day",
    "countdown.days": "Days",
    "countdown.hours": "Hours",
    "countdown.minutes": "Minutes",
    "countdown.seconds": "Seconds",
    "families.eyebrow": "Our Families",
    "families.title": "On this joyful day",
    "families.family": "Family",
    "families.father": "Father",
    "families.mother": "Mother",
    "rsvp.title": "RSVP",
    "rsvp.copy":
      "We would be delighted to have you with us. To help us plan the seating in the best way, please let our families know whether you will be attending.",
    "rsvp.call": "Tap to call",
    "rsvp.phoneNiyaziAria": "Call Niyazi MERT",
    "rsvp.phoneRizaAria": "Call Rıza Yalçın",
    "actions.eyebrow": "Save It",
    "actions.title": "We would love to celebrate with you",
    "actions.calendar": "Add to Calendar",
    "actions.map": "Open Location",
    "actions.share": "Share Invitation",
    "game.eyebrow": "Mini Game",
    "game.title": "Jump toward love",
    "game.copy": "Tap the screen or press Space; jump together over the Italian obstacles.",
    "game.aria": "Bride and groom jumping game",
    "game.score": "Score",
    "game.ready": "Tap and jump",
    "game.running": "Jump!",
    "game.button": "Jump!",
    "game.restart": "Jump Again",
    "game.success": "Lovely!",
    "game.tour": "Italy tour!",
    "game.end": "Score {score} - try again",
    "footer.text": "Gizem & Osman · August 1, 2026",
    "calendar.title": "Gizem & Osman Wedding Ceremony",
    "calendar.details": "Gizem and Osman's wedding ceremony. Date: Saturday, August 1, 2026, Time: 19:00.",
    "share.title": "Gizem & Osman Wedding Invitation",
    "share.text": "Gizem and Osman's wedding invitation: August 1, 2026 at 19:00.",
    "share.copied": "Link Copied",
    "share.error": "Could Not Share",
  },
  it: {
    "meta.title": "Gizem & Osman | Invito di nozze",
    "meta.description": "L'invito di nozze di Gizem e Osman per il 1 agosto 2026.",
    "meta.ogTitle": "Invito di nozze di Gizem & Osman",
    "meta.ogDescription": "Sabato 1 agosto 2026, ore 19:00 - Pelops Wedding",
    "language.aria": "Selezione lingua",
    "cover.aria": "Apri l'invito",
    "cover.date": "1 agosto 2026 · 19:00",
    "cover.letter": "Invito di nozze",
    "cover.open": "Apri l'invito",
    "cover.tap": "Tocca",
    "opening.eyebrow": "Siete invitati",
    "opening.titleTop": "In questo giorno speciale",
    "opening.titleBottom": "vi aspettiamo con gioia",
    "opening.lead":
      "Desideriamo condividere il più bel nuovo inizio della nostra vita con le persone che amiamo. La vostra presenza renderà la nostra felicità ancora più grande.",
    "opening.scroll": "Scorri giù",
    "opening.scrollAria": "Scorri ai dettagli dell'invito",
    "details.title": "Dettagli dell'invito",
    "details.dateLabel": "Data",
    "details.dateValue": "Sabato 1 agosto 2026",
    "details.timeLabel": "Ora",
    "details.timeValue": "19:00",
    "details.venueLabel": "Luogo",
    "countdown.eyebrow": "Conto alla rovescia",
    "countdown.title": "Tempo al grande giorno",
    "countdown.days": "Giorni",
    "countdown.hours": "Ore",
    "countdown.minutes": "Minuti",
    "countdown.seconds": "Secondi",
    "families.eyebrow": "Le nostre famiglie",
    "families.title": "In questo giorno felice",
    "families.family": "Famiglia",
    "families.father": "Padre",
    "families.mother": "Madre",
    "rsvp.title": "Conferma presenza",
    "rsvp.copy":
      "Saremo felicissimi di avervi con noi. Per organizzare al meglio la disposizione dei posti, vi chiediamo gentilmente di comunicare alle nostre famiglie la vostra presenza.",
    "rsvp.call": "Tocca per chiamare",
    "rsvp.phoneNiyaziAria": "Chiama Niyazi MERT",
    "rsvp.phoneRizaAria": "Chiama Rıza Yalçın",
    "actions.eyebrow": "Segnatevelo",
    "actions.title": "Saremo felici di avervi con noi",
    "actions.calendar": "Aggiungi al calendario",
    "actions.map": "Apri posizione",
    "actions.share": "Condividi invito",
    "game.eyebrow": "Mini gioco",
    "game.title": "Salta verso l'amore",
    "game.copy": "Tocca lo schermo o premi Spazio; saltate insieme gli ostacoli italiani.",
    "game.aria": "Gioco di salto degli sposi",
    "game.score": "Punti",
    "game.ready": "Tocca e salta",
    "game.running": "Salta!",
    "game.button": "Salta!",
    "game.restart": "Salta ancora",
    "game.success": "Bellissimo!",
    "game.tour": "Tour d'Italia!",
    "game.end": "Punti {score} - riprova",
    "footer.text": "Gizem & Osman · 1 agosto 2026",
    "calendar.title": "Matrimonio di Gizem & Osman",
    "calendar.details": "Matrimonio di Gizem e Osman. Data: sabato 1 agosto 2026, ore 19:00.",
    "share.title": "Invito di nozze di Gizem & Osman",
    "share.text": "Invito di nozze di Gizem e Osman: 1 agosto 2026, ore 19:00.",
    "share.copied": "Link copiato",
    "share.error": "Condivisione non riuscita",
  },
};

const htmlLanguageCodes = {
  tr: "tr",
  en: "en",
  it: "it",
};

let currentLanguage = "tr";
let shareResetTimer = 0;

function t(key, replacements = {}) {
  const template = translations[currentLanguage]?.[key] ?? translations.tr[key] ?? key;
  return Object.entries(replacements).reduce(
    (text, [name, value]) => text.replace(`{${name}}`, String(value)),
    template,
  );
}

function applyLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;
  document.documentElement.lang = htmlLanguageCodes[language] ?? "tr";
  document.title = t("meta.title");

  metaDescription?.setAttribute("content", t("meta.description"));
  ogTitle?.setAttribute("content", t("meta.ogTitle"));
  ogDescription?.setAttribute("content", t("meta.ogDescription"));

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = t(element.dataset.i18n);
  });

  document.querySelectorAll("[data-i18n-aria]").forEach((element) => {
    element.setAttribute("aria-label", t(element.dataset.i18nAria));
  });

  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  buildCalendarLink();
  updateGameLanguage();
}

function openInvitation() {
  if (!cover || cover.classList.contains("open")) return;

  cover.classList.add("open");
  document.body.classList.remove("is-locked");

  window.setTimeout(() => {
    cover.style.display = "none";
    content?.focus({ preventScroll: true });
    content?.scrollIntoView({ behavior: "smooth", block: "start" });
    initReveal();
  }, 2050);
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal:not(.visible)");

  if (!("IntersectionObserver" in window)) {
    elements.forEach((element) => element.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0.14 },
  );

  elements.forEach((element, index) => {
    element.style.transitionDelay = `${index * 0.045}s`;
    observer.observe(element);
  });
}

function updateCountdown() {
  const distance = Math.max(0, weddingDate.getTime() - Date.now());
  const totalSeconds = Math.floor(distance / 1000);
  const days = Math.floor(totalSeconds / 86400);
  const hours = Math.floor((totalSeconds % 86400) / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  setCountdownValue("days", days);
  setCountdownValue("hours", hours);
  setCountdownValue("minutes", minutes);
  setCountdownValue("seconds", seconds);
}

function setCountdownValue(name, value) {
  const target = countdownTargets[name];
  if (!target) return;
  target.textContent = String(value).padStart(2, "0");
}

const gameVariants = [
  { labels: { tr: "Amalfi", en: "Amalfi", it: "Amalfi" }, src: "./assets/obstacles/amalfi_village.png" },
  { labels: { tr: "Espresso", en: "Espresso", it: "Espresso" }, src: "./assets/obstacles/espresso_moka.png" },
  { labels: { tr: "Gondol", en: "Gondola", it: "Gondola" }, src: "./assets/obstacles/gondola.png" },
  { labels: { tr: "Milano", en: "Milan", it: "Milano" }, src: "./assets/obstacles/milan_duomo.png" },
  { labels: { tr: "Miramare", en: "Miramare", it: "Miramare" }, src: "./assets/obstacles/miramare_castle.png" },
  { labels: { tr: "Pizza", en: "Pizza", it: "Pizza" }, src: "./assets/obstacles/pizza.png" },
  { labels: { tr: "Rialto", en: "Rialto", it: "Rialto" }, src: "./assets/obstacles/rialto_bridge.png" },
  { labels: { tr: "Roma", en: "Rome", it: "Roma" }, src: "./assets/obstacles/roman_columns.png" },
  { labels: { tr: "Trevi", en: "Trevi", it: "Trevi" }, src: "./assets/obstacles/trevi_fountain.png" },
  { labels: { tr: "Vespa", en: "Vespa", it: "Vespa" }, src: "./assets/obstacles/vespa.png" },
  { labels: { tr: "Maske", en: "Mask", it: "Maschera" }, src: "./assets/obstacles/venetian_mask.png" },
  { labels: { tr: "Şarap", en: "Wine", it: "Vino" }, src: "./assets/obstacles/wine_icon.png" },
];

const gameState = {
  animationFrame: 0,
  lastTime: 0,
  obstacleX: 0,
  passedObstacle: false,
  running: false,
  jumping: false,
  score: 0,
  speed: 230,
  variantIndex: 7,
};

function getVariantLabel(variant) {
  return variant?.labels?.[currentLanguage] ?? variant?.labels?.tr ?? "";
}

function setupGamePreview() {
  if (!gameStage || !gameObstacle || !gameObstacleImage) return;

  const previewVariant = gameVariants[7];
  gameState.running = false;
  gameState.score = 0;
  gameState.variantIndex = 7;
  gameState.obstacleX = Math.max(230, gameStage.clientWidth - 150);
  gameScore.textContent = "0";
  gameStatus.textContent = t("game.ready");
  gameButton.textContent = t("game.button");
  gameObstacle.className = "italy-obstacle image-obstacle";
  gameObstacle.dataset.place = getVariantLabel(previewVariant);
  gameObstacleImage.style.backgroundImage = `url("${previewVariant.src}")`;
  gameObstacle.style.transform = `translateX(${gameState.obstacleX}px)`;
}

function updateGameLanguage() {
  if (!gameButton || !gameStatus) return;

  const activeVariant = gameVariants[gameState.variantIndex] ?? gameVariants[7];
  if (gameObstacle) gameObstacle.dataset.place = getVariantLabel(activeVariant);

  if (gameState.running) {
    gameStatus.textContent = t("game.running");
    gameButton.textContent = t("game.button");
    return;
  }

  setupGamePreview();
}

function startGame() {
  if (!weddingGame || !gameStage || !gameObstacle) return;

  window.cancelAnimationFrame(gameState.animationFrame);
  gameState.running = true;
  gameState.jumping = false;
  gameState.score = 0;
  gameState.speed = 230;
  gameState.lastTime = 0;
  gameState.variantIndex = -1;

  gameScore.textContent = "0";
  gameStatus.textContent = t("game.running");
  gameButton.textContent = t("game.button");
  weddingGame.classList.add("is-running");
  gameRunner?.classList.remove("is-jumping");
  resetObstacle();
  gameState.animationFrame = window.requestAnimationFrame(updateGame);
}

function jumpGame() {
  if (!gameState.running) {
    startGame();
  }

  if (gameState.jumping || !gameRunner) return;

  gameState.jumping = true;
  gameRunner.classList.add("is-jumping");

  window.setTimeout(() => {
    gameRunner.classList.remove("is-jumping");
    gameState.jumping = false;
  }, 620);
}

function updateGame(time) {
  if (!gameState.running || !gameStage || !gameObstacle) return;

  if (!gameState.lastTime) gameState.lastTime = time;
  const delta = Math.min(32, time - gameState.lastTime) / 1000;
  gameState.lastTime = time;
  gameState.obstacleX -= gameState.speed * delta;
  gameObstacle.style.transform = `translateX(${gameState.obstacleX}px)`;

  const dangerStart = 72;
  const dangerEnd = 226;

  if (gameState.obstacleX < dangerEnd && gameState.obstacleX > dangerStart && !gameState.jumping) {
    endGame();
    return;
  }

  if (!gameState.passedObstacle && gameState.obstacleX < dangerStart) {
    gameState.passedObstacle = true;
    gameState.score += 1;
    gameState.speed = Math.min(360, gameState.speed + 13);
    gameScore.textContent = String(gameState.score);
    gameStatus.textContent = gameState.score % 5 === 0 ? t("game.tour") : t("game.success");
  }

  if (gameState.obstacleX < -92) resetObstacle();

  gameState.animationFrame = window.requestAnimationFrame(updateGame);
}

function resetObstacle() {
  if (!gameStage || !gameObstacle || !gameObstacleImage) return;

  const nextIndex = Math.floor(Math.random() * gameVariants.length);
  const variantIndex = nextIndex === gameState.variantIndex ? (nextIndex + 1) % gameVariants.length : nextIndex;
  const variant = gameVariants[variantIndex];
  gameState.variantIndex = variantIndex;
  gameState.obstacleX = gameStage.clientWidth + 82;
  gameState.passedObstacle = false;
  gameObstacle.className = "italy-obstacle image-obstacle";
  gameObstacle.dataset.place = getVariantLabel(variant);
  gameObstacleImage.style.backgroundImage = `url("${variant.src}")`;
  gameObstacle.style.transform = `translateX(${gameState.obstacleX}px)`;
}

function endGame() {
  gameState.running = false;
  window.cancelAnimationFrame(gameState.animationFrame);
  weddingGame?.classList.remove("is-running");
  gameRunner?.classList.remove("is-jumping");
  gameButton.textContent = t("game.restart");
  gameStatus.textContent = t("game.end", { score: gameState.score });
}

function buildCalendarLink() {
  if (!calendarLink) return;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: t("calendar.title"),
    dates: "20260801T160000Z/20260801T200000Z",
    details: t("calendar.details"),
    location: "Pelops Wedding",
  });

  calendarLink.href = `https://calendar.google.com/calendar/render?${params.toString()}`;
}

function hideScrollCue() {
  if (document.body.classList.contains("is-locked")) return;
  scrollCue?.classList.add("is-hidden");
}

async function shareInvitation() {
  if (!shareButton) return;

  const label = shareButton.querySelector("span");
  const shareData = {
    title: t("share.title"),
    text: t("share.text"),
    url: window.location.href,
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(window.location.href);
  window.clearTimeout(shareResetTimer);
  label.textContent = t("share.copied");
  shareResetTimer = window.setTimeout(() => {
    label.textContent = t("actions.share");
  }, 2200);
}

cover?.addEventListener("click", openInvitation);
openButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  openInvitation();
});

cover?.addEventListener("keydown", (event) => {
  if (event.target.closest("[data-language]")) return;
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  openInvitation();
});

languageSwitch?.addEventListener("click", (event) => {
  event.stopPropagation();
});

languageSwitch?.addEventListener("keydown", (event) => {
  event.stopPropagation();
});

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.language);
  });
});

shareButton?.addEventListener("click", () => {
  shareInvitation().catch(() => {
    const label = shareButton.querySelector("span");
    window.clearTimeout(shareResetTimer);
    label.textContent = t("share.error");
    shareResetTimer = window.setTimeout(() => {
      label.textContent = t("actions.share");
    }, 2200);
  });
});

scrollCue?.addEventListener("click", () => {
  hideScrollCue();
  detailsSection?.scrollIntoView({ behavior: "smooth", block: "start" });
});

window.addEventListener(
  "scroll",
  () => {
    if (window.scrollY > 12) hideScrollCue();
  },
  { passive: true },
);
window.addEventListener("wheel", hideScrollCue, { passive: true });
window.addEventListener("touchmove", hideScrollCue, { passive: true });
window.addEventListener("resize", () => {
  if (!gameState.running) setupGamePreview();
});

gameButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  jumpGame();
});

gameStage?.addEventListener("click", jumpGame);

weddingGame?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  jumpGame();
});

applyLanguage("tr");
updateCountdown();
window.setInterval(updateCountdown, 1000);
