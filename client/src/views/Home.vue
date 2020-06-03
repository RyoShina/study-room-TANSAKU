<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <RoomSearchMenu @onChangeSelectd="onChangeSearchMenuIndex" />
      </v-col>
      <v-spacer />
      <v-col
        v-show="isShowNewArrivalComponent"
        cols="10">
        <v-row justify="start">
          <v-col
            v-for="card in searchResultByNewArrival"
            :key="card._id">
            <v-row>
              <CardRoom :card="card" />
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        v-show="isShowWordComponent"
        cols="10">
        <v-row no-gutters>
          <v-col cols="9">
            <WordSearch
              @searchTotalCount="searchTotalCountByWord"
              @onChangeWord="onChangeSearchWord" />
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col
            v-for="card in searchResultByWord"
            :key="card._id">
            <v-row>
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
import RoomSearchMenu from '@/components/itemGroups/RoomSearchMenu'
import WordSearch from '@/components/select/WordSearch'

import {constantsService, roomService} from '@/service'

export default {
  name: 'Home',
  components: {
    CardRoom,
    RoomSearchMenu,
    WordSearch
  },
  data: () => ({
    roomSearchMenu: {
      selectedIndex: 0
    },
    newArrival: {
      searchResult: {
        data: []
      },
      searchOption: {
        limit: 10,
        skip: 0
      }
    },
    word: {
      searchResult: {
        data: [],
        documentTotal: 0
      },
      searchOption: {
        limit: 10,
        skip: 0
      }
    }
  }),
  computed: {
    isShowNewArrivalComponent: function(){
      return this.roomSearchMenu.selectedIndex === 0 
    },
    isShowWordComponent: function(){
      return this.roomSearchMenu.selectedIndex === 1
    },
    searchResultByNewArrival: function(){
      return this.newArrival.searchResult && this.newArrival.searchResult.data
        ? this.newArrival.searchResult.data
        : []
    },
    searchResultByWord: function(){
      return this.word.searchResult && this.word.searchResult.data
        ? this.word.searchResult.data
        : []
    },
    searchTotalCountByWord: function(){
      return this.word.searchResult && this.word.searchResult.documentTotal
        ? this.word.searchResult.documentTotal
        : 0
    }
  },
  mounted: async function() {
    try {
      this.newArrival.searchResult = await roomService.fetchRooms(
        {}, 
        this.newArrival.searchOption.limit, 
        this.newArrival.searchOption.skip
      )
    } catch (err){
      console.log(err)
      this.newArrival.searchResult = {}
    }
  },
  methods: {
    onChangeSearchWord: async function(word=''){
      if (!word) return
      try {
        this.word.searchResult = await roomService.fetchRooms(
          {'word': word}, 
          this.word.searchOption.limit, 
          this.word.searchOption.skip)
      } catch (err){
        console.log(err)
        this.word.searchResult = {}
      }
    },
    onChangeSearchMenuIndex: function(index){
      this.roomSearchMenu.selectedIndex = index
    }
  }
}
</script>
