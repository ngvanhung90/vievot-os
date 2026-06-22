const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "apps", "website", "public");
const distDir = path.join(root, "apps", "website", "dist");
const indexPath = path.join(publicDir, "index.html");
const mainPath = path.join(publicDir, "main.js");
const configPath = path.join(publicDir, "site-config.json");
const stylesPath = path.join(publicDir, "styles.css");
const emailPlanPath = path.join(root, "apps", "website", "VIEVOT_EMAIL_AND_OPS_INTAKE_PLAN.md");

function fail(message, detail) {
  console.error(JSON.stringify({ ok: false, message, detail }, null, 2));
  process.exit(1);
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const index = read(indexPath);
const main = read(mainPath);
const config = JSON.parse(read(configPath));
const styles = read(stylesPath);
const publicText = [index, main, read(configPath), styles, ...walk(distDir).map(read)].join("\n");

const i18nMatch = main.match(/const i18n = ([\s\S]*?);\r?\n\r?\nlet currentLang/);
if (!i18nMatch) fail("Unable to locate i18n object");
const sandbox = {};
vm.runInNewContext(`result = ${i18nMatch[1]}`, sandbox);
const i18n = sandbox.result;

if (i18n.en["apps.title"] !== "VIEVOT starts with two focused products.") fail("English apps copy is not updated", i18n.en["apps.title"]);
if (i18n.vi["apps.title"] !== "VIEVOT tập trung trước vào hai sản phẩm chính.") fail("Vietnamese apps copy is not updated", i18n.vi["apps.title"]);
if (publicText.includes("Trọng tâm public") || publicText.includes("Public focus")) fail("Old public focus copy remains");

if (!index.includes('<span class="nav-icon"') || !index.includes("<svg viewBox=")) fail("Sidebar SVG icons are missing");
for (const fragment of ["&lt;/&gt;", "[]", "<span>{}</span>", "<span>*</span>"]) {
  if (index.includes(fragment)) fail("Old text icon remains", fragment);
}
if (publicText.includes("</>VieraCore")) fail("VieraCore icon text is attached to label");

if (i18n.en["performance.latencyValue"] !== "~0.15s") fail("English latency value missing", i18n.en["performance.latencyValue"]);
if (i18n.vi["performance.latencyValue"] !== "~0,15s") fail("Vietnamese latency value missing", i18n.vi["performance.latencyValue"]);
if (i18n.en["performance.latency"] !== "Average response time") fail("English latency label missing");
if (i18n.vi["performance.latency"] !== "Thời gian phản hồi trung bình") fail("Vietnamese latency label missing");
if (publicText.includes("100-200ms") || publicText.includes("100–200") || publicText.includes("100 - 200")) fail("Old latency copy remains");
if (!publicText.includes("~0.15s") || !publicText.includes("~0,15s")) fail("New latency copy missing");
if (!i18n.en["performance.note"].includes("Internally measured in June 2026 with 1,000 real prompts.")) fail("English benchmark note missing");
if (!i18n.vi["performance.note"].includes("Đo nội bộ tháng 6/2026 với 1.000 câu hỏi thực tế.")) fail("Vietnamese benchmark note missing");

if (config.contactUrl !== "mailto:contact@vievot.com") fail("contactUrl is not public contact email", config.contactUrl);
if (config.contactEmail !== "contact@vievot.com") fail("contactEmail missing", config.contactEmail);
if (!publicText.includes("contact@vievot.com")) fail("contact@vievot.com missing from public site");
if (!i18n.en["contact.note"].includes("being provisioned")) fail("English email provisioning note missing");
if (!i18n.vi["contact.note"].includes("đang được khởi tạo")) fail("Vietnamese email provisioning note missing");
if (!fs.existsSync(emailPlanPath)) fail("Email and ops intake plan missing", emailPlanPath);

const enKeys = Object.keys(i18n.en).sort();
const viKeys = Object.keys(i18n.vi).sort();
const missingVi = enKeys.filter((key) => !Object.prototype.hasOwnProperty.call(i18n.vi, key));
const missingEn = viKeys.filter((key) => !Object.prototype.hasOwnProperty.call(i18n.en, key));
if (missingVi.length || missingEn.length) fail("i18n key mismatch", { missingVi, missingEn });

const leakPatterns = [
  /localhost/i,
  /127\.0\.0\.1/i,
  /D:\\/i,
  /D:\//i,
  /api[_ -]?key\s*[:=]/i,
  /token\s*[:=]/i,
  /password\s*[:=]/i,
  /private key/i,
  /VieraOps/i,
];
for (const pattern of leakPatterns) {
  if (pattern.test(publicText)) fail("Public leak pattern found", pattern.toString());
}

console.log(JSON.stringify({
  ok: true,
  copyNaturalized: true,
  sidebarSvgIcons: true,
  latencyUpdated: true,
  contactEmailVisible: true,
  emailPlanExists: true,
  i18nParity: true,
  publicLeakCount: 0,
}, null, 2));
