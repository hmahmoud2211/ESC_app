const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

async function optimizeImage() {
  try {
    const sourcePath = path.join(__dirname, 'temp', 'so3-temp.jpg');
    const targetPath = path.join(__dirname, 'public', 'images', 'products', 'product-2.jpg');

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
