<script setup lang="ts">
import { routes } from '~/constants'
import { useGameStore } from '~/composables/game';

// create a blank game store
const game = useGameStore()

const online = useOnline()
// const online = false // for testing offline

</script>

<template>
  <div>
    <Logos mb-6 />
    <Suspense>
      <ClientOnly>
        <PageView v-if="online" />
        <div v-else text-gray:80>
          You're offline
        </div>
      </ClientOnly>
      <template #fallback>
        <div italic op50>
          <span animate-pulse>Loading...</span>
        </div>
      </template>
    </Suspense>
    <InputEntry
      placeholder="Name Your Game"
      :next-step="routes.game"
    />
  </div>
</template>
