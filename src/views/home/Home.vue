<template>
  <div class="home">
    <Navbar/>
    <Scroll
      class="homeContent"
      ref="Scroll"
      :probe-type="3"
      @showHideScroll="showAndHide"
      @pullingUp = 'loadMore'
    >
      <Carousel
        :banner = banner
      >
      </Carousel>
      <Avatars :recommend = recommend />
      <feature-view/>
      <tab-control
        class="tagControl"
        :title="['流行', '新款', '精选']"
        @tagClick="tagClick"
      />
      <goods-list :goods="goods[currentType].list"/>
    </Scroll>
    <back-top @click.native="backTop" v-show="isShowBackTop" />
  </div>
</template>

<script>
// @ is an alias to /src
// 这里假如{} 包装getHomeMultidata的原因是 home.js 导出的不是export default,
// 如果是default 则不需要大括号包裹
import { getHomeMultidata, getHomeGoods } from '../../network/home'
import Navbar from '../../components/Navbar'
import Carousel from './chileComponents/Carousel'
import Avatars from './chileComponents/Avatars'
import FeatureView from './chileComponents/FeatureView'
import TabControl from '../../components/content/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/content/scroll/Scroll'
import BackTop from 'components/content/backTop/BackTop'
export default {
  name: 'home',
  data () {
    return {
      // 设定从数据请求中banner的数据
      banner: [],
      recommend: [],
      // 这个是请求 流行， 新款， 精选的大数据 总体设置一个数据集，分三个部分
      goods: {
        'pop': { page: 0, list: [] },
        'new': { page: 0, list: [] },
        'sell': { page: 0, list: [] }
      },
      currentType: 'pop',
      isShowBackTop: false
    }
  },
  components: {
    Navbar,
    Carousel,
    Avatars,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  created () {
    /*
    * 为了更规范created中网络请求方法的规范性
    * 最好把所有网络请求的代码在封装到methods中
    * 让created中不用掺杂逻辑性的代码，工作上也是这么封装的
    * ------有助于代码的管理及美观
    * */
    this.getHomeMultidata() // 这样的代码很优雅 不是吗
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')
  },
  methods: {
    /* 事件监听基本方法 */
    // 这个方法中必须传入一个index 来获取用户点击的是哪一个index
    tagClick (index) {
      // console.log(index)
      // switch (index) {
      //   case 0 :
      //     this.currentType = 'pop'
      //     break
      //   case 1:
      //     this.currentType = 'new'
      //     break
      //   case 2:
      //     this.currentType = 'sell'
      //     break
      // }
      if (index === 0) {
        this.currentType = 'pop'
      } else if (index === 1) {
        this.currentType = 'new'
      } else {
        this.currentType = 'sell'
      }
    },
    backTop () {
    //  我们通过Scroll属性加上一个ref ,来获取子组件组件元素
      this.$refs.Scroll.scroll.scrollTo(0, 0, 500)
      // 另外，为了极致的组件封装开发，我们还可以改成
      // this.$ref.scroll.scrollTo(0, 0)
    },
    showAndHide (position) {
      // console.log(position)
      this.isShowBackTop = -position.y > 600
    },
    loadMore () {
      this.getHomeGoods(this.currentType)
      /* ---------------有待理解-------------- */
      this.$refs.Scroll.scroll.refresh()
      /* ---------------有待理解-------------- */
    },
    /* 网络请求方法 */
    getHomeMultidata () {
      getHomeMultidata().then(res => {
        // 这个res需要保存在data里， 否则函数调用栈数据在执行完以后会自动清除
        // console.log(res)
        this.banner = res.data.banner.list
        this.recommend = res.data.recommend.list
      })
    },
    getHomeGoods (type) {
      // 获取page信息，是为了用户下拉鼠标获取新的更新数据
      const page = this.goods[ type ].page + 1
      getHomeGoods(type, page).then(res => {
        // 因为我们有下拉加载更多数据的功能，所以用扩展运算符会比较好 跟concat() 比起来
        // 用扩展运算符... 把后端数据push到goods[type].list中
        this.goods[type].list.push(...res.data.list)
        // 加载完新的数据，需要我们把已加载的页码加上
        this.goods[type].page += 1
        /*
        *因为使用了better-scroll加载更多的方法，
        * 为了我们在使用第二次加载更多还需要调用他的一个方法
        * 来表示可以在使用加载更多
        * */
        // this.$refs.Scroll.finishPullUp()
        this.$refs.Scroll.scroll.finishPullUp()
      })
    }
  }
}
</script>
<style scoped lang="stylus">
  // 此方法是让tagbar固定住， 当用户下拉屏幕的时候
  .tagControl
    position sticky
    top 0
    z-index 9
  .homeContent
    height 300px
</style>
