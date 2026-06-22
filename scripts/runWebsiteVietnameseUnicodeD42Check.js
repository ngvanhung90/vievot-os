const fs = require("fs");
const path = require("path");

const root = path.resolve(__dirname, "..");
const websitePublic = path.join(root, "apps", "website", "public");
const websiteDist = path.join(root, "apps", "website", "dist");
const mainPath = path.join(websitePublic, "main.js");
const indexPath = path.join(websitePublic, "index.html");

const requiredVietnamese = [
  "Bộ não AI",
  "ưu tiên suy luận",
  "Được thiết kế để",
  "Trải nghiệm VIEVOT",
  "Đăng ký beta",
  "Bám mục tiêu tốt",
  "Thực thi nhiều bước",
  "Hoàn tất workflow dài",
  "Tiến độ và báo cáo rõ ràng",
  "Suy luận nhiều bước",
];

const bannedAsciiVietnamese = [
  "Bo nao",
  "uu tien",
  "suy luan",
  "Duoc thiet ke",
  "Dang ky",
  "Bam muc tieu",
  "Thuc thi",
  "Hoan tat",
  "Tien do",
];

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

function walk(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return [full];
  });
}

function read(file) {
  return fs.readFileSync(file, "utf8");
}

function fail(message, detail) {
  console.error(JSON.stringify({ ok: false, message, detail }, null, 2));
  process.exit(1);
}

const main = read(mainPath);
const index = read(indexPath);

for (const phrase of requiredVietnamese) {
  if (!main.includes(phrase)) fail("Missing required Vietnamese Unicode phrase in source", phrase);
}

if (!/<meta\s+charset=["']utf-8["']\s*\/?>/i.test(index)) {
  fail("Missing UTF-8 charset meta tag", indexPath);
}

if (!/const DEFAULT_LANGUAGE = "en"/.test(main)) {
  fail("Default language is not English", mainPath);
}

if (!/localStorage\.getItem\(STORAGE_KEY\)/.test(main) || !/localStorage\.setItem\(STORAGE_KEY/.test(main)) {
  fail("Language selector preference storage is missing", mainPath);
}

for (const file of [mainPath, indexPath, ...walk(websiteDist)]) {
  const text = read(file);
  for (const phrase of bannedAsciiVietnamese) {
    if (text.includes(phrase)) fail("Found ASCII Vietnamese phrase", { file, phrase });
  }
  for (const pattern of leakPatterns) {
    if (pattern.test(text)) fail("Found public leak pattern", { file, pattern: pattern.toString() });
  }
}

const distText = walk(websiteDist).map(read).join("\n");
for (const phrase of requiredVietnamese) {
  if (!distText.includes(phrase)) fail("Missing required Vietnamese Unicode phrase in dist", phrase);
}

console.log(JSON.stringify({
  ok: true,
  sourceVietnameseUnicode: true,
  distVietnameseUnicode: true,
  charsetUtf8: true,
  englishDefault: true,
  languageSelectorPersistence: true,
  forbiddenAsciiVietnameseCount: 0,
  publicLeakCount: 0,
}, null, 2));
