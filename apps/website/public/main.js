const STORAGE_KEY = "vievot.website.language";
const DEFAULT_LANGUAGE = "en";

const i18n = {
  en: {
    "meta.title": "VIEVOT | A Reasoning-First AI Brain",
    "meta.description": "VIEVOT is a reasoning-first AI brain for an ecosystem of focused AI apps and skills.",
    "nav.aria": "VIEVOT navigation",
    "nav.primaryAria": "Primary navigation",
    "nav.home": "Home",
    "nav.about": "About VIEVOT",
    "nav.vieracore": "VieraCore",
    "nav.beta": "Beta Access",
    "nav.api": "API",
    "nav.download": "Download",
    "nav.login": "Login",
    "nav.menu": "Menu",
    "language.label": "Language",
    "language.en": "English",
    "language.vi": "Vietnamese",
    "language.note": "Your language preference is saved on this device.",
    "hero.pill": "REASONING-FIRST AI",
    "hero.subtitle": "A Reasoning-First<br /><span>AI Brain</span>",
    "hero.lead": "Built for multi-step reasoning, long-horizon context, near real-time responses, and reliable execution across complex tasks.",
    "hero.trust1": "Multi-step reasoning",
    "hero.trust2": "Validated rule-based evolution",
    "hero.trust3": "Privacy-first learning",
    "cta.try": "Try VIEVOT",
    "cta.beta": "Request beta access",
    "performance.aria": "Performance notes",
    "performance.latency": "Typical response latency",
    "performance.reasoningMetric": "Accuracy-focused",
    "performance.reasoning": "reasoning",
    "performance.verifyMetric": "On demand",
    "performance.verify": "verification",
    "performance.privacyMetric": "Privacy-first",
    "performance.privacy": "learning",
    "performance.contextMetric": "Long context",
    "performance.context": "consistency",
    "performance.note": "Measured internally. June 2026. 1,000 prompts.",
    "difference.pill": "DIFFERENCE",
    "difference.traditional": "Traditional: Question -> Answer",
    "difference.vievot": "VIEVOT: Question -> Reasoning -> Verification when needed -> Response",
    "about.pill": "ABOUT VIEVOT",
    "about.title": "The shared AI brain behind focused apps and skills.",
    "about.body": "VIEVOT is the reasoning brain behind an ecosystem of AI applications and skills. It is designed to reason before responding, maintain long-term context, and improve through validated rules rather than memorizing raw user data.",
    "strengths.pill": "WHY VIEVOT",
    "strengths.title": "Built for useful answers, not just fast replies.",
    "strengths.card1.title": "Reasoning-first architecture",
    "strengths.card1.body": "VIEVOT prioritizes goals, constraints, and context before responding.",
    "strengths.card2.title": "Near real-time response",
    "strengths.card2.body": "Designed for smooth interaction while still preserving reasoning quality.",
    "strengths.card3.title": "Verified evolution",
    "strengths.card3.body": "Lessons are sanitized, checked, and converted into validated rules before they can influence future behavior.",
    "strengths.card4.title": "Privacy-first learning",
    "strengths.card4.body": "Sensitive data is rejected from long-term evolution memory, and raw conversations are not used for direct training.",
    "core.pill": "VIERACORE",
    "core.title": "The software engineering core skill for complex tasks.",
    "core.body": "VieraCore is the software engineering core skill of the VIEVOT ecosystem. It is designed for complex, multi-step software tasks where strong task persistence matters. Give it a goal once, and it can keep the process moving from analysis to completion, with validation and clear reporting along the way.",
    "core.teaser.subtitle": "Built for complex software projects.",
    "core.teaser.bullet1": "Strong task persistence",
    "core.teaser.bullet2": "Multi-step execution",
    "core.teaser.bullet3": "Long-running workflow completion",
    "core.teaser.bullet4": "Clear progress and final reporting",
    "core.teaser.cta": "Learn More",
    "apps.pill": "PRODUCTS & SKILLS",
    "apps.title": "Public focus: VIEVOT and VieraCore first.",
    "status.beta": "beta",
    "status.comingSoon": "coming soon",
    "status.planned": "planned",
    "apps.vievot.body": "A reasoning-first AI brain for chat, long-context assistance, and reliable execution across complex workflows.",
    "apps.vievot.cta": "Try VIEVOT",
    "apps.core.body": "A software engineering core skill for analysis, patching, validation, and clear final reports in complex projects.",
    "apps.core.cta": "Request beta access",
    "apps.documents.body": "Document reading, summarization, and drafting workflows are planned for future beta stages.",
    "apps.documents.cta": "Join waitlist",
    "apps.video.body": "Creative and video workflow support is planned for later stages of the ecosystem.",
    "apps.video.cta": "Get updates",
    "apps.future.name": "Future Skills",
    "apps.future.body": "Additional skills can be added over time as the ecosystem expands.",
    "apps.future.cta": "Suggest a skill",
    "beta.title": "Beta Access",
    "beta.body": "Controlled beta is account-based. If public signup is not open yet, request access and we will follow up when a beta slot is available.",
    "beta.name": "Name",
    "beta.email": "Email",
    "beta.namePlaceholder": "Your name",
    "beta.emailPlaceholder": "you@example.com",
    "beta.cta": "Prepare beta request",
    "beta.emailCta": "Request by email",
    "api.title": "API",
    "api.body": "Public API access is not open yet. API beta access will be reviewed per use case.",
    "api.cta": "API access coming soon",
    "download.title": "Download",
    "download.body": "The public installer is not available yet. Download access will open during controlled beta.",
    "download.cta": "Beta download coming soon",
    "login.title": "Login",
    "login.body": "Public OAuth login is not enabled on this website yet. Beta login will use permissioned VIEVOT accounts.",
    "login.cta": "Beta login coming soon",
    "privacy.title": "Privacy-first learning",
    "privacy.body": "No raw conversation training. Lessons are sanitized and converted into validated rules. Sensitive data is rejected from long-term evolution memory.",
    "contact.title": "Contact",
    "contact.body": "For beta access, product questions, or partnership conversations, contact the VIEVOT team.",
    "contact.cta": "Contact VIEVOT",
    "statusPanel.title": "Access status",
    "statusPanel.body": "Choose API, Download, or Login to see the current beta access note.",
    "statusPanel.beta": "Beta requests are not submitted to a backend yet. Use Request by email so you know exactly what is sent.",
    "statusPanel.api": "Public API access is coming soon. Request beta access if you want early review.",
    "statusPanel.download": "Beta download is coming soon. No public installer is available yet.",
    "statusPanel.login": "Public login is coming soon. Beta login will use permissioned VIEVOT accounts.",
    "faq.pill": "FAQ",
    "faq.title": "A few practical notes before beta.",
    "faq.q1": "Is VIEVOT only a chat app?",
    "faq.a1": "No. Chat is one surface. VIEVOT is positioned as the shared reasoning brain for focused apps and skills.",
    "faq.q2": "Does VIEVOT train directly on private conversations?",
    "faq.a2": "No. The evolution process is based on sanitized, validated rules, not raw private data.",
    "faq.q3": "Can I download the desktop app now?",
    "faq.a3": "Not publicly yet. Download access will open through controlled beta.",
    "footer.pill": "NEXT STEP",
    "footer.title": "Try the web experience or request beta access."
  },
  vi: {
    "meta.title": "VIEVOT | Bo nao AI uu tien suy luan",
    "meta.description": "VIEVOT la bo nao AI uu tien suy luan cho he sinh thai ung dung va skill AI chuyen dung.",
    "nav.aria": "Dieu huong VIEVOT",
    "nav.primaryAria": "Dieu huong chinh",
    "nav.home": "Trang chu",
    "nav.about": "Ve VIEVOT",
    "nav.vieracore": "VieraCore",
    "nav.beta": "Beta Access",
    "nav.api": "API",
    "nav.download": "Tai ung dung",
    "nav.login": "Dang nhap",
    "nav.menu": "Menu",
    "language.label": "Ngon ngu",
    "language.en": "English",
    "language.vi": "Tieng Viet",
    "language.note": "Lua chon ngon ngu duoc luu tren thiet bi nay.",
    "hero.pill": "AI UU TIEN SUY LUAN",
    "hero.subtitle": "Bo nao AI<br /><span>uu tien suy luan</span>",
    "hero.lead": "Duoc thiet ke de suy luan nhieu buoc, giu ngu canh dai han, phan hoi gan thoi gian thuc va ho tro cac nhiem vu phuc tap voi do on dinh cao.",
    "hero.trust1": "Suy luan nhieu buoc",
    "hero.trust2": "Tien hoa bang quy luat da kiem chung",
    "hero.trust3": "Hoc tap uu tien quyen rieng tu",
    "cta.try": "Trai nghiem VIEVOT",
    "cta.beta": "Dang ky beta",
    "performance.aria": "Ghi chu hieu suat",
    "performance.latency": "Thoi gian phan hoi thuong gap",
    "performance.reasoningMetric": "Tap trung do chinh xac",
    "performance.reasoning": "trong suy luan",
    "performance.verifyMetric": "Khi can",
    "performance.verify": "kiem chung",
    "performance.privacyMetric": "Uu tien rieng tu",
    "performance.privacy": "trong hoc tap",
    "performance.contextMetric": "Ngu canh dai",
    "performance.context": "on dinh",
    "performance.note": "Do noi bo. Thang 6/2026. 1.000 cau hoi.",
    "difference.pill": "KHAC BIET",
    "difference.traditional": "Tuong tac thuong gap: Cau hoi -> Cau tra loi",
    "difference.vievot": "VIEVOT: Cau hoi -> Suy luan -> Kiem chung khi can -> Phan hoi",
    "about.pill": "VE VIEVOT",
    "about.title": "Bo nao AI chung phia sau cac app va skill chuyen dung.",
    "about.body": "VIEVOT la bo nao suy luan trung tam cua he sinh thai ung dung AI. VIEVOT duoc thiet ke de suy luan truoc khi phan hoi, giu ngu canh dai han va tien hoa bang cac quy luat da duoc kiem chung thay vi ghi nho du lieu tho cua nguoi dung.",
    "strengths.pill": "VI SAO VIEVOT",
    "strengths.title": "Duoc xay dung de tao cau tra loi huu ich, khong chi la phan hoi nhanh.",
    "strengths.card1.title": "Kien truc uu tien suy luan",
    "strengths.card1.body": "VIEVOT uu tien muc tieu, rang buoc va ngu canh truoc khi phan hoi.",
    "strengths.card2.title": "Phan hoi gan thoi gian thuc",
    "strengths.card2.body": "Duoc thiet ke de tuong tac muot ma ma van giu chat luong suy luan.",
    "strengths.card3.title": "Tien hoa da kiem chung",
    "strengths.card3.body": "Bai hoc duoc lam sach, kiem tra va chuyen thanh quy luat da xac thuc truoc khi anh huong den hanh vi tuong lai.",
    "strengths.card4.title": "Hoc tap uu tien quyen rieng tu",
    "strengths.card4.body": "Du lieu nhay cam bi loai khoi bo nho tien hoa dai han, va hoi thoai tho khong duoc dung de train truc tiep.",
    "core.pill": "VIERACORE",
    "core.title": "Core skill ky thuat phan mem cho nhiem vu phuc tap.",
    "core.body": "VieraCore la core skill ky thuat phan mem cua he sinh thai VIEVOT. VieraCore duoc thiet ke cho cac nhiem vu phan mem phuc tap, nhieu buoc, can kha nang bam muc tieu cao. Chi can giao muc tieu mot lan, VieraCore co the duy tri quy trinh toi khi hoan tat, kem kiem tra va bao cao ro rang.",
    "core.teaser.subtitle": "Built for complex software projects.",
    "core.teaser.bullet1": "Bam muc tieu tot",
    "core.teaser.bullet2": "Thuc thi nhieu buoc",
    "core.teaser.bullet3": "Hoan tat workflow dai",
    "core.teaser.bullet4": "Tien do va bao cao ro rang",
    "core.teaser.cta": "Xem them",
    "apps.pill": "SAN PHAM & SKILL",
    "apps.title": "Public focus: VIEVOT va VieraCore truoc.",
    "status.beta": "beta",
    "status.comingSoon": "coming soon",
    "status.planned": "planned",
    "apps.vievot.body": "Bo nao AI uu tien suy luan cho chat, tro ly ngu canh dai va thuc thi on dinh trong workflow phuc tap.",
    "apps.vievot.cta": "Trai nghiem VIEVOT",
    "apps.core.body": "Core skill ky thuat phan mem cho phan tich, patch, kiem tra va bao cao ro rang trong du an phuc tap.",
    "apps.core.cta": "Dang ky beta",
    "apps.documents.body": "Doc, tom tat va soan thao tai lieu se duoc mo trong cac giai doan beta sau.",
    "apps.documents.cta": "Tham gia waitlist",
    "apps.video.body": "Ho tro workflow sang tao va video duoc len ke hoach cho giai doan sau.",
    "apps.video.cta": "Nhan cap nhat",
    "apps.future.name": "Future Skills",
    "apps.future.body": "Cac skill moi co the duoc bo sung theo thoi gian khi he sinh thai mo rong.",
    "apps.future.cta": "De xuat skill",
    "beta.title": "Beta Access",
    "beta.body": "Controlled beta duoc cap theo tai khoan. Neu dang ky public chua mo, hay request access va chung toi se lien he khi co slot beta.",
    "beta.name": "Ten",
    "beta.email": "Email",
    "beta.namePlaceholder": "Ten cua ban",
    "beta.emailPlaceholder": "you@example.com",
    "beta.cta": "Chuan bi yeu cau beta",
    "beta.emailCta": "Gui bang email",
    "api.title": "API",
    "api.body": "Public API chua mo. API beta se duoc xem xet theo tung use case.",
    "api.cta": "API access coming soon",
    "download.title": "Tai ung dung",
    "download.body": "Installer public chua san sang. Quyen tai ung dung se mo trong controlled beta.",
    "download.cta": "Beta download coming soon",
    "login.title": "Dang nhap",
    "login.body": "OAuth public chua duoc bat tren website nay. Beta login se dung tai khoan VIEVOT duoc cap quyen.",
    "login.cta": "Beta login coming soon",
    "privacy.title": "Hoc tap uu tien quyen rieng tu",
    "privacy.body": "Khong train tren hoi thoai tho. Bai hoc duoc lam sach va chuyen thanh quy luat da kiem chung. Du lieu nhay cam bi loai khoi bo nho tien hoa dai han.",
    "contact.title": "Lien he",
    "contact.body": "Neu can beta access, hoi ve san pham hoac hop tac, hay lien he VIEVOT.",
    "contact.cta": "Lien he VIEVOT",
    "statusPanel.title": "Trang thai truy cap",
    "statusPanel.body": "Chon API, Download hoac Login de xem ghi chu beta hien tai.",
    "statusPanel.beta": "Yeu cau beta chua duoc gui vao backend. Hay dung Gui bang email de ban biet chinh xac noi dung se duoc gui.",
    "statusPanel.api": "Public API dang duoc chuan bi. Hay request beta access neu ban muon duoc xem xet som.",
    "statusPanel.download": "Beta download dang duoc chuan bi. Chua co public installer.",
    "statusPanel.login": "Public login dang duoc chuan bi. Beta login se dung tai khoan VIEVOT duoc cap quyen.",
    "faq.pill": "FAQ",
    "faq.title": "Mot vai ghi chu thuc te truoc beta.",
    "faq.q1": "VIEVOT co chi la chat app khong?",
    "faq.a1": "Khong. Chat chi la mot be mat su dung. VIEVOT duoc dinh vi la bo nao suy luan chung cho cac app va skill chuyen dung.",
    "faq.q2": "VIEVOT co train truc tiep tren hoi thoai rieng tu khong?",
    "faq.a2": "Khong. Qua trinh tien hoa dua tren quy luat da lam sach va kiem chung, khong dua tren du lieu rieng tu tho.",
    "faq.q3": "Co the tai desktop app ngay khong?",
    "faq.a3": "Chua public. Quyen tai ung dung se mo qua controlled beta.",
    "footer.pill": "BUOC TIEP THEO",
    "footer.title": "Trai nghiem web hoac dang ky beta."
  }
};

