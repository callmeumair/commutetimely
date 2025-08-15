# OG Image Generation Instructions

## Overview
The `og-image.html` file contains a complete design for the Open Graph image. You need to convert this to a 1200×630px PNG file named `og-image.png`.

## Design Specifications
- **Size**: 1200×630px (optimal for social media)
- **Format**: PNG with transparency support
- **Background**: Dark gradient (black → deep blue/purple) with subtle stars pattern
- **Left side**: Large white text "CommuteTimely" + subtitle "Smarter Commutes, Less Stress"
- **Right side**: iPhone mockup with app screenshot, tilted with soft shadow
- **Logo**: "CT" logo in bottom-right corner

## How to Generate

### Option 1: Browser Screenshot (Recommended)
1. Open `og-image.html` in a modern browser (Chrome, Firefox, Safari)
2. Set browser zoom to 100%
3. Use browser dev tools to ensure the container is exactly 1200×630px
4. Take a screenshot or use browser's "Capture full size screenshot" feature
5. Save as `og-image.png` in the `public/` folder

### Option 2: Puppeteer/Playwright (Automated)
```javascript
// Using Puppeteer
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to exact OG image dimensions
  await page.setViewport({ width: 1200, height: 630 });
  
  // Load the HTML file
  await page.goto('file:///path/to/public/og-image.html');
  
  // Wait for any animations to complete
  await page.waitForTimeout(1000);
  
  // Screenshot the page
  await page.screenshot({
    path: 'public/og-image.png',
    type: 'png',
    fullPage: false
  });
  
  await browser.close();
})();
```

### Option 3: Design Tools
- Import the HTML into Figma or similar design tool
- Export as 1200×630px PNG
- Ensure high quality and proper compression

## Testing Your OG Image

### Twitter Card Validator
1. Go to [Twitter Card Validator](https://cards-dev.twitter.com/validator)
2. Enter your URL: `https://commutetimely.com`
3. Check the preview and ensure the image displays correctly

### Facebook Sharing Debugger
1. Go to [Facebook Sharing Debugger](https://developers.facebook.com/tools/debug/)
2. Enter your URL: `https://commutetimely.com`
3. Click "Debug" and check the preview

### LinkedIn Post Inspector
1. Go to [LinkedIn Post Inspector](https://www.linkedin.com/post-inspector/)
2. Enter your URL: `https://commutetimely.com`
3. Check the preview

## File Structure
```
public/
├── og-image.png        # 1200×630px PNG for social sharing
├── og-image.html       # Source HTML for design
└── OG_IMAGE_INSTRUCTIONS.md # This file
```

## Notes
- The HTML file is designed to be exactly 1200×630px
- The design includes subtle animations and shadows that should be captured in the screenshot
- Ensure the PNG file is optimized for web (under 1MB recommended)
- Test the image across different social platforms
