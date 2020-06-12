<template>
  <v-img
    :src="imgSrc"
    :height="height" />
</template>

<script>
import {constantsService} from '@/service'
import { RepositoryFactory } from '@/repository/RepositoryFactory'
const DocumentsRepository = RepositoryFactory.get('documents')

export default {
  name: 'RoomSearchMenu',
  props: {
    src: {
      type: String,
      default: ''
    },
    height: {
      type: String,
      default: '200px'
    },
  },
  computed: {
    imgSrc: function(){
      return DocumentsRepository.getDocumentUrl(this.src)
    }
  }

}
</script>