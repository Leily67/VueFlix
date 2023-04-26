<script>
import { useMediasStore } from '@/stores/medias'

export default {
  setup() {
    const store = useMediasStore()
    return { store }
  },
  computed: {
    media() {
      return this.store.mediasState.find((m) => {
        return m.id === Number(this.$route.params.id)
      })
    }
  },
  created(){
    if(this.store.mediasState.length === 0) {
      this.$router.push('/')
    }
  }}
</script>

<template>
  <main class="media">
    <!-- {{ $route.params.id }} -->
    <!-- {{ media }} -->
    <iframe
    v-if="media.tube"
    :src="'https://www.youtube.com/embed/'+media.tube" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
  </main>
</template>
