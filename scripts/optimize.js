#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

console.log('🚀 CommuteTimely Enhanced Performance Optimization Script');
console.log('========================================================\n');

// Configuration
const CONFIG = {
  bundleSizeLimit: 500, // KB
  performanceBudget: {
    firstContentfulPaint: 1500, // ms
    largestContentfulPaint: 2500, // ms
    cumulativeLayoutShift: 0.1,
    firstInputDelay: 100, // ms
  },
  deviceProfiles: {
    mobile: { cpu: 'slow', network: '3g', throttling: true },
    desktop: { cpu: 'fast', network: 'fast', throttling: false }
  }
};

// Utility functions
function log(message, type = 'info') {
  const colors = {
    info: '\x1b[36m',    // Cyan
    success: '\x1b[32m', // Green
    warning: '\x1b[33m', // Yellow
    error: '\x1b[31m',   // Red
    reset: '\x1b[0m'     // Reset
  };
  
  const icon = {
    info: 'ℹ️',
    success: '✅',
    warning: '⚠️',
    error: '❌'
  };
  
  console.log(`${colors[type]}${icon[type]} ${message}${colors.reset}`);
}

function executeCommand(command, description) {
  try {
    log(`Running: ${description}`, 'info');
    const result = execSync(command, { encoding: 'utf8', stdio: 'pipe' });
    return result;
  } catch (error) {
    log(`Failed: ${description}`, 'error');
    log(`Error: ${error.message}`, 'error');
    return null;
  }
}

// Bundle analysis
function analyzeBundle() {
  log('Analyzing bundle size and composition...', 'info');
  
  try {
    // Check if build directory exists
    if (!fs.existsSync('.next')) {
      log('Build directory not found. Run "npm run build" first.', 'error');
      return false;
    }
    
    // Analyze JavaScript bundles
    const jsFiles = [];
    const cssFiles = [];
    let totalJS = 0;
    let totalCSS = 0;
    
    // Scan .next/static/chunks for JS files
    const chunksDir = path.join('.next', 'static', 'chunks');
    if (fs.existsSync(chunksDir)) {
      const files = fs.readdirSync(chunksDir);
      files.forEach(file => {
        if (file.endsWith('.js')) {
          const filePath = path.join(chunksDir, file);
          const stats = fs.statSync(filePath);
          const sizeKB = Math.round(stats.size / 1024);
          jsFiles.push({ name: file, size: sizeKB });
          totalJS += sizeKB;
        }
      });
    }
    
    // Scan .next/static/css for CSS files
    const cssDir = path.join('.next', 'static', 'css');
    if (fs.existsSync(cssDir)) {
      const files = fs.readdirSync(cssDir);
      files.forEach(file => {
        if (file.endsWith('.css')) {
          const filePath = path.join(cssDir, file);
          const stats = fs.statSync(filePath);
          const sizeKB = Math.round(stats.size / 1024);
          cssFiles.push({ name: file, size: sizeKB });
          totalCSS += sizeKB;
        }
      });
    }
    
    // Sort by size
    jsFiles.sort((a, b) => b.size - a.size);
    cssFiles.sort((a, b) => b.size - a.size);
    
    log(`Bundle Analysis Results:`, 'success');
    log(`Total JavaScript: ${totalJS} KB`, totalJS > CONFIG.bundleSizeLimit ? 'warning' : 'success');
    log(`Total CSS: ${totalCSS} KB`, totalCSS > 100 ? 'warning' : 'success');
    
    if (totalJS > CONFIG.bundleSizeLimit) {
      log(`⚠️  JavaScript bundle exceeds ${CONFIG.bundleSizeLimit} KB limit`, 'warning');
      log('Top JavaScript chunks:', 'info');
      jsFiles.slice(0, 5).forEach(file => {
        log(`  ${file.name}: ${file.size} KB`, file.size > 100 ? 'warning' : 'info');
      });
    }
    
    if (totalCSS > 100) {
      log(`⚠️  CSS bundle exceeds 100 KB limit`, 'warning');
      log('Top CSS files:', 'info');
      cssFiles.slice(0, 3).forEach(file => {
        log(`  ${file.name}: ${file.size} KB`, file.size > 50 ? 'warning' : 'info');
      });
    }
    
    return { totalJS, totalCSS, jsFiles, cssFiles };
  } catch (error) {
    log(`Bundle analysis failed: ${error.message}`, 'error');
    return false;
  }
}

