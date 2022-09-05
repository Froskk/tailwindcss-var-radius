const postcss = require('postcss')

let expectedV3 = `
.rounded-none {
    border-radius: 0px
}
.rounded-sm {
    border-radius: calc(1 * var(--tw-border-radius) / 8)
}
.rounded {
    border-radius: calc(2 * var(--tw-border-radius) / 8)
}
.rounded-full {
    border-radius: 9999px
}
`

it('v3', () => {
  // @ts-ignore
  const css = postcss([
    // @ts-ignore
    require('tailwindcss')({
      content: [
        {
          raw: 'rounded-none rounded-sm rounded rounded-full',
        },
      ],
      plugins: [require('../')],
    }),
  ]).process('@tailwind utilities').css

  expect(css).toBe(expectedV3.trim())
})
