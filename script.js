/* =====================================================
   ✏️ CUSTOMIZE EVERYTHING HERE
   ===================================================== */

// 🔐 1) Her password (not case-sensitive)
const SECRET_PASSWORD = "25/9/2024";

// 💌 2) Your love letter. Use \n for new lines.
const LOVE_MESSAGE = `My Love,

From the moment you came into my life, everything became brighter and warmer.
Your smile is my favorite place to rest, and your laugh is my favorite song.

Thank you for being you. I promise to love you more with every day that passes.

Forever yours ❤️`;

// 📸 3) Photos + captions. Add as many as you like.
//    Example: { src: "photos/1.jpg", caption: "The day we met" }
//    Leave the list empty to show elegant placeholders.
const OUR_PHOTOS = [
  {
    src: "photos/WhatsApp Image 2026-10-11 at 6.17.23 PM.jpeg",
    caption: "Shawarma dates & late night laughs with my favorite person 🥪❤️",
  },
  {
    src: "photos/WhatsApp Image 2026-10-11 at 6.50.38 PM.jpeg",
    caption: "By the Nile with the one who has my whole heart 🌊✨",
  },
  {
    src: "photos/WhatsApp Image 2026-10-18 at 4.21.00 AM.jpeg",
    caption: "Starting every new day smiling next to you ☀️👍",
  },
  {
    src: "photos/WhatsApp Image 2026-10-19 at 5.21.25 PM (1).jpeg",
    caption: "Road trips with you are my favorite adventure 🚗💨",
  },
  {
    src: "photos/WhatsApp Image 2026-10-19 at 5.21.25 PM (2).jpeg",
    caption: "Sailing through life hand in hand with you ⛵💙",
  },
  {
    src: "photos/WhatsApp Image 2026-10-19 at 5.21.25 PM (3).jpeg",
    caption: "Sunshine, open roads, and your sweet smile ☀️✨",
  },
  {
    src: "photos/WhatsApp Image 2026-10-19 at 5.21.25 PM.jpeg",
    caption: "No matter how far we travel, home is wherever you are 🛣️💖",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.39 PM (1).jpeg",
    caption: "Golden hour has nothing on how radiant you look 🌅✨",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.39 PM.jpeg",
    caption: "Every sunset is ten times more magical with you 🌇❤️",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.40 PM (1).jpeg",
    caption: "That smile of yours never fails to brighten my world 🥰",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.40 PM (2).jpeg",
    caption: "Gentle moments with you that I want to keep forever 🕊️💕",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.40 PM (3).jpeg",
    caption: "Your laughter is my sweetest melody 🎶🤍",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.40 PM.jpeg",
    caption: "My favorite view in the world will always be you 👀✨",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.43 PM (1).jpeg",
    caption: "Walking into our beautiful future together 🚶‍♂️🚶‍♀️💫",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.43 PM (2).jpeg",
    caption: "Pure, unfiltered happiness by your side 😄❤️",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.43 PM.jpeg",
    caption: "Under the city lights, but you shine the brightest 🌙🌟",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.44 PM (1).jpeg",
    caption: "Safe and peaceful in every moment we share 🫂🤍",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.44 PM (2).jpeg",
    caption: "My greatest blessing and my forever choice 💍❤️",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.44 PM (3).jpeg",
    caption: "Forever holding you close in my heart 💖",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.44 PM (4).jpeg",
    caption: "Just you and me, laughing the night away 🌟",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.44 PM.jpeg",
    caption: "I’d choose you in every lifetime, over and over again 💫",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.45 PM (1).jpeg",
    caption: "In your eyes, I found my happiest home 🏡❤️",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.45 PM.jpeg",
    caption: "The sweetest soul who stole my whole heart 🌸",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.47 PM (1).jpeg",
    caption: "Surrounded by fairy lights, but you’re the real magic 🏮✨",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.47 PM (2).jpeg",
    caption: "Lost in thought, but always dreaming of our future 💭❤️",
  },

  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.47 PM.jpeg",
    caption: "You brought so much color and love into my life 🎨✨",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.48 PM (1).jpeg",
    caption: "Our favorite coffee dates and sweetest memories ☕🌿",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.48 PM (2).jpeg",
    caption: "To all our yesterday memories and our beautiful tomorrow 🌊❤️",
  },
  {
    src: "photos/WhatsApp Image 2026-11-06 at 8.26.48 PM.jpeg",
    caption: "Every second with you is a memory I will treasure forever 💕",
  },
];

// 🎵 4) Music file path (put the file next to index.html). Leave "" for no music.
const MUSIC_FILE = "bahabek.mpeg"; // e.g. "music.mp3"

// ⏱ Timing
const TYPE_SPEED_MS = 55; // lower = faster typing
const SLIDE_DURATION_MS = 4000; // time each photo stays on screen

/* =====================================================
   Code below – no need to change
   ===================================================== */
const $ = (id) => document.getElementById(id);
let unlocked = false;

