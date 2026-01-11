/**
 * Utility functions for checking Google Fonts loading status
 */

// Font configuration from your project
export const FONTS_CONFIG = {
  'JetBrains Mono': {
    cssVar: '--font-jetbrains',
    fallback: 'monospace',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800'],
    hasItalic: true
  },
  'Fira Code': {
    cssVar: '--font-fira',
    fallback: 'monospace',
    weights: ['300', '400', '500', '600', '700'],
    hasItalic: false
  },
  'Space Grotesk': {
    cssVar: '--font-grotesk',
    fallback: 'sans-serif',
    weights: ['300', '400', '500', '600', '700'],
    hasItalic: false
  },
  'Inter': {
    cssVar: '--font-inter',
    fallback: 'sans-serif',
    weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
    hasItalic: true
  }
};

/**
 * Check if a specific font is loaded using the Font Loading API
 * @param {string} fontFamily - The font family name
 * @param {string} weight - Font weight (optional, defaults to '400')
 * @param {string} size - Font size (optional, defaults to '16px')
 * @returns {Promise<boolean>} - True if font is loaded
 */
export const checkFontWithAPI = async (fontFamily, weight = '400', size = '16px') => {
  if (!('fonts' in document)) {
    console.warn('Font Loading API not supported');
    return false;
  }

  try {
    const fontFace = `${weight} ${size} "${fontFamily}"`;
    await document.fonts.load(fontFace);
    return document.fonts.check(fontFace);
  } catch (error) {
    console.error(`Font Loading API failed for ${fontFamily}:`, error);
    return false;
  }
};

/**
 * Check if a font is loaded by comparing text width with fallback
 * @param {string} fontFamily - The font family name
 * @param {string} fallback - Fallback font family
 * @returns {Promise<boolean>} - True if font appears to be loaded
 */
export const checkFontByWidth = (fontFamily, fallback) => {
  return new Promise((resolve) => {
    // Create test elements
    const testText = 'mmmmmmmmmmlli';
    const fontSize = '72px';
    
    // Test with fallback font
    const fallbackElement = document.createElement('div');
    fallbackElement.style.cssText = `
      position: absolute;
      visibility: hidden;
      font-size: ${fontSize};
      font-family: ${fallback};
      white-space: nowrap;
    `;
    fallbackElement.textContent = testText;
    document.body.appendChild(fallbackElement);
    const fallbackWidth = fallbackElement.offsetWidth;
    
    // Test with target font
    const targetElement = document.createElement('div');
    targetElement.style.cssText = `
      position: absolute;
      visibility: hidden;
      font-size: ${fontSize};
      font-family: "${fontFamily}", ${fallback};
      white-space: nowrap;
    `;
    targetElement.textContent = testText;
    document.body.appendChild(targetElement);
    
    // Check width after a brief delay
    setTimeout(() => {
      const targetWidth = targetElement.offsetWidth;
      
      // Cleanup
      document.body.removeChild(fallbackElement);
      document.body.removeChild(targetElement);
      
      // If widths are different, the font is likely loaded
      resolve(targetWidth !== fallbackWidth);
    }, 100);
  });
};

/**
 * Check if CSS custom property is defined
 * @param {string} cssVar - CSS custom property name (e.g., '--font-jetbrains')
 * @returns {object} - Object with defined status and value
 */
export const checkCSSVariable = (cssVar) => {
  const value = getComputedStyle(document.documentElement)
    .getPropertyValue(cssVar)
    .trim();
  
  return {
    defined: value !== '',
    value: value
  };
};

/**
 * Check Google Fonts link tags in the document
 * @returns {object} - Status of Google Fonts links
 */
export const checkGoogleFontsLinks = () => {
  const links = document.querySelectorAll('link[href*="fonts.googleapis.com"]');
  
  return {
    found: links.length > 0,
    count: links.length,
    links: Array.from(links).map(link => ({
      href: link.href,
      loaded: link.sheet !== null,
      crossOrigin: link.crossOrigin,
      rel: link.rel
    }))
  };
};

