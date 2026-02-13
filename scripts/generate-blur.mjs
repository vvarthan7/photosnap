import sharp from "sharp";
import { readdir } from "fs/promises";
import { join } from "path";

// Usage: node scripts/generate-blur.mjs [directory]
// Examples:
//   node scripts/generate-blur.mjs home
//   node scripts/generate-blur.mjs stories/desktop
const targetDir = process.argv[2] || "home";
const PUBLIC_DIR = `./public/assets/${targetDir}`;

async function generateBlurDataURL(imagePath) {
  const buffer = await sharp(imagePath)
    .resize(10, 10, { fit: "inside" })
    .blur()
    .webp({ quality: 20 })
    .toBuffer();

  return `data:image/webp;base64,${buffer.toString("base64")}`;
}

async function processDirectory(dir) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await processDirectory(fullPath);
    } else if (entry.name.endsWith(".webp")) {
      const blurDataURL = await generateBlurDataURL(fullPath);
      console.log(`\n// ${fullPath}`);
      console.log(`"${blurDataURL}"`);
    }
  }
}

console.log("// Blur Data URLs for images:\n");
processDirectory(PUBLIC_DIR);