// Performance checking
function checkPerformance() {
  log('Checking performance metrics...', 'info');
  
  const metrics = {
    buildTime: 0,
    bundleSize: 0,
    imageOptimization: false,
    codeSplitting: false,
    treeShaking: false
  };
  
  try {
    // Check build time
    const buildLog = fs.readFileSync('.next/build-manifest.json', 'utf8');
    const buildData = JSON.parse(buildLog);
    metrics.buildTime = Date.now() - new Date(buildData.buildTime || Date.now()).getTime();
    
    // Check bundle size
    const bundleAnalysis = analyzeBundle();
    if (bundleAnalysis) {
      metrics.bundleSize = bundleAnalysis.totalJS + bundleAnalysis.totalCSS;
    }
    
    // Check image optimization
    const nextConfig = fs.readFileSync('next.config.js', 'utf8');
    metrics.imageOptimization = nextConfig.includes('images:') && nextConfig.includes('formats:');
    
    // Check code splitting
    metrics.codeSplitting = bundleAnalysis && bundleAnalysis.jsFiles.length > 3;
    
    // Check tree shaking
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    metrics.treeShaking = packageJson.dependencies && 
                         (packageJson.dependencies['framer-motion'] || 
                          packageJson.dependencies['lucide-react']);
    
    return metrics;
  } catch (error) {
    log(`Performance check failed: ${error.message}`, 'error');
    return metrics;
  }
}

// Accessibility checking
function checkAccessibility() {
  log('Checking accessibility compliance...', 'info');
  
  const checks = {
    semanticHTML: false,
    ariaLabels: false,
    colorContrast: false,
    keyboardNavigation: false,
    altText: false
  };
  
  try {
    // Check for semantic HTML elements
    const components = fs.readdirSync('components');
    components.forEach(component => {
      if (component.endsWith('.tsx')) {
        const content = fs.readFileSync(`components/${component}`, 'utf8');
        checks.semanticHTML = checks.semanticHTML || 
          content.includes('<header') || 
          content.includes('<main') || 
          content.includes('<section') || 
          content.includes('<nav');
        
        checks.ariaLabels = checks.ariaLabels || 
          content.includes('aria-label') || 
          content.includes('aria-labelledby');
        
        checks.altText = checks.altText || 
          content.includes('alt=') || 
          content.includes('altText');
      }
    });
    
    // Check for keyboard navigation support
    const layout = fs.readFileSync('app/layout.tsx', 'utf8');
    checks.keyboardNavigation = layout.includes('focus:') || layout.includes('focus-visible');
    
    // Check for color contrast considerations
    const globals = fs.readFileSync('app/globals.css', 'utf8');
    checks.colorContrast = globals.includes('focus:outline') || globals.includes('focus:ring');
    
    return checks;
  } catch (error) {
    log(`Accessibility check failed: ${error.message}`, 'error');
    return checks;
  }
}

// SEO checking
function checkSEO() {
  log('Checking SEO optimization...', 'info');
  
  const checks = {
    metaTags: false,
    structuredData: false,
    sitemap: false,
    robots: false,
    openGraph: false
  };
  
  try {
    // Check layout.tsx for meta tags
    const layout = fs.readFileSync('app/layout.tsx', 'utf8');
    checks.metaTags = layout.includes('export const metadata') && layout.includes('title') && layout.includes('description');
    checks.openGraph = layout.includes('openGraph') && layout.includes('twitter');
    
    // Check for structured data
    const seoDir = path.join('components', 'seo');
    if (fs.existsSync(seoDir)) {
      checks.structuredData = fs.readdirSync(seoDir).some(file => file.includes('StructuredData'));
    }
    
    // Check for sitemap and robots
    checks.sitemap = fs.existsSync('public/sitemap.xml');
    checks.robots = fs.existsSync('public/robots.txt');
    
    return checks;
  } catch (error) {
    log(`SEO check failed: ${error.message}`, 'error');
    return checks;
  }
}

