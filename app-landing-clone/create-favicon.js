import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name properly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function createFavicon() {
  try {
    // Input logo path
    const inputPath = path.join(__dirname, '..', 'uploads', 'logo.jpg');

    // Output favicon path
    const outputPath = path.join(__dirname, 'public', 'favicon.svg');

    // Use the same SVG we created for the logo
    const logoSvgPath = path.join(__dirname, 'public', 'images', 'logo', 'ESC.svg');
    const svgContent = await fs.promises.readFile(logoSvgPath, 'utf8');

    // Write the SVG favicon
    await fs.promises.writeFile(outputPath, svgContent);

    console.log('Favicon creation complete!');
  } catch (error) {
    console.error('Error creating favicon:', error);
  }
}

createFavicon();
