const weddingDate = new Date("2026-08-01T20:00:00+03:00");
const cover = document.querySelector("#cover");
const invitation = document.querySelector("#invitation");
const openButton = document.querySelector("#openInvite");
const calendarLink = document.querySelector("#calendarLink");

const countdownTargets = {
  days: document.querySelector("#days"),
  hours: document.querySelector("#hours"),
  minutes: document.querySelector("#minutes"),
  seconds: document.querySelector("#seconds"),
};

document.body.classList.add("is-locked");

function openInvitation() {
  if (cover.classList.contains("is-open")) return;

  cover.classList.add("is-open");
  document.body.classList.remove("is-locked");

  window.setTimeout(() => {
    cover.setAttribute("aria-hidden", "true");
    invitation.focus({ preventScroll: true });
    invitation.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 700);
}

cover.addEventListener("click", openInvitation);
openButton.addEventListener("click", (event) => {
  event.stopPropagation();
  openInvitation();
});

cover.addEventListener("keydown", (event) => {
  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openInvitation();
  }
});

function updateCountdown() {
  const now = new Date();
  const distance = Math.max(0, weddingDate.getTime() - now.getTime());
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
      "Pelops Wedding, Kızılcaşar, İsmail Gaspıralı Cd No:2, 06830 Gölbaşı/Ankara",
  });

  calendarLink.href = `https://calendar.google.com/calendar/render?${params.toString()}`;
}

buildCalendarLink();
updateCountdown();
window.setInterval(updateCountdown, 1000);
