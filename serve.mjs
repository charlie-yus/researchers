// 本机预览：node serve.mjs → http://127.0.0.1:4571
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";
const root = fileURLToPath(new URL(".", import.meta.url));
const type = { ".html": "text/html", ".css": "text/css", ".svg": "image/svg+xml", ".js": "text/javascript", ".json": "application/json", ".md": "text/markdown", ".png": "image/png", ".jpg": "image/jpeg", ".woff2": "font/woff2" };
const server = createServer(async (req, res) => {
  const p = normalize(decodeURIComponent(new URL(req.url, "http://x").pathname)).replace(/^(\.\.[/\\])+/, "");
  try {
    const f = p.endsWith("/") ? p + "index.html" : p;
    const body = await readFile(join(root, f));
    res.writeHead(200, { "Content-Type": (type[extname(f)] ?? "application/octet-stream") + "; charset=utf-8" }).end(body);
  } catch { res.writeHead(404).end("not found"); }
});
const port = Number(process.env.PORT ?? 4571);
server.listen(port, "127.0.0.1", () => console.log(`http://localhost:${port}`));
createServer(server.listeners("request")[0]).listen(port, "::1").on("error", () => {});
