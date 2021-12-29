<template>
  <main class="container">
    <AboutMainComponents></AboutMainComponents>
  </main>
</template>

<script>
import AboutMainComponents from "./components/AboutMainComponents";
export default {
  name: "AboutMain",
  components: {AboutMainComponents}
}
</script>

<style scoped>
@tailwind base;
@tailwind utilities;
@tailwind components;
@tailwind variants;

</style>
