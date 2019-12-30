<template>
  <div class="home">
    <Navbar/>
    <Carousel
      :banner = banner
    >
    </Carousel>
    <Avatars :recommend = recommend />
  </div>
</template>

<script>
// @ is an alias to /src
// 这里假如{} 包装getHomeMultidata的原因是 home.js 导出的不是export default,
// 如果是default 则不需要大括号包裹
import { getHomeMultidata } from '../../network/home'
import Navbar from '../../components/Navbar'
import Carousel from './chileComponents/Carousel'
import Avatars from './chileComponents/Avatars'
export default {
  name: 'home',
  data () {
    return {
      // 设定从数据请求中banner的数据
      banner: [],
      recommend: []
    }
  },
  components: {
    Navbar,
    Carousel,
    Avatars
  },
  created () {
    getHomeMultidata().then(res => {
      // 这个res需要保存在data里， 否则函数调用栈数据在执行完以后会自动清除
      // console.log(res)
      this.banner = res.data.banner.list
      this.recommend = res.data.recommend.list
    })
  }
}
</script>
