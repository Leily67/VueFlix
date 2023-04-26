import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  // State = data
  const count = ref(0)
  // Getter = computed = lire
  const doubleCount = computed(() => count.value * 2)
  // Action = methods = écrire
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment }
})
