<template>
    <v-container class="pa-0" fluid>
      <detail-navbar/>
      <detail-carousel
        :topImages="topImages"
      />
    </v-container>
</template>
<script>
import DetailNavbar from './childCompons/DetailNavbar'
import DetailCarousel from './childCompons/DetailCarousel'

// import 网络请求
import { getDetails } from '../../network/details'

export default {
  name: 'GoodsDetails',
  components: {
    DetailNavbar,
    DetailCarousel
  },
  data () {
    return {
      iid: null,
      topImages: null
    }
  },
  created () {
    this.iid = this.$route.params.iid
    // console.log(this.iid)
    getDetails(this.iid).then(res => {
      this.topImages = res.result.itemInfo.topImages
      // console.log(res)
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
