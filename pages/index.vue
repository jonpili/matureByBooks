<template lang="pug">
  el-row.container
    el-col(:xs="24" :sm="21" :lg="18")
      el-container
        el-header
          h1 matureByBooks
          span 本からの学びを最大化するアプリ
        el-main
          el-row
            el-col(v-for="i in Array(5)" :key="i", :xs="24" :sm="12" :lg="6")
              el-card.card
                span(slot="header") リーン・スタートアップ
                div スタートアップの原則をまとめた本
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
    // firebase
    //   .firestore()
    //   .collection('books')
    //   .doc('book1')
    //   .get()
    //   .then((doc) => {
    //     console.log(doc.data())
    //   })
  }
})
</script>

<style>
.container {
  display: flex;
  justify-content: center;
}
.card {
  margin: 12px;
}
</style>
