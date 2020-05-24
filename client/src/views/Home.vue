<template>
  <v-container fluid>
    <v-row
      align="start"         
      justify="start">
      <v-col class="">
        <div
          color="deep-purple">
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
                mdi-magnify
              </v-icon>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <CardRoom
          v-for="card in cards"
          :key="card._id"
          :card="card" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CardRoom from '@/components/card/room'
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

    // onClickSearch: async () =>{
    //   try {
    //     console.log(this)
    //     const searchResult = await roomService.fetchRooms()
    //     console.log(searchResult)
    //   } catch (err){
    //     console.log(err)
    //     // this.cards = []
    //   }
    // }
  }
}
</script>
