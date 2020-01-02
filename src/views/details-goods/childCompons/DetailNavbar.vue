<template>
  <v-container class="pink lighten-3 navBar" fluid>
    <v-row
      no-gutters
      justify="space-between"
    >
      <v-col
        cols="3"
        v-for="item in title"
        :key="item.id"
      >
        <div class="text-center white--text">{{item}}</div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>

export default {
  name: 'DetailNavbar',
  data () {
    return {
      title: ['商品', '参数', '评论', '推荐']
    }
  }
}
</script>

<style scoped>

</style>