function showStage(id) {
  document
    .querySelectorAll(".stage")
    .forEach((s) => s.classList.toggle("active", s.id === id));
}

/* Floating hearts */
function spawnHeart() {
  const h = document.createElement("span");
  h.className = "fh";
  h.textContent = "♥";
  h.style.left = Math.random() * 100 + "vw";
  h.style.fontSize = 12 + Math.random() * 24 + "px";
  h.style.setProperty("--dx", Math.random() * 80 - 40 + "px");
  h.style.setProperty("--r", Math.random() * 60 - 30 + "deg");
  const d = 7 + Math.random() * 6;
  h.style.animationDuration = d + "s";
  $("hearts").appendChild(h);
  setTimeout(() => h.remove(), d * 1000);
}
setInterval(spawnHeart, 900);
function heartBurst(n) {
  for (let i = 0; i < n; i++) setTimeout(spawnHeart, i * 90);
}

/* Stage 1: password */
$("lock-form").addEventListener("submit", (e) => {
  e.preventDefault();
  const form = e.currentTarget,
    val = $("pw").value.trim().toLowerCase();
  if (val === SECRET_PASSWORD.trim().toLowerCase()) {
    unlocked = true;
    $("pw-error").textContent = "";
    heartBurst(12);
    showStage("stage-letter");
  } else {
    $("pw-error").textContent = "Oops! Try Again, My Love ❤️";
    form.classList.remove("shake");
    void form.offsetWidth;
    form.classList.add("shake");
    $("pw").select();
  }
});

/* Stage 2: envelope + typewriter */
let opened = false;
$("pin").addEventListener("click", () => {
  if (!unlocked || opened) return;
  opened = true;
  $("pin").classList.add("popped");
  $("hint").style.opacity = 0;
  playMusic();
  setTimeout(() => {
    $("envelope").classList.add("open");
    heartBurst(18);
  }, 450);
  setTimeout(() => {
    $("envelope").classList.add("done");
    $("paper").classList.add("show");
    typeLetter();
  }, 2600);
});

function typeLetter() {
  const el = $("typed"),
    paper = $("paper");
  let i = 0;
  el.classList.add("typing");
  (function tick() {
    if (i < LOVE_MESSAGE.length) {
      el.textContent += LOVE_MESSAGE[i++];
      paper.scrollTop = paper.scrollHeight;
      setTimeout(
        tick,
        /[.,!?\n]/.test(LOVE_MESSAGE[i - 1])
          ? TYPE_SPEED_MS * 5
          : TYPE_SPEED_MS,
      );
    } else {
      el.classList.remove("typing");
      setTimeout(() => $("to-memories").classList.remove("hidden"), 800);
    }
  })();
}

$("to-memories").addEventListener("click", () => {
  if (!unlocked) return;
  $("to-memories").classList.add("hidden");
  $("paper").classList.remove("show");
  showStage("stage-memories");
  heartBurst(10);
  setTimeout(startSlideshow, 1200);
});

/* Stage 3: slideshow */
function startSlideshow() {
  const items = OUR_PHOTOS.length
    ? OUR_PHOTOS
    : [
        { caption: "Our first memory" },
        { caption: "Every day with you" },
        { caption: "Forever to go" },
      ];
  const img = $("slide-img"),
    ph = $("slide-ph"),
    cap = $("slide-cap");
  let i = 0;
  function show() {
    if (i >= items.length) return finish();
    const it = items[i++];
    const target = it.src ? img : ph;
    img.style.display = it.src ? "block" : "none";
    ph.style.display = it.src ? "none" : "flex";
    if (it.src) {
      img.src = it.src;
      img.alt = it.caption || "";
    }
    cap.textContent = it.caption || "";
    target.classList.remove("in");
    void target.offsetWidth;
    target.classList.add("in");
    setTimeout(show, SLIDE_DURATION_MS);
  }
  show();
}
function finish() {
  $("slide").classList.add("hidden");
  $("final").classList.remove("hidden");
  $("stage-memories").classList.add("finale");
  setInterval(spawnHeart, 250); // extra hearts for the finale
}

/* Music */
let audio = null;
function playMusic() {
  if (!audio) return;
  audio
    .play()
    .then(() => {
      const btn = $("music-btn");
      if (btn) {
        btn.classList.add("playing");
        btn.setAttribute("aria-label", "Pause music");
      }
    })
    .catch((err) => {
      console.log("Audio play error:", err);
    });
}

function pauseMusic() {
  if (!audio) return;
  audio.pause();
  const btn = $("music-btn");
  if (btn) {
    btn.classList.remove("playing");
    btn.setAttribute("aria-label", "Play music");
  }
}

if (MUSIC_FILE) {
  audio = new Audio(MUSIC_FILE);
  audio.loop = true;
  const btn = $("music-btn");
  btn.hidden = false;
  btn.addEventListener("click", () => {
    if (audio.paused) {
      playMusic();
    } else {
      pauseMusic();
    }
  });
}
