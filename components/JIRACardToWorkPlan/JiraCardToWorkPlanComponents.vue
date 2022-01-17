<template>
  <div class="w-full">
    <div class="container mx-auto content-center" v-for="wp in workplanPrototype">
      <TextContainerArea></TextContainerArea>
    </div>
  </div>
</template>

<script>
import TextContainerArea from "./InputArea/TextContainerArea";
export default {
  name: "JiraCardToWorkPlanComponents",
  components: {TextContainerArea},
  data: function (){
    return {
      workplanPrototype: [
        {
          card_id: null,
          card_name: null,
          description: null,
        }
      ],
      formattedText: null
    }
  },
  methods:{

  }
}
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind screens;

</style>
