<template>
    <v-container>
      <v-row>
        <v-col>
          <v-avatar>
            <img :src="shopInfo.shopLogo" alt="">
          </v-avatar>
          <span class="ml-4">{{shopInfo.name}}</span>
        </v-col>
      </v-row>
<!--      商品销量等信息-->
      <v-row>
        <!--      商品销量等信息-->
        <v-col cols="2" class="text-center">
          <div>{{shopInfo.sellSum | sellAmountFilter}}</div>
          <p>{{'总销量'}}</p>
        </v-col>
        <v-col cols="2" class="text-center splitLine">
          <div>{{shopInfo.goodsSum}}</div>
          <p>{{'全部宝贝'}}</p>
        </v-col>
        <v-row>
          <v-col class="ml-9" >
            <div class="text-start" v-for="item in shopInfo.shopScore" :key="item.id">
              <div>{{item.name}}
              <span>{{item.score}}</span>
            </div>
            </div>
          </v-col>
        </v-row>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'ShopInfo',
  props: {
    shopInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  filters: {
    sellAmountFilter (value) {
      let result = value
      if (value > 10000) {
        result = (result / 10000).toFixed(1) + '万'
      }
      return result
    }
  }
}
</script>

<style scoped lang="stylus">
.splitLine
  border-right  2px solid lightcoral
</style>
