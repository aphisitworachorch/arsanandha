<template>
  <div class="container mx-auto">
    <div class="flex flex-row p-2">
      <div class="pl-2 pr-2">
        <input type="text" class="form-input rounded-lg" placeholder="Card Link"/>
      </div>
      <div class="pl-2 pr-2">
        <input type="text" class="form-input rounded-lg" placeholder="Card Name"/>
      </div>
      <div class="pl-2 pr-2">
        <input type="text" class="form-input rounded-lg" placeholder="Card Description"/>
      </div>
      <div class="pl-2 pr-2">
        <button class="btn bg-lime-400 pb-2.5 pt-2.5 pl-5 pr-5 rounded-xl hover:bg-lime-500">Add</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TextContainerArea",
  props: ['jiraCardId','jiraCardName','jiraCardDescription']
}
</script>

<style scoped>
@tailwind base;
@tailwind components;
@tailwind utilities;
@tailwind screens;

</style>
