import fs from 'fs';
import path from 'path';

function findJsxFiles(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  for (const file of list) {
    const fullPath = path.join(dir, file);
    const stat = fs.statSync(fullPath);
    if (stat && stat.isDirectory()) {
      results = results.concat(findJsxFiles(fullPath));
    } else if (file.endsWith('.jsx') || file.endsWith('.js')) {
      results.push(fullPath);
    }
  }
  return results;
}

const files = findJsxFiles('d:/optimusnetworks/src');
let hasError = false;

// Known native/custom components and React builtins
const knownComponents = new Set([
  'App', 'Header', 'FloatingNavbar', 'HeroSection', 'HeroVisual', 'TrustedPartnersStrip', 
  'WhyChooseUs', 'ServicesSection', 'CaseStudiesSection', 'FAQSection', 'FAQCard', 'TestimonialsSection', 'TestimonialCard', 'CTABanner', 'AnimatedNumber', 'ClientLogoMarquee', 'SmoothScrollProvider', 'Navbar', 'Hero', 'NetConnectShowcase', 
  'ConnectivityTabs', 'StatsAndNOC', 'SolutionsGrid', 'AvailabilityChecker', 
  'AboutSection', 'InsightsSection', 'Footer', 'PortalModal', 'QuoteModal',
  'FiberCanvas', 'StrictMode', 'AnimatePresence', 'IconComponent', 'IconComp', 'ColIcon'
]);

for (const file of files) {
  const content = fs.readFileSync(file, 'utf8');
  
  // Extract all imports
  const importLines = content.match(/import\s+[\s\S]*?from\s+['"][^'"]+['"]/g) || [];
  const importedSymbols = new Set();
  
  for (const imp of importLines) {
    const namedMatch = imp.match(/\{([\s\S]*?)\}/);
    if (namedMatch) {
      const names = namedMatch[1].split(',').map(s => s.trim().split(/\s+as\s+/)[0].trim()).filter(Boolean);
      names.forEach(n => importedSymbols.add(n));
    }
    const defaultMatch = imp.match(/import\s+([A-Za-z0-9_]+)\s+from/);
    if (defaultMatch) {
      importedSymbols.add(defaultMatch[1].trim());
    }
  }

  // Extract all JSX tags: <TagName or <TagName/
  const jsxTags = [...content.matchAll(/<([A-Z][a-zA-Z0-9_]*)/g)].map(m => m[1]);
  
  // Also check icon properties like `icon: TagName`
  const iconProps = [...content.matchAll(/icon:\s*([A-Z][a-zA-Z0-9_]*)/g)].map(m => m[1]);
  const allUsedSymbols = [...new Set([...jsxTags, ...iconProps])];

  for (const symbol of allUsedSymbols) {
    if (!importedSymbols.has(symbol) && !knownComponents.has(symbol) && symbol !== 'Icon') {
      console.error(`MISSING IMPORT in ${file}: "${symbol}" is used but not imported!`);
      hasError = true;
    }
  }
}

if (!hasError) {
  console.log('AUDIT PASSED: All JSX tags and icons are properly imported across all files!');
} else {
  process.exit(1);
}

