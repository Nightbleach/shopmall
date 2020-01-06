<template>
    <v-container fluid>
      <v-row no-gutters>
        <v-col
          cols="6"
          v-for="item in product"
          :key="item.id"
        >
          <product-items :productItems = item />
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
import ProductItems from './ProductItems'
export default {
  name: 'Products',
  components: {
    ProductItems
  },
  props: {
    product: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped>

</style>
