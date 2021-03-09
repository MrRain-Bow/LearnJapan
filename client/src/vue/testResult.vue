<template>
    <v-container fluid class="text-center">
        Temps : {{testTps}} -
        Test : {{testObject}} -
        Resultat : {{result}} / {{testObject.length}}
    </v-container>
</template>

<script>
export default {
  props: {
    testTps: { type: Number, default: null },
    testObject: { type: Object, default: null }
  },

  data () {
    return {
    }
  },

  computed: {
    result: {
      get () {
        return this.testObject.filter(e => { return (e.response === e.userInput) }).length
      }
    }
  },

  mounted () {
    console.log('testTps : ' + this.testTps)
    console.log('Test Obj ' + this.testObject)
    if (this.testTps == null || this.testObject == null) {
      this.$router.replace({ path: '/' })
    }
  }
}
</script>
