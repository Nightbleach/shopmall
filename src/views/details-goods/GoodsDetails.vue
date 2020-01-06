<template>
    <v-container class="pa-0" fluid>
      <detail-navbar/>
      <detail-carousel
        :topImages="topImages"
      />
      <detail-text
        :goods = goods
      />
    </v-container>
</template>
<script>
import DetailNavbar from './childCompons/DetailNavbar'
import DetailCarousel from './childCompons/DetailCarousel'
import DetailText from './childCompons/DetailText'

// import 网络请求
import { getDetails, Goods } from '../../network/details'

export default {
  name: 'GoodsDetails',
  components: {
    DetailNavbar,
    DetailCarousel,
    DetailText
  },
  data () {
    return {
      iid: null,
      topImages: null,
      goods: {}
    }
  },
  created () {
    this.iid = this.$route.params.iid
    // console.log(this.iid)
    getDetails(this.iid).then(res => {
      console.log(res)
      const data = res.result
      // 1 获取图片轮播数据
      this.topImages = data.itemInfo.topImages
      // console.log(res)
      // 2 获取商品数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
    })
  },
  methods: {
    // getDetails (iid) {
    //   getDetails().then(res => {
    //     console.log(res)
    //   })
    // }
  }
}
</script>

<style scoped>

</style>
