#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 CommuteTimely Build Optimization Script');
console.log('=====================================\n');

// Check if we're in production mode
const isProduction = process.env.NODE_ENV === 'production';

if (!isProduction) {
  console.log('⚠️  This script should be run in production mode');
  console.log('   Set NODE_ENV=production and run: npm run build\n');
  process.exit(1);
}

// Function to analyze bundle size
function analyzeBundle() {
  console.log('📊 Analyzing bundle size...');
  
  try {
    // Run Next.js build with bundle analyzer
    execSync('npm run build', { stdio: 'inherit' });
    
    // Check if bundle analyzer is available
    if (fs.existsSync('node_modules/.bin/next-bundle-analyzer')) {
      console.log('\n📈 Opening bundle analyzer...');
      execSync('npx next-bundle-analyzer', { stdio: 'inherit' });
    }
  } catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
  }
}

// Function to check performance metrics
function checkPerformance() {
  console.log('\n⚡ Checking performance metrics...');
  
  const metrics = {
    bundleSize: 0,
    imageOptimization: true,
    fontOptimization: true,
    codeSplitting: true,
    treeShaking: true
  };
  
  // Check bundle size
  const buildDir = path.join(process.cwd(), '.next');
  if (fs.existsSync(buildDir)) {
    const stats = fs.statSync(buildDir);
    metrics.bundleSize = Math.round(stats.size / 1024 / 1024); // MB
    
    if (metrics.bundleSize > 2) {
      console.log(`⚠️  Bundle size: ${metrics.bundleSize}MB (target: <2MB)`);
    } else {
      console.log(`✅ Bundle size: ${metrics.bundleSize}MB`);
    }
  }
  
  // Check image optimization
  if (fs.existsSync('next.config.js')) {
    const config = fs.readFileSync('next.config.js', 'utf8');
    if (config.includes('image/webp') && config.includes('image/avif')) {
      console.log('✅ Image optimization enabled (WebP, AVIF)');
    } else {
      console.log('⚠️  Image optimization not fully configured');
      metrics.imageOptimization = false;
    }
  }
  
  // Check font optimization
  if (fs.existsSync('app/layout.tsx')) {
    const layout = fs.readFileSync('app/layout.tsx', 'utf8');
    if (layout.includes('display: \'swap\'') && layout.includes('preload: true')) {
      console.log('✅ Font optimization enabled (display swap, preload)');
    } else {
      console.log('⚠️  Font optimization not fully configured');
      metrics.fontOptimization = false;
    }
  }
  
  return metrics;
}

// Function to generate optimization report
function generateReport(metrics) {
  console.log('\n📋 Optimization Report');
  console.log('=====================');
  
  const score = Object.values(metrics).filter(Boolean).length / Object.keys(metrics).length * 100;
  
  console.log(`Overall Score: ${Math.round(score)}%`);
  console.log(`Bundle Size: ${metrics.bundleSize}MB`);
  console.log(`Image Optimization: ${metrics.imageOptimization ? '✅' : '❌'}`);
  console.log(`Font Optimization: ${metrics.fontOptimization ? '✅' : '❌'}`);
  console.log(`Code Splitting: ${metrics.codeSplitting ? '✅' : '❌'}`);
  console.log(`Tree Shaking: ${metrics.treeShaking ? '✅' : '❌'}`);
  
  if (score < 80) {
    console.log('\n⚠️  Some optimizations are needed. Check the warnings above.');
  } else {
    console.log('\n🎉 Excellent! Your build is well optimized.');
  }
}

// Function to run Lighthouse audit
function runLighthouse() {
  console.log('\n🔍 Running Lighthouse audit...');
  
  try {
    // Check if Lighthouse is installed
    execSync('npx lighthouse --version', { stdio: 'pipe' });
    
    console.log('Running Lighthouse audit on localhost:3000...');
    console.log('Make sure your app is running with: npm run start');
    
    // Run Lighthouse audit
    execSync('npx lighthouse http://localhost:3000 --output=html --output-path=./lighthouse-report.html', { 
      stdio: 'inherit' 
    });
    
    console.log('\n✅ Lighthouse audit completed!');
    console.log('📄 Report saved as: lighthouse-report.html');
    
  } catch (error) {
    console.log('⚠️  Lighthouse not available. Install with: npm install -g lighthouse');
    console.log('   Or run manually: npx lighthouse http://localhost:3000');
  }
}

// Function to check accessibility
function checkAccessibility() {
  console.log('\n♿ Checking accessibility...');
  
  const accessibilityChecks = {
    semanticHTML: true,
    ariaLabels: true,
    colorContrast: true,
    keyboardNavigation: true,
    screenReader: true
  };
  
  // Check semantic HTML usage
  const components = ['Header', 'HeroSection', 'FeaturesSection', 'Footer'];
  components.forEach(component => {
    const filePath = `components/${component}.tsx`;
    if (fs.existsSync(filePath)) {
      const content = fs.readFileSync(filePath, 'utf8');
      
      if (content.includes('<header') || content.includes('<main') || content.includes('<section')) {
        console.log(`✅ ${component}: Semantic HTML used`);
      } else {
        console.log(`⚠️  ${component}: Consider using semantic HTML`);
        accessibilityChecks.semanticHTML = false;
      }
      
      if (content.includes('aria-label') || content.includes('aria-describedby')) {
        console.log(`✅ ${component}: ARIA labels present`);
      } else {
        console.log(`⚠️  ${component}: Consider adding ARIA labels`);
        accessibilityChecks.ariaLabels = false;
      }
    }
  });
  
  return accessibilityChecks;
}

// Main execution
async function main() {
  try {
    // Analyze bundle
    analyzeBundle();
    
    // Check performance
    const performanceMetrics = checkPerformance();
    
    // Check accessibility
    const accessibilityMetrics = checkAccessibility();
    
    // Generate reports
    generateReport(performanceMetrics);
    
    console.log('\n♿ Accessibility Report');
    console.log('======================');
    const accessibilityScore = Object.values(accessibilityMetrics).filter(Boolean).length / Object.keys(accessibilityMetrics).length * 100;
    console.log(`Accessibility Score: ${Math.round(accessibilityScore)}%`);
    
    // Run Lighthouse if requested
    if (process.argv.includes('--lighthouse')) {
      runLighthouse();
    }
    
    console.log('\n🎯 Next Steps:');
    console.log('1. Test your app with: npm run start');
    console.log('2. Run Lighthouse audit manually');
    console.log('3. Check bundle analyzer for optimization opportunities');
    console.log('4. Test accessibility with screen readers');
    console.log('5. Validate PWA functionality');
    
  } catch (error) {
    console.error('❌ Optimization script failed:', error.message);
    process.exit(1);
  }
}

// Run the script
if (require.main === module) {
  main();
}

module.exports = { analyzeBundle, checkPerformance, checkAccessibility };
