import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name properly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function optimizeImage() {
  try {
    const sourcePath = path.join(__dirname, 'temp', 'so4-temp.jpg');
    const targetPath = path.join(__dirname, 'public', 'images', 'products', 'product-5.jpg');

    // Make sure source file exists
    if (!fs.existsSync(sourcePath)) {
      console.error(`Source file not found: ${sourcePath}`);
      return;
    }

    await sharp(sourcePath)
      .resize({
        width: 800,
        height: 1000,
        fit: 'cover',
        position: 'center'
      })
      .jpeg({ quality: 85, progressive: true })
      .toFile(targetPath);

    console.log('Image optimization complete!');
  } catch (error) {
    console.error('Error optimizing image:', error);
  }
}

optimizeImage();
