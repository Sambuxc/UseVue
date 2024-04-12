import { createGlobalState, useStorage } from '@vueuse/core'

export const persistGameName = createGlobalState(
  (name: string) => useStorage('gameName', name),
)
