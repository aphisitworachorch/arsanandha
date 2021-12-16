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
        require('assets/images/slider/slider-9-spn.jpg')
      ],
      photoCaption:[
        'Dormitory Committee (2018)',
        'Dormitory Committee (2018) (Photo Group)',
        'Photo with Sippanondha Camp Friends'
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
@tailwind screens;
html {
  scroll-behavior: smooth;
}
</style>
