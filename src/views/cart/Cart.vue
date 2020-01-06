<template>
  <div>
  <div>cart(Google)</div>
    <tag-item :title="title" @tagClick = 'tagClick'/>
    <products :product="product[currentType].list" />
    <v-btn @click ='loadMore' color="yellow">Load More</v-btn>
  </div>
</template>

<script>
import TagItem from './childCoponent/TagItem'
import Products from './childCoponent/Products'

import { getHomeGoods } from '../../network/home'

export default {
  name: 'Cart',
  components: {
    TagItem,
    Products
  },
  data () {
    return {
      title: ['kobe', 'Terry', 'Bryant', 'T-MAC'],
      product: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop'
    }
  },
  created () {
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    getHomeGoods (type) {
      const page = this.product[type].page + 1
      getHomeGoods(type, page).then(res => {
        this.product[type].list.push(...res.data.list)
        this.product[type].page += 1
      })
    },
    tagClick (index) {
      if (index === 0) {
        this.currentType = 'pop'
      } else if (index === 1) {
        this.currentType = 'new'
      } else {
        this.currentType = 'sell'
      }
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
    }
  }
}
</script>

<style scoped>

</style>
