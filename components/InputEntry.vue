<script setup lang="ts">
const game = useGameStore()
const props = defineProps({
  placeholder: String,
  nextStep: String, // must represent a valid route
  isDisabled: {
    type: Boolean,
    default: false,
  },
})
const model = defineModel()

const emit = defineEmits(['keyEnter', 'buttonPress'])


</script>

<template>
  <div>
    <input
      id="input"
      :placeholder="props.placeholder"
      type="text" autocomplete="off"
      p="x-4 y-2" m="t-5" w="250px"
      text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="emit('keyEnter')"
      v-model="model"
    >
    <div>
      <button
        m-3 text-sm btn
        :disabled="isDisabled"
        @click="emit('buttonPress')"
      >
        GO
      </button>
    </div>
  </div>
</template>
