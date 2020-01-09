<template>
  <v-container>
    <v-footer padless fixed height="49px">
      <v-row justify="space-around" no-gutters>
        <v-btn depressed large>
          <v-icon>fal fa-user-md-chat</v-icon>
          客服
        </v-btn>
        <v-btn depressed large>
          <v-icon>fal fa-store</v-icon>
          客服
        </v-btn>
        <v-btn depressed large>
          <v-icon>fal fa-star</v-icon>
          客服
        </v-btn>
        <v-btn @click="addCart" depressed  class="yellow lighten-1" large>
          加入购物车
        </v-btn>
        <v-btn depressed class="pink lighten-2" large>
          购买
        </v-btn>
      </v-row>
    </v-footer>
  </v-container>
</template>

<script>
export default {
  name: 'ProductFooter',
  data () {
    return {
      footerInfo: [
        { icon: 'fal fa-user-md-chat', name: '客服' },
        { icon: 'fal fa-store', name: '店铺' },
        { icon: 'fal fa-star', name: '客服' },
        { name: '加入购物车' },
        { name: '购买' }
      ]
    }
  },
  methods: {
    addCart () {
      this.$emit('addCart')
    }
  }
}
</script>

<style scoped>

</style>
