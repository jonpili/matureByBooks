<template lang="pug">
  el-dialog(title="カードを追加する" :width="width" :visible="visible" @update:visible="updateValue" :before-close="handleClose")
    .book.pb-200
      .mb-200.fs-300.fw-bold 本の内容
      .mb-200
        .mb-100.fw-bold タイトル
        el-input(v-model="book.name")
      .mb-200
        .mb-100.fw-bold 説明
        el-input(v-model="book.description")
    .learning.pb-200
      .mb-200.fs-300.fw-bold 学び
      .mb-200
        .mb-100.fw-bold 期待
        el-input(v-model="book.learning.expection")
      .mb-200
        .mb-100.fw-bold 結果
        el-input(v-model="book.learning.result")
    .goal.pb-200
      .mb-200.fs-300.fw-bold 目標
      .mb-200
        .mb-100.fw-bold 指標
        el-input(v-model="book.goal.target")
      .mb-200
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
    },
    handleClose(done: () => void) {
      this.$confirm('入力画面を閉じても宜しいですか？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    }
  }
})
</script>

<style lang="scss" scoped></style>
