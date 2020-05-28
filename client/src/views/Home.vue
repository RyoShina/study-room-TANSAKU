<template>
  <v-container fluid>
    <v-row
      align="start"         
      justify="start">
      <v-col>
        <div
          class="d-flex justify-start"
          height="200px">
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="pink"
            @click="onClickSearch">
            <v-icon dark>
              mdi-magnify
            </v-icon>
          </v-btn>
          <v-btn
            class="mx-2"
            fab
            dark
            small
            color="pink"
            @click="onClickSearch">
            <v-icon dark>
              mdi-cog
            </v-icon>
          </v-btn>
          <v-spacer />
          <div v-if="cards.length">
            <v-sheet color="deep-purple lighten-4">
              {{ cards.length }}件Hit！
            </v-sheet>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="card in cards"
        :key="card._id">
        <v-row justify="space-between">
          <CardRoom :card="card" />
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CardRoom from '@/components/card/Room'
import {roomService} from '@/service'

export default {
  name: 'Home',
  components: {
    CardRoom,
  },
  data: () => ({ cards: [] }),
  methods: {
    onClickSearch: async function(){
      try {
        this.cards = await roomService.fetchRooms()
      } catch (err){
        console.log(err)
        this.cards = []
      }
    }
  }
}
</script>
