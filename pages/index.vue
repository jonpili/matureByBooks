<template lang="pug">
  el-row.container
    el-col(:xs="24" :sm="21" :lg="18")
      .px-200.py-200
        .header.mb-200
          el-card(:body-style="{ padding: '12px' }")
            el-row
              el-col.title(:xs="24" :sm="12" :lg="12")
                .fs-300.fw-bold matureByBooks
                .fs-100 本からの学びを最大化するアプリ
              el-col.menu(:xs="24" :sm="12" :lg="12")
                el-button.my-50(@click="openAddBookModal = true" icon="el-icon-plus" circle)
        .main
          el-row(:gutter="12")
            el-col.mb-200(v-for="book in books" :key="book.id", :xs="24" :sm="12" :lg="6")
              m-card(:book="book")
    m-add-book-modal(v-if="$mq === 'xs'" width="90%" :visible.sync="openAddBookModal" :id="this.books.length + 1" @submit="submit")
    m-add-book-modal(v-else-if="$mq === 'sm'" width="70%" :visible.sync="openAddBookModal" :id="this.books.length + 1" @submit="submit")
    m-add-book-modal(v-else-if="$mq === 'lg'" width="50%" :visible.sync="openAddBookModal" :id="this.books.length + 1" @submit="submit")
</template>

<script lang="ts">
import Vue from 'vue'
import db from '~/plugins/firebase.js'
import MCard from '~/pages/MCard.vue'
import MAddBookModal from '~/pages/MAddBookModal.vue'

type Data = {
  books: Array<Book>
  openAddBookModal: boolean
}

type Book = {
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
    MCard,
    MAddBookModal
  },
  data(): Data {
    return {
      books: [],
      openAddBookModal: false
    }
  },
  methods: {
    submit(newBook: Book) {
      db.collection('books')
        .add(newBook)
        .then(() => {
          this.$message({
            message: 'カードが追加されました',
            type: 'success',
            center: true
          })
        })
        .catch((e) => {
          // eslint-disable-next-line no-console
          console.log(e)
          this.$message({
            message: 'カードの追加に失敗しました',
            type: 'error',
            center: true
          })
        })
    }
  },
  firestore() {
    return {
      books: db.collection('books')
    }
  }
})
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  background-image: url('~assets/background.jpg');
  background-size: 100%;
  .header {
    .menu {
      display: flex;
      flex-direction: row-reverse;
    }
  }
}
.message {
  width: 240px;
}
</style>
