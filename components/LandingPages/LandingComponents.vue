<template>
  <div>
    <main :style="{ backgroundImage: `url(${photoRandom().image})`, objectFit: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'auto 175%' }">
      <LandingSlideComponents :caption="photoRandom().caption"></LandingSlideComponents>
    </main>
  </div>
</template>

<script>

import LandingSlideComponents from "./sideslide/LandingSlideComponents";
export default {
  name: "LandingComponents",
  components: {LandingSlideComponents},
  data: function(){
    return {
      finishedTypeShow: false,
      imageSet:[
        require('assets/images/slider/gif-1-act.gif'),
        require('assets/images/slider/slider-7-act.jpg'),
        require('assets/images/slider/slider-9-spn.jpg'),
        require('assets/images/slider/slider-12-coop.jpg'),
        require('assets/images/workplace/IMG_4051.jpg')
      ],
      photoCaption:[
        'Dormitory Committee (2018)',
        'Dormitory Committee (2018) (Photo Group)',
        'Photo with Sippanondha Camp Friends (2017)',
        'Co-operative Education with Friends and Employee (2020)',
        'Photo with Friends at (Waan ^ D) with ApplicationDD Friends (2021)'
      ],
      randomPosition:null
    }
  },
  methods: {
    photoRandom: function(){
      this.randomPosition = Math.floor(Math.random()*this.imageSet.length);
      return {
        image: this.imageSet[this.randomPosition],
        caption: this.photoCaption[this.randomPosition]
      };
    }
  }
}
</script>

<style lang="postcss" scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;
html {
  scroll-behavior: smooth;
}
</style>
