<template>
  <div class="mainLanding">
    <section class="left-division">
      <img class="imageProfile" :src="imageProfile" alt="Image Profile"/>
    </section>
    <section class="right-division">
      <img class="pt-2 pb-2" :src="logo.long" alt="arsanandha.xyz Logo"/>
      <div class="container">
        <h2 class="font-apFont font-bold text-left text-2xl">Arsanandha Aphisitworachorch</h2>
        <h3 class="font-apFont text-left text-xl">Backend Developer.</h3>
      </div>
      <hr class="custom-hr"/>
      <div class="container">
        <p class="font-apFont text-left text-lg font-semibold">
          Based on PHP / JS / TS / Go / Vue / Python <br/>
          Powered by Docker <br/>
          Floating in DigitalOcean , Azure <br/>
        </p>
        <br/>
        <p class="font-apFont text-left text-lg text-green-700">
          MBTI : INFJ <br/>
        </p>
        <br/>
        <p class="font-apFont text-left">
          <b class="text-lg">Projects</b> <br/>
          <p v-for="info in prjOnHands" class="text-sm">✨ {{ info }}<p> <br/>
        </p>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "IntroComponents",
  data: function(){
    return {
      imageProfile: 'https://avatars.githubusercontent.com/u/10544462?v=4',
      logo:{
        long: require('assets/images/logo/logo-ap-long.png')
      },
      prjOnHands:[
        "Social-related Project Management (NestJS / TypeScript / Docker / MinIO / ElasticSearch / Facebook Graph API / Instagram Graph API)",
        "Staff Management System (PHP (Laravel)/ Microsoft SQL Server)",
        "Photo Album Wizard Web Application (PHP (Laravel)/ Vue / MinIO)",
        "Check-in and Mini-Social Web Application (PHP (Laravel)/ Azure Cloud (Blob Storage / Web))",
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
  @apply object-cover xl:rounded-2xl lg:rounded-2xl sm:rounded-2xl 2xl:rounded-3xl rounded-2xl 2xl:w-5/12 2xl:mt-10 xl:w-5/12 xl:mt-10 lg:w-5/12 lg:mt-10 md:w-5/12 md:mt-9 sm:w-5/12 sm:mt-8 w-80 drop-shadow-lg origin-center rotate-6 hover:rotate-0
}

.custom-hr {
  @apply pb-2.5 pt-2.5
}
</style>
