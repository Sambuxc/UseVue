import { acceptHMRUpdate, defineStore } from 'pinia'

export const useGameStore = defineStore('game', () => {
  /**
   * A Game state.
   */
  const name = ref('')
  const difficulty = ref('')
  const trickList = ref([])


  /**
   * Changes the current name of the game.
   * 
   * @param val - new name to set
   */
  function setName(val: string) {
    name.value = val
  }

  /**
   * Returns the name of the game
   */
  function getName() {
    return name.value
  }

  /**
   * Sets the difficulty of the game.
   *
   * @param val - difficulty to set
   */
  function setDifficulty(val: string) {
    difficulty.value = val
  }

  /**
   * Sets the a trick list of the game.
   * 
   * @param val - trick list array to set
   */
  function setTrickList(val: []) {
    trickList.value = val
  }

  /**
   * Returns all the data of the game.
   */
  function returnAllData() {
    return {
      name: name.value,
      difficulty: difficulty.value,
      trickList: trickList.value
    }
  }

  return {
    setName,
    setDifficulty,
    setTrickList,
    returnAllData,
    getName
  }
})

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useGameStore, import.meta.hot))
