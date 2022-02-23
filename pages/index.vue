<template>
  <div>
    <LandingComponents></LandingComponents>
  </div>
</template>

<script>
import LandingComponents from "../components/LandingPages/LandingComponents";
import {createSEOMeta} from "../constants/seo";
export default {
  components: {LandingComponents},
  head:{
    title:'arsanandha.xyz',
    meta:[
      ...createSEOMeta({
        author: "Arsanandha Aphisitworachorch",
        title: "arsanandha.xyz",
        description: "Just site. null",
        image: require('assets/images/og/headline.png'),
        url: "https://arsanandha.xyz",
        cardType: "summary_large_image",
        twitterCreator: "@arsanandha",
        type: "website"
      })
    ]
  }
}
</script>
