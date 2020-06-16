<template lang="pug">
  el-row.container
    el-col(:xs="24" :sm="21" :lg="18")
      el-container
        el-header.pt-200
          el-card(:body-style="{ padding: '6px' }")
            .fs-300.fw-bold matureByBooks
            .fs-100 本からの学びを最大化するアプリ
        el-main
          el-row(:gutter="12")
            el-col(v-for="book in books" :key="book.id", :xs="24" :sm="12" :lg="6")
              el-card.mb-200
                .book
                  el-row.mb-100
                    el-col(:span="8")
                      img.book-img(src="~assets/book.jpg")
                    el-col(:span="16")
                      .mx-100
                        .fs-400.fw-bold {{ book.name }}
                        .fs-100 {{ book.description }}
                .learning.mb-200
                  .fs-300
                   i.mr-100(class="el-icon-notebook-2")
                   span.fw-bold 学び
                  .fs-200
                    .action
                      span.fw-bold 期待：
                      span {{ book.learning.expection }}
                    .action
                      span.fw-bold 結果：
                      span {{ book.learning.result }}
                .goal
                  .fs-300
                   i.mr-100(class="el-icon-trophy")
                   span.fw-bold 目標
                  .fs-200
                    .target
                      span.fw-bold 指標：
                      span {{ book.goal.target }}
                    .action
                      span.fw-bold 行動：
                      span {{ book.goal.action }}
                    el-progress.mt-100(:percentage="book.goal.progress")
</template>

<script lang="ts">
import Vue from 'vue'
import db from '~/plugins/firebase.js'

type Data = {
  books: Array<Books>
}

type Books = {
  id: number
  name: string
  description: string
  learning: {
    expection: string
    result: string
  }
  goal: {
    target: string
    action: string
    progress: number
  }
}

export default Vue.extend({
  data(): Data {
    return {
      books: []
    }
  },
  firestore() {
    return {
      books: db.collection('books')
    }
  }
})
</script>

<style>
.container {
  display: flex;
  justify-content: center;
  background-image: url('~assets/background.jpg');
  background-size: 100%;
}
.book-img {
  width: 100%;
}
</style>
