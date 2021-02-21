<template>
  <v-app id="inspire">
    <NavBar app/>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="SET_DRAWER"></v-app-bar-nav-icon>

      <v-toolbar-title>Learn Japan</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <!--  -->
      <h3></h3>
    </v-main>

    <!-- Icons/Fonts Vuetify -->
    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet">
  </v-app>
</template>

<script>
import NavBar from '@/components/core/NavBar.vue'
import { mapMutations } from 'vuex'

export default {
  data: () => ({ }),

  methods: {
    ...mapMutations(['SET_DRAWER'])
  },

  computed: {},

  components: {
    NavBar
  }
}
</script>