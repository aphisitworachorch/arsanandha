<template>
    <div>
        <div class="center uk-container uk-padding-large">
          <div v-tilt="{speed: 500, perspective: 1450}">
            <img :src="myself">
          </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexT",
        metaInfo:{
            title:"ARSANANDHA"
        },
        data: () => {
            return{
                myself: "https://avatars.githubusercontent.com/aphisitworachorch"
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

    .center
        text-align: center
</style>