let currentLang = DEFAULT_LANGUAGE;

function t(key) {
  return (i18n[currentLang] && i18n[currentLang][key]) || i18n[DEFAULT_LANGUAGE][key] || key;
}

function applyLanguage(lang) {
  currentLang = i18n[lang] ? lang : DEFAULT_LANGUAGE;
  document.documentElement.lang = currentLang;
  document.title = t("meta.title");
  document.querySelectorAll("[data-i18n]").forEach((node) => {
    node.textContent = t(node.dataset.i18n);
  });
  document.querySelectorAll("[data-i18n-html]").forEach((node) => {
    node.innerHTML = t(node.dataset.i18nHtml);
  });
  document.querySelectorAll("[data-i18n-attr]").forEach((node) => {
    node.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":");
      if (attr && key) node.setAttribute(attr, t(key));
    });
  });
  const select = document.getElementById("languageSelect");
  if (select) select.value = currentLang;
  try {
    localStorage.setItem(STORAGE_KEY, currentLang);
  } catch {
    // Preference persistence is best-effort on locked-down browsers.
  }
}

function savedLanguage() {
  try {
    return localStorage.getItem(STORAGE_KEY) || DEFAULT_LANGUAGE;
  } catch {
    return DEFAULT_LANGUAGE;
  }
}

