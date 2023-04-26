<template>
  <div class="mediagallery">
    <p class="search">
      <label for="searchtxt">Recherche</label>
      <!-- v-model = synchronise l'input avec une variable -->
      <input ref="input" id="searchtxt" type="search" v-model="search">
    </p>
    <!-- MediaList = Composant importé (Inclu des props) ":" = Lier a une variable/"Bind"-->
    <MediaList title="Séries" :search="search" /> 
    <MediaList title="Films" :search="search" />
  </div>
</template>

<script>
//import medias from '@/data'
import axios from 'axios'
import MediaList from './MediaList.vue'
import { useMediasStore } from '@/stores/medias'

export default {
  // on importe les composants qu'on va utiliser
  components: { MediaList },
  data() {
    return {
      search: ""
    }
  },
  setup() {
    const store = useMediasStore()
    return { store }
  },
  /*
  Les computed properties en Vue.js sont des propriétés calculées qui dépendent d'autres propriétés
  ou données réactives dans votre composant Vue. Elles sont créées en définissant une méthode dans
  l'objet computed du composant. Leur valeur est automatiquement mise à jour chaque fois que les
  données réactives dont elles dépendent sont modifiées. Les computed properties sont utiles pour
  calculer et afficher des valeurs dérivées à partir de données brutes, sans avoir à les recalculer
  manuellement à chaque fois que les données changent.
  */
  computed: {
    // filtre les series
    series() {
      return this.data.filter((item) => {
        return item.type == 'serie';
      })
    },
    // filtre les films
    movies() {
      return this.data.filter((item) => {
        return item.type == 'movie';
      })
    }
  },
  mounted() {
        // focus sur la barre de recherche a la connexion
        this.$refs.input.focus();

        axios.get(import.meta.env.VITE_URL_API)
      .then(response => {
        this.data = response.data;
        this.store.setMedias(response.data)
      })
      .catch(error => {
        console.log(error);
      });
  },
}
</script>
