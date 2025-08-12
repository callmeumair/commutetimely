const fs = require('fs');
const path = require('path');

function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const items = fs.readdirSync(src);
  items.forEach(item => {
    const srcPath = path.join(src, item);
    const destPath = path.join(dest, item);
    
    if (fs.statSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  });
}

// Copy .next to build directory
if (fs.existsSync('.next')) {
  if (fs.existsSync('build')) {
    fs.rmSync('build', { recursive: true, force: true });
  }
  copyDir('.next', 'build');
  console.log('Build output copied to build directory');
} else {
  console.error('.next directory not found');
  process.exit(1);
}
