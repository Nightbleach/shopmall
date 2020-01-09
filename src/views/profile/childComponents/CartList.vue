<template>
  <v-container>
    <v-row>
      <v-col>
        <cart-item v-for="item in cartList" :key="item.id" :cartItemList=item />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CartItem from './CartItem'
export default {
  name: 'CartList',
  components: {
    CartItem
  },
  data () {
    return {
      cartList: this.$store.state.cartList
    }
  }
}
</script>

<style scoped>

</style>
