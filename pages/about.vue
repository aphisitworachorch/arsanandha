<template>
  <AboutMain></AboutMain>
</template>

<script>
import AboutMain from "../components/AboutPage/AboutMain";
import {createSEOMeta} from "../constants/seo";
export default {
  name: "about",
  components: {AboutMain},
  head:{
    title:'arsanandha.xyz',
    meta:[
      ...createSEOMeta({
        author: "Arsanandha Aphisitworachorch",
        title: "About arsanandha.xyz",
        description: "{ showAboutMe: true }",
        image: require('assets/images/og/arsanandha.xyz-newstyle.png'),
        url: "https://arsanandha.xyz",
        cardType: "summary_large_image",
        twitterCreator: "@arsanandha",
        type: "website"
      })
    ]
  }
}
</script>

<style scoped>

</style>
