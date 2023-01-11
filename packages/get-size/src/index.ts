import type { SizeTokens, SpaceTokens } from '@tamagui/core'
import { getTokens, tokensKeysOrdered } from '@tamagui/core'

export const getSize = (size?: SizeTokens | undefined, shift = 0, bounds = [0]) => {
  return stepTokenUpOrDown('size', size, shift, bounds)
}

export const stepTokenUpOrDown = (
  type: 'size' | 'space',
  name: SizeTokens | SpaceTokens | string = '$true',
  shift = 0,
  bounds = [0]
) => {
  const tokens = getTokens(true)[type]
  const keysOrdered = tokensKeysOrdered.get(tokens) || Object.keys(tokens)
  const min = bounds[0] ?? 0
  const max = bounds[1] ?? keysOrdered.length - 1
  const currentIndex = keysOrdered.indexOf(name)
  if (name === '$true') {
    shift += shift === 0 ? 0 : shift > 0 ? 1 : -1
  }
  const index = Math.min(max, Math.max(min, currentIndex + shift))
  const key = keysOrdered[index]
  return tokens[key] || tokens['$true']
}
