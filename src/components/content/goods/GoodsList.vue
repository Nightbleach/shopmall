<template>
<v-container fluid>
  <v-row class="ma-0">
    <v-col
      cols="6"
      class="pa-0"
      v-for="item in goods"
      :key="item.id"
    >
      <goods-list-item
        :goods-item="item"
      />
    </v-col>
  </v-row>
</v-container>
</template>

<script>
import GoodsListItem from './GoodsListItem'
export default {
  name: 'GoodsList',
  components: {
    GoodsListItem
  },
  props: {
    goods: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
