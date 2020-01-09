import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cartList: []
  },
  mutations: {
    // mutations 唯一的目的就是修改state中状态
    // mutations中的每一个方法尽可能完成的事情比较单一一些
    // 有判断逻辑 最好也不要放到mutation里面
    // addCart (state, payload) {
    //   // payload是一个数据的参数
    //   // 我们需要判断 已经添加的商品是否已经在cartList里面了，如果已经在了 就允许添加了
    //   // let oldProduct = null
    //   // for (let item of state.cartList){
    //   //   if (item.iid === payload.iid) {
    //   //     oldProduct = item
    //   //   }
    //   // }
    //
    //   // let product = state.cartList.find(function (item) {
    //   //   return item.iid === payload.iid
    //   // })
    //   // 箭头函数写法
    //   let oldProduct = state.cartList.find(item => item.iid === payload.iid)
    //
    //   if (oldProduct) {
    //     oldProduct.count += 1
    //   } else {
    //     payload.count = 1
    //     state.cartList.push(payload)
    //   }
    // }\
    addCounter (state, payload) {
      payload.count++
    },
    addToCart (state, payload) {
      state.cartList.push(payload)
    }
  },
  actions: {
    addCart (context, payload) {
      let oldProduct = context.state.cartList.find(item => item.iid === payload.iid)

      if (oldProduct) {
        context.commit('addCounter', oldProduct)
      } else {
        payload.count = 1
        // context.state.cartList.push(payload)
        context.commit('addToCart', payload)
      }
    }
  },
  modules: {
  }
})
