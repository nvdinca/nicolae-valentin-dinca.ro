/**
 * Generează favicon.ico din public/icon.png.
 * Dacă imaginea nu e pătrată, o decupează la centru și o redimensionează la 256x256.
 * Rulează: npm run favicon
 */
const path = require("path");
const fs = require("fs");

const projectRoot = path.resolve(__dirname, "..");
const iconPath = path.join(projectRoot, "public", "icon.png");
const outputPath = path.join(projectRoot, "public", "favicon.ico");
const tempSquarePath = path.join(projectRoot, "public", ".icon-256.png");

async function main() {
  try {
    if (!fs.existsSync(iconPath)) {
      console.error("Lipsește public/icon.png. Adaugă un icon.png în public/ și rulează din nou.");
      process.exit(1);
    }
    const sharp = (await import("sharp")).default;
    const meta = await sharp(iconPath).metadata();
    const { width = 0, height = 0 } = meta;
    const size = Math.min(width, height) || 256;
    await sharp(iconPath)
      .extract({
        left: Math.max(0, Math.floor((width - size) / 2)),
        top: Math.max(0, Math.floor((height - size) / 2)),
        width: size,
        height: size,
      })
      .resize(256, 256)
      .png()
      .toFile(tempSquarePath);
    const { default: pngToIco } = await import("png-to-ico");
    const buf = await pngToIco(tempSquarePath);
    fs.writeFileSync(outputPath, buf);
    try {
      fs.unlinkSync(tempSquarePath);
    } catch {
      /* ignore unlink errors */
    }
    console.log("Scris public/favicon.ico din public/icon.png.");
  } catch (err) {
    console.error("Eroare la generare favicon:", err.message);
    process.exit(1);
  }
}

main();
