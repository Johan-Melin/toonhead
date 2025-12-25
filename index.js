/**
 * Toonhead - A simple avatar placeholder generator
 * @param {Object} options - Configuration options
 * @param {string} [options.seed] - Seed for deterministic avatar generation
 * @param {number} [options.size=100] - Size of the avatar in pixels
 * @param {string} [options.bgColor] - Background color in hex or rgb
 * @param {string} [options.textColor='#ffffff'] - Text color in hex or rgb
 * @returns {string} SVG string of the avatar
 */
function toonhead(options = {}) {
  const {
    seed = Math.random().toString(36).substring(2, 10),
    size = 100,
    bgColor = `hsl(${Math.floor(Math.random() * 360)}, 70%, 60%`,
    textColor = '#ffffff'
  } = options;

  // Simple deterministic color generation from seed
  const charCodeSum = seed.split('').reduce((sum, char) => sum + char.charCodeAt(0), 0);
  const hue = charCodeSum % 360;
  const finalBgColor = bgColor || `hsl(${hue}, 70%, 60%)`;
  
  // Get first two characters of seed for display
  const displayText = seed.substring(0, 2).toUpperCase();

  return `
    <svg width="${size}" height="${size}" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <rect width="100" height="100" fill="${finalBgColor}" rx="50"/>
      <text 
        x="50%" 
        y="50%" 
        font-family="Arial, sans-serif" 
        font-size="40" 
        fill="${textColor}"
        text-anchor="middle"
        dominant-baseline="middle"
        font-weight="bold"
      >
        ${displayText}
      </text>
    </svg>
  `.trim();
}

// For CommonJS
if (typeof module !== 'undefined' && module.exports) {
  module.exports = toonhead;
  module.exports.default = toonhead;
}

// For ES modules
if (typeof define === 'function' && define.amd) {
  define([], function() { return toonhead; });
}

// For browser global
if (typeof window !== 'undefined') {
  window.toonhead = toonhead;
}
