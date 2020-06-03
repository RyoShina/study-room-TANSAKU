<template>
  <div>
    <v-select
      v-model="word"
      :items="words"
      chips
      label="東京２３区名"
      outlined
      @change="onChangeWord()">
      <template v-slot:selection="{ attrs, item, select, selected }">
        <v-chip
          v-bind="attrs"
          :input-value="selected">
          <strong>{{ item }}</strong>
        </v-chip>
      </template>
    </v-select>
    <div v-show="searchTotalCount">
      <v-sheet color="deep-purple lighten-4">
        {{ searchTotalCount }}件Hit！
      </v-sheet>
    </div>
  </div>
</template>

<script>
import {constantsService} from '@/service'

export default {
  name: 'WordSearch',
  props: {
    searchTotalCount: {
      type: Number,
      default: 0
    }
  },
  data: () => ({
    word: '',
    words: constantsService.getWord
  }),
  methods: {
    onChangeWord: function(){
      this.$emit('onChangeWord', this.word)
    }
  }
}
</script>