// PWA checking
function checkPWA() {
  log('Checking PWA features...', 'info');
  
  const checks = {
    manifest: false,
    serviceWorker: false,
    offlineSupport: false,
    installable: false,
    icons: false
  };
  
  try {
    // Check manifest.json
    if (fs.existsSync('public/manifest.json')) {
      const manifest = JSON.parse(fs.readFileSync('public/manifest.json', 'utf8'));
      checks.manifest = manifest.name && manifest.short_name && manifest.start_url;
      checks.installable = manifest.display === 'standalone' || manifest.display === 'fullscreen';
    }
    
    // Check service worker
    checks.serviceWorker = fs.existsSync('public/sw.js');
    
    // Check offline support
    checks.offlineSupport = fs.existsSync('public/offline.html');
    
    // Check icons
    checks.icons = fs.existsSync('public/icon-192x192.png') && fs.existsSync('public/icon-512x512.png');
    
    return checks;
  } catch (error) {
    log(`PWA check failed: ${error.message}`, 'error');
    return checks;
  }
}

// Device-specific optimization checking
function checkDeviceOptimizations() {
  log('Checking device-specific optimizations...', 'info');
  
  const checks = {
    mobileOptimized: false,
    lowEndDeviceSupport: false,
    reducedMotionSupport: false,
    networkAware: false,
    performanceMonitoring: false
  };
  
  try {
    // Check animations for device awareness
    const animations = fs.readFileSync('lib/animations.ts', 'utf8');
    checks.mobileOptimized = animations.includes('getDeviceCapabilities') && animations.includes('isMobile');
    checks.lowEndDeviceSupport = animations.includes('isLowEnd') && animations.includes('lightSpringConfig');
    checks.reducedMotionSupport = animations.includes('hasReducedMotion') && animations.includes('reducedMotionVariants');
    
    // Check service worker for network awareness
    const sw = fs.readFileSync('public/sw.js', 'utf8');
    checks.networkAware = sw.includes('getCacheStrategy') && sw.includes('effectiveType');
    
    // Check performance monitoring
    const performanceMonitor = fs.readFileSync('components/ui/PerformanceMonitor.tsx', 'utf8');
    checks.performanceMonitoring = performanceMonitor.includes('deviceInfo') && performanceMonitor.includes('lighthouse');
    
    return checks;
  } catch (error) {
    log(`Device optimization check failed: ${error.message}`, 'error');
    return checks;
  }
}

// Generate comprehensive report
function generateReport(performanceMetrics, accessibilityMetrics, seoMetrics, pwaMetrics, deviceMetrics) {
  log('Generating comprehensive optimization report...', 'info');
  
  const report = {
    timestamp: new Date().toISOString(),
    summary: {
      performance: 0,
      accessibility: 0,
      seo: 0,
      pwa: 0,
      deviceOptimization: 0
    },
    details: {
      performance: performanceMetrics,
      accessibility: accessibilityMetrics,
      seo: seoMetrics,
      pwa: pwaMetrics,
      deviceOptimization: deviceMetrics
    },
    recommendations: []
  };
  
  // Calculate scores
  const accessibilityScore = Object.values(accessibilityMetrics).filter(Boolean).length / Object.keys(accessibilityMetrics).length * 100;
  const seoScore = Object.values(seoMetrics).filter(Boolean).length / Object.keys(seoMetrics).length * 100;
  const pwaScore = Object.values(pwaMetrics).filter(Boolean).length / Object.keys(pwaMetrics).length * 100;
  const deviceScore = Object.values(deviceMetrics).filter(Boolean).length / Object.keys(deviceMetrics).length * 100;
  
  // Performance score calculation
  let performanceScore = 100;
  if (performanceMetrics.bundleSize > CONFIG.bundleSizeLimit) performanceScore -= 20;
  if (performanceMetrics.buildTime > 30000) performanceScore -= 15;
  if (!performanceMetrics.imageOptimization) performanceScore -= 10;
  if (!performanceMetrics.codeSplitting) performanceScore -= 10;
  if (!performanceMetrics.treeShaking) performanceScore -= 10;
  
  report.summary = {
    performance: Math.max(0, performanceScore),
    accessibility: Math.round(accessibilityScore),
    seo: Math.round(seoScore),
    pwa: Math.round(pwaScore),
    deviceOptimization: Math.round(deviceScore)
  };
  
  // Generate recommendations
  if (performanceScore < 80) {
    report.recommendations.push('Optimize bundle size and build performance');
  }
  if (accessibilityScore < 80) {
    report.recommendations.push('Improve accessibility compliance');
  }
  if (seoScore < 80) {
    report.recommendations.push('Enhance SEO optimization');
  }
  if (pwaScore < 80) {
    report.recommendations.push('Complete PWA implementation');
  }
  if (deviceScore < 80) {
    report.recommendations.push('Implement device-specific optimizations');
  }
  
  // Save report
  const reportPath = 'performance-report.json';
  fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
  
  log(`Report saved to ${reportPath}`, 'success');
  
  return report;
}

