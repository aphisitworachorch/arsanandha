<template>
    <div>
        <vk-navbar>
            <vk-navbar-logo slot="center"><img :src="require('../../../img/logo-01.svg')"/></vk-navbar-logo>
        </vk-navbar>
        <router-view></router-view>
        <footer style="text-align: center">(C) Asanan Aphisitworachorch</footer>
    </div>
</template>

<script>
    export default {
        name: "Main"
    }
</script>

<style scoped>

</style>
