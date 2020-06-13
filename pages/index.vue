<template lang="pug">
  .container
    div
      logo
      h1.title matureByBooks
      h2.subtitle 本からの学びを最大化するアプリ
      .links
        a.button--green(href="https://nuxtjs.org/" target="_blank") Documentation
        a.button--grey(href="https://github.com/nuxt/nuxt.js" target="_blank") GitHub
</template>

<script lang="ts">
import Vue from 'vue'
import firebase from '~/plugins/firebase.js'
import Logo from '~/components/Logo.vue'

export default Vue.extend({
  components: {
    Logo
  },
  created() {
    firebase
      .firestore()
      .collection('books')
      .doc('book1')
      .get()
      .then((doc) => {
        console.log(doc.data())
      })
  }
})
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
