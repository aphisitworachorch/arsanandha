<template>
    <div>
        <vk-navbar>
            <vk-navbar-logo slot="center">
                <iframe :src="imgX"/>
            </vk-navbar-logo>
        </vk-navbar>
        <router-view></router-view>
        <br/>
        <footer style="text-align: center">(C) Asanan Aphisitworachorch</footer>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data: () => {
            return {
                imgX: require('../../../img/logo-01.svg')
            }
        }
    }
</script>

<style lang="sass" scoped>
    @import url('https://fonts.googleapis.com/css?family=K2D&display=swap&subset=thai')

    body
        font-family: 'K2D', sans-serif

    h1, h2, h3, h4, h5, p
        font-family: 'K2D', sans-serif
</style>
