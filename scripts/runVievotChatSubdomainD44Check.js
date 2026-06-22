const fs = require("fs");
const path = require("path");
const dns = require("dns");

const root = path.resolve(__dirname, "..");
const publicDir = path.join(root, "apps", "website", "public");
const distDir = path.join(root, "apps", "website", "dist");
const sourceRoot = "D:/vievot";
const gatewayRoot = "D:/vieral-gateway";

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

function exists(file) {
  return fs.existsSync(file);
}

function walkText(dir) {
  if (!fs.existsSync(dir)) return [];
  const textExt = new Set([".html", ".js", ".css", ".json", ".txt", ".md", ".svg"]);
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walkText(full);
    return textExt.has(path.extname(entry.name).toLowerCase()) ? [full] : [];
  });
}

function resolveDns(name) {
  return new Promise((resolve) => {
    dns.resolveAny(name, (error, records) => {
      resolve({ ok: !error, error: error?.message || "", records: records || [] });
    });
  });
}

(async () => {
  const index = read(indexPath);
  const main = read(mainPath);
  const config = JSON.parse(read(configPath));
  const publicText = [index, main, read(configPath), ...walkText(distDir).map(read)].join("\n");

  for (const bad of ["nav.chat", "@ nav.chat", "navChat"]) {
    if (publicText.includes(bad)) fail("Bad chat nav key is present in public source/dist", bad);
  }
  if (!publicText.includes("VIEVOT Chat")) fail("English public chat label missing");
  if (!publicText.includes("Trò chuyện với VIEVOT")) fail("Vietnamese public chat label missing");
  if (!index.includes('href="https://chat.vievot.com"')) fail("Landing chat href is not direct chat URL");
  if (config.webChatUrl !== "https://chat.vievot.com") fail("webChatUrl is not exact chat URL", config.webChatUrl);

  for (const bad of ["&lt;/&gt;", "</>VieraCore", "[] API", "{} Login", "<span>@</span>", "<span>*</span>"]) {
    if (publicText.includes(bad)) fail("Bad raw icon/text remains", bad);
  }

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

  const webServer = path.join(sourceRoot, "apps", "web", "server.js");
  const webIndex = path.join(sourceRoot, "apps", "web", "public", "index.html");
  const webApp = path.join(sourceRoot, "apps", "web", "public", "app.js");
  const gatewayServer = path.join(gatewayRoot, "src", "server.js");
  const gatewayRoutes = path.join(gatewayRoot, "src", "routes", "viera.routes.js");
  if (!exists(webServer) || !exists(webIndex) || !exists(webApp)) fail("Chat app source is missing");
  if (!exists(gatewayServer) || !exists(gatewayRoutes)) fail("Gateway source is missing");

  const webServerText = read(webServer);
  const webAppText = read(webApp);
  const gatewayServerText = read(gatewayServer);
  if (!webServerText.includes('server.listen(port, "127.0.0.1"')) fail("Unexpected chat server bind; audit assumption changed");
  if (!webServerText.includes('VIEVOT_GATEWAY_URL') || !webServerText.includes('http://127.0.0.1:3001')) fail("Gateway dependency audit failed");
  if (!webAppText.includes('/vievot-chat')) fail("Chat frontend does not call /vievot-chat");
  if (!gatewayServerText.includes('app.post("/vievot-chat"')) fail("Gateway /vievot-chat route missing");
  if (!gatewayServerText.includes('app.use(cors())')) fail("Gateway CORS middleware missing or changed");
  if (!gatewayServerText.includes('app.listen(PORT, "127.0.0.1"')) fail("Gateway public hosting audit assumption changed");

  const dnsResult = await resolveDns("chat.vievot.com");
  const chatDeployableNow = false;
  const blocker = dnsResult.ok ? "PUBLIC_CHAT_BACKEND_NOT_DEPLOYED" : "DNS_CHAT_SUBDOMAIN_NOT_CONFIGURED_AND_PUBLIC_CHAT_BACKEND_NOT_DEPLOYED";

  console.log(JSON.stringify({
    ok: true,
    landingLabelFixed: true,
    directChatHref: "https://chat.vievot.com",
    publicScanPass: true,
    chatAppSourceFound: true,
    chatAppRequiresNodeServer: true,
    chatAppRequiresGateway: true,
    gatewayRouteFound: true,
    gatewayCurrentlyLocalBind: true,
    chatDnsResolves: dnsResult.ok,
    chatDnsError: dnsResult.error,
    deployableInD44: chatDeployableNow,
    blocker,
    finalDecisionHint: "PASS_D44_LANDING_LABEL_FIXED_CHAT_DEPLOY_BLOCKED",
  }, null, 2));
})();
