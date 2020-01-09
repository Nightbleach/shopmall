<template>
<!--  有的时候，我们想有数据时候 才渲染数据源， 没数据 我们就不渲染数据
我有这里我们要判断这个goods里面有没有数据-------如何判断一个对象是空的对象呢？
用-----Object.key(对象名).length----如果这个值等于 0 就判断这个对象是空对象
-->
    <v-container fluid v-if="Object.keys(goods).length !==0" >
      <v-row
        no-gutters
      >
        <v-col
          cols="12"
        >
<!--         如何判断一个对象是空的对象
const obj = { }
则用
object.key(obj).length === 0   可以判断这个对象是否是空的对象
-->
          <p class="mb-0">{{goods.title}}</p>
          <v-col cols="12" class="pt-1">
            <span class='priceText'>{{goods.newPrice}}</span>
            <span class="pl-3 oldPriceText">{{goods.oldPrice}}</span>
            <span class="discountText pl-4" >
              <v-chip color="red" text-color="white" x-small >
                {{goods.discount}}
              </v-chip>
            </span>
          </v-col>
          <v-row class="itemSave pb-4" >
            <v-col cols="5" class="pa-0">
              <span class="pr-3">{{goods.columns[0]}}</span>
              <span>{{goods.columns[1]}}</span>
            </v-col>
            <v-spacer/>
            <v-col cols="3" class="pa-0">
              <span>{{goods.services[goods.services.length -1].name}}</span>
            </v-col>
          </v-row>
          <v-row class="text pb-6">
            <v-col v-for = 'index in goods.services.length-1' :key="index">
              <span>
                <img class="textIcon" :src="goods.services[index -1 ].icon" alt="">
                <span>{{goods.services[index-1].name}}</span>
              </span>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'DetailText',
  props: {
    goods: {
      type: Object
    }
  }
}
</script>

<style scoped lang="stylus">
.priceText
  color #F06292
.oldPriceText
  text-decoration line-through
  color darkgrey
.itemSave
  border-bottom 2px solid #9ea6b2
.textIcon
  height 14px
.text
  border-bottom 2px solid #9ea6b2

</style>
