import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Get the directory name properly in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function processLogo() {
  try {
    // Input image path (the uploaded image)
    const inputImagePath = path.join(__dirname, '..', 'uploads', 'logo.jpg');

    // Output paths
    const outputSvgPath = path.join(__dirname, 'public', 'images', 'logo', 'ESC.svg');
    const outputLogoSvgPath = path.join(__dirname, 'public', 'images', 'logo', 'esc-logo.svg');
    const tempPngPath = path.join(__dirname, 'temp-images', 'logo.png');

    // Extract the logo (remove the background) and save as PNG temporarily
    await sharp(inputImagePath)
      .trim() // Remove any white borders
      .toFormat('png')
      .toFile(tempPngPath);

    console.log('Temporary PNG created');

    // Create an SVG from the PNG (basic conversion)
    // For a proper SVG with paths, you would need a more sophisticated tool
    // This is a simple placeholder SVG that embeds the PNG
    const dimensions = await sharp(tempPngPath).metadata();
    const width = dimensions.width;
    const height = dimensions.height;

    // Convert the PNG to base64 for embedding in SVG
    const pngBuffer = await fs.promises.readFile(tempPngPath);
    const base64Image = pngBuffer.toString('base64');

    // Create a simple SVG that embeds the PNG image
    const svgContent = `<svg width="${width}" height="${height}" viewBox="0 0 ${width} ${height}" xmlns="http://www.w3.org/2000/svg">
  <image width="${width}" height="${height}" href="data:image/png;base64,${base64Image}"/>
</svg>`;

    // Write the SVG files
    await fs.promises.writeFile(outputSvgPath, svgContent);
    await fs.promises.writeFile(outputLogoSvgPath, svgContent);

    console.log('Logo replacement complete!');
  } catch (error) {
    console.error('Error processing logo:', error);
  }
}

processLogo();
