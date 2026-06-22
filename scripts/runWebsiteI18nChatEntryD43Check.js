const fs = require("fs");
const path = require("path");
const vm = require("vm");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "apps", "website", "public");
const distDir = path.join(root, "apps", "website", "dist");
const indexPath = path.join(publicDir, "index.html");
const mainPath = path.join(publicDir, "main.js");
const configPath = path.join(publicDir, "site-config.json");
const chatPlanPath = path.join(root, "apps", "website", "CHAT_SUBDOMAIN_DEPLOYMENT_PLAN.md");

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
const i18nMatch = main.match(/const i18n = ([\s\S]*?);\r?\n\r?\nlet currentLang/);
if (!i18nMatch) fail("Unable to locate i18n object", mainPath);

const sandbox = {};
vm.runInNewContext(`result = ${i18nMatch[1]}`, sandbox);
const i18n = sandbox.result;

if (!i18n.en || !i18n.vi) fail("Missing en/vi dictionaries");

const enKeys = Object.keys(i18n.en).sort();
const viKeys = Object.keys(i18n.vi).sort();
const missingVi = enKeys.filter((key) => !Object.prototype.hasOwnProperty.call(i18n.vi, key));
const missingEn = viKeys.filter((key) => !Object.prototype.hasOwnProperty.call(i18n.en, key));
if (missingVi.length || missingEn.length) fail("Dictionary key mismatch", { missingVi, missingEn });

const dataKeys = new Set();
for (const pattern of [/data-i18n="([^"]+)"/g, /data-i18n-html="([^"]+)"/g]) {
  let match;
  while ((match = pattern.exec(index))) dataKeys.add(match[1]);
}
let attrMatch;
const attrPattern = /data-i18n-attr="([^"]+)"/g;
while ((attrMatch = attrPattern.exec(index))) {
  attrMatch[1].split(";").forEach((pair) => {
    const [, key] = pair.split(":");
    if (key) dataKeys.add(key);
  });
}
const missingDataKeys = [...dataKeys].filter((key) => !i18n.en[key] || !i18n.vi[key]);
if (missingDataKeys.length) fail("Data i18n key missing from dictionaries", missingDataKeys);

const bannedViFragments = [
  "coming soon",
  "Built for complex",
  "Beta download",
  "Beta login",
  "API access",
];
const viText = Object.values(i18n.vi).join("\n");
for (const fragment of bannedViFragments) {
  if (viText.includes(fragment)) fail("Vietnamese mode contains English fragment", fragment);
}

if (!index.includes("data-chat-link") || !i18n.en["nav.chat"] || !i18n.vi["nav.chat"]) {
  fail("Sidebar chat entry is missing");
}
if (i18n.en["nav.chat"] !== "Chat with VIEVOT") fail("English chat label mismatch", i18n.en["nav.chat"]);
if (i18n.vi["nav.chat"] !== "Trò chuyện với VIEVOT") fail("Vietnamese chat label mismatch", i18n.vi["nav.chat"]);

if (config.webChatUrl !== "https://chat.vievot.com") fail("webChatUrl is not chat.vievot.com", config.webChatUrl);
if (config.chatStatus !== "planned_public_subdomain") fail("chatStatus missing or incorrect", config.chatStatus);
if (!/data-chat-link/.test(main) || !/statusPanel\.chat/.test(main)) fail("Chat link behavior or fallback status is missing");
if (!fs.existsSync(chatPlanPath)) fail("Chat subdomain deployment plan missing", chatPlanPath);

const publicText = [index, main, read(configPath), ...walk(distDir).map(read)].join("\n");
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
  if (pattern.test(publicText)) fail("Public source/dist leak pattern found", pattern.toString());
}

console.log(JSON.stringify({
  ok: true,
  dictionaryKeyParity: true,
  dataI18nCoverage: true,
  vietnameseCompleteness: true,
  chatSidebarEntry: true,
  webChatUrl: config.webChatUrl,
  chatFallbackConfigured: true,
  chatPlanExists: true,
  publicLeakCount: 0,
}, null, 2));
