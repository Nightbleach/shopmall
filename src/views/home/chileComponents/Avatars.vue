<template>
<v-container fluid>
  <v-row
    no-gutters
    justify="center"
    align-content="center"
  >
    <v-col cols='12' offset="2">
        <v-avatar
          v-for="item in recommend"
          :key="item.id"
          size="98"
          class="mx-5"
        >
          <a :href="item.link">
            <img class="avatarsImg" :src="item.image" alt="">
          </a>
        </v-avatar>
    </v-col>
    <v-col cols="12" offset="2">
        <span
          v-for="item in recommend"
          :key="item.id"
          class=" px-4 mx-5"
        >
        {{item.title}}
      </span>
    </v-col>
  </v-row>
</v-container>
</template>

<script>
export default {
  name: 'HomeAvatars',
  props: {
    recommend: {
      type: Array,
      default () {
        return []
      }
    }
  }
}
</script>

<style scoped lang="stylus">
.avatarsImg
  width 80px
  height 80px
</style>
