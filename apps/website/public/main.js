const STORAGE_KEY = "vievot.website.language";
const DEFAULT_LANGUAGE = "en";

const i18n = {
  en: {
    "meta.title": "VIEVOT | A Reasoning-First AI Brain",
    "meta.description": "VIEVOT is a reasoning-first AI brain for an ecosystem of focused AI apps and skills.",
    "brand.tagline": "Reasoning-First AI",
    "nav.aria": "VIEVOT navigation",
    "nav.primaryAria": "Primary navigation",
    "nav.home": "Home",
    "nav.chat": "Chat with VIEVOT",
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
    "statusPanel.chat": "VIEVOT Chat is opening for controlled beta access.",
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
    "meta.title": "VIEVOT | Bộ não AI ưu tiên suy luận",
    "meta.description": "VIEVOT là bộ não AI ưu tiên suy luận cho hệ sinh thái ứng dụng và kỹ năng AI chuyên dụng.",
    "brand.tagline": "AI ưu tiên suy luận",
    "nav.aria": "Điều hướng VIEVOT",
    "nav.primaryAria": "Điều hướng chính",
    "nav.home": "Trang chủ",
    "nav.chat": "Trò chuyện với VIEVOT",
    "nav.about": "Về VIEVOT",
    "nav.vieracore": "VieraCore",
    "nav.beta": "Beta Access",
    "nav.api": "API",
    "nav.download": "Tải ứng dụng",
    "nav.login": "Đăng nhập",
    "nav.menu": "Menu",
    "language.label": "Ngôn ngữ",
    "language.en": "English",
    "language.vi": "Tiếng Việt",
    "language.note": "Lựa chọn ngôn ngữ được lưu trên thiết bị này.",
    "hero.pill": "AI ƯU TIÊN SUY LUẬN",
    "hero.subtitle": "Bộ não AI<br /><span>ưu tiên suy luận</span>",
    "hero.lead": "Được thiết kế để suy luận nhiều bước, giữ ngữ cảnh dài hạn, phản hồi gần thời gian thực và hỗ trợ các nhiệm vụ phức tạp với độ ổn định cao.",
    "hero.trust1": "Suy luận nhiều bước",
    "hero.trust2": "Tiến hóa bằng quy luật đã kiểm chứng",
    "hero.trust3": "Học tập ưu tiên quyền riêng tư",
    "cta.try": "Trải nghiệm VIEVOT",
    "cta.beta": "Đăng ký beta",
    "performance.aria": "Ghi chú hiệu suất",
    "performance.latency": "Thời gian phản hồi thường gặp",
    "performance.reasoningMetric": "Tập trung độ chính xác",
    "performance.reasoning": "trong suy luận",
    "performance.verifyMetric": "Khi cần",
    "performance.verify": "kiểm chứng",
    "performance.privacyMetric": "Ưu tiên riêng tư",
    "performance.privacy": "trong học tập",
    "performance.contextMetric": "Ngữ cảnh dài",
    "performance.context": "ổn định",
    "performance.note": "Đo nội bộ. Tháng 6/2026. 1.000 câu hỏi.",
    "difference.pill": "KHÁC BIỆT",
    "difference.traditional": "Tương tác thường gặp: Câu hỏi -> Câu trả lời",
    "difference.vievot": "VIEVOT: Câu hỏi -> Suy luận -> Kiểm chứng khi cần -> Phản hồi",
    "about.pill": "VỀ VIEVOT",
    "about.title": "Bộ não AI chung phía sau các app và kỹ năng chuyên dụng.",
    "about.body": "VIEVOT là bộ não suy luận trung tâm của hệ sinh thái ứng dụng AI. VIEVOT được thiết kế để suy luận trước khi phản hồi, giữ ngữ cảnh dài hạn và tiến hóa bằng các quy luật đã được kiểm chứng thay vì ghi nhớ dữ liệu thô của người dùng.",
    "strengths.pill": "VÌ SAO VIEVOT",
    "strengths.title": "Được xây dựng để tạo câu trả lời hữu ích, không chỉ là phản hồi nhanh.",
    "strengths.card1.title": "Kiến trúc ưu tiên suy luận",
    "strengths.card1.body": "VIEVOT ưu tiên mục tiêu, ràng buộc và ngữ cảnh trước khi phản hồi.",
    "strengths.card2.title": "Phản hồi gần thời gian thực",
    "strengths.card2.body": "Được thiết kế để tương tác mượt mà mà vẫn giữ chất lượng suy luận.",
    "strengths.card3.title": "Tiến hóa đã kiểm chứng",
    "strengths.card3.body": "Bài học được làm sạch, kiểm tra và chuyển thành quy luật đã xác thực trước khi ảnh hưởng đến hành vi tương lai.",
    "strengths.card4.title": "Học tập ưu tiên quyền riêng tư",
    "strengths.card4.body": "Dữ liệu nhạy cảm bị loại khỏi bộ nhớ tiến hóa dài hạn, và hội thoại thô không được dùng để train trực tiếp.",
    "core.pill": "VIERACORE",
    "core.title": "Core skill kỹ thuật phần mềm cho nhiệm vụ phức tạp.",
    "core.body": "VieraCore là core skill kỹ thuật phần mềm của hệ sinh thái VIEVOT. VieraCore được thiết kế cho các nhiệm vụ phần mềm phức tạp, nhiều bước, cần khả năng bám mục tiêu cao. Chỉ cần giao mục tiêu một lần, VieraCore có thể duy trì quy trình tới khi hoàn tất, kèm kiểm tra và báo cáo rõ ràng.",
    "core.teaser.subtitle": "Dành cho dự án phần mềm phức tạp.",
    "core.teaser.bullet1": "Bám mục tiêu tốt",
    "core.teaser.bullet2": "Thực thi nhiều bước",
    "core.teaser.bullet3": "Hoàn tất workflow dài",
    "core.teaser.bullet4": "Tiến độ và báo cáo rõ ràng",
    "core.teaser.cta": "Xem thêm",
    "apps.pill": "SẢN PHẨM & KỸ NĂNG",
    "apps.title": "Trọng tâm public: VIEVOT và VieraCore trước.",
    "status.beta": "beta",
    "status.comingSoon": "sắp ra mắt",
    "status.planned": "đang lên kế hoạch",
    "apps.vievot.body": "Bộ não AI ưu tiên suy luận cho chat, trợ lý ngữ cảnh dài và thực thi ổn định trong workflow phức tạp.",
    "apps.vievot.cta": "Trải nghiệm VIEVOT",
    "apps.core.body": "Core skill kỹ thuật phần mềm cho phân tích, patch, kiểm tra và báo cáo rõ ràng trong dự án phức tạp.",
    "apps.core.cta": "Đăng ký beta",
    "apps.documents.body": "Đọc, tóm tắt và soạn thảo tài liệu sẽ được mở trong các giai đoạn beta sau.",
    "apps.documents.cta": "Tham gia waitlist",
    "apps.video.body": "Hỗ trợ workflow sáng tạo và video được lên kế hoạch cho giai đoạn sau.",
    "apps.video.cta": "Nhận cập nhật",
    "apps.future.name": "Future Skills",
    "apps.future.body": "Các kỹ năng mới có thể được bổ sung theo thời gian khi hệ sinh thái mở rộng.",
    "apps.future.cta": "Đề xuất kỹ năng",
    "beta.title": "Beta Access",
    "beta.body": "Controlled beta được cấp theo tài khoản. Nếu đăng ký public chưa mở, hãy request access và chúng tôi sẽ liên hệ khi có slot beta.",
    "beta.name": "Tên",
    "beta.email": "Email",
    "beta.namePlaceholder": "Tên của bạn",
    "beta.emailPlaceholder": "you@example.com",
    "beta.cta": "Chuẩn bị yêu cầu beta",
    "beta.emailCta": "Gửi bằng email",
    "api.title": "API",
    "api.body": "Public API chưa mở. API beta sẽ được xem xét theo từng use case.",
    "api.cta": "API sắp mở",
    "download.title": "Tải ứng dụng",
    "download.body": "Installer public chưa sẵn sàng. Quyền tải ứng dụng sẽ mở trong controlled beta.",
    "download.cta": "Bản tải beta sắp mở",
    "login.title": "Đăng nhập",
    "login.body": "OAuth public chưa được bật trên website này. Đăng nhập beta sẽ dùng tài khoản VIEVOT được cấp quyền.",
    "login.cta": "Đăng nhập beta sắp mở",
    "privacy.title": "Học tập ưu tiên quyền riêng tư",
    "privacy.body": "Không train trên hội thoại thô. Bài học được làm sạch và chuyển thành quy luật đã kiểm chứng. Dữ liệu nhạy cảm bị loại khỏi bộ nhớ tiến hóa dài hạn.",
    "contact.title": "Liên hệ",
    "contact.body": "Nếu cần beta access, hỏi về sản phẩm hoặc hợp tác, hãy liên hệ VIEVOT.",
    "contact.cta": "Liên hệ VIEVOT",
    "statusPanel.title": "Trạng thái truy cập",
    "statusPanel.body": "Chọn API, Download hoặc Login để xem ghi chú beta hiện tại.",
    "statusPanel.chat": "VIEVOT Chat đang mở theo quyền beta có kiểm soát.",
    "statusPanel.beta": "Yêu cầu beta chưa được gửi vào backend. Hãy dùng Gửi bằng email để bạn biết chính xác nội dung sẽ được gửi.",
    "statusPanel.api": "Public API đang được chuẩn bị. Hãy request beta access nếu bạn muốn được xem xét sớm.",
    "statusPanel.download": "Bản tải beta đang được chuẩn bị. Chưa có public installer.",
    "statusPanel.login": "Public login đang được chuẩn bị. Đăng nhập beta sẽ dùng tài khoản VIEVOT được cấp quyền.",
    "faq.pill": "FAQ",
    "faq.title": "Một vài ghi chú thực tế trước beta.",
    "faq.q1": "VIEVOT có chỉ là chat app không?",
    "faq.a1": "Không. Chat chỉ là một bề mặt sử dụng. VIEVOT được định vị là bộ não suy luận chung cho các app và kỹ năng chuyên dụng.",
    "faq.q2": "VIEVOT có train trực tiếp trên hội thoại riêng tư không?",
    "faq.a2": "Không. Quá trình tiến hóa dựa trên quy luật đã làm sạch và kiểm chứng, không dựa trên dữ liệu riêng tư thô.",
    "faq.q3": "Có thể tải desktop app ngay không?",
    "faq.a3": "Chưa public. Quyền tải ứng dụng sẽ mở qua controlled beta.",
    "footer.pill": "BƯỚC TIẾP THEO",
    "footer.title": "Trải nghiệm web hoặc đăng ký beta."
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
  document.querySelectorAll("[data-chat-link]").forEach((link) => {
    link.href = webChatUrl || "#beta-access";
    if (webChatUrl) {
      delete link.dataset.statusAction;
    } else {
      link.dataset.statusAction = "chat";
    }
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
