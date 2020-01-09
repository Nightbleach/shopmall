<template>
  <v-container class="pink lighten-3 navBar" fluid>
    <v-row
      no-gutters
      justify="center"
    >
      <v-col
        cols="6"
      >
        <div class="text-center white--text">购物街({{cartLength}})</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'CartNav',
  computed: {
    cartLength () {
      return this.$store.state.cartList.length
    }
  }
}
</script>

<style scoped lang="stylus">
.navBar
  box-shadow 0 2px 1px rgba(100,100,100,.1)
</style>
