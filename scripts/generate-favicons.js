#!/usr/bin/env node

/**
 * Favicon Generation Script for CommuteTimely
 * 
 * This script helps generate favicon files from the SVG source.
 * Requires ImageMagick to be installed on your system.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const SVG_SOURCE = path.join(PUBLIC_DIR, 'favicon.svg');

console.log('🚀 Generating favicon files for CommuteTimely...\n');

// Check if ImageMagick is available
function checkImageMagick() {
  try {
    execSync('convert --version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Generate PNG files from SVG
function generatePNGs() {
  const sizes = [
    { name: 'favicon-16x16.png', size: '16x16' },
    { name: 'favicon-32x32.png', size: '32x32' },
    { name: 'apple-touch-icon.png', size: '180x180' }
  ];

  console.log('📱 Generating PNG files...');
  
  sizes.forEach(({ name, size }) => {
    const outputPath = path.join(PUBLIC_DIR, name);
    try {
      execSync(`convert "${SVG_SOURCE}" -resize ${size} "${outputPath}"`, { stdio: 'ignore' });
      console.log(`  ✅ ${name} (${size})`);
    } catch (error) {
      console.error(`  ❌ Failed to generate ${name}: ${error.message}`);
    }
  });
}

// Generate ICO file
function generateICO() {
  console.log('\n🎯 Generating ICO file...');
  
  try {
    // Create ICO with multiple sizes
    execSync(`convert "${SVG_SOURCE}" -resize 16x16 "${PUBLIC_DIR}/temp-16.png"`, { stdio: 'ignore' });
    execSync(`convert "${SVG_SOURCE}" -resize 32x32 "${PUBLIC_DIR}/temp-32.png"`, { stdio: 'ignore' });
    execSync(`convert "${SVG_SOURCE}" -resize 48x48 "${PUBLIC_DIR}/temp-48.png"`, { stdio: 'ignore' });
    
    // Combine into ICO
    execSync(`convert "${PUBLIC_DIR}/temp-16.png" "${PUBLIC_DIR}/temp-32.png" "${PUBLIC_DIR}/temp-48.png" "${PUBLIC_DIR}/favicon.ico"`, { stdio: 'ignore' });
    
    // Clean up temp files
    ['temp-16.png', 'temp-32.png', 'temp-48.png'].forEach(tempFile => {
      const tempPath = path.join(PUBLIC_DIR, tempFile);
      if (fs.existsSync(tempPath)) {
        fs.unlinkSync(tempPath);
      }
    });
    
    console.log('  ✅ favicon.ico (multi-size)');
  } catch (error) {
    console.error(`  ❌ Failed to generate ICO: ${error.message}`);
  }
}

// Main execution
function main() {
  // Check if SVG source exists
  if (!fs.existsSync(SVG_SOURCE)) {
    console.error('❌ SVG source file not found:', SVG_SOURCE);
    console.log('Please ensure favicon.svg exists in the public folder.');
    process.exit(1);
  }

  // Check ImageMagick availability
  if (!checkImageMagick()) {
    console.error('❌ ImageMagick not found on your system.');
    console.log('\nPlease install ImageMagick first:');
    console.log('  macOS: brew install imagemagick');
    console.log('  Ubuntu/Debian: sudo apt-get install imagemagick');
    console.log('  Windows: Download from https://imagemagick.org/');
    console.log('\nAlternatively, use the online tools mentioned in FAVICON_INSTRUCTIONS.md');
    process.exit(1);
  }

  try {
    generatePNGs();
    generateICO();
    
    console.log('\n🎉 Favicon generation complete!');
    console.log('\nFiles created:');
    console.log('  📁 public/favicon.ico');
    console.log('  📁 public/favicon-16x16.png');
    console.log('  📁 public/favicon-32x32.png');
    console.log('  📁 public/apple-touch-icon.png');
    
    console.log('\nNext steps:');
    console.log('  1. Test the favicons in your browser');
    console.log('  2. Clear browser cache if needed');
    console.log('  3. Verify favicons appear in browser tabs');
    
  } catch (error) {
    console.error('\n❌ Favicon generation failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { generatePNGs, generateICO, checkImageMagick };
