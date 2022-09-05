# tailwindcss-var-radius

A plugin for utilising css variables for border radius

## Installation

Install the plugin from npm:

```sh
npm install -D tailwindcss-var-radius
```

Then add the plugin to your `tailwind.config.js` file

```js
// tailwind.config.js
module.exports = {
  theme: {
    // ...
  },
  plugins: [
    require('tailwindcss-var-radius'),
    // ...
  ],
}
```

Now you can change the border radius dynamically during runtime by making changes to `--tw-border-radius`.
