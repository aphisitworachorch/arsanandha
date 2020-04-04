<template>
    <div class="soon">
        <div class="uk-container uk-padding-large">
            <h1>{{ this.wordofday }}</h1>
            <p style="text-align: center">(C) arsanandha.xyz</p>
            <p style="text-align: center">Made by Vue.JS</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexT",
        methods: {
            returnWordOfDay() {
                let d = new Date();
                let quote = [
                    'ทำงานวันใหม่ สดใสแข็งแรง',
                    'วันนี้ไม่มีไรมาก นอกจากคำว่าสวัสดี',
                    'มองหลังแล้วอยากเห็นหน้า เห็นหน้าแล้วอยากรักเธอ',
                    'ไม่คิดจะมีใคร เพราะไม่มีใคร ไม่ใช่ไม่เอาใคร',
                    'อยากจะรัก อยากจะดูแล อยากจะเป็นพ่อของลูกครับ',
                    'สติไม่ดี แต่ดูแลดีนะ',
                    'ไปโบสถ์กันดีกว่า'
                ];
                return quote[d.getDate() - 1];
            }
        },
        data() {
            return {
                wordofday: this.returnWordOfDay()
            }
        },
        mounted() {
            console.log(this.returnWordOfDay());
        }
    }
</script>

<style lang="sass" scoped>
    @import url('https://fonts.googleapis.com/css?family=K2D&display=swap&subset=thai')

    body
        font-family: 'K2D', sans-serif

    h1, h2, h3, h4, h5, p
        font-family: 'K2D', sans-serif

    .soon
        position: absolute
        top: 50%
        left: 50%
        margin-right: -50%
        transform: translate(-50%, -50%)
</style>
