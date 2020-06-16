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
              m-card.mb-200(:book="book")
</template>

<script lang="ts">
import Vue from 'vue'
import db from '~/plugins/firebase.js'
import MCard from '~/pages/MCard.vue'

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
  components: {
    MCard
  },
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
</style>
