const fs = require("fs");
const path = require("path");

const source = path.join(__dirname, "public");
const dist = path.join(__dirname, "dist");

function copyDir(from, to) {
  fs.mkdirSync(to, { recursive: true });
  for (const entry of fs.readdirSync(from, { withFileTypes: true })) {
    const src = path.join(from, entry.name);
    const dest = path.join(to, entry.name);
    if (entry.isDirectory()) copyDir(src, dest);
    else fs.copyFileSync(src, dest);
  }
}

fs.rmSync(dist, { recursive: true, force: true });
copyDir(source, dist);
fs.writeFileSync(
  path.join(dist, "deploy-manifest.json"),
  JSON.stringify(
    {
      app: "VIEVOT",
      domain: "vievot.com",
      builtAt: new Date().toISOString(),
      publicUnrestricted: false,
      notes: "Static website artifact. DNS and hosting are not configured by this build.",
    },
    null,
    2,
  ),
  "utf8",
);
console.log(JSON.stringify({ ok: true, dist }, null, 2));

