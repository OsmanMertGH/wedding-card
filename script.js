const weddingDate = new Date("2026-08-01T20:00:00+03:00");
const cover = document.querySelector("#cover");
const content = document.querySelector("#content");
const openButton = document.querySelector("#openInvite");
const petals = document.querySelector("#petals");
const calendarLink = document.querySelector("#calendarLink");

const countdownTargets = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

function openInvitation() {
  if (cover.classList.contains("open")) return;

  cover.classList.add("open");
  document.body.classList.remove("is-locked");
  spawnPetals();

  window.setTimeout(() => {
    cover.style.display = "none";
    content.focus({ preventScroll: true });
    content.scrollIntoView({ behavior: "smooth", block: "start" });
    initReveal();
  }, 900);
}

function spawnPetals() {
  petals.classList.add("active");
  petals.textContent = "";

  for (let index = 0; index < 28; index += 1) {
    const petal = document.createElement("span");
    const size = 8 + Math.random() * 10;

    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}vw`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.opacity = `${0.15 + Math.random() * 0.35}`;
    petal.style.animationDuration = `${4 + Math.random() * 5}s`;
    petal.style.animationDelay = `${Math.random() * 4}s`;
    petals.appendChild(petal);
  }

  window.setTimeout(() => {
    petals.classList.remove("active");
    petals.textContent = "";
  }, 12000);
}

function initReveal() {
  const elements = document.querySelectorAll(".reveal");

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
    { threshold: 0.12 },
  );

  elements.forEach((element, index) => {
    element.style.transitionDelay = `${index * 0.04}s`;
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

  countdownTargets.days.textContent = String(days).padStart(2, "0");
  countdownTargets.hours.textContent = String(hours).padStart(2, "0");
  countdownTargets.minutes.textContent = String(minutes).padStart(2, "0");
  countdownTargets.seconds.textContent = String(seconds).padStart(2, "0");
}

function buildCalendarLink() {
  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: "Gizem & Osman Düğün Töreni",
    dates: "20260801T170000Z/20260801T210000Z",
    details:
      "Gizem ve Osman'ın düğün töreni. Tarih: 01 Ağustos 2026 Cumartesi, Saat: 20:00.",
    location:
