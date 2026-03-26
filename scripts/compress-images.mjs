import sharp from 'sharp';
import { readFile, readdir, stat, writeFile } from 'node:fs/promises';
import { extname, join } from 'node:path';

const TARGET_DIR = 'public/assets/images';
const JPEG_QUALITY = 82;
const PNG_QUALITY = { compressionLevel: 9, effort: 10 };

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      files.push(...(await walk(full)));
    } else {
      files.push(full);
    }
  }

  return files;
}

const files = await walk(TARGET_DIR);
const images = files.filter((file) => ['.jpg', '.jpeg', '.png'].includes(extname(file).toLowerCase()));

let totalBefore = 0;
let totalAfter = 0;

for (const file of images) {
  const before = (await stat(file)).size;
  const ext = extname(file).toLowerCase();
  const instance = sharp(await readFile(file));
  const buffer =
    ext === '.png'
      ? await instance.png(PNG_QUALITY).toBuffer()
      : await instance.jpeg({ quality: JPEG_QUALITY, mozjpeg: true }).toBuffer();

  const output = buffer.length < before ? buffer : await readFile(file);

  await writeFile(file, output);

  const after = (await stat(file)).size;
  const saving = before === 0 ? '0.0' : (((before - after) / before) * 100).toFixed(1);
  console.log(
    `${file}: ${(before / 1024).toFixed(0)} KB -> ${(after / 1024).toFixed(0)} KB (${saving}% saved)`
  );
  totalBefore += before;
  totalAfter += after;
}

const totalSaving =
  totalBefore === 0 ? '0.0' : (((totalBefore - totalAfter) / totalBefore) * 100).toFixed(1);
console.log(
  `\nTotal: ${(totalBefore / 1024).toFixed(0)} KB -> ${(totalAfter / 1024).toFixed(0)} KB (${totalSaving}% saved)`
);
