<template>
  <v-container fluid>
    <v-row no-gutters>
      <v-col cols="2">
        <RoomSearchMenu />
      </v-col>
      <v-spacer />
      <v-col cols="9">
        <v-row>
          <v-col cols="9">
            <div
              class="d-flex justify-start"
              height="200px">
              <v-combobox
                v-model="words.searchOption"
                :items="constants.words"
                chips
                clearable
                label="２３区名を選択してください"
                multiple
                solo>
                <template v-slot:selection="{ attrs, item, select, selected }">
                  <v-chip
                    v-bind="attrs"
                    :input-value="selected"
                    close
                    @click="select"
                    @click:close="remove(item)">
                    <strong>{{ item }}</strong>&nbsp;
                  </v-chip>
                </template>
              </v-combobox>
              <div v-if="words.searchResult.length">
                <v-sheet color="deep-purple lighten-4">
                  {{ words.wsearchResultords.length }}件Hit！
                </v-sheet>
              </div>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col
            v-for="card in newArrival.searchResult"
            :key="card._id">
            <v-row justify="space-between">
              <CardRoom :card="card" />
            </v-row>
          </v-col>
        </v-row>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src
import CardRoom from '@/components/card/Room'
import RoomSearchMenu from '@/components/ItemGroups/RoomSearchMenu'

import {constantsService, roomService} from '@/service'

export default {
  name: 'Home',
  components: {
    CardRoom,
    RoomSearchMenu
  },
  data: () => ({
    constants: {
      words: constantsService.getWord
    },
    newArrival: {
      searchResult: [],
      searchOption: []
    },
    words: {
      searchResult: [],
      searchOption: []
    }
  }),
  mounted: async function() {
    try {
      this.newArrival.searchResult = await roomService.fetchRooms()
    } catch (err){
      console.log(err)
      this.words.searchResult = []
    }
  },
  methods: {
    onClickSearch: async function(){
      try {
        this.words.searchResult = await roomService.fetchRooms()
      } catch (err){
        console.log(err)
        this.words.searchResult = []
      }
    },
    remove: function(item) {
      this.words.searchOptions.splice(this.words.searchOptions.indexOf(item), 1)
      this.words.searchOptions = [...this.words.searchOptions]
    },
  }
}
</script>
