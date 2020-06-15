<template>
    <div class="uk-container uk-padding-large">
        <h1>อัศนันท์ไง อัศนันท์เอง</h1>
    </div>
</template>

<script>
    export default {
        name: "About",
        head: {
            title: {
                inner:"About ARSANANDHA"
            },
            meta: [
                {property: 'og:title', content: 'About ARSANANDHA'},
                {
                    property: 'og:descrption',
                    content: "I'm Arsanandha Aphisitworachorch , Web Developer in Vue , JS , Rust , PHP , Python , C#"
                },
                {property: 'og:image', content: 'http://arsanandha.xyz/img/headline/headline.png'},
                {property: 'og:url', content: 'http://arsanandha.xyz/img/headline/headline.png'},
                {name: 'twitter:title', content: 'About ARSANANDHA'},
                {
                    name: 'twitter:description',
                    content: "I'm Arsanandha Aphisitworachorch , Web Developer in Vue , JS , Rust , PHP , Python , C#"
                },
                {name: 'twitter:image', content: 'http://arsanandha.xyz/img/headline/headline.png'},
                {name: 'twitter:card', content: 'summary_large_image'},
            ]
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
