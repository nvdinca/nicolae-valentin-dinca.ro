/**
 * Converts all Markdown files from siteplan/ to PDF in pdf/
 * using luxury styling (same look as the site).
 *
 * Run: node scripts/generate-siteplan-pdfs.cjs
 * Requires: npm install md-to-pdf
 */

const fs = require("fs");
const path = require("path");
const { mdToPdf } = require("md-to-pdf");

const SITEPLAN_DIR = path.join(__dirname, "..", "siteplan");
const PDF_DIR = path.join(__dirname, "..", "pdf");
const STYLE_PATH = path.join(__dirname, "siteplan-pdf-style.css");

// Use system Chrome on Windows so we don't need Puppeteer's Chromium
const CHROME_PATHS = [
  process.env.LOCALAPPDATA && path.join(process.env.LOCALAPPDATA, "Google", "Chrome", "Application", "chrome.exe"),
  "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe",
  "C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe",
].filter(Boolean);

function getChromePath() {
  for (const p of CHROME_PATHS) {
    if (fs.existsSync(p)) return p;
  }
  return null;
}

async function main() {
  if (!fs.existsSync(SITEPLAN_DIR)) {
    console.error("Folder siteplan/ nu există.");
    process.exit(1);
  }

  const files = fs.readdirSync(SITEPLAN_DIR).filter((f) => f.endsWith(".md"));
  if (files.length === 0) {
    console.error("Nu există fișiere .md în siteplan/.");
    process.exit(1);
  }

  if (!fs.existsSync(PDF_DIR)) {
    fs.mkdirSync(PDF_DIR, { recursive: true });
    console.log("Creat folder pdf/");
  }

  const chromePath = getChromePath();
  if (chromePath) {
    console.log("Folosind Chrome:", chromePath);
  } else {
    console.log("Chrome nu a fost găsit. Rulează: npx puppeteer browsers install chrome");
  }

  const config = {
    dest: PDF_DIR,
    stylesheet: [STYLE_PATH],
    pdf_options: {
      format: "A4",
      margin: { top: "24mm", right: "24mm", bottom: "24mm", left: "24mm" },
      printBackground: true,
    },
    body_class: "luxury-pdf",
    ...(chromePath && { launch_options: { executablePath: chromePath } }),
  };

  for (const file of files) {
    const base = path.basename(file, ".md");
    const pdfName = `${base}.pdf`;
    const pdfPath = path.join(PDF_DIR, pdfName);
    const mdPath = path.join(SITEPLAN_DIR, file);

    try {
      await mdToPdf(
        { path: mdPath },
        {
          ...config,
          dest: pdfPath,
        }
      );
      console.log("OK:", pdfName);
    } catch (err) {
      console.error("Eroare la", file, err.message);
    }
  }

  console.log("\nGata. PDF-urile sunt în folderul pdf/");
}

main();
