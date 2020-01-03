<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12">
<!-- 这里也可以用（具名）slot是为了获取home中的数据，然后在这个slot中可以写入-->
<!--        <slot name='carousel'/>-->
        <v-carousel
          class="touch"
          cycle
          height="350px"
          hide-delimiter-background
        >
          <v-carousel-item
            class="carouselImage"
            v-for="item in topImages"
            :key="item.id"
          >
            <v-img contain aspect-ratio="1.4" :src="item" />
          </v-carousel-item>
        </v-carousel>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'Carousel',
  props: {
    topImages: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  }
  // created () {
  // //   console.log('bannerDa3ta')
  // //   console.log(this.bannerData[0].image)
  // // }
}
</script>

<style scoped>

</style>
