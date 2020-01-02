<template>
<div class="wrapper" ref="wrapper" >
<!-- 因为better-scroll需要一个wrapper 且包裹一个content 所以要在div下面在写一个div 当做content
    而这个content 用来包裹slot， 这个slot里面就是home.Vue中需要用到scroll的内容
    -->
  <div class="content">
    <slot/>
  </div>
</div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'Scroll',
  // 我们要知道scroll的具体信息，所以我们要把这个变量保存起来
  data () {
    return {
      scroll: null
    }
  },
  props: {
    probeType: {
      type: Number,
      default: 0
    }
  },
  mounted () {
    // 想使用better-scroll 必须在mountd中创建这个BScroll实例对象
    // 1 创建BScroll对象
    this.scroll = new BScroll(this.$refs.wrapper, {
      /**
       * 但是 关于probeType这个实行
       * 为了提升性能，我们不建议直接把probeType直接写死在这里,因为有的人需要这个属性，
       * 而有的人不需要scroll的监听，如果都写在这里，会影响运算的性能
       * 所以我们把这个写在props里
       *
       */
      probeType: this.probeType,
      pullUpLoad: true,
      click: true,
      mouseWheel: true
    })
    // 2。监听滚动的位置
    this.scroll.on('scroll', position => {
      // console.log(position)
      this.$emit('showHideScroll', position)
    })

    // 3 上拉加载更多
    this.scroll.on('pullingUp', () => {
      // 这个事件也要发出去，因为不是这个组件需要加载更多， 而是homepage需要加载更多
      this.$emit('pullingUp')
    })
  },
  method: {
  //   scrollTo (x, y, time = 300) {
  //     this.scroll.scrollTo(x, y, time)
  //   }
    // 下面的代码是进一步封装finishPullUp方法 ---用到home.Vue里
    // finishPullUp () {
    //   this.scroll.finishPullUp()
    // }
  }
}
</script>

<style scoped>

</style>
