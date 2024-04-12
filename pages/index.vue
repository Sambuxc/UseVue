<script setup lang="ts">
import { routes } from '~/constants'
import { useGameStore } from '~/composables/game'
import { persistGameName } from '~/store'

const router = useRouter()

// create a blank game store
const game = useGameStore()

const online = useOnline()
// const online = false // for testing offline

const name = ref('')

watchEffect(() => {
  game.setName(name.value)
})

function go() {
  if (name.value) {
    persistGameName(game.getName())
    router.push(`/${routes.game}/${encodeURIComponent(name.value)}`)
  }
}

const acceptableLen = computed((): boolean => {
  return name.value.length > 2
})
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
      v-model="name"
      placeholder="Name Your Game"
      :is-disabled="!acceptableLen"
      @key-enter="go"
      @button-press="go"
    />
  </div>
</template>
