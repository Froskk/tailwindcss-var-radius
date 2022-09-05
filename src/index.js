const plugin = require('tailwindcss/plugin')

const cssVarRadius = plugin(
  ({ addBase }) => {
    addBase({
      ':root': {
        '--tw-border-radius': '1rem',
      },
    })
  },
  // @ts-ignore
  {
    theme: {
      borderRadius: {
        none: '0px',
        sm: 'calc(1 * var(--tw-border-radius) / 8)',
        DEFAULT: 'calc(2 * var(--tw-border-radius) / 8)',
        md: 'calc(3 * var(--tw-border-radius) / 8)',
        lg: 'calc(4 * var(--tw-border-radius) / 8)',
        xl: 'calc(6 * var(--tw-border-radius) / 8)',
        '2xl': 'var(--tw-border-radius)',
        '3xl': 'calc(12 * var(--tw-border-radius) / 8)',
        full: '9999px',
      },
    },
  }
)

module.exports = cssVarRadius
