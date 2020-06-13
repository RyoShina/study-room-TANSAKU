<template>
  <v-container fluid>
    <S3Image
      v-if="pageData.imgSrc"
      :src="pageData.imgSrc"
      height="240px" />
    <h1 class="text-lg-h1 text-xl-h1 text-center">
      {{ pageData.name }}
    </h1>
    <v-container fluid>
      <v-row dense>
        <v-col cols="3">
          <v-card>
            <v-list class="transparent">
              <v-list-item>
                <v-list-item-title><v-icon>mdi-application</v-icon></v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ pageData.type }}
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><v-icon>mdi-av-timer</v-icon></v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  08:00～17:00
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-title><v-icon>mdi-map-marker</v-icon></v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  100-xxxx
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item>
                <v-list-item-subtitle class="text-right">
                  千代田区１－１－３１
                </v-list-item-subtitle>
              </v-list-item>
              <v-list-item
                v-for="(value, index) in pageData.tags"
                :key="'tags_'+index">
                <v-list-item-title v-if="index===0">
                  <v-icon>
                    mdi-tag-multiple
                  </v-icon>
                </v-list-item-title>
                <v-list-item-subtitle class="text-right">
                  {{ value }}
                </v-list-item-subtitle>
              </v-list-item>
            </v-list>
          </v-card>
        </v-col>
        <v-col cols="6">
          <GmapMap
            :center="{lat:35.6585805, lng:139.7432442}"
            :zoom="17"
            map-type-id="terrain"
            style="width: 800px; height: 480px">
            <GmapMarker
              v-for="(m, index) in markers"
              :key="index"
              :position="m.position"
              :clickable="true"
              :draggable="true"
              @click="center=m.position" />
          </GmapMap>
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>

<script>
// @ is an alias to /src
import S3Image from '@/components/img/S3Image'

import { RepositoryFactory } from '@/repository/RepositoryFactory'
const RoomsRepository = RepositoryFactory.get('rooms')

export default {
  name: 'RoomDetail',
  components: {
    S3Image
  },
  data: () => ({
    isLoading: false,
    pageData: {
        
    },
    markers: [{ position: {lat: 35.6585805, lng: 139.7432442} }]
  }),
  computed: {
  },
  mounted: async function() {
    try {
      this.isLoading = true
      const {data} = await RoomsRepository.getById(this.$route.params.roomId)
      this.isLoading = false

      this.pageData = data
      
      console.log(this.pageData)
    } catch (err){
      console.log(err)
    }
  },
  methods: {
  }
}
</script>