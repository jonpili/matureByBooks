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
                .book
                  el-row.mb-100
                    el-col(:span="8")
                      img.book-img(src="~assets/book.jpg")
                    el-col(:span="16")
                      .mx-100
                        .fs-400.fw-bold {{ books[0].name }}
                        .fs-100 {{ books[0].description }}
                .learning.mb-200
                  .fs-300
                   i.mr-100(class="el-icon-notebook-2")
                   span.fw-bold 学び
                  .fs-200
                    .action
                      span.fw-bold 期待：
                      span {{ books[0].learning.expection }}
                    .action
                      span.fw-bold 結果：
                      span {{ books[0].learning.result }}
                .goal
                  .fs-300
                   i.mr-100(class="el-icon-trophy")
                   span.fw-bold 目標
                  .fs-200
                    .target
                      span.fw-bold 指標：
                      span {{ books[0].goal.target }}
                    .action
                      span.fw-bold 行動：
                      span {{ books[0].goal.action }}
                    el-progress.mt-100(:percentage="books[0].goal.progress")
</template>

<script lang="ts">
import Vue from 'vue'
// import firebase from '~/plugins/firebase.js'

export default Vue.extend({
  data() {
    return {
      books: [
        {
          id: 1,
          name: 'リーン・スタートアップ',
          description:
            'シリコンバレーでいまや「常識」となった製品・サービス開発手法',
          learning: {
            expection: 'スタートアップでの開発方法',
            result: ''
          },
          goal: {
            target: '開発をどうすべきかを人に語れる',
            action: '本の内容を意識しながら個人開発',
            progress: 20
          }
        }
      ]
    }
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
.book-img {
  width: 100%;
}
</style>
