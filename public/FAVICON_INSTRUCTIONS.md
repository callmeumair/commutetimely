# Favicon Generation Instructions

## Files to Create

You need to create the following favicon files from the `favicon.svg` file:

1. **favicon.ico** (16x16, 32x32, 48x48) - Main favicon for browsers
2. **favicon-16x16.png** - 16x16 PNG version
3. **favicon-32x32.png** - 32x32 PNG version  
4. **apple-touch-icon.png** - 180x180 PNG for iOS devices

## How to Generate

### Option 1: Online Tools
1. Go to [favicon.io](https://favicon.io/favicon-converter/) or [realfavicongenerator.net](https://realfavicongenerator.net/)
2. Upload the `favicon.svg` file
3. Download the generated favicon package
4. Place the files in the `public/` folder

### Option 2: Command Line (if you have ImageMagick)
```bash
# Convert SVG to PNG at different sizes
convert favicon.svg -resize 16x16 favicon-16x16.png
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 180x180 apple-touch-icon.png

# Create ICO file with multiple sizes
convert favicon.svg -resize 16x16 favicon-16x16.png
convert favicon.svg -resize 32x32 favicon-32x32.png
convert favicon.svg -resize 48x48 favicon-48x48.png
convert favicon-16x16.png favicon-32x32.png favicon-48x48.png favicon.ico
```

### Option 3: Design Tools
- Use Figma, Sketch, or Adobe Illustrator to export the SVG at different sizes
- Ensure the PNG files have transparent backgrounds

## File Structure
```
public/
├── favicon.ico          # Main favicon (multi-size ICO)
├── favicon-16x16.png   # 16x16 PNG
├── favicon-32x32.png   # 32x32 PNG
├── apple-touch-icon.png # 180x180 PNG for iOS
└── favicon.svg         # Source SVG file
```

## Testing
After placing the files:
1. Clear browser cache
2. Refresh the page
3. Check browser tab for favicon
4. Test on different devices/browsers
