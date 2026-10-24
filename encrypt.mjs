// 把 status.json 里 outputs 的成果文件加密成 files/<id>.enc，网页输入密码后在浏览器里解密。
// 用法：PASS=<密码> node encrypt.mjs     （密码不写进任何文件；源文件路径在 data/sources.local.json）
// 格式：TPE1 | salt(16) | iv(12) | 密文+GCM 标签(16)；密钥 = PBKDF2-SHA256(密码, salt, 600000) → AES-256-GCM
import { readFileSync, writeFileSync, mkdirSync, statSync } from "node:fs";
import { pbkdf2Sync, randomBytes, createCipheriv } from "node:crypto";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { build } from "./build.mjs";

export const ITER = 600000;
const here = dirname(fileURLToPath(import.meta.url));
const pass = process.env.PASS;
if (!pass) { console.error("用法：PASS=<密码> node encrypt.mjs"); process.exit(1); }
const p = join(here, "data/status.json");
const s = JSON.parse(readFileSync(p, "utf8"));
const src = JSON.parse(readFileSync(join(here, "data/sources.local.json"), "utf8")); // 本机路径，不进仓库
mkdirSync(join(here, "files"), { recursive: true });
for (const o of s.outputs) {
  const salt = randomBytes(16), iv = randomBytes(12);
  const key = pbkdf2Sync(pass, salt, ITER, 32, "sha256");
  const c = createCipheriv("aes-256-gcm", key, iv);
  const body = Buffer.concat([c.update(readFileSync(src[o.id])), c.final(), c.getAuthTag()]);
  writeFileSync(join(here, "files", `${o.id}.enc`), Buffer.concat([Buffer.from("TPE1"), salt, iv, body]));
  o.bytes = statSync(src[o.id]).size;
  console.log(o.id, (o.bytes / 1048576).toFixed(1) + " MB");
}
writeFileSync(p, JSON.stringify(s, null, 2) + "\n");
build();
