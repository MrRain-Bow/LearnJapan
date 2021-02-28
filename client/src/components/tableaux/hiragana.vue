<template>
    <v-container>
        <h1 class="text-center mb-3">Hiragana</h1>

        <v-row
            v-for="row in hiragana"
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
            v-for="row in hiraganaBis"
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
            hiragana: [
                [{ kana: 'あ', latin: 'a'}, { kana: 'い', latin: 'i'}, { kana: 'う', latin: 'u'}, { kana: 'え', latin: 'e'}, { kana: 'お', latin: 'o'}],
                [{ kana: 'か', latin: 'ka'}, { kana: 'き', latin: 'ki'}, { kana: 'く', latin: 'ku'}, { kana: 'け', latin: 'ke'}, { kana: 'こ', latin: 'ko'}],
                [{ kana: 'さ', latin: 'sa'}, { kana: 'し', latin: 'shi'}, { kana: 'す', latin: 'su'}, { kana: 'せ', latin: 'se'}, { kana: 'そ', latin: 'so'}],
                [{ kana: 'た', latin: 'ta'}, { kana: 'ち', latin: 'chi'}, { kana: 'つ', latin: 'tsu'}, { kana: 'て', latin: 'te'}, { kana: 'と', latin: 'to'}],
                [{ kana: 'な', latin: 'na'}, { kana: 'に', latin: 'ni'}, { kana: 'ぬ', latin: 'nu'}, { kana: 'ね', latin: 'ne'}, { kana: 'の', latin: 'no'}],
                [{ kana: 'は', latin: 'ha'}, { kana: 'ひ', latin: 'hi'}, { kana: 'ふ', latin: 'fu'}, { kana: 'へ', latin: 'he'}, { kana: 'ほ', latin: 'ho'}],
                [{ kana: 'ま', latin: 'ma'}, { kana: 'み', latin: 'mi'}, { kana: 'む', latin: 'mu'}, { kana: 'め', latin: 'me'}, { kana: 'も', latin: 'mo'}],
                [{ kana: 'や', latin: 'ya'}, { kana: '', latin: ''}, { kana: 'ゆ', latin: 'yu'}, { kana: '', latin: ''}, { kana: 'よ', latin: 'yo'}],
                [{ kana: 'ら', latin: 'ra'}, { kana: 'り', latin: 'ri'}, { kana: 'る', latin: 'ru'}, { kana: 'れ', latin: 're'}, { kana: 'ろ', latin: 'ro'}],
                [{ kana: 'わ', latin: 'wa'}, { kana: '', latin: ''}, { kana: '', latin: ''}, { kana: '', latin: ''}, { kana: 'を', latin: 'wo'}],
                [{ kana: '', latin: ''}, { kana: '', latin: ''}, { kana: '', latin: ''}, { kana: '', latin: ''}, { kana: 'ん', latin: 'ｎ'}]
            ],

            hiraganaBis: [
                [{ kana: 'が', latin: 'ga'}, { kana: 'ぎ', latin: 'gi'}, { kana: 'ぐ', latin: 'gu'}, { kana: 'げ', latin: 'ge'}, { kana: 'ご', latin: 'go'}],
                [{ kana: 'ざ', latin: 'za'}, { kana: 'じ', latin: 'ji'}, { kana: 'う', latin: 'zu'}, { kana: 'ぜ', latin: 'ze'}, { kana: 'ぞ', latin: 'zo'}],
                [{ kana: 'だ', latin: 'da'}, { kana: 'ぢ', latin: 'di'}, { kana: 'づ', latin: 'du'}, { kana: 'で', latin: 'de'}, { kana: 'ど', latin: 'do'}],
                [{ kana: 'ば', latin: 'ba'}, { kana: 'び', latin: 'bi'}, { kana: 'ぶ', latin: 'bu'}, { kana: 'べ', latin: 'be'}, { kana: 'ぼ', latin: 'bo'}],
                [{ kana: 'ぱ', latin: 'pa'}, { kana: 'ぴ', latin: 'pi'}, { kana: 'ぷ', latin: 'pu'}, { kana: 'ぺ', latin: 'pe'}, { kana: 'ぽ', latin: 'po'}]
            ]
        }
    },

    methode: {},

    computed: {
        ...mapState(['windowHeight', 'windowWidth'])
    }
}
</script>