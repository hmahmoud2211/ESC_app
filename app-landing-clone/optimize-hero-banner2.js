import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name properly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImage() {
  try {
    const sourcePath = path.join(__dirname, '..', 'uploads', 'begin2.jpg');
    const targetPath = path.join(__dirname, 'public', 'images', 'hero', 'hero-banner.jpg');

    // Make sure source file exists
    if (!fs.existsSync(sourcePath)) {
      console.error(`Source file not found: ${sourcePath}`);
      return;
    }

    // Make sure target directory exists
    const targetDir = path.dirname(targetPath);
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
      console.log(`Created directory: ${targetDir}`);
    }

    await sharp(sourcePath)
      .resize({
        width: 1920,
        height: 900,
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 85, progressive: true })
      .toFile(targetPath);

    console.log('Hero banner image replacement complete!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
