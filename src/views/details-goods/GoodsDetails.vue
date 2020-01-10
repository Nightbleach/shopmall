<template>
    <v-container class="pa-0" fluid>
      <detail-navbar class="detailsNav"/>
      <detail-carousel
        :topImages="topImages"
      />
      <detail-text
        :goods = goods
      />
      <div>{{$store.state.cartList.length}}</div>
      <shop-info :shopInfo = shopInfo />
      <img-details :dateInfo="dateInfo" :imageDetails="imageDetails"/>
      <goodsparams :itemParams="itemParams" />
      <product-footer @addCart="addCart"/>
    </v-container>
</template>
<script>
import DetailNavbar from './childCompons/DetailNavbar'
import DetailCarousel from './childCompons/DetailCarousel'
import DetailText from './childCompons/DetailText'
import ShopInfo from './childCompons/ShopInfo'
import ImgDetails from './childCompons/ImgDetails'
import Goodsparams from './childCompons/Goodsparams'
import ProductFooter from '../../components/content/ProductFooter'
// import 网络请求

import { getDetails, Goods, ShopInfoDetails, ItemParams } from '../../network/details'

export default {
  name: 'GoodsDetails',
  components: {
    DetailNavbar,
    DetailCarousel,
    DetailText,
    ShopInfo,
    ImgDetails,
    Goodsparams,
    ProductFooter
  },
  data () {
    return {
      iid: null,
      topImages: null,
      goods: {},
      shopInfo: {},
      imageDetails: {},
      dateInfo: {},
      itemParams: {}
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
      this.imageDetails = data.detailInfo
      this.dateInfo = data.rate
      this.itemParams = new ItemParams(data.itemParams.info)
      // this.itemParams = data.itemParams
      // console.log(this.imageDetails)
      // console.log(res)
      // 2 获取商品数据
      this.goods = new Goods(data.itemInfo, data.columns, data.shopInfo.services)
      this.shopInfo = new ShopInfoDetails(data.shopInfo)
      // this.imgInfo = new ImgInfo(data.detailInfo)
    })
  },
  methods: {
    addCart () {
      // 1. 获取购物车需要展示的数据
      const product = {}
      product.image = this.topImages[0]
      product.title = this.goods.title
      product.desc = this.goods.desc
      product.price = this.goods.price
      product.iid = this.iid
      product.price = this.goods.realPrice
      // 2. 将商品添加到购物车里
      // this.$store.commit('addCart', product)
      this.$store.dispatch('addCart', product).then(res => {
        this.$toasted.show('已经添加到购物车', {
          position: 'top-center',
          duration: 2000,
          // onComplete () {
          //   // console.log('1231234')
          //   this.$router.push('/')
          // }
          action: {
            text: 'Undo',
            push: {
              name: 'profile',
              dontClose: true
            }
          }
        })
      })

      // 3 添加购物车成功 并出现一个弹窗 因为上面的dispatch会返回一个promise
    }
  }
}
</script>

<style scoped lang="stylus">
.detailsNav
  position fixed
  top 0
  z-index 9
</style>
