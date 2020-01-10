<template>
    <v-container fluid class="countBar grey" >
     <v-row align-content="center" no-gutters >
       <v-col cols="1">
         <check-button @click.native="checkClick" :is-checked="selectAll" class="checkBtn"/>
       </v-col>
       <v-col><span>全选</span></v-col>
       <v-col><span>商品总价格：{{getSumPrice}}</span>
       </v-col>
       <v-col class="text-center">
         <span>去计算: {{totalQuantity}}</span>
       </v-col>
     </v-row>
    </v-container>
</template>

<script>
import CheckButton from './CheckButton'
export default {
  name: 'CartCountBar',
  components: {
    CheckButton
  },
  computed: {
    getSumPrice () {
      return '$' + this.$store.state.cartList.filter(item => {
        return item.checked
      }).reduce((preValue, item) => {
        return preValue + item.price * item.count
      }, 0)
    },
    totalQuantity () {
      return this.$store.state.cartList.filter(item => item.checked).length
      // return this.$store.state.cartList.filter(item => {
      //   return (item.checked).length
      // })
    },
    selectAll () {
      if (this.$store.state.cartList.length === 0) return false
      return !this.$store.state.cartList.find(item => !item.checked)
    }
  },
  methods: {
    checkClick () {
      // if (this.selectAll) { // 全部选中
      //   this.$store.state.cartList.forEach(item => item.checked = false)
      // } else {
      //   this.$store.state.cartList.forEach(item => item.checked = true)
      // }
      if (this.selectAll) {
        this.$store.state.cartList.forEach(item => {
          item.checked = false
        })
      } else {
        this.$store.state.cartList.forEach(item => {
          item.checked = true
        })
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.countBar
  position fixed
  bottom 90px
  z-index 99
  height 50px
  .checkBtn
    width 25px
    height: 25px
</style>
