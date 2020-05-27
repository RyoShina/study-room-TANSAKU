<template>
  <v-card
    class="mx-auto"
    width="344"
    color="purple lighten-5">
    <v-card-text align="left">
      <div>{{ card.word }}</div>
      <v-img
        v-if="card.imgSrc"
        :src="card.imgSrc"
        height="200px" />
      <v-img
        v-else
        src="@/assets/unset-img.jpg"
        height="200px" />
      <p class="display-1 text--primary">
        {{ card.name }}
      </p>
      <v-chip
        v-for="(value, index) in card.tags"
        :key="card._id + '_' + index"
        class="ma-2"
        color="deep-purple lighten-4">
        {{ value }}
      </v-chip>
    </v-card-text>
    <v-card-actions>
      <v-btn
        text
        color="deep-purple accent-4">
        詳細
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'CardRoom',
  props: {
    card: {
      type: Object,
      default: null
    },
  },
}
</script>
