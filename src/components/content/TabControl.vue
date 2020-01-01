<template>
  <v-container fluid class="tag">
    <v-row no-gutters justify="space-around">
      <v-col
        v-for="(item,index) in title"
        :key="item.key"
        class="text-center "
        :class="{active:index === currentIndex}"
        @click="tagClick(index)"
      >
        <span class="pb-1">{{item}}</span>
      </v-col>

    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'TabControl',
  props: {
    // 这个props类似于子父组件传值，不同的 这个值 可以在父组件直接type上，而不是后端数据请求
    title: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      currentIndex: 0
    }
  },
  methods: {
    tagClick (index) {
      this.currentIndex = index
      this.$emit('tagClick', index)
    }
  }
}
</script>

<style scoped lang="stylus">
  .tag
    background-color #ffffff
  .active span
    border-bottom 2px solid palevioletred

</style>
