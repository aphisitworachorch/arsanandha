<template>
  <main class="mainLanding">
    <div class="items-center" v-if="!hidden">
      <h1 class="text-white text-3xl font-bibleFont text-center p-3">Bible Verse Show ✝️✨</h1>
      <select class="selectClass font-bibleFont" v-model="bibleData.bible" @change="getBibleBooks">
        <option class="font-bibleFont" value="null" disabled>
          เลือก Bible
        </option>
        <option class="font-bibleFont" v-for="bb in fetchData.bible" :value="bb.id">
          {{ bb['name']}}
        </option>
      </select>
      <select class="selectClass font-bibleFont" v-model="bibleData.book" @change="getBibleChapters">
        <option class="font-bibleFont" value="null" disabled>
          เลือก Books
        </option>
        <option class="font-bibleFont" v-for="bk in fetchData.books" :value="bk.id">
          {{ bk['name'] }}
        </option>
      </select>
      <select class="selectClass font-bibleFont" v-model="bibleData.chapter" @change="getBibleVerses">
        <option class="font-bibleFont" value="null" disabled>
          เลือก Chapter
        </option>
        <option class="font-bibleFont" v-for="ct in fetchData.chapters" :value="ct.id" v-if="ct.number != 'intro'">
          {{ ct['number'] }}
        </option>
      </select>
      <select class="selectClass font-bibleFont" v-model="bibleData.verse[0]">
        <option class="font-bibleFont" value="null" disabled>
          เลือก Verse
        </option>
        <option class="font-bibleFont" v-for="(vr,index) in fetchData.verses" :value="vr.id">
          {{ index+1 }}
        </option>
      </select>
      ถึง
      <select class="selectClass font-bibleFont" v-model="bibleData.verse[1]" @change="getBibleText">
        <option value="null" disabled>
          เลือก Verse
        </option>
        <option v-for="(vr,index) in fetchData.verses" :value="vr.id">
          {{ index+1 }}
        </option>
      </select>
      <button class="btn selectClass" v-if="bibleData.verse[1] != null" @click="hidden = true">
        ซ่อนตัวเลือก
      </button>
    </div>
    <br/>
    <div class="container p-20">
      <div class="container items-center text-6xl font-bold font-bibleFont leading-loose text-white">
        {{ bibleData.verseWord }}
      </div>
      <br/>
      <div class="container items-center text-4xl font-medium font-bibleFont leading-loose text-white">
        {{ bibleData.text['content'] }}
      </div>
    </div>
  </main>
</template>

<script>
export default {
  name: "BibleVerseComponents",
  data: function() {
    return {
      "bibleData":{
        "bible":null,
        "book":null,
        "chapter":null,
        "verse":[],
        "text":[],
        "verseWord":null,
      },
      "fetchData":{
        "bible":[],
        "books":[],
        "chapters":[],
        "verses":[]
      },
      hidden: false,
    }
  },
  created: function(){
    this.getBible();
  },
  methods: {
    getBible: async function() {
      this.fetchData.bible = await this.$axios.$get('https://api.scripture.api.bible/v1/bibles',{
        headers:{
          'api-key': '25aa3827dde9f6f3bdbceb2f6817918a'
        }
      }).then((body) => body.data);
    },
    getBibleBooks: async function(){
      this.fetchData.books = await this.$axios.$get(`https://api.scripture.api.bible/v1/bibles/${this.bibleData.bible}/books`,{
        headers:{
          'api-key': '25aa3827dde9f6f3bdbceb2f6817918a'
        }
      }).then((body) => body.data);
    },
    getBibleChapters: async function(){
      this.fetchData.chapters = await this.$axios.$get(`https://api.scripture.api.bible/v1/bibles/${this.bibleData.bible}/books/${this.bibleData.book}/chapters`,{
        headers:{
          'api-key': '25aa3827dde9f6f3bdbceb2f6817918a'
        }
      }).then((body) => body.data);
    },
    getBibleVerses: async function() {
      this.fetchData.verses = await this.$axios.$get(`https://api.scripture.api.bible/v1/bibles/${this.bibleData.bible}/chapters/${this.bibleData.chapter}/verses`,{
        headers:{
          'api-key': '25aa3827dde9f6f3bdbceb2f6817918a'
        }
      }).then((body) => body.data);
    },
    getBibleText: async function () {
      this.bibleData.text = await this.$axios.$get(`https://api.scripture.api.bible/v1/bibles/${this.bibleData.bible}/verses/${this.bibleData.verse.join("-")}?content-type=text&include-notes=false&include-titles=false&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false`,{
        headers:{
          'api-key': '25aa3827dde9f6f3bdbceb2f6817918a'
        }
      }).then((data) => data.data)
      console.log(this.bibleData.text);
      if (this.bibleData.verse.length > 1 && this.bibleData.verse[0] != this.bibleData.verse[1]) {
        this.bibleData.verseWord = `${this.bibleData.text.reference}-${this.bibleData.verse[1].split(".")[2]}`
      }else{
        this.bibleData.verseWord = `${this.bibleData.text.reference}`
      }

    }
  }
}
</script>

<style scoped>
@tailwind base;
@tailwind utilities;
@tailwind components;
@tailwind variants;

.mainLanding {
  @apply flex flex-col items-center p-5
}
body {
  @apply bg-black text-white
}
.selectClass{
  @apply bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-blue-500 focus:border-blue-500 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500
}
</style>
