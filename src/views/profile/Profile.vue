<template>
  <v-container fluid>
    <cart-nav/>
    <cart-list/>
    <Footer/>
  </v-container>
</template>

<script>
import Footer from '../../components/Footer'
import CartNav from './childComponents/CartNav'
import CartList from './childComponents/CartList'
export default {
  name: 'Profile',
  components: {
    Footer,
    CartNav,
    CartList
  }
}
</script>

<style scoped>

</style>
