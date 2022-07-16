<template>
  <div class="bg-black" style="height: 1000vh;">
    <BibleVerseComponents></BibleVerseComponents>
  </div>

</template>

<script>
import BibleVerseComponents from "@/components/BibleVerse/BibleVerseComponents";
import {createSEOMeta} from "@/constants/seo";
export default {
  name: "verse",
  components: {BibleVerseComponents},
  head:{
    title:'Bible Verse Show ✝️✨',
    meta:[
      ...createSEOMeta({
        author: "Arsanandha Aphisitworachorch",
        title: "Bible Verse Show ✝️✨",
        description: "This site for Bible Verse Show.",
        image: 'https://images.unsplash.com/photo-1600038734220-7e3c079bf982?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80',
        url: "https://arsanandha.xyz/bible/verse",
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
