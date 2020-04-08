<template>
    <div>
        <vk-navbar>
            <vk-navbar-logo slot="center"><iframe :src="imgX"/></vk-navbar-logo>
        </vk-navbar>
        <router-view></router-view>
        <footer style="text-align: center">(C) Asanan Aphisitworachorch</footer>
    </div>
</template>

<script>
    export default {
        name: "Main",
        data: function(){
            return{
                imgX: require('../../../img/logo-01.svg')
            }
        }
    }
</script>

<style scoped>

</style>
