<template>
    <div>
        <div style="text-align: center">
            <iframe :src="imgX"/>
        </div>
    </div>
</template>

<script>
    export default {
        name: "IndexTwentyFour",
        data: function(){
            return{
                imgX: require('../../../../img/weblogo-02.svg')
            }
        }
    }
</script>

<style scoped>

</style>
