<template lang="pug">
.test-class
  .tag-item(v-for="tag in list" :key="tag.tag_name")
    strong {{ tag.tag_name }}
    .item(v-for="(item, index) in (tag.sublist || [])" :key="index")
      .text(v-if="item.type === 'text'") {{ item.title }}: {{ item.value }}
      .img(v-else-if="item.type === 'image'") {{ item.title }}：
        img(v-for="img in [item.value].flat()" :key="img" v-test-test="true" :src="img")
      .link(v-else-if="item.type === 'link'") {{ item.title }}：
        video(v-if="test" v-test-test="true" :src="item.value")
        a(v-else :href="item.value" target="_blank") {{item.value }}
</template>

<script lang="js">
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    list: {
      type: Array,
      default: () => []
    },
    test: {
      type: Boolean,
      default: true
    }
  }
})
</script>

<style lang="stylus" scoped>
.test-class
  font-size 12px
  word-wrap break-word
  color red
  .item
    padding-left 12px
    a
      color #4af
    video, img
      max-width 80%
</style>
