<template>
    <v-navigation-drawer         
        :value="drawer"
        app
    >
        <v-list
            dense
            nav
        >
            <v-list-item
                v-for="item in items"
                :key="item.title"
                link
                :to="item.route"
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
                { title: 'Tableaux Kana', icon: 'mdi-table', route: '/kana' },
            ],
            right: null,
        }
    },

    computed: {
        ...mapState(['drawer'])
    }
}
</script>