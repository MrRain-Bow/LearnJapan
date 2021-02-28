<template>
    <v-container>
        <v-tabs
            fixed-tabs
            background-color="primary"
            dark
            v-model="tab"
        >
            <v-tabs-slider color="secondary"></v-tabs-slider>
                <v-tab
                    v-for="item in items"
                    :key="item"
                >
                {{ item.title }}
            </v-tab>
        </v-tabs>

        <v-tabs-items v-model="tab">
            <v-tab-item
                v-for="item in items"
                :key="item"
            >
                <component v-bind:is="item.component"></component>
            </v-tab-item>
        </v-tabs-items>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

import hiragana from '@/components/tableaux/hiragana.vue'
import katakana from '@/components/tableaux/katakana.vue'
import youon from '@/components/tableaux/youon.vue'

export default {
    data: function () {
        return {
            tab: null,
            items: [
                { title: 'Hiragana', component: hiragana},
                { title: 'Katakana', component: katakana},
                { title: 'Youon', component: youon}
            ]
        }
    },

    methode: {},

    computed: {
        ...mapState(['windowHeight', 'windowWidth'])
    },

    component: {
        hiragana,
        katakana,
        youon
    }
}
</script>