<template>
  <v-container fluid>
    <cart-nav/>
    <cart-list/>
    <cart-count-bar/>
    <Footer/>
  </v-container>
</template>

<script>
import Footer from '../../components/Footer'
import CartNav from './childComponents/CartNav'
import CartList from './childComponents/CartList'
import CartCountBar from './childComponents/CartCountBar'
export default {
  name: 'Profile',
  components: {
    Footer,
    CartNav,
    CartList,
    CartCountBar
  }
}
</script>

<style scoped>

</style>
