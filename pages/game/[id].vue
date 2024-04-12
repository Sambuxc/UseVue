<script setup lang="ts">
const route = useRoute<'game-id'>()
const name = route.params.id
const game = useGameStore()

watchEffect(() => {
  game.setName(route.params.id as string)
  // console.log('game', game.getName())
})

definePageMeta({
  layout: 'home',
})
</script>

<template>
  <div>
    <div i-twemoji:waving-hand inline-block animate-shake-x animate-duration-5000 text-4xl />
    <h3 text-2xl font-500>
      Game of
    </h3>
    <div text-xl>
      {{ name }}!
    </div>

    <Players />

    <div>
      <NuxtLink
        class="m-3 text-sm btn"
        to="/"
      >
        Back
      </NuxtLink>
      <NuxtLink
        class="m-3 text-sm btn"
        to="/"
      >
        Next
      </NuxtLink>
    </div>
  </div>
</template>
