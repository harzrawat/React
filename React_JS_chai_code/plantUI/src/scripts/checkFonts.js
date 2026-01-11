/**
 * Simple script to check Google Fonts loading status
 * Can be run in browser console or imported in components
 */

import { logFontStatus, verifyAllFonts, getFontLoadingStatus } from '../utils/fontUtils.js';

// Main function to run font checks
const runFontCheck = async () => {
  console.clear();
  console.log('🚀 Starting Google Fonts verification...\n');
  
  try {
    // Quick status check
    console.log('⚡ Quick Status Check:');
    const quickStatus = await getFontLoadingStatus();
    Object.entries(quickStatus).forEach(([font, loaded]) => {
      console.log(`  ${loaded ? '✅' : '❌'} ${font}`);
    });
    
    console.log('\n' + '='.repeat(50) + '\n');
    
    // Detailed verification
    await logFontStatus();
    
    console.log('\n' + '='.repeat(50) + '\n');
    
    // Additional checks
    console.log('🔍 Additional Information:');
    
    // Check if fonts are in document.fonts
    if ('fonts' in document) {
      console.log('  📚 Available fonts in document.fonts:');
      document.fonts.forEach(font => {
        if (font.family.includes('JetBrains') || 
            font.family.includes('Fira') || 
            font.family.includes('Space') || 
            font.family.includes('Inter')) {
          console.log(`    - ${font.family} (${font.weight} ${font.style})`);
        }
      });
    }
    
    // Check CSS variables
    console.log('  🎨 CSS Variables:');
    const cssVars = ['--font-jetbrains', '--font-fira', '--font-grotesk', '--font-inter'];
    cssVars.forEach(cssVar => {
      const value = getComputedStyle(document.documentElement).getPropertyValue(cssVar).trim();
      console.log(`    ${cssVar}: ${value || 'undefined'}`);
    });
    
    console.log('\n✨ Font verification complete!');
    
  } catch (error) {
    console.error('❌ Error during font verification:', error);
  }
};

// Auto-run if script is loaded directly
if (typeof window !== 'undefined') {
  // Make available globally for console use
  window.checkFonts = runFontCheck;
  
  // Auto-run after a short delay to ensure fonts have time to load
  setTimeout(() => {
    console.log('🔤 Font checker loaded! Run checkFonts() in console to verify fonts.');
  }, 1000);
}

export default runFontCheck;