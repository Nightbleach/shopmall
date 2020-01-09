<template>
  <div>
    <div class="check-button" :class="{check: isChecked}">
      <img class="imgSize" src="~assets/img/110.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'CheckButton',
  props: {
    isChecked: {
      type: Boolean,
      default: true
    }
  }
}
</script>

<style scoped lang="stylus">
.imgSize
  width 28px
  height 35px
.check-button
  border-radius 50%
  border 2px solid #aaa
.check
  border-color #ff8198
  background-color #ff8198

</style>
