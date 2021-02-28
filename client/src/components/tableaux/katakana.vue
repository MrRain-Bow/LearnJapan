<template>
    <v-container>
        <h1 class="text-center mb-3">Katakana</h1>

        <v-row
            v-for="row in katakana"
            :key="row.id"
        >
            <v-col
                v-for="item in row"
                :key="item.kana"
            >
                <v-card
                    elevation="2"
                    class="text-center mb-1"
                >
                    <v-list-item-title class="headline mb-1">{{item.kana}}</v-list-item-title>
                    <v-list-item-subtitle>{{item.latin}}</v-list-item-subtitle>
                </v-card>
            </v-col>
        </v-row>

        <h1 class="mt-5 mb-3 text-center" >Accent</h1>


        <v-row
            v-for="row in katakanaBis"
            :key="row.id"
        >
            <v-col
                v-for="item in row"
                :key="item.kana"
            >
                <v-card
                    elevation="2"
                    class="text-center mb-1"
                >
                    <v-list-item-title class="headline mb-1">{{item.kana}}</v-list-item-title>
                    <v-list-item-subtitle>{{item.latin}}</v-list-item-subtitle>
                </v-card>
            </v-col>
        </v-row>

        <h1></h1>
    </v-container>
</template>

<script>
import { mapState } from 'vuex'

export default {
    data: function () {
        return {
            katakana: [
                [{ kana: 'ア', latin: 'a'}, { kana: 'イ', latin: 'i'}, { kana: 'ウ', latin: 'u'}, { kana: 'エ', latin: 'e'}, { kana: 'オ', latin: 'o'}],
                [{ kana: 'カ', latin: 'ka'}, { kana: 'キ', latin: 'ki'}, { kana: 'ク', latin: 'ku'}, { kana: 'ケ', latin: 'ke'}, { kana: 'コ', latin: 'ko'}],
                [{ kana: 'サ', latin: 'sa'}, { kana: 'シ', latin: 'shi'}, { kana: 'ス', latin: 'su'}, { kana: 'セ', latin: 'se'}, { kana: 'ソ', latin: 'so'}],
                [{ kana: 'タ', latin: 'ta'}, { kana: 'チ', latin: 'chi'}, { kana: 'ツ', latin: 'tsu'}, { kana: 'テ', latin: 'te'}, { kana: 'ト', latin: 'to'}],
                [{ kana: 'ナ', latin: 'na'}, { kana: 'ニ', latin: 'ni'}, { kana: 'ヌ', latin: 'nu'}, { kana: 'ネ', latin: 'ne'}, { kana: 'ノ', latin: 'no'}],
                [{ kana: 'ハ', latin: 'ha'}, { kana: 'ヒ', latin: 'hi'}, { kana: 'フ', latin: 'fu'}, { kana: 'ヘ', latin: 'he'}, { kana: 'ホ', latin: 'ho'}],
                [{ kana: 'マ', latin: 'ma'}, { kana: 'ミ', latin: 'mi'}, { kana: 'ム', latin: 'mu'}, { kana: 'メ', latin: 'me'}, { kana: 'モ', latin: 'mo'}],
                [{ kana: 'ヤ', latin: 'ya'}, { kana: '', latin: ''}, { kana: 'ユ', latin: 'yu'}, { kana: '', latin: ''}, { kana: 'ヨ', latin: 'yo'}],
                [{ kana: 'ラ', latin: 'ra'}, { kana: 'リ', latin: 'ri'}, { kana: 'ル', latin: 'ru'}, { kana: 'レ', latin: 're'}, { kana: 'ロ', latin: 'ro'}],
                [{ kana: 'ワ', latin: 'wa'}, { kana: '', latin: ''}, { kana: '', latin: ''}, { kana: '', latin: ''}, { kana: 'ヲ', latin: 'wo'}],
                [{ kana: '', latin: ''}, { kana: '', latin: ''}, { kana: '', latin: ''}, { kana: '', latin: ''}, { kana: 'ン', latin: 'ｎ'}]
            ],

            katakanaBis: [
                [{ kana: 'ガ', latin: 'ga'}, { kana: 'ギ', latin: 'gi'}, { kana: 'グ', latin: 'gu'}, { kana: 'ゲ', latin: 'ge'}, { kana: 'ゴ', latin: 'go'}],
                [{ kana: 'ザ', latin: 'za'}, { kana: 'ジ', latin: 'ji'}, { kana: 'ウ', latin: 'zu'}, { kana: 'ゼ', latin: 'ze'}, { kana: 'ゾ', latin: 'zo'}],
                [{ kana: 'ダ', latin: 'da'}, { kana: 'ヂ', latin: 'di'}, { kana: 'ヅ', latin: 'du'}, { kana: 'デ', latin: 'de'}, { kana: 'ド', latin: 'do'}],
                [{ kana: 'バ', latin: 'ba'}, { kana: 'ビ', latin: 'bi'}, { kana: 'ブ', latin: 'bu'}, { kana: 'ベ', latin: 'be'}, { kana: 'ボ', latin: 'bo'}],
                [{ kana: 'パ', latin: 'pa'}, { kana: 'ピ', latin: 'pi'}, { kana: 'プ', latin: 'pu'}, { kana: 'ペ', latin: 'pe'}, { kana: 'ポ', latin: 'po'}]
            ]
        }
    },

    methode: {},

    computed: {
        ...mapState(['windowHeight', 'windowWidth'])
    }
}
</script>