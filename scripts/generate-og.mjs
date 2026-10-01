// Generates public/og-image.png (1200x630) — the social share card.
// Pure SVG (brand gradient + logo lockup + headline) rasterised with sharp.
// Run with:  node scripts/generate-og.mjs   (or: npm run og)

import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const out = resolve(__dirname, "../public/og-image.png");

const serif = "Georgia, 'Times New Roman', serif";
const sans = "Arial, Helvetica, sans-serif";

const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630" viewBox="0 0 1200 630">
  <defs>
    <linearGradient id="grad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#7A72D1"/>
      <stop offset="1" stop-color="#4B40B0"/>
    </linearGradient>
  </defs>

  <rect width="1200" height="630" fill="url(#grad)"/>
  <!-- faint deepening for depth + text contrast -->
  <rect width="1200" height="630" fill="#281f56" opacity="0.16"/>

  <!-- brand echo: concentric rings, bottom-right -->
  <g fill="none" stroke="#ffffff" stroke-opacity="0.12">
    <circle cx="1120" cy="540" r="150"/>
    <circle cx="1120" cy="540" r="100"/>
    <circle cx="1120" cy="540" r="52" stroke-opacity="0.18"/>
  </g>

  <!-- logo lockup -->
  <rect x="90" y="74" width="72" height="72" rx="18" fill="#ffffff"/>
  <text x="126" y="124" font-family="${serif}" font-size="44" font-weight="700" fill="#4B40B0" text-anchor="middle">V</text>
  <text x="182" y="124" font-family="${serif}" font-size="46" font-weight="600" fill="#ffffff">veyderm</text>

  <!-- headline -->
  <text x="88" y="330" font-family="${serif}" font-size="92" font-weight="500" fill="#ffffff">AI dermatology,</text>
  <text x="88" y="432" font-family="${serif}" font-size="92" font-weight="400" font-style="italic" fill="#ffffff">doctor-led.</text>

  <!-- subtitle -->
  <text x="92" y="520" font-family="${sans}" font-size="30" fill="#ffffff" fill-opacity="0.88">UAE&#8217;s first AI-powered dermatology platform</text>
</svg>`;

await sharp(Buffer.from(svg)).png().toFile(out);
const meta = await sharp(out).metadata();
console.log(`Wrote ${out} (${meta.width}x${meta.height})`);
