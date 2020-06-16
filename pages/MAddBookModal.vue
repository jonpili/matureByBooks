<template lang="pug">
  el-dialog(title="カードを追加する" :visible="visible" @update:visible="updateValue" :before-close="handleClose")
    .book
    .learning
    .goal
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    visible: Boolean
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
