<template>
  <div class="medialist">
    <h2>{{ title }}</h2>
    <ul :style="'transform: translateX('+pos+'px)'" ref="scrolllist">
      <li v-for="media in filterMedias" :key="media.id">
        <RouterLink :to="`/media/${media.id}`">
          <div class="title">{{ media.title }}</div>
          <img :src="'/medias/' + media.img" alt="">
        </RouterLink>
      </li>
    </ul>
    <input @click="next" type="button" class="next" title="Suivant" value="▶">
    <input @click="prev" type="button" class="prev" title="Précédent" value="◀">
    <div v-if="filterMedias.length == 0">
      Aucun média trouvé
    </div>
  </div>
</template>

<script>
import { useMediasStore } from '@/stores/medias'

export default {
  data() {
    return {
      pos: 0 // position horizontal en pixel
    }
  },
  setup() {
    const store = useMediasStore()
    return { store }
  },
  //props = parametres du component
  //version courte
  props: ['title', 'search'],
  //version complète et requise
  //props: {
  //  medias: {
  //    type: Array,
  //    default: [],
  //    required: true
  //  }
 // }
  computed: {
    filterMedias() {
      return this.store.mediasState.filter((item) => {
        return item.title.toLowerCase().includes(this.search.toLowerCase());
      })
    },
  },

  methods: {
    prev(){
      this.pos = Math.min(0, this.pos + 600)
    },
    next(){
      const maxpos = this.$refs.scrolllist.scrollWidth
      const width = this.$refs.scrolllist.clientWidth
      this.pos = Math.max(-maxpos + width, this.pos - 600)
    }
  }
}
</script>
