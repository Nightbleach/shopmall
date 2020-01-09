<template>
    <v-container>
      <v-row>
        <v-col>
          <div v-for="item in dateInfo.list" :key="item.id">
            {{item.created| moment("YYYY/MM/DD")}}
          </div>
        </v-col>
      </v-row>
      <v-row v-for="item in imageDetails.detailImage" :key="item.id">
        <v-col>
          <div>{{item.key}}</div>
        </v-col>
        <v-col>
          <div>
            <div>
              <img v-for="(item, index) in item.list" :key = index :src="item" alt="">
            </div>
          </div>
        </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'ImgDetails',
  props: {
    imageDetails: {
      type: Object,
      default () {
        return {}
      }
    },
    dateInfo: {
      type: Object,
      default () {
        return {}
      }
    }
  }
}
</script>

<style scoped>

</style>