async function loadConfig() {
  try {
    return await fetch("/site-config.json", { cache: "no-store" }).then((res) => res.json());
  } catch {
    return {};
  }
}

function publicUrl(value) {
  if (!value || typeof value !== "string") return "";
  try {
    const url = new URL(value);
    return url.protocol === "https:" ? url.toString() : "";
  } catch {
    return "";
  }
}

function wireConfigLinks(config) {
  const webChatUrl = publicUrl(config.webChatUrl);
  const apiDocsUrl = publicUrl(config.apiDocsUrl);
  const downloadUrl = publicUrl(config.downloadUrl);
  const loginUrl = publicUrl(config.loginUrl);
  const contactUrl = config.contactUrl || "";

  document.querySelectorAll("[data-app-link]").forEach((link) => {
    link.href = webChatUrl || "#beta-access";
    if (!webChatUrl) link.dataset.statusAction = "beta";
  });
  document.querySelectorAll("[data-contact-link]").forEach((link) => {
    if (contactUrl.startsWith("mailto:") || publicUrl(contactUrl)) link.href = contactUrl;
  });
  document.querySelectorAll("[data-api-link]").forEach((link) => {
    link.href = apiDocsUrl || "#api";
    if (!apiDocsUrl) link.dataset.statusAction = "api";
  });
  document.querySelectorAll("[data-download-link]").forEach((link) => {
    link.href = downloadUrl || "#download";
    if (!downloadUrl) link.dataset.statusAction = "download";
  });
  document.querySelectorAll("[data-login-link]").forEach((link) => {
    link.href = loginUrl || "#login";
    if (!loginUrl) link.dataset.statusAction = "login";
  });
}

function wireStatusActions() {
  const status = document.getElementById("betaStatusText");
  document.querySelectorAll("[data-status-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.statusAction;
      if (status) status.textContent = t(`statusPanel.${action}`);
      document.getElementById("status")?.scrollIntoView({ behavior: "smooth", block: "center" });
    });
  });
}

function wireMobileMenu() {
  const toggle = document.querySelector(".mobile-menu-toggle");
  const sidebar = document.getElementById("siteSidebar");
  if (!toggle || !sidebar) return;

  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => {
    setOpen(!document.body.classList.contains("nav-open"));
  });

  sidebar.querySelectorAll("a[href^='#']").forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });
}

function wireActiveNavigation() {
  const links = [...document.querySelectorAll(".nav-list a[href^='#']")];
  links.forEach((link) => {
    link.addEventListener("click", () => {
      links.forEach((item) => item.classList.remove("active"));
      link.classList.add("active");
    });
  });
}

(async () => {
  const config = await loadConfig();
  wireConfigLinks(config);
  wireStatusActions();
  wireMobileMenu();
  wireActiveNavigation();

  const select = document.getElementById("languageSelect");
  if (select) {
    select.addEventListener("change", () => applyLanguage(select.value));
  }
  applyLanguage(savedLanguage());
})();
