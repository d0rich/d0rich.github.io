const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')

function direction2vector(direction){
  let x = 0
  let y = 0
  if (direction.includes('t')) y = -4
  if (direction.includes('b')) y = 4
  if (direction.includes('l')) x = -4
  if (direction.includes('r')) x = 4
  return { x, y }
}

function createShadowsStyle(direction, offset, color){
  const { x, y } = direction2vector(direction)
  return {
    key: `.sharp-shadow-${color.key}-${direction}-${offset}`,
    value: {
      '--tw-drop-shadow': `drop-shadow(${x*offset}px ${y*offset}px .5px ${color.value})`,
      'filter': 'var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)'
    }
  }
}

function generate(){
  const directions = ['t', 'tr', 'tl', 'b', 'bl', 'br', 'r', 'l']
  const offsets = [ 0, 1, 2, 3, 4, 5 ]
  const result = {}
  for (let colorKey in colors) {
    if (['inherit', 'current', 'transparent'].includes(colorKey)) continue
    for (let colorVariantKey in colors[colorKey]) {
      for (let dir of directions) {
        for (let offset of offsets) {
          const newVariant = createShadowsStyle(dir, offset, {
            key: `${colorKey}-${colorVariantKey}`,
            value: `${colors[colorKey][colorVariantKey]}`
          })
          result[newVariant.key] = newVariant.value
        }
      }
    }
  }
  return result
}


module.exports = plugin(function({ addUtilities }) {
  addUtilities(generate())
})