// Run Lighthouse audit
function runLighthouse() {
  log('Running Lighthouse audit...', 'info');
  
  try {
    // Check if Lighthouse is installed
    try {
      execSync('lighthouse --version', { stdio: 'pipe' });
    } catch {
      log('Lighthouse not found. Installing...', 'warning');
      execSync('npm install -g lighthouse', { stdio: 'inherit' });
    }
    
    // Run Lighthouse audit
    const output = execSync('lighthouse http://localhost:3000 --output=json --output-path=./lighthouse-report.json --chrome-flags="--headless --no-sandbox --disable-dev-shm-usage"', { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    
    log('Lighthouse audit completed successfully', 'success');
    
    // Parse and display results
    if (fs.existsSync('lighthouse-report.json')) {
      const report = JSON.parse(fs.readFileSync('lighthouse-report.json', 'utf8'));
      const scores = report.lhr.categories;
      
      log('Lighthouse Scores:', 'success');
      log(`Performance: ${Math.round(scores.performance.score * 100)}`, scores.performance.score > 0.9 ? 'success' : 'warning');
      log(`Accessibility: ${Math.round(scores.accessibility.score * 100)}`, scores.accessibility.score > 0.9 ? 'success' : 'warning');
      log(`Best Practices: ${Math.round(scores['best-practices'].score * 100)}`, scores['best-practices'].score > 0.9 ? 'success' : 'warning');
      log(`SEO: ${Math.round(scores.seo.score * 100)}`, scores.seo.score > 0.9 ? 'success' : 'warning');
      log(`PWA: ${Math.round(scores.pwa.score * 100)}`, scores.pwa.score > 0.9 ? 'success' : 'warning');
    }
    
  } catch (error) {
    log(`Lighthouse audit failed: ${error.message}`, 'error');
  }
}

// Main execution
async function main() {
  try {
    log('Starting comprehensive optimization analysis...', 'info');
    
    // Run all checks
    const bundleAnalysis = analyzeBundle();
    const performanceMetrics = checkPerformance();
    const accessibilityMetrics = checkAccessibility();
    const seoMetrics = checkSEO();
    const pwaMetrics = checkPWA();
    const deviceMetrics = checkDeviceOptimizations();
    
    // Generate comprehensive report
    const report = generateReport(
      performanceMetrics, 
      accessibilityMetrics, 
      seoMetrics, 
      pwaMetrics, 
      deviceMetrics
    );
    
    // Display summary
    console.log('\n📊 Optimization Summary');
    console.log('=======================');
    console.log(`Performance: ${report.summary.performance}/100`);
    console.log(`Accessibility: ${report.summary.accessibility}/100`);
    console.log(`SEO: ${report.summary.seo}/100`);
    console.log(`PWA: ${report.summary.pwa}/100`);
    console.log(`Device Optimization: ${report.summary.deviceOptimization}/100`);
    
    // Display recommendations
    if (report.recommendations.length > 0) {
      console.log('\n🎯 Recommendations:');
      report.recommendations.forEach(rec => console.log(`• ${rec}`));
    }
    
    // Run Lighthouse if requested
    if (process.argv.includes('--lighthouse')) {
      runLighthouse();
    }
    
    console.log('\n🚀 Next Steps:');
    console.log('1. Review the detailed report in performance-report.json');
    console.log('2. Implement recommended optimizations');
    console.log('3. Run "npm run build" to apply changes');
    console.log('4. Test performance improvements');
    console.log('5. Deploy optimized version');
    
    log('Optimization analysis completed successfully!', 'success');
    
  } catch (error) {
    log(`Optimization script failed: ${error.message}`, 'error');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = { 
  analyzeBundle, 
  checkPerformance, 
  checkAccessibility, 
  checkSEO,
  checkPWA,
  checkDeviceOptimizations,
  generateReport,
  runLighthouse 
};
