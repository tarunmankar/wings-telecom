import { Jimp } from 'jimp';

async function main() {
  const imgPath = 'C:\\Users\\manka\\.gemini\\antigravity\\brain\\fb3bbd7f-d465-47c7-9662-ed62cb47fded\\media__1777616950559.png';
  console.log('Loading image...');
  
  // Read image
  const image = await Jimp.read(imgPath);
  
  // Auto crop white background
  image.autocrop({ tolerance: 0.05, leaveBorder: 10 }); 

  console.log('Writing logo.png...');
  await image.write('public/logo.png');

  // Create favicon by cropping a square from the left (where the hexagon is)
  const size = image.height; // Use height as size for the square
  image.crop({ x: 0, y: 0, w: size, h: size });
  
  console.log('Writing favicon.png...');
  await image.write('public/favicon.png');
}

main().catch(console.error);
