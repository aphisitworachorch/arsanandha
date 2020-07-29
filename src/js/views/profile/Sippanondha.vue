<template>
  <div>
    <div class="uk-container-large uk-align-center">
      <h3 style="text-align: center">Sippanondha Camp</h3>
      <div v-tilt="{speed: 500, perspective: 1200}">
        <img class="uk-align-center" width="65%" :src="spnImage"/>
      </div>
      <p style="text-align: center">I'm Public Relations / Graphic Designer / Video Editor / Volunteer 💘💘</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sippanondha",
  metaInfo:{
    title:"Sippanondha"
  },
  data:()=>{
    return{
      spnImage: require('../../../../img/activities/SIPPANONDHA.jpg'),
    }
  }
}
</script>

<style scoped>

</style>
