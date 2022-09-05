# tailwindcss-highlight

A plugin that provides highlights and borders via inset box shadows

## Installation

Install the plugin from npm:

```sh
npm install -D tailwindcss-highlight
```

Then add the plugin to your `tailwind.config.js` file

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-highlight'),
    // ...
  ],
}
```

## Usage

the highlight api matches tailwinds native [Border Width](https://tailwindcss.com/docs/border-width) and [Border Color](https://tailwindcss.com/docs/border-color)

```html
<div class="highlight-t hightlight-cyan-300/20" />
```

Use `highlight-none` to remove any highlights (does not affect children):

```html
<div class="highlight-none lg:highlight-x-8">
  <!-- ... -->
</div>
```

Note this may conflict with other utilities that affect the `box-shadow` property. If there any any conflicts please make an issue. If you can see a cleaner way to implement this without conflicts, please let me know!

Highlight classes up to 8 are generated by default, each matching the value in pixels

## Configuration

You can configure which values are generated by this plugin under the `highlightWidth` key in your `tailwind.config.js` file:

```js
// tailwind.config.js
module.exports = {
  theme: {
    highlightWidth: {
      DEFAULT: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      // ...
    },
  },
  variants: {
    aspectRatio: ['responsive', 'hover'],
  },
}
```
