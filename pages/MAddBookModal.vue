<template lang="pug">
  el-dialog(title="カードを追加する" :width="width" :visible="visible" @update:visible="updateValue")
    .book.pb-200
      .mb-200.fs-300.fw-bold 本の内容
      el-row(:gutter="20")
        el-col.mb-200(:xs="24" :sm="12" :lg="12")
          .mb-100.fw-bold タイトル
          el-input(v-model="book.name")
        el-col.mb-200(:xs="24" :sm="12" :lg="12")
          .mb-100.fw-bold 説明
          el-input(v-model="book.description")
    .learning.pb-200
      .mb-200.fs-300.fw-bold 学び
      el-row(:gutter="20")
        el-col.mb-200(:xs="24" :sm="12" :lg="12")
          .mb-100.fw-bold 期待
          el-input(v-model="book.learning.expection")
        el-col.mb-200(:xs="24" :sm="12" :lg="12")
          .mb-100.fw-bold 結果
          el-input(v-model="book.learning.result")
    .goal.pb-200
      .mb-200.fs-300.fw-bold 目標
      el-row(:gutter="20")
        el-col.mb-200(:xs="24" :sm="12" :lg="12")
          .mb-100.fw-bold 指標
          el-input(v-model="book.goal.target")
        el-col.mb-200(:xs="24" :sm="12" :lg="12")
          .mb-100.fw-bold 目標
          el-input(v-model="book.goal.action")
      .mb-200
        .mb-100.fw-bold 進捗
      el-slider(v-model="book.goal.progress" :step="10")
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
  book: Book
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
  props: {
    width: String,
    visible: Boolean
  },
  data(): Data {
    return {
      book: {
        id: 99,
        name: 'aa',
        description: 'bb',
        learning: {
          expection: 'cc',
          result: 'dd'
        },
        goal: {
          target: 'ee',
          action: 'ff',
          progress: 10
        }
      }
    }
  },
  methods: {
    updateValue(value: boolean): void {
      this.$emit('update:visible', value)
    }
  }
})
</script>

<style lang="scss" scoped></style>
