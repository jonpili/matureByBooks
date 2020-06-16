<template lang="pug">
  el-dialog(:visible="visible" @update:visible="updateValue")
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
    }
  }
})
</script>

<style lang="scss" scoped></style>
