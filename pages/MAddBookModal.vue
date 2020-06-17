<template lang="pug">
  el-dialog(title="カードを追加する" :width="width" :visible="visible" @update:visible="changeVisible")
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
    template(slot="footer")
      el-button(@click="changeVisible(false)") キャンセル
      el-button(@click="submit" type="primary") 送信
</template>

<script lang="ts">
import Vue from 'vue'

type Data = {
  book: Book
  initialBook: Book
}

type Book = {
  id: string
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
    width: {
      type: String,
      default: '50%'
    },
    visible: Boolean,
    id: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    },
    description: {
      type: String,
      default: ''
    },
    expection: {
      type: String,
      default: ''
    },
    result: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default: ''
    },
    progress: {
      type: Number,
      default: 0
    }
  },
  data(): Data {
    return {
      book: {
        id: this.id,
        name: this.name,
        description: this.description,
        learning: {
          expection: this.expection,
          result: this.result
        },
        goal: {
          target: this.target,
          action: this.action,
          progress: this.progress
        }
      },
      initialBook: {
        id: '',
        name: '',
        description: '',
        learning: {
          expection: '',
          result: ''
        },
        goal: {
          target: '',
          action: '',
          progress: 0
        }
      }
    }
  },
  methods: {
    changeVisible(value: boolean): void {
      this.$emit('update:visible', value)

      // TODO: モーダルを閉じる際にコンポーネントを破壊する事でリセットする
      this.book = this.initialBook
    },
    submit(): void {
      this.$emit('submit', this.book)
      this.changeVisible(false)
    }
  }
})
</script>

<style lang="scss" scoped></style>
