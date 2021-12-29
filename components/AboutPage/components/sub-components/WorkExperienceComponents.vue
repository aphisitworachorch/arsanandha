<template>
  <div class="mainLanding">
    <section class="left-division">
      <h2 class="text-3xl pb-5 font-bold font-apFont">Photos at Workplaces</h2>
      <div class="flex flex-row">
        <div class="p-2.5" v-for="ix in imageProfile">
          <kinesis-container>
            <kinesis-element type="depth" :strength="20">
              <img class="w-52 h-52 rounded-2xl object-cover aspect-square" :src="ix" alt="1"/>
            </kinesis-element>
          </kinesis-container>
        </div>
      </div>
    </section>
    <section class="right-division">
      <div class="container pt-5 pl-2">
        <h3 class="font-apFont text-left text-lg pb-3 font-semibold">
          Work Experiences <br/>
        </h3>
        <div class="overflow-scroll scrollbar-hide" style="height: 455px;">
          <div class="container" v-for="work in workHis">
            <div class="container glassmorphism p-5 animate__animated animate__fadeInUp" :class="work.negative ? 'bg-black' : work.color">
              <img :src="work.img_logo" :alt="work.name" class="p-5 h-20"/>
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
  name: "WorkExperienceComponents",
  data: function(){
    return{
      imageProfile:[
        require('assets/images/workplace/IMG_20200629_154357.jpg'),
        require('assets/images/workplace/20200902_123558_0.jpg'),
        require('assets/images/workplace/IMG_1236.jpg'),
        require('assets/images/workplace/IMG_4051.jpg')
      ],
      workHis:[
        {
          "name":"Benchmark Electronics",
          "from":DateTime.local(2020,3,2,9,0,0).toISODate(),
          "to":DateTime.local(2020,6,30,18,0,0).toISODate(),
          "position":"Internship",
          "color":"bg-blue-900",
          "negative":false,
          "img_logo":"https://cdn2.hubspot.net/hub/4349773/hubfs/Benchmark_R_1CWhite.png?width=223&name=Benchmark_R_1CWhite.png",
          "white_fonts":true
        },
        {
          "name":"Bizpotential",
          "from":DateTime.local(2020,8,10,10,0,0).toISODate(),
          "to":DateTime.local(2020,11,5,9,0,0).toISODate(),
          "position":"PHP Web Developers",
          "color":"bg-orange-500",
          "negative":true,
          "img_logo":"https://www.bizpotential.com/images/logo_web_4.png",
          "white_fonts":true
        },
        {
          "name":"Korat.com",
          "from":DateTime.local(2020,11,17,9,0,0).toISODate(),
          "to":DateTime.local(2021,5,30,9,0,0).toISODate(),
          "position":"Fullstack Web Developers",
          "color":"bg-blue-300",
          "negative":false,
          "img_logo":"https://www.3samut.com/uploads/logo/default_logo_korat_gyzj29zt6816167343198782bd13597612b78534f6c648a111d3.png",
          "white_fonts":true
        },
        {
          "name":"ApplicationDD",
          "from":DateTime.local(2021,6,1,10,0,0).toISODate(),
          "to":DateTime.now().toISODate(),
          "position":"Backend Developers",
          "color":"bg-red-700",
          "negative":false,
          "img_logo":"https://www.applicationdd.com/img/logo_edit_b.png",
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