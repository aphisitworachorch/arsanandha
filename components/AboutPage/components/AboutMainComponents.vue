<template>
  <div class="scroll-smooth hover:scroll-auto">
    <IntroComponents></IntroComponents>
    <hr class="items-center pb-2.5 pt-2.5"/>
    <WorkExperienceComponents></WorkExperienceComponents>
  </div>
</template>

<script>
import WorkExperienceComponents from "./sub-components/WorkExperienceComponents";
import IntroComponents from "./sub-components/IntroComponents";
export default {
  name: "AboutMainComponents",
  components: {IntroComponents, WorkExperienceComponents}
}
</script>

<style scoped>


</style>
