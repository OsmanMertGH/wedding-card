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

const countdownTargets = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

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
  { label: "Amalfi", src: "./assets/obstacles/amalfi_village.png" },
  { label: "Espresso", src: "./assets/obstacles/espresso_moka.png" },
  { label: "Duomo", src: "./assets/obstacles/florence_duomo.png" },
  { label: "Gondol", src: "./assets/obstacles/gondola.png" },
  { label: "Gondol", src: "./assets/obstacles/gondola_alt.png" },
  { label: "Milano", src: "./assets/obstacles/milan_duomo.png" },
  { label: "Miramare", src: "./assets/obstacles/miramare_castle.png" },
  { label: "Pisa", src: "./assets/obstacles/pisa_tower.png" },
  { label: "Pizza", src: "./assets/obstacles/pizza.png" },
  { label: "Pizza", src: "./assets/obstacles/pizza_alt.png" },
  { label: "Rialto", src: "./assets/obstacles/rialto_bridge.png" },
  { label: "Roma", src: "./assets/obstacles/roman_columns.png" },
  { label: "Roma", src: "./assets/obstacles/roman_ruins.png" },
  { label: "Trevi", src: "./assets/obstacles/trevi_fountain.png" },
  { label: "Vespa", src: "./assets/obstacles/vespa.png" },
  { label: "Vespa", src: "./assets/obstacles/vespa_alt.png" },
  { label: "Maske", src: "./assets/obstacles/venetian_mask.png" },
  { label: "Şarap", src: "./assets/obstacles/wine_icon.png" },
  { label: "Toskana", src: "./assets/obstacles/wine_tuscany.png" },
  { label: "Colosseum", src: "./assets/obstacles/colosseum.png" },
  { label: "David", src: "./assets/obstacles/david_statue.png" },
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
  variantIndex: 0,
  idleTime: 0,
};

function setupGamePreview() {
  if (!gameStage || !gameObstacle || !gameObstacleImage) return;

  gameState.running = false;
  gameState.score = 0;
  gameState.variantIndex = 2;
  gameState.obstacleX = Math.max(230, gameStage.clientWidth - 150);
  gameScore.textContent = "0";
  gameStatus.textContent = "Dokun ve zıp de";
  gameButton.textContent = "Zıp De";
  gameObstacle.className = "italy-obstacle image-obstacle";
  gameObstacle.dataset.place = "Pisa";
  gameObstacleImage.style.backgroundImage = 'url("./assets/obstacles/pisa_tower.png")';
  gameObstacle.style.transform = `translateX(${gameState.obstacleX}px)`;
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
  gameStatus.textContent = "Zıp de!";
  gameButton.textContent = "Zıp De";
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

  const dangerStart = 58;
  const dangerEnd = 132;

  if (gameState.obstacleX < dangerEnd && gameState.obstacleX > dangerStart && !gameState.jumping) {
    endGame();
    return;
  }

  if (!gameState.passedObstacle && gameState.obstacleX < dangerStart) {
    gameState.passedObstacle = true;
    gameState.score += 1;
    gameState.speed = Math.min(360, gameState.speed + 13);
    gameScore.textContent = String(gameState.score);
    gameStatus.textContent = gameState.score % 5 === 0 ? "İtalya turu!" : "Harika!";
  }

  if (gameState.obstacleX < -92) resetObstacle();

  gameState.animationFrame = window.requestAnimationFrame(updateGame);
}

function resetObstacle() {
  if (!gameStage || !gameObstacle || !gameObstacleImage) return;

  const nextIndex = Math.floor(Math.random() * gameVariants.length);
  const variant = gameVariants[nextIndex === gameState.variantIndex ? (nextIndex + 1) % gameVariants.length : nextIndex];
  gameState.variantIndex = gameVariants.indexOf(variant);
  gameState.obstacleX = gameStage.clientWidth + 82;
  gameState.passedObstacle = false;
  gameObstacle.className = "italy-obstacle image-obstacle";
  gameObstacle.dataset.place = variant.label;
  gameObstacleImage.style.backgroundImage = `url("${variant.src}")`;
  gameObstacle.style.transform = `translateX(${gameState.obstacleX}px)`;
}

function endGame() {
  gameState.running = false;
  window.cancelAnimationFrame(gameState.animationFrame);
  weddingGame?.classList.remove("is-running");
  gameRunner?.classList.remove("is-jumping");
  gameButton.textContent = "Tekrar Zıp De";
  gameStatus.textContent = `Skor ${gameState.score} - tekrar deneyin`;
}

function buildCalendarLink() {
  if (!calendarLink) return;

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Gizem & Osman Düğün Töreni",
    dates: "20260801T170000Z/20260801T210000Z",
    details:
      "Gizem ve Osman'ın düğün töreni. Tarih: 01 Ağustos 2026 Cumartesi, Saat: 19:00.",
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
    title: "Gizem & Osman Düğün Davetiyesi",
    text: "Gizem ve Osman'ın düğün davetiyesi: 01 Ağustos 2026, saat 19:00.",
    url: window.location.href,
  };

  if (navigator.share) {
    await navigator.share(shareData);
    return;
  }

  await navigator.clipboard.writeText(window.location.href);
  label.textContent = "Bağlantı Kopyalandı";
  window.setTimeout(() => {
    label.textContent = "Davetiyeyi Paylaş";
  }, 2200);
}

cover?.addEventListener("click", openInvitation);
openButton?.addEventListener("click", (event) => {
  event.stopPropagation();
  openInvitation();
});

cover?.addEventListener("keydown", (event) => {
  if (event.key !== "Enter" && event.key !== " ") return;
  event.preventDefault();
  openInvitation();
});

shareButton?.addEventListener("click", () => {
  shareInvitation().catch(() => {
    const label = shareButton.querySelector("span");
    label.textContent = "Paylaşım Açılamadı";
    window.setTimeout(() => {
      label.textContent = "Davetiyeyi Paylaş";
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
window.addEventListener("resize", setupGamePreview);

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

buildCalendarLink();
setupGamePreview();
updateCountdown();
window.setInterval(updateCountdown, 1000);
