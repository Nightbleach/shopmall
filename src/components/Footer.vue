<template>
  <v-container fluid>
      <v-footer
        height="70px"
        app
        padless
        class="pink lighten-4"
      >
        <v-row
          justify="center"
          no-gutters
          v-for="item in footItems"
          :key="item.id"
        >
          <v-tooltip top>
            <template v-slot:activator="{on}">
              <v-btn
                class="mx-4 white--text"
                icon
                :to="item.path"
                v-on="on"
              >
                <v-icon size='24px' class="btnActive">{{ item.icon}}</v-icon>
<!--                <span>{{item.tooltip}}</span>-->
              </v-btn>
            </template>
            <span>{{item.tooltip}}</span>
          </v-tooltip>
        </v-row>
      </v-footer>
  </v-container>

</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      footItems: [
        { icon: 'far fa-home-lg-alt', path: '/', tooltip: 'Home' },
        { icon: 'far fa-layer-group', path: '/category', tooltip: 'Category' },
        { icon: 'far fa-cart-plus', path: '/cart', tooltip: 'Cart' },
        { icon: 'far fa-user-circle', path: '/profile', tooltip: 'Profile' }
      ]
    }
  }
}
</script>

<style scoped lang="stylus">
  .btnActive:hover
    color  aqua
</style>
