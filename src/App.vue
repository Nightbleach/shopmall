<template>
  <v-app>
<!--    <v-app-bar-->
<!--      app-->
<!--      color="#147EC7"-->
<!--      class="appBarText"-->
<!--      dark-->
<!--    >-->
<!--      <div class="d-flex align-center">-->
<!--        <v-img-->
<!--          alt="Vuetify Logo"-->
<!--          class="shrink mr-2"-->
<!--          contain-->
<!--          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"-->
<!--          transition="scale-transition"-->
<!--          width="40"-->
<!--        />-->
<!--        <h1 class="appBarText">Mall</h1>-->
<!--        <v-icon dark>fal fa-cart-plus</v-icon>-->
<!--      </div>-->
<!--      <v-spacer/>-->
<!--    </v-app-bar>-->
    <v-content height="1000">
      <keep-alive>
        <router-view/>
      </keep-alive>
    </v-content>
    <Footer/>
  </v-app>
</template>

<script>
import Footer from './components/Footer'

export default {
  name: 'App',

  components: {
    Footer
  },

  data: () => ({
    //
  })
}
</script>

<style lang="stylus" scoped>
  @import "assets/css/base.css";
  .appBarText
    color #F9F170
</style>
