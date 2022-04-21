<template>
  <div class="mainLanding">
    <section class="left-logo">
      <div class="logo">
        <img :src="img.square" alt="arsanandha.xyz Logo" class="w-36 h-36 origin-center rotate-6"/>
      </div>
    </section>
    <br/>
    <section class="right-logo">
      <vue-typed-js :strings="typedText" class="big-text-landing" @onComplete="finishedTypeShow = true">
        <h1 class="big-text-landing typing"></h1>
      </vue-typed-js>
      <br/>
      <h4 v-if="finishedTypeShow" class="small-text-timer">
        <span v-if="dateInformation.remain.months !== 0">{{ dateInformation.remain.months }} Months </span> <br/>
        <span v-if="dateInformation.remain.days !== 0">{{ dateInformation.remain.days }} Days <br/></span>
        <span v-if="dateInformation.remain.hours !== 0">{{ dateInformation.remain.hours }} Hours <br/></span>
        <span v-if="dateInformation.remain.minutes !== 0">{{ dateInformation.remain.minutes }} Minutes</span>
      </h4>
      <br/>
      <p v-if="finishedTypeShow" class="font-apFont text-left font-light">(C) 2021 Arsanandha Aphisitworachorch (arsanandha.xyz)</p>
      <p v-if="finishedTypeShow" class="font-apFont text-left font-light">{{ caption }}</p>
    </section>
  </div>
</template>

<script>
import { VueTypedJs } from "vue-typed-js";
import { DateTime } from "luxon";

const openDate = DateTime.local(2022,6,1,9,0);
const nowDate = DateTime.now();
export default {
  name: "LandingSlideComponents",
  components:{
    VueTypedJs
  },
  props:['caption'],
  data: function(){
    return {
      img: {
        square: require('assets/images/logo/logo-ap.png'),
        long: require('assets/images/logo/logo-ap-long.png')
      },
      finishedTypeShow: false,
      dtx: DateTime,
      dateInformation:{
        date:openDate,
        remain:{
          months:"",
          days:"",
          hours:"",
          minutes:""
        }
      },
      typedText:[':)','see you at',`${openDate.setLocale('en-US').toLocaleString(DateTime.DATETIME_FULL)}`]
    }
  },
  methods:{
    birthDay: function(){
      let dateTG = openDate.diff(nowDate,["months", "days", "hours", "minutes"]);
      this.dateInformation.remain.months = dateTG.months;
      this.dateInformation.remain.days = dateTG.days;
      this.dateInformation.remain.hours = dateTG.hours.toPrecision(2);
      this.dateInformation.remain.minutes = dateTG.minutes.toPrecision(2);
    }
  },
  mounted() {
    this.birthDay();
  }
}
</script>

<style lang="postcss" scoped>

@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind variants;

.mainLanding {
  @apply h-screen w-screen flex flex-wrap items-center px-6 lg:px-32 text-white relative backdrop-brightness-50 backdrop-grayscale
}

.logo {
  @apply box-content xl:h-48 xl:w-96 lg:h-32 lg:w-80 md:h-16 md:w-72 sm:h-8 sm:w-64 invert
}

.left-logo {
  @apply w-full md:w-9/12 xl:w-8/12
}

.right-logo {
  @apply w-full md:w-3/12 xl:w-4/12 text-right
}

.big-text-landing {
  @apply text-3xl font-bold font-apFont text-left
}

.small-text-timer {
  @apply text-2xl font-medium text-left font-apFont
}
</style>
