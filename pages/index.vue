<template lang="pug">
  el-row.container
    el-col(:xs="24" :sm="21" :lg="18")
      el-container
        el-header
          h1 matureByBooks
          span 本からの学びを最大化するアプリ
        el-main
          el-row(:gutter="12")
            el-col(v-for="i in Array(5)" :key="i", :xs="24" :sm="12" :lg="6")
              el-card.mb-200
                el-row.mb-100
                  el-col(:span="8")
                    img.book-img(src="~assets/book.jpg")
                  el-col(:span="16")
                    .mx-100
                      h3 リーン・スタートアップ
                      div スタートアップの原則をまとめた本
                div 学び：原則を知れる
                div 目標：個人開発に応用する
</template>

<script lang="ts">
import Vue from 'vue'
// import firebase from '~/plugins/firebase.js'

export default Vue.extend({
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
.book-img {
  width: 100%;
}
</style>
