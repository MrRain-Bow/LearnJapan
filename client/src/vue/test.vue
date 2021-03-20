<template>
  <v-container fluid class="text-center">
    <h1 class="mb-6">Question n°{{index+1}}/{{testObject.length}}</h1>
    <v-card
      class="pa-7 mb-6 primary secondary--text rounded-circle d-inline-block"
      width="100px"
      height="100px"
    >
      <h1>{{curQ.question}}</h1>
    </v-card>
    <v-text-field
        class="mt-0 mb-1"
        label="Reponse ?"
        type="text"
        outlined
        v-model="userInput"
        @keydown.enter="next"
    ></v-text-field>
    <v-btn @click="next" color="sucess">Valider</v-btn><br>
    <div v-if="sucess">
      You did it ! Yeah
    </div>
    <div v-else>
      Oh no it's wrong dude...
    </div>
  </v-container>
</template>

<script>
export default {
  props: {
    testObject: { type: Object, default: null },
    startDate: { type: Date, default: null },
    respSuccess: null
  },

  data: () => {
    return {
      index: 0,
      userInput: '',
      curQ: null
    }
  },

  methods: {
    next () {
      let inputDate = Date.now()
      // Ajout de la reponse de l'utilisateur
      this.testObject[this.index].userInput = this.userInput
      this.testObject[this.index].time = inputDate - this.startDate
      this.userInput = ''

      // Passage à la question suivante
      this.index++
      this.curQ = this.testObject[this.index]

      // Detection de fin de partie (à chaque validation)
      if (this.index >= this.testObject.length) {
        this.$router.replace({ name: 'TestResult', params: { testTps: Date.now() - this.startDate.getTime(), testObject: this.testObject } })
      }
    }
  },

  mounted () {
    console.log('Start Date : ' + this.startDate)
    console.log('Test Obj ' + this.testObject)
    if (this.startDate == null || this.testObject == null) {
      this.$router.replace({ path: '/testsopts' })
    } else {
      // Randomiser Test Object
      let randomiseTest = []
      let lgth = this.testObject.length;
      for (let i = 0; i < lgth; i++)
      {
        let rngIndex = Math.floor(Math.random() * Math.floor(this.testObject.length))
        randomiseTest.push(this.testObject[rngIndex])
        this.testObject.splice(rngIndex, 1)
      }

      this.testObject = randomiseTest

      if(this.testObject.length < 5)
      {
        this.$router.replace({ path: '/testsopts' })
      }else{
        this.curQ = this.testObject[this.index]
      }
    }
  }
}
</script>
