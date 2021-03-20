/* eslint-disable quotes */
<template>
  <v-container fluid>
    <h1>Test Options</h1>
    Some options to performe a Test<br>
    <v-row class="d-flow over">
        <v-img src="@/assets/Background-Test-hira-final.png" @click="startTest(hiraQuest)"></v-img>
        <v-img src="@/assets/Background-Test-both-final.png"></v-img>
        <v-img src="@/assets/Background-Test-kana-final.png"></v-img>
    </v-row>
  </v-container>
</template>

<script>
export default {

  data: function () {
    return {

    }
  },

  methods: {
    startTest (testObject) {
      let startDate = new Date(Date.now())
      this.$router.replace({ name: 'Test', params: { startDate, testObject } })
    }
  }
}
</script>

<style scoped>
.over {
  overflow-x: visible;
}
</style>
