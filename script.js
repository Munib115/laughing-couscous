/* Munib portfolio - tiny vanilla JS, no dependencies */
(() => {
  const GH = "https://github.com/Munib115/";

  const allJutsu = [
    "Next.js", "React", "TypeScript", "JavaScript", "Tailwind CSS",
    "Vite", "Python", "FastAPI", "SQLite", "Supabase",
    "Real-Time Chat", "E-Commerce Store", "Browser Games", "Video Streaming",
    "PWA", "Vercel", "Web Scraping", "Streamlit", "localStorage", "SEO & OpenGraph"
  ];

  // Goku + Vegeta + Top Famous Anime Characters (High-res 1024px official artwork)
  const chars = {
    goku:    { name: "Goku",    title: "GOKU EXPLAINS",    badge: "Saiyan Sensei",  img: "assets/goku.jpg",              head: "assets/goku-head.jpg",         color: "#f28c28" },
    vegeta:  { name: "Vegeta",  title: "VEGETA EXPLAINS",  badge: "Prince Mode",    img: "assets/chars/vegeta.jpg",      head: "assets/chars/vegeta-head.jpg", color: "#2563eb" },
    naruto:  { name: "Naruto",  title: "NARUTO EXPLAINS",  badge: "Hokage Mode",    img: "assets/chars/naruto.jpg",      head: "assets/chars/naruto-head.jpg", color: "#f97316" },
    luffy:   { name: "Luffy",   title: "LUFFY EXPLAINS",   badge: "Gear 5 Mode",    img: "assets/chars/luffy.jpg",       head: "assets/chars/luffy-head.jpg",  color: "#dc2626" },
    gojo:    { name: "Gojo",    title: "GOJO EXPLAINS",    badge: "Six Eyes Mode",  img: "assets/chars/gojo.jpg",        head: "assets/chars/gojo-head.jpg",   color: "#0284c7" },
    tanjiro: { name: "Tanjiro", title: "TANJIRO EXPLAINS", badge: "Sun Breathing",  img: "assets/chars/tanjiro.jpg",     head: "assets/chars/tanjiro-head.jpg",color: "#10b981" },
    kakashi: { name: "Kakashi", title: "KAKASHI EXPLAINS", badge: "Copy Ninja",     img: "assets/chars/kakashi.jpg",     head: "assets/chars/kakashi-head.jpg",color: "#64748b" },
    zoro:    { name: "Zoro",    title: "ZORO EXPLAINS",    badge: "Santoryu Mode",  img: "assets/chars/zoro.jpg",        head: "assets/chars/zoro-head.jpg",   color: "#16a34a" },
    levi:    { name: "Levi",    title: "CAPTAIN LEVI",     badge: "Scout Captain",  img: "assets/chars/levi.jpg",        head: "assets/chars/levi-head.jpg",   color: "#15803d" },
    sasuke:  { name: "Sasuke",  title: "SASUKE EXPLAINS",  badge: "Chidori Mode",   img: "assets/chars/sasuke.jpg",      head: "assets/chars/sasuke-head.jpg", color: "#7c3aed" },
    eren:    { name: "Eren",    title: "EREN EXPLAINS",    badge: "Attack Titan",   img: "assets/chars/eren.jpg",        head: "assets/chars/eren-head.jpg",   color: "#b45309" },
    sukuna:  { name: "Sukuna",  title: "SUKUNA EXPLAINS",  badge: "King of Curses", img: "assets/chars/sukuna.jpg",      head: "assets/chars/sukuna-head.jpg", color: "#e11d48" },
  };

  const projects = [
    {
      id: "HIANIME", name: "KuroAnime", code: "01", icon: "movie", rank: "S-RANK", char: "goku",
      grad: "linear-gradient(135deg,#ff5f6d,#7b2ff7)",
      speech: "Hey, it's me, Goku! This one's Munib's strongest technique: KuroAnime, a full anime streaming platform. The front end is Vite, the back end is FastAPI with a SQLite database, and he even wrote his own scraper scripts to fill it up. And it's live on Vercel, so you can go check it out right now!",
      features: [
        "Home page with trending anime",
        "Browse + search across the catalogue",
        "Watchlist / “My Collection”",
        "Built-in video player page",
        "FastAPI serverless API (api/index.py) on hianime.db",
        "Custom scraper scripts for data",
      ],
      stack: ["Vite", "FastAPI", "Python", "SQLite", "Vercel", "Web Scraping", "Video Streaming"],
      repo: GH + "HIANIME",
      live: "https://web-three-rho-81.vercel.app/",
    },
    {
      id: "nflix", name: "Nflix (Netflix Clone)", code: "02", icon: "live_tv", rank: "S-RANK", char: "vegeta",
      grad: "linear-gradient(135deg,#e50914,#560000)",
      speech: "Listen up! I am Vegeta, Prince of all Saiyans! Behold Nflix—Munib's full-featured Netflix streaming clone! It delivers a cinema-grade dark UI with featured hero billboards, categorized content carousels, instant title search, trailer previews, and responsive playback!",
      features: [
        "Netflix-inspired cinema UI with hero billboard banner",
        "Trending, Top Rated & genre-based horizontal carousels",
        "Instant movie & series search and filtering",
        "Interactive title modals, details & video player",
        "Responsive layout across desktop, tablet & mobile",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Video Streaming"],
      repo: GH + "nflix",
    },
    {
      id: "anidark", name: "AniDark Streaming", code: "03", icon: "play_circle", rank: "S-RANK", char: "gojo",
      grad: "linear-gradient(135deg,#6366f1,#0f172a)",
      speech: "Yo! Satoru Gojo here. Welcome to the dark realm of anime—AniDark! Munib crafted this sleek dark-mode anime streaming website with high-contrast visuals, episode tracking, seasonal anime discovery, and a distraction-free theater video player.",
      features: [
        "Dedicated dark-aesthetic anime streaming platform",
        "Seasonal anime discovery, trending & top airing lists",
        "Distraction-free theater player & episode selector",
        "Fast search, genre filters & watchlist management",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Video Streaming"],
      repo: GH + "anidark",
    },
        {
      id: "quran", name: "Noor-e-Quran", code: "04", icon: "menu_book", rank: "S-RANK", char: "tanjiro",
      grad: "linear-gradient(135deg,#11998e,#38ef7d)",
      speech: "Tanjiro Kamado here! Noor-e-Quran radiates pure calm and focus. It's a mobile-first Quran and Islamic app built with Next.js 16 and TypeScript—packing all 114 Surahs, 30 Juz in Uthmani script, 40+ translations, verse-by-verse audio, Qibla compass, and digital Tasbih!",
      features: [
        "114 Surahs & 30 Juz in Uthmani script",
        "40+ translations: Urdu, English, Turkish, Indonesian…",
        "Verse-by-verse audio: Alafasy, Abdul Basit…",
        "Qibla compass & digital Tasbih",
        "Daily Duas / Hisnul Muslim",
        "Khatam planner",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      repo: GH + "quran",
    },
    {
      id: "education", name: "IlmRaah", code: "05", icon: "school", rank: "A-RANK", char: "kakashi",
      grad: "linear-gradient(135deg,#4facfe,#283150)",
      speech: "Yo, Kakashi Hatake here. Knowledge is a shinobi's greatest weapon. IlmRaah—the 'Path of Knowledge'—helps Pakistani students discover 250+ verified global scholarships like Fulbright, Chevening, DAAD, and CSC China. Built with Next.js 15, TypeScript, Tailwind v4, and Supabase.",
      features: [
        "Scholarship discovery for Pakistani students",
        "250+ listed scholarships",
        "Fulbright, Chevening, DAAD, Vanier, Australia Awards, CSC…",
        "Supabase-backed data",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase"],
      repo: GH + "education",
    },
    {
      id: "genshin", name: "TeyvatResonance PK", code: "06", icon: "swords", rank: "A-RANK", char: "luffy",
      grad: "linear-gradient(135deg,#f7971e,#ffd200)",
      speech: "Shishishi! I'm Monkey D. Luffy! Ready for a grand adventure? TeyvatResonance PK is Munib's serverless character guide portal for Genshin Impact and Wuthering Waves players in Pakistan! 85+ Genshin characters and 23 Wuthering Waves heroes with bookmarks saved right in localStorage!",
      features: [
        "85+ Genshin characters via community API",
        "23 Wuthering Waves characters",
        "Bookmarks & notes in localStorage",
        "Fully serverless, no database",
      ],
      stack: ["Next.js", "React", "JavaScript", "localStorage"],
      repo: GH + "genshin-guide-",
    },
    {
      id: "snapget", name: "SnapGet", code: "07", icon: "download", rank: "A-RANK", char: "sasuke",
      grad: "linear-gradient(135deg,#ee0979,#ff6a00)",
      speech: "Sasuke Uchiha here. Speed and precision are everything. SnapGet is Munib\'s stateless video downloader PWA built with Next.js 14 and Tailwind—extracting HD media from YouTube Shorts, Instagram Reels, and TikTok via yt-dlp with zero watermarks.",
      features: [
        "YouTube videos, Shorts & MP3",
        "Instagram Reels / Posts, TikTok (no watermark)",
        "Facebook & Twitter / X",
        "Streaming downloads via yt-dlp",
        "Installable PWA + share target",
        "Stateless: no accounts, no DB",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "PWA"],
      repo: GH + "socailmdeia-downlaoder-",
    },
    {
      id: "steamrip", name: "Game Archive Scraper", code: "08", icon: "sports_esports", rank: "B-RANK", char: "zoro",
      grad: "linear-gradient(135deg,#232526,#5b6280)",
      speech: "Roronoa Zoro here! Slicing through data with Three-Sword precision: Munib engineered this full-stack Game Archive Scraper & Frontend. It pairs an async Python FastAPI + SQLite scraper backend with a responsive Vite + Tailwind game grid, search, and live download progress!",
      features: [
        "Async scraper → SQLite",
        "Searchable FastAPI endpoints",
        "Game grid, search & pagination UI",
        "Detail pages with download progress",
      ],
      stack: ["Python", "FastAPI", "SQLite", "Vite", "Tailwind CSS", "Web Scraping"],
      repo: GH + "steamrip",
      note: "Educational / general-purpose framework only. It is not meant for scraping or redistributing copyrighted material without permission.",
    },
    {
      id: "watsapp-auto", name: "wacrm (WhatsApp CRM)", code: "09", icon: "chat", rank: "B-RANK", char: "levi",
      grad: "linear-gradient(135deg,#25d366,#128c7e)",
      speech: "Captain Levi here. Keep your operations disciplined and organized. wacrm is a self-hostable WhatsApp CRM template built on Next.js 16 and Supabase—featuring a shared team inbox, contacts, sales pipelines, broadcasts, and no-code automations.",
      features: [
        "Shared team inbox & contact management",
        "Sales pipelines & broadcast messaging",
        "No-code automation workflows",
        "Self-hostable Next.js 16 + Supabase architecture",
      ],
      stack: ["Next.js", "React", "TypeScript", "Supabase", "Tailwind CSS"],
      repo: GH + "watsapp-auto",
      note: "Presented as a self-hostable CRM template to fork, brand, and host.",
    },
    {
      id: "animepakistan", name: "AnimePakistan", code: "10", icon: "public", rank: "B-RANK", char: "eren",
      grad: "linear-gradient(135deg,#0f9b0f,#1d4350)",
      speech: "Eren Yeager here! Moving forward without hesitation—AnimePakistan is Munib\'s Next.js and TypeScript community platform engineered with production SEO, canonical URLs, Open Graph previews, and automated sitemaps.",
      features: [
        "Production SEO configuration (canonical & Open Graph)",
        "Automated robots.txt & sitemap generation",
        "Environment-driven site URL setup",
        "Next.js App Router + TypeScript foundation",
      ],
      stack: ["Next.js", "React", "TypeScript", "SEO & OpenGraph"],
      repo: GH + "animepakistan",
    },
    {
      id: "call-alpha", name: "Call Alpha", code: "11", icon: "call", rank: "C-RANK", char: "goku",
      grad: "linear-gradient(135deg,#3a7bd5,#3a6073)",
      speech: "Goku back again! Every big technique starts in the training room. Call Alpha is Munib's Next.js and TypeScript App Router prototype built for testing real-time communication interfaces.",
      features: [
        "Next.js App Router architecture (app/page.tsx)",
        "Strict TypeScript configuration",
        "Early-stage prototype / starter workspace",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      repo: GH + "call-alpha",
    },
    {
      id: "anime-downloqader", name: "Anime Downloader", code: "12", icon: "cloud_download", rank: "C-RANK", char: "sukuna",
      grad: "linear-gradient(135deg,#8e2de2,#4a00e0)",
      speech: "Ryomen Sukuna here! Know your place. Anime Downloader is a high-speed Next.js and JavaScript media downloading foundation crafted for quick anime media extraction.",
      features: [
        "Next.js JavaScript App Router setup (app/page.js)",
        "Lightweight starter structure for media downloading",
      ],
      stack: ["Next.js", "React", "JavaScript"],
      repo: GH + "anime-downloqader",
    },
    {
      id: "discord-chating-", name: "Discord Chat Beta", code: "13", icon: "forum", rank: "C-RANK", char: "kakashi",
      grad: "linear-gradient(135deg,#5865f2,#2c2f33)",
      speech: "Kakashi here. Tagged as 'project beta' on GitHub, this repository is a Next.js and TypeScript sandbox built for experimenting with Discord-style real-time chat rooms.",
      features: [
        "Next.js + TypeScript beta sandbox",
        "Component layout for Discord-inspired messaging",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Real-Time Chat"],
      repo: GH + "discord-chating-",
    },
    {
      id: "keyboard-practice-", name: "Keyboard Practice", code: "14", icon: "keyboard", rank: "C-RANK", char: "vegeta",
      grad: "linear-gradient(135deg,#f857a6,#ff5858)",
      speech: "Vegeta again! If your typing speed is under 9000, you need more training! Keyboard Practice is Munib's Next.js and TypeScript training ground for high-speed keystroke accuracy.",
      features: [
        "Interactive typing drill setup in Next.js",
        "TypeScript keyboard event handling",
      ],
      stack: ["Next.js", "React", "TypeScript"],
      repo: GH + "keyboard-practice-",
    },
    {
      id: "TESLA-RAODSTER-", name: "Tesla Roadster Showcase", code: "15", icon: "directions_car", rank: "C-RANK", char: "gojo",
      grad: "linear-gradient(135deg,#cb2d3e,#ef473a)",
      speech: "Gojo back again! Speed and style in one place—Tesla Roadster is a Next.js and TypeScript front-end showcase exploring sleek automotive landing page layouts.",
      features: [
        "Next.js + TypeScript UI showcase",
        "Responsive automotive landing page structure",
      ],
      stack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      repo: GH + "TESLA-RAODSTER-",
    },
    {
      id: "blank-app", name: "Streamlit App Starter", code: "16", icon: "widgets", rank: "C-RANK", char: "naruto",
      grad: "linear-gradient(135deg,#ff4b4b,#7c2d12)",
      speech: "Naruto back for Mission 17! This Python Streamlit starter template is wired up with uv (`uv run streamlit run streamlit_app.py`) so Munib can spin up interactive Python data apps in seconds!",
      features: [
        "Python Streamlit app foundation (streamlit_app.py)",
        "Configured for fast execution with uv",
      ],
      stack: ["Python", "Streamlit"],
      repo: GH + "blank-app",
    },
  ];

  const $ = (s) => document.querySelector(s);
  const track = $("#track");
  const jutsuList = $("#jutsuList");
  const jutsuProject = $("#jutsuProject");
  const missionCount = $("#missionCount");
  const senseiImg = $("#senseiImg");
  const senseiAvatar = $("#senseiAvatar");
  const senseiBadge = $("#senseiBadge");
  const senseiBadgeText = $("#senseiBadgeText");
  const pWho = $("#pWho");
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---- Build cards ---- */
  const frag = document.createDocumentFragment();
  projects.forEach((p, i) => {
    const c = chars[p.char] || chars.goku;
    const b = document.createElement("button");
    b.className = "card"; b.type = "button"; b.setAttribute("role", "listitem");
    b.dataset.i = i;
    b.innerHTML =
      `<span class="card__thumb" data-code="${p.code}" data-char="${c.name}" style="background:${p.grad}"><span class="msr">${p.icon}</span></span>` +
      `<span class="card__name">${p.name}</span>`;
    b.addEventListener("click", () => {
      select(i);
      $("#sensei").scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "nearest" });
    });
    frag.appendChild(b);
  });
  track.appendChild(frag);

  /* ---- Arrows ---- */
  const step = () => (track.querySelector(".card")?.offsetWidth || 120) + 16;
  $(".arrow--prev").addEventListener("click", () => track.scrollBy({ left: -step() * 3, behavior: "smooth" }));
  $(".arrow--next").addEventListener("click", () => track.scrollBy({ left: step() * 3, behavior: "smooth" }));

  /* ---- Typewriter ---- */
  let typer = 0;
  const speechEl = $("#pSpeech");
  function type(text) {
    cancelAnimationFrame(typer);
    if (reduce) { speechEl.textContent = text; return; }
    speechEl.classList.add("typing");
    let n = 0, last = 0;
    const tick = (t) => {
      if (t - last > 16) { n = Math.min(text.length, n + 2); speechEl.textContent = text.slice(0, n); last = t; }
      if (n < text.length) typer = requestAnimationFrame(tick);
      else speechEl.classList.remove("typing");
    };
    typer = requestAnimationFrame(tick);
    speechEl.onclick = () => { cancelAnimationFrame(typer); speechEl.textContent = text; speechEl.classList.remove("typing"); };
  }

  /* ---- Render Jutsu Scroll dynamically for selected project ---- */
  function renderJutsu(p) {
    if (jutsuProject) jutsuProject.textContent = p.name;
    if (!jutsuList) return;
    const activeSet = new Set(p.stack);
    const ordered = [
      ...p.stack,
      ...allJutsu.filter((j) => !activeSet.has(j)),
    ];
    jutsuList.innerHTML = ordered
      .map((s) => `<span class="${activeSet.has(s) ? "active" : "dim"}">${s}</span>`)
      .join("");
  }

  /* ---- Update Anime Character Visuals ---- */
  function updateCharacter(p, animate = true) {
    const c = chars[p.char] || chars.goku;
    document.documentElement.style.setProperty("--accent", c.color);
    if (senseiImg) {
      if (animate && !reduce) {
        senseiImg.classList.remove("char-pop");
        void senseiImg.offsetWidth;
        senseiImg.classList.add("char-pop");
      }
      senseiImg.src = c.img;
      senseiImg.alt = `${c.name} anime sensei mascot`;
    }
    if (senseiAvatar) {
      senseiAvatar.src = c.head;
      senseiAvatar.alt = c.name;
    }
    if (senseiBadgeText) senseiBadgeText.textContent = c.badge;
    if (senseiBadge) senseiBadge.style.background = c.color;
    if (pWho) {
      pWho.textContent = c.title;
      pWho.style.color = c.color;
    }
  }

  /* ---- Select project ---- */
  function select(i) {
    const p = projects[i];
    const c = chars[p.char] || chars.goku;
    const activeCard = track.querySelector(`.card[data-i="${i}"]`);
    track.querySelectorAll(".card").forEach((card) => card.setAttribute("aria-current", card === activeCard ? "true" : "false"));
    if (activeCard) {
      activeCard.scrollIntoView({ behavior: reduce ? "auto" : "smooth", inline: "center", block: "nearest" });
    }
    if (missionCount) {
      missionCount.textContent = `Mission ${p.code} of ${projects.length} · Sensei: ${c.name} (${p.rank})`;
    }
    updateCharacter(p, true);
    $("#pName").textContent = p.name;
    $("#pRank").textContent = p.rank;
    $("#pFeatures").innerHTML = p.features.map((f) => `<li>${f}</li>`).join("");
    $("#pStack").innerHTML = p.stack.map((s) => `<span>${s}</span>`).join("");
    $("#pLinks").innerHTML =
      `<a class="btn btn--dark" href="${p.repo}" target="_blank" rel="noopener"><span class="msr">code</span> View Code</a>` +
      (p.live ? `<a class="btn btn--neu" href="${p.live}" target="_blank" rel="noopener"><span class="msr">open_in_new</span> Live Demo</a>` : "");
    const note = $("#pNote");
    note.hidden = !p.note; note.textContent = p.note || "";
    renderJutsu(p);
    type(p.speech);
  }

  // Start typing only when the sensei section becomes visible (saves work on load)
  let started = false;
  const sensei = $("#sensei");
  if ("IntersectionObserver" in window) {
    const io = new IntersectionObserver((es) => {
      if (es[0].isIntersecting && !started) { started = true; select(0); io.disconnect(); }
    }, { threshold: 0.25 });
    io.observe(sensei);
    // pre-fill static content so layout doesn't jump
    const p = projects[0];
    track.querySelector(".card")?.setAttribute("aria-current", "true");
    updateCharacter(p, false);
    $("#pName").textContent = p.name;
    $("#pRank").textContent = p.rank;
    $("#pFeatures").innerHTML = p.features.map((f) => `<li>${f}</li>`).join("");
    $("#pStack").innerHTML = p.stack.map((s) => `<span>${s}</span>`).join("");
    $("#pLinks").innerHTML =
      `<a class="btn btn--dark" href="${p.repo}" target="_blank" rel="noopener"><span class="msr">code</span> View Code</a>` +
      (p.live ? `<a class="btn btn--neu" href="${p.live}" target="_blank" rel="noopener"><span class="msr">open_in_new</span> Live Demo</a>` : "");
    speechEl.textContent = p.speech;
    renderJutsu(p);
  } else select(0);

  // If a card is clicked before visible, mark started
  track.addEventListener("click", () => (started = true), { capture: true });

  /* ---- Scroll reveal ---- */
  if (!reduce && "IntersectionObserver" in window) {
    const els = document.querySelectorAll(".missions, .sensei, .jutsu");
    const ro = new IntersectionObserver((es) => es.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); ro.unobserve(e.target); }
    }), { threshold: 0.12 });
    els.forEach((el) => { el.classList.add("reveal"); ro.observe(el); });
  }
})();
