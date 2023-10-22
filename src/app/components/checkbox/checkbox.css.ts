import { style } from '@vanilla-extract/css'
import { recipe } from '@vanilla-extract/recipes'

export const input = style({
  clip: 'rect(0 0 0 0)',
  position: 'absolute',
  top: 0,
  width: 1,
  height: 1,
})

export const wrapper = style({
  cursor: 'pointer',
  userSelect: 'none',
  position: 'relative',
  [`${input}:disabled + &`]: {
    pointerEvents: 'none',
  },
})

export const labelWrapper = style([
  wrapper,
  {
    display: 'flex',
    alignItems: 'center',
    gap: 4,
  },
])

export const checkIconRecipe = recipe({
  base: {
    selectors: {
      [`${input}:focus-visible + &`]: {
        borderRadius: '50%',
        outline: '5px auto -webkit-focus-ring-color',
      },
      [`${input}[aria-invalid=true] + &`]: {
        // TODO: 不正な値のときのスタイル
      },
    },
  },

  variants: {
    size: {
      sm: { width: 12, height: 12 },
      md: { width: 14, height: 14 },
      lg: { width: 16, height: 16 },
    },
    checked: {
      true: { color: 'red' },
      false: { color: 'grey' },
    },
  },
})

export const labelRecipe = recipe({
  variants: {
    size: {
      sm: { fontSize: 12 },
      md: { fontSize: 14 },
      lg: { fontSize: 16 },
    },
  },
})
