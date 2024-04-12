<script setup lang="ts">
const props = defineProps({
  placeholder: String,
  nextStep: String, // must represent a valid route
  isDisabled: {
    type: Boolean,
    default: false,
  },
})
const emit = defineEmits(['keyEnter', 'buttonPress'])
// const game = useGameStore()
const model = defineModel()
</script>

<template>
  <div>
    <input
      id="input"
      v-model="model"
      :placeholder="props.placeholder"
      type="text" autocomplete="off"
      p="x-4 y-2" m="t-5" w="250px"
      text="center" bg="transparent"
      border="~ rounded gray-200 dark:gray-700"
      outline="none active:none"
      @keydown.enter="emit('keyEnter')"
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
