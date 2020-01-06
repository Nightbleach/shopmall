<template>
    <v-container fluid class="primary">
      <v-row no-gutters class="text-center">
        <v-col
          v-for="(item, index) in title"
          :key="item.id"
          :class="{active: index === currentIndex}"
          @click="tagClick(index)"
        >
          <span>{{item}}</span>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'tagItem',
  props: {
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
.active
  color:yellowgreen
</style>
