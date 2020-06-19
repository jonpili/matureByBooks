<template lang="pug">
  el-card(:body-style="{ padding: '12px' }")
    .header.mb-100
      .fs-300.fw-bold {{ book.name }}
      el-button(@click="openEditBookModal" icon="el-icon-edit" circle)
    .book
      el-row
        el-col(:span="8")
          img.book-img(src="~assets/book.jpg")
        el-col(:span="16")
          .px-100
            .fs-100 {{ book.description }}
    .learning.mb-100
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

export default Vue.extend({
  props: {
    book: {
      type: Object,
      required: true
    }
  },
  methods: {
    openEditBookModal() {
      this.$emit('edit', this.book)
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.book-img {
  width: 100%;
}
</style>
