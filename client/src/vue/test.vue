<template>
    <div>
        <h1>Test en cours... {{index+1}}/{{testObject.length}}</h1>
        {{testObject[index].question}}<br/>
        <v-text-field
            dense
            class="mt-0 mb-1"
            label="Response"
            type="text"
            outlined
            v-model="userInput"
        ></v-text-field>
        <v-btn @click="next">Valider</v-btn><br>
        {{testObject}}
    </div>
</template>

<script>
export default {
  props: {
    testObject: { type: Object, default: null },
    startDate: { type: Date, default: null }
  },

  data: () => {
    return {
      index: 0,
      userInput: ''
    }
  },

  methods: {
    next () {
      // Ajout de la reponse de l'utilisateur
      this.testObject[this.index].userInput = this.userInput
      this.userInput = ''

      // Passage à la question suivante
      this.index++

      // Detection de fin de partie (à chaque validation)
      if (this.index >= this.testObject.length) {
        this.$router.replace('/')
      }
    }
  },

  mounted () {
    console.log('Start Date : ' + this.startDate)
    console.log('Test Obj ' + this.testObject)
    if (this.startDate == null || this.testObject == null) {
      this.$router.replace({ path: '/testsopts' })
    }
  }
}
</script>
