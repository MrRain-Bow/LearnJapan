<template>
    <v-container fluid>
        <h1>Accueil</h1>

        Height : {{windowHeight}}
        Width : {{windowWidth}}
    </v-container>
</template>

<script>
import { mapState } from 'vuex'
export default {
    computed: {
        ...mapState(['windowHeight', 'windowWidth'])
    }
}
</script>