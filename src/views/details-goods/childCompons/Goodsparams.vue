<template>
    <v-container>
      <v-row>
<!--        <v-col>{{itemParams.info.key}}</v-col>-->
      </v-row>
      <v-row>
       <v-col>
         <v-simple-table>
           <template v-slot:default>
             <tbody>
             <tr v-for="item in itemParams.infos" :key="item.id">
               <td>{{ item.key }}</td>
               <td>{{ item.value }}</td>
             </tr>
             </tbody>
           </template>
         </v-simple-table>
       </v-col>
      </v-row>
    </v-container>
</template>

<script>
export default {
  name: 'Goodsparams',
  props: {
    itemParams: {
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
