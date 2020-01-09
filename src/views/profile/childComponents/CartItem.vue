<template>
    <v-container>
      <v-card
        outlined
      >
        <div class="d-flex flex-no-wrap justify-space-between">
          <div class="item-selector">
            <check-button :is-checked="cartItemList.checked"  @click.native="checkClick"/>
          </div>

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
import CheckButton from './CheckButton'
export default {
  name: 'CartItem',
  components: {
    CheckButton
  },
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
  },
  methods: {
    checkClick () {
      this.cartItemList.checked = !this.cartItemList.checked
    }
  }
}
</script>

<style scoped lang="stylus">
  .item-selector
    width 28px
    height 35px
    display flex
    justify-content center
    align-content center
</style>
