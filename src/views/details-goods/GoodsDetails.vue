<template>
    <v-container class="pa-0">
      <detail-navbar/>
    </v-container>
</template>

<script>
import DetailNavbar from './childCompons/DetailNavbar'
export default {
  name: 'GoodsDetails',
  components: {
    DetailNavbar
  },
  data () {
    return {
      iid: null
    }
  },
  created () {
    this.iid = this.$route.params.iid
  }
}
</script>

<style scoped>

</style>
