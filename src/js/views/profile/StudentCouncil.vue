<template>
  <div>
    <div class="uk-container-large uk-align-center">
      <h3 style="text-align: center">Student Council of SUT 62</h3>
      <div v-tilt="{speed: 500, perspective: 1200}">
        <img class="uk-align-center" width="65%" :src="sapaImage"/>
      </div>
      <p style="text-align: center">I'm Public Relations / Graphic Designer / Web Programmer</p>
    </div>
  </div>
</template>

<script>
    export default {
        name: "StudentCouncil",
        metaInfo:{
            title:"SUT Student Council"
        },
        data:()=>{
          return{
            sapaImage: require('../../../../img/activities/SUTSAPA.jpg'),
          }
        }
    }
</script>

<style scoped>

</style>
