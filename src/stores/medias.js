
import { defineStore } from 'pinia'

export const useMediasStore = defineStore('medias', {
  state: () => ({
    mediasState: []
  }),
actions: {
  setMedias(medias) {
    this.mediasState = medias
  }
}
})
