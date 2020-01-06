<template>
  <div>
    <p>1</p>
  <div>{{this.iid}}</div>
  </div>
</template>

<script>
import { getDetails } from 'network/details'

export default {
  name: 'SingleItem',
  data () {
    return {
      iid: null
    }
  },
  created () {
    this.iid = this.$route.params.iid
    // console.log(this.iid)
    this.getDetails()
  },
  methods: {
    getDetails () {
      getDetails(this.iid).then(res => {
        console.log(res)
      })
    }
  }
}
</script>

<style scoped>

</style>
