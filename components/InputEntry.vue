<script setup lang="ts">
import { persistGameName } from '~/store'
const game = useGameStore()
const props = defineProps({
  placeholder: String,
  nextStep: String, // must represent a valid route
})

const emit = defineEmits(['saveGameName'])

const name = ref('')

const router = useRouter()
function go() {
  if (name.value)
    persistGameName(game.getName())
    router.push(`/${props.nextStep}/${encodeURIComponent(name.value)}`)
}


watchEffect(() => {
  game.setName(name.value)
  console.log('gameName', game.getName())
})

</script>

<template>
  <div>
    <input
      id="input"
      v-model="name"
      :placeholder="props.placeholder"
      type="text" autocomplete="off"
      p="x-4 y-2" m="t-5" w="250px"
      text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="go()"
    >
    <div>
      <button
        m-3 text-sm btn
        :disabled="!name"
        @click="go"
      >
        GO
      </button>
    </div>
  </div>
</template>
