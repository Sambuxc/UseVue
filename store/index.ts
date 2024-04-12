import { createGlobalState, useStorage } from '@vueuse/core';

export const persistGameName = createGlobalState(
  (name: String) => useStorage('gameName', name),
);