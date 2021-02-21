<template>
    <v-navigation-drawer         
        :value="drawer"
        app
    >
        <v-list-item>
            <v-list-item-content>
            <v-list-item-title class="title">
                Learn Japan
            </v-list-item-title>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list
            dense
            nav
        >
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
            >
            <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
            </v-list-item-icon>

            <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
            </v-list-item>
        </v-list>
    </v-navigation-drawer>
</template>

<script>
import { mapState } from 'vuex'

export default {
    props: {
        app: String
    },

    data () {
        return {
            items: [
                { title: 'Accueil', icon: 'mdi-home', route: '/' },
                { title: 'Leçons', icon: 'mdi-book-variant ', route: '/classmate' },
                { title: 'Tests', icon: 'mdi-fountain-pen-tip ', route: '/testsopts' },
                { title: 'Tableaux Hiragana/Katakana', icon: 'mdi-table', route: '/tables' },
            ],
            right: null,
        }
    },

    computed: {
        ...mapState(['drawer'])
    }
}
</script>