/**
 * Comprehensive font verification for a single font
 * @param {string} fontName - Font family name
 * @returns {Promise<object>} - Detailed verification results
 */
export const verifyFont = async (fontName) => {
  const config = FONTS_CONFIG[fontName];
  if (!config) {
    throw new Error(`Font configuration not found for: ${fontName}`);
  }

  const results = {
    fontName,
    config,
    tests: {}
  };

  try {
    // Test 1: Font Loading API
    results.tests.fontLoadingAPI = await checkFontWithAPI(fontName);
    
    // Test 2: Width comparison
    results.tests.widthComparison = await checkFontByWidth(fontName, config.fallback);
    
    // Test 3: CSS variable check
    const cssVarResult = checkCSSVariable(config.cssVar);
    results.tests.cssVariable = cssVarResult;
    
    // Test 4: Multiple weights (if supported)
    if (config.weights && config.weights.length > 1) {
      results.tests.weights = {};
      for (const weight of config.weights.slice(0, 3)) { // Test first 3 weights
        results.tests.weights[weight] = await checkFontWithAPI(fontName, weight);
      }
    }
    
    // Test 5: Italic support (if supported)
    if (config.hasItalic) {
      results.tests.italic = await checkFontWithAPI(fontName, '400', '16px');
    }
    
    // Overall status
    results.overall = results.tests.fontLoadingAPI || results.tests.widthComparison;
    
  } catch (error) {
    results.error = error.message;
    results.overall = false;
  }

  return results;
};

/**
 * Verify all configured fonts
 * @returns {Promise<object>} - Results for all fonts
 */
export const verifyAllFonts = async () => {
  const results = {
    timestamp: new Date().toISOString(),
    googleFontsLinks: checkGoogleFontsLinks(),
    fonts: {}
  };

  // Test each font
  for (const fontName of Object.keys(FONTS_CONFIG)) {
    try {
      results.fonts[fontName] = await verifyFont(fontName);
    } catch (error) {
      results.fonts[fontName] = {
        fontName,
        error: error.message,
        overall: false
      };
    }
  }

  // Overall summary
  const totalFonts = Object.keys(FONTS_CONFIG).length;
  const loadedFonts = Object.values(results.fonts).filter(f => f.overall).length;
  
  results.summary = {
    totalFonts,
    loadedFonts,
    successRate: (loadedFonts / totalFonts) * 100,
    allLoaded: loadedFonts === totalFonts
  };

  return results;
};

/**
 * Simple function to log font verification results to console
 * @returns {Promise<void>}
 */
export const logFontStatus = async () => {
  console.group('🔤 Google Fonts Verification');
  
  try {
    const results = await verifyAllFonts();
    
    console.log('📊 Summary:', results.summary);
    console.log('🔗 Google Fonts Links:', results.googleFontsLinks);
    
    Object.entries(results.fonts).forEach(([fontName, result]) => {
      const status = result.overall ? '✅' : '❌';
      console.log(`${status} ${fontName}:`, result);
    });
    
  } catch (error) {
    console.error('❌ Font verification failed:', error);
  }
  
  console.groupEnd();
};

/**
 * Get font loading status as a simple boolean object
 * @returns {Promise<object>} - Simple true/false status for each font
 */
export const getFontLoadingStatus = async () => {
  const results = await verifyAllFonts();
  const status = {};
  
  Object.entries(results.fonts).forEach(([fontName, result]) => {
    status[fontName] = result.overall;
  });
  
  return status;
};

// Export for browser console usage
if (typeof window !== 'undefined') {
  window.fontUtils = {
    checkFontWithAPI,
    checkFontByWidth,
    checkCSSVariable,
    checkGoogleFontsLinks,
    verifyFont,
    verifyAllFonts,
    logFontStatus,
    getFontLoadingStatus,
    FONTS_CONFIG
  };
}