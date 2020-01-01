<template>
<v-card flat class="mx-auto ma-1" max-width="320">
  <img :src="goodsItem.show.img" alt="">
  <v-card-subtitle class="py-0">{{goodsItem.title}}</v-card-subtitle>
  <v-card-text class="text-center">
      <span class="pink--text">${{goodsItem.price}}
        <v-icon color="pink" small>fal fa-star</v-icon>
      </span>
      <span>{{goodsItem.cfav}}</span>
  </v-card-text>
</v-card>
</template>

<script>
export default {
  name: 'GoodsListItem',
  props: {
    goodsItem: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
