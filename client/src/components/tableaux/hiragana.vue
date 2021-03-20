<template>
    <v-container>
        <h1 class="text-center mb-3">Hiragana</h1>
        <v-card
            elevation="2"
            class="text-center mb-1"
            v-for="hira in hiraQuest"
            :key="hira.question"
        >
            <v-list-item-title class="headline mb-1">{{hira.question}}</v-list-item-title>
            <v-list-item-subtitle>{{hira.response}}</v-list-item-subtitle>
        </v-card>

        <v-divider></v-divider>

    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: function () {
    return {

    }
  },

  methode: {},

  computed: {
    ...mapState(['hiraQuest', 'hiraExtraQuest'])
  }
}
</script>
