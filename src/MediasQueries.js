import { css } from "styled-components"
import { object } from "prop-types"

const sizes = {
  menuMax: 1113,
  desktop: 992,
  tablet: 768,
  phone: 576,
}

export const media = Object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (max-widht: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})

export const mediaMin = object.keys(sizes).reduce((acc, label) => {
  acc[label] = (...args) => css`
    @media (min-width: ${sizes[label] / 16}em) {
      ${css(...args)}
    }
  `
  return acc
}, {})
