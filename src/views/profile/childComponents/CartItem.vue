<template>
    <v-container>
      <v-card
        outlined
      >
        <div class="d-flex flex-no-wrap justify-space-between">
         <v-checkbox off-icon="fal fa-circle" on-icon="fal fa-check-circle" />
          <v-avatar
            class="ma-3"
            size="125"
            tile
          >
            <v-img :src="cartItemList.image"></v-img>
          </v-avatar>
          <div>
            <v-card-title
              class="subtitle-1"
              v-text="cartItemList.title"
            />
            <v-card-subtitle v-text="cartItemList.desc"/>
            <v-card-subtitle class="py-0 red--text">${{cartItemList.price}}</v-card-subtitle>
          </div>
        </div>
      </v-card>
    </v-container>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    cartItemList: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  data () {
    return {
      column: null
    }
  }
}
</script>

<style scoped>

</style>
