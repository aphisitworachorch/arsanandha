<template>
  <div class="scroll-smooth hover:scroll-auto">
    <IntroComponents></IntroComponents>
    <div class="items-center pb-2.5 pt-5"></div>
    <WorkExperienceComponents></WorkExperienceComponents>

  </div>
</template>

<script>
import WorkExperienceComponents from "./sub-components/WorkExperienceComponents";
import IntroComponents from "./sub-components/IntroComponents";
import ExtracurricularComponents from "./sub-components/ExtracurricularComponents";
export default {
  name: "AboutMainComponents",
  components: {ExtracurricularComponents, IntroComponents, WorkExperienceComponents}
}
</script>

<style scoped>


</style>
