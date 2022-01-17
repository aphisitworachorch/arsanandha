<template>
  <div class="mainLanding">
    <section class="left-division">
      <div class="sm:invisible md:visible lg:visible xl:visible 2xl:visible">
        <h2 class="text-3xl pb-5 pt-5 font-bold font-apFont">Extracurriculars</h2>
        <div class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner overflow-hidden">
            <div class="carousel-item p-2.5 max-w-96 max-h-96" v-for="(ix,index) in extraCPict" :class="index === 0 ? 'active' : ''">
              <img class="max-w-80 max-h-80 rounded-2xl object-cover aspect-square" :src="ix" :alt="index"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="right-division">
      <div class="container pt-5 pl-2">
        <h3 class="font-apFont text-left text-lg pb-3 font-semibold">
          Extracurriculars Activity <br/>
        </h3>
        <div class="overflow-scroll scrollbar-hide" style="height: 465px;">
          <div class="container" v-for="work in extraCHis">
            <div class="container glassmorphism p-5 animate__animated animate__fadeInUp" :class="work.negative ? 'bg-black' : work.color">
              <h2 class="font-apFont text-left text-xl font-bold" :class="work.negative || work.white_fonts ? 'text-white' : 'text-black'">
                {{ work.name }}
              </h2>
              <h3 class="font-apFont text-left text-lg" :class="work.negative || work.white_fonts ? 'text-white' : 'text-black'">
                {{ work.position }}
              </h3>
              <h4 class="font-apFont text-left text-lg" :class="work.negative || work.white_fonts ? 'text-white' : 'text-black'">
                From : {{ work.from }} / To : {{ work.to }}
              </h4>
            </div>
            <br/>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { DateTime } from "luxon";
export default {
  name: "ExtracurricularComponents",
  data: function(){
    return{
      extraCPict:[
        require('assets/images/extra-c/IMG_20190322_123631.jpg'),
        require('assets/images/extra-c/IMG_20190720_184441.jpg'),
        require('assets/images/extra-c/IMG_20191129_094843.jpg'),
      ],
      extraCHis:[
        {
          "name":"Sippanondha Camp 4-6",
          "from":DateTime.local(2019,3,12,9,0,0).toISODate(),
          "to":DateTime.local(2019,3,22,19,0,0).toISODate(),
          "position":"Public Relations",
          "color":"bg-blue-900",
          "negative":false,
          "white_fonts":true
        }
      ]
    }
  }
}
</script>

<style scoped>
@import "animate.css/animate.css";
@tailwind base;
@tailwind utilities;
@tailwind components;
@tailwind variants;

.mainLanding {
  @apply h-screen w-screen flex flex-wrap items-center px-6 lg:px-32 relative
}

.left-division {
  @apply w-full md:w-9/12 xl:w-8/12
}

.right-division {
  @apply w-full md:w-3/12 xl:w-4/12
}

.imageProfile {
  @apply object-cover xl:rounded-2xl lg:rounded-2xl sm:rounded-2xl 2xl:rounded-3xl rounded-2xl 2xl:w-5/12 2xl:mt-10 xl:w-5/12 xl:mt-10 lg:w-5/12 lg:mt-10 md:w-5/12 md:mt-9 sm:w-5/12 sm:mt-8
}

.custom-hr {
  @apply pb-2.5 pt-2.5
}
</style>
