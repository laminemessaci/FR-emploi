import { hexToRGBA } from './hexToRGBA'

export function fade(hexColor, transparencyLevel) {
  const rgbaColor = hexToRGBA(hexColor)

  if (rgbaColor) {
    return rgbaColor.replace(/[^,]+(?=\))/, transparencyLevel)
  }
  
  throw new Error(`Cannot fade color. Please check the following value: ${hexColor}`)
}
