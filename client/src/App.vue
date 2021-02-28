<template>
  <v-app id="inspire">
    <v-app-bar app color="primary" dark>
      <v-app-bar-nav-icon @click="SET_DRAWER"></v-app-bar-nav-icon>

      <v-toolbar-title>Learn Japan</v-toolbar-title>
    </v-app-bar>

    <NavBar app/>

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
  data: function() {
    return {
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