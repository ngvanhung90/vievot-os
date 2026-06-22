const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "apps", "website", "public");
const distDir = path.join(root, "apps", "website", "dist");
const indexPath = path.join(publicDir, "index.html");
const mainPath = path.join(publicDir, "main.js");
const configPath = path.join(publicDir, "site-config.json");

function fail(message, detail) {
  console.error(JSON.stringify({ ok: false, message, detail }, null, 2));
  process.exit(1);
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function walkTextFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  const textExt = new Set([".html", ".js", ".css", ".json", ".txt", ".md", ".svg"]);
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkTextFiles(full);
    return textExt.has(path.extname(entry.name).toLowerCase()) ? [full] : [];
  });
}

const index = read(indexPath);
const main = read(mainPath);
const config = JSON.parse(read(configPath));
const distText = walkTextFiles(distDir).map(read).join("\n");
const publicText = [index, main, read(configPath), distText].join("\n");

if (publicText.includes("nav.chat")) fail("Literal nav.chat remains in public source/dist");
if (publicText.includes("@ nav.chat")) fail("Bad live chat nav label remains");
if (publicText.includes("</>VieraCore") || publicText.includes("&lt;/&gt;")) fail("Raw VieraCore icon text remains");
if (publicText.includes("[] API") || publicText.includes("{} Login")) fail("Raw bad icon labels remain");
if (index.includes("<span>*</span>") || index.includes("<span>@</span>") || index.includes("<span>[]</span>") || index.includes("<span>{}</span>")) {
  fail("Raw sidebar icon spans remain");
}

if (!publicText.includes("VIEVOT Chat")) fail("English chat label missing");
if (!publicText.includes("Trò chuyện với VIEVOT")) fail("Vietnamese chat label missing");
if (config.webChatUrl !== "https://chat.vievot.com") fail("webChatUrl is not exact chat URL", config.webChatUrl);
if (!index.includes('href="https://chat.vievot.com"')) fail("Chat anchor does not directly target chat.vievot.com");
if (!main.includes("data-chat-link")) fail("Chat link runtime handler missing");

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
  if (publicText.match(pattern)) fail("Public leak pattern found", pattern.toString());
}

console.log(JSON.stringify({
  ok: true,
  noLiteralNavChat: true,
  cleanSidebarIcons: true,
  chatLabelsPresent: true,
  chatHref: "https://chat.vievot.com",
  webChatUrl: config.webChatUrl,
  publicLeakCount: 0,
}, null, 2));
