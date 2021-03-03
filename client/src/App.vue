<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="primary"
      :clipped-left="drawer.clipped"
      dark
      dense
    >
      <v-app-bar-nav-icon @click="drawer.model = !drawer.model" ></v-app-bar-nav-icon>

      <v-toolbar-title>Titre</v-toolbar-title>
    </v-app-bar>

    <NavBar :app="app" :drawer="drawer"/>

    <v-main>
      <!--  -->
      <router-view class="view"></router-view>
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
  data: function () {
    return {
      drawer: {
        model: true,
        clipped: true
      }
    }
  },

  methods: {
    ...mapMutations(['SET_DRAWER'])
  },

  components: {
    NavBar
  }
}
</script>
