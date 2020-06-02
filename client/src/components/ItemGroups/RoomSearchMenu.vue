<template>
  <v-card
    class="mx-auto"
    max-width="500">
    <v-list>
      <v-list-item-group
        v-model="index"
        active-class="active-item"
        mandatory
        @change="onChangeSelectd()">
        <v-list-item
          v-for="(item, i) in items"
          :key="i">
          <v-list-item-content>
            <v-list-item-title v-text="item.text" />
          </v-list-item-content>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-card>
</template>

<script>
import {constantsService} from '@/service'

export default {
  name: 'RoomSearchMenu',
  data: () => ({
    items: constantsService.getRoomSearchMethods,
    index: 0
  }),
  methods: {
    onChangeSelectd: function(){
      this.$emit('onChangeSelectd', this.index)
    }
  }
}
</script>

<style scoped>
.active-item {
  border: 2px dashed deeppink;
}
</style>