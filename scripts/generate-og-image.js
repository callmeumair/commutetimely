#!/usr/bin/env node

/**
 * OG Image Generation Script for CommuteTimely
 * 
 * This script generates the og-image.png from the HTML design file.
 * Requires Puppeteer to be installed.
 */

const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

const PUBLIC_DIR = path.join(__dirname, '..', 'public');
const HTML_SOURCE = path.join(PUBLIC_DIR, 'og-image.html');
const OUTPUT_FILE = path.join(PUBLIC_DIR, 'og-image.png');

console.log('🚀 Generating OG Image for CommuteTimely...\n');

// Check if Puppeteer is available
function checkPuppeteer() {
  try {
    require.resolve('puppeteer');
    return true;
  } catch (error) {
    return false;
  }
}

// Generate OG image using Puppeteer
async function generateOGImage() {
  console.log('📱 Launching browser...');
  
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  try {
    const page = await browser.newPage();
    
    // Set viewport to exact OG image dimensions
    await page.setViewport({ 
      width: 1200, 
      height: 630,
      deviceScaleFactor: 2 // Higher quality
    });
    
    console.log('🌐 Loading HTML design...');
    
    // Load the HTML file
    const htmlContent = fs.readFileSync(HTML_SOURCE, 'utf8');
    await page.setContent(htmlContent, { 
      waitUntil: 'networkidle0',
      timeout: 30000 
    });
    
    // Wait for any animations or fonts to load
    console.log('⏳ Waiting for content to render...');
    await page.waitForTimeout(2000);
    
    // Ensure the container is properly sized
    await page.evaluate(() => {
      const container = document.querySelector('.og-container');
      if (container) {
        container.style.width = '1200px';
        container.style.height = '630px';
      }
    });
    
    console.log('📸 Capturing screenshot...');
    
    // Take screenshot
    await page.screenshot({
      path: OUTPUT_FILE,
      type: 'png',
      fullPage: false,
      omitBackground: false
    });
    
    console.log('✅ OG Image generated successfully!');
    console.log(`📁 Output: ${OUTPUT_FILE}`);
    
    // Get file size
    const stats = fs.statSync(OUTPUT_FILE);
    const fileSizeInMB = (stats.size / (1024 * 1024)).toFixed(2);
    console.log(`📊 File size: ${fileSizeInMB} MB`);
    
    if (parseFloat(fileSizeInMB) > 1) {
      console.log('⚠️  Warning: File size is over 1MB. Consider optimizing for web.');
    }
    
  } catch (error) {
    console.error('❌ Failed to generate OG image:', error.message);
    throw error;
  } finally {
    await browser.close();
  }
}

// Check dependencies and install if needed
async function checkDependencies() {
  if (!checkPuppeteer()) {
    console.error('❌ Puppeteer not found.');
    console.log('\nInstalling Puppeteer...');
    
    try {
      const { execSync } = require('child_process');
      execSync('npm install puppeteer', { stdio: 'inherit' });
      console.log('✅ Puppeteer installed successfully!');
    } catch (error) {
      console.error('❌ Failed to install Puppeteer:', error.message);
      console.log('\nPlease install manually: npm install puppeteer');
      process.exit(1);
    }
  }
}

// Main execution
async function main() {
  // Check if HTML source exists
  if (!fs.existsSync(HTML_SOURCE)) {
    console.error('❌ HTML source file not found:', HTML_SOURCE);
    console.log('Please ensure og-image.html exists in the public folder.');
    process.exit(1);
  }

  try {
    await checkDependencies();
    await generateOGImage();
    
    console.log('\n🎉 OG Image generation complete!');
    console.log('\nNext steps:');
    console.log('  1. Test the image using social media validators:');
    console.log('     - Twitter Card Validator: https://cards-dev.twitter.com/validator');
    console.log('     - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/');
    console.log('     - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/');
    console.log('  2. Verify the image displays correctly on your site');
    console.log('  3. Test sharing on social platforms');
    
  } catch (error) {
    console.error('\n❌ OG Image generation failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(console.error);
}

module.exports = { generateOGImage, checkDependencies };
