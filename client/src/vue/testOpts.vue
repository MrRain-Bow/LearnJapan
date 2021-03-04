/* eslint-disable quotes */
<template>
    <v-container fluid>
        <h1>Test Options</h1>
        Some options to performe a Test<br>
        <v-btn block class="mt-5" color="primary" @click="startTest()">Start</v-btn>
    </v-container>
</template>

<script>
export default {

  data: function () {
    return {}
  },

  methods: {
    startTest () {
      let startDate = new Date(Date.now())
      let testObject = [
        { id: 1, question: 'AA', response: 'aa', userInput: '', time: null },
        { id: 2, question: 'AAB', response: 'ab', userInput: '', time: null },
        { id: 3, question: 'AAC', response: 'ac', userInput: '', time: null },
        { id: 4, question: 'AAD', response: 'ad', userInput: '', time: null }
      ]
      console.log('Date : ' + startDate + '  : ' + testObject)
      this.$router.replace({ name: 'Test', params: { startDate, testObject } })
    }
  }
}
</script>
