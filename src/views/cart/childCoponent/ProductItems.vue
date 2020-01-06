<template>
  <v-container>
    <v-card @click = itemClick>
      <img :src="productItems.show.img" alt="">
    </v-card>
  </v-container>

</template>

<script>
export default {
  name: 'ProductItems',
  props: {
    productItems: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  methods: {
    itemClick () {
      // console.log(this.productItems)
      this.$router.push('/cart/' + this.productItems.iid)
    }
  }
}
</script>

<style scoped>

</style>
