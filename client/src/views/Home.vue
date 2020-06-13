<template>
  <v-container fluid>
    <v-row>
      <v-col cols="2">
        <RoomSearchMenu @onChangeSelectd="onChangeSearchMenuIndex" />
      </v-col>
      <v-spacer />
      <v-col
        v-show="showNewArrivalComponent"
        cols="10">
        <v-row justify="start">
          <v-col
            v-for="card in newArrival.result"
            :key="card._id">
            <v-row>
              <CardRoom :card="card" />
            </v-row>
          </v-col>
        </v-row>
      </v-col>
      <v-col
        v-show="showWordComponent"
        cols="10">
        <v-row no-gutters>
          <v-col cols="9">
            <WordSearch
              @searchTotalCount="word.resultTotal"
              @onChangeWord="onChangeWord" />
          </v-col>
        </v-row>
        <v-row justify="start">
          <v-col
            v-for="card in word.result"
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
import CardRoom from '@/components/card/room'
import RoomSearchMenu from '@/components/itemGroups/RoomSearchMenu'
import WordSearch from '@/components/select/WordSearch'

import {constantsService} from '@/service'
import { RepositoryFactory } from '@/repository/RepositoryFactory'
const RoomsRepository = RepositoryFactory.get('rooms')

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
    isLoading: false,
    newArrival: {
      result: [],
      resultTotal: 0,
      params: {
        condition: {
        },
        option: {
          limit: 10,
          skip: 0
        }
      }
    },
    word: {
      result: [],
      resultTotal: 0,
      params: {
        condition: {
          word: ''
        },
        option: {
          limit: 10,
          skip: 0
        }
      }
    }
  }),
  computed: {
    showNewArrivalComponent: function(){
      return this.roomSearchMenu.selectedIndex === 0 
    },
    showWordComponent: function(){
      return this.roomSearchMenu.selectedIndex === 1
    }
  },
  mounted: async function() {
    try {
      await this.fetchByNewArrival()
    } catch (err){
      console.log(err)
      this.newArrival.searchResult = {}
    }
  },
  methods: {
    onChangeSearchMenuIndex: function(index){
      this.roomSearchMenu.selectedIndex = index
    },
    onChangeWord: async function(word=''){
      if (!word) return
      this.initFetchParamsByWord(word)
      await this.fetchByWord()
    },
    fetchByNewArrival: async function(){
      try {
        this.isLoading = true
        const { data } = await RoomsRepository.get({params: this.newArrival.params})
        this.isLoading = false

        this.newArrival.result = data.result
        this.newArrival.resultTotal = data.documentTotal
      } catch (err){
        console.log(err)
        this.isLoading = false
        this.newArrival.result = []
        this.newArrival.resultTotal = 0
      }
    },
    fetchByWord: async function(){
      try {
        this.isLoading = true
        const { data } = await RoomsRepository.get({params: this.word.params})
        this.isLoading = false

        this.word.result = data.result
        this.word.resultTotal = data.documentTotal
      } catch (err){
        console.log(err)
        this.isLoading = false
        this.word.result = []
        this.word.resultTotal = 0
      }
    },    
    initFetchParamsByWord(word=''){
      this.word.params = {
        condition: {
          word: word
        },
        option: {
          limit: 10,
          skip: 0
        }
      }
    }
  }
}
</script>