# Toonhead

A simple and lightweight avatar generator that creates colorful circular avatars with initials.

## Installation

```bash
npm install toonhead
```

## Usage

### Basic Usage

```javascript
const toonhead = require('toonhead');

// Generate a random avatar
const svg = toonhead();

document.body.innerHTML = svg; // For browser
console.log(svg); // For Node.js
```

### With Options

```javascript
const svg = toonhead({
  seed: 'user123',  // For consistent avatars
  size: 200,        // Size in pixels
  bgColor: '#4285f4', // Background color (optional)
  textColor: '#fff'  // Text color (optional)
});
```

## API

### `toonhead([options])`

Generates an SVG avatar.

#### options

- `seed` (String): Seed for deterministic avatar generation (default: random string)
- `size` (Number): Size of the avatar in pixels (default: 100)
- `bgColor` (String): Background color in hex or rgb (default: random pastel color)
- `textColor` (String): Text color in hex or rgb (default: '#ffffff')

## Browser Usage

Include directly in the browser:

```html
<script src="https://unpkg.com/toonhead/dist/toonhead.umd.js"></script>
<script>
  const svg = toonhead();
  document.body.innerHTML = svg;
</script>
```

## License

MIT
