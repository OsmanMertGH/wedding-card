const weddingDate = new Date("2026-08-01T19:00:00+03:00");

const cover = document.querySelector("#cover");
const content = document.querySelector("#content");
const openButton = document.querySelector("#openInvite");
const calendarLink = document.querySelector("#calendarLink");
const shareButton = document.querySelector("#shareInvite");
const scrollCue = document.querySelector("#scrollCue");
const detailsSection = document.querySelector("#details-title");

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

buildCalendarLink();
updateCountdown();
window.setInterval(updateCountdown, 1000);
