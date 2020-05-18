<template>
  <div
    class="home"
    color="deep-purple">
    <CardShops
      v-for="card in cards"
      :key="card._id"
      :card="card" />
  </div>
</template>

<script>
// @ is an alias to /src
import CardShops from '@/components/card/shops.vue'

const demo = [
  {
    _id: '1',
    word: '千代田区',
    store: 'まんきつ！大手町駅前店',
    imgSrc: '',
    tags: ['フリーwifi', '充電可', 'フリードリンク', '勉強机（個人）', '勉強机（複数人）'],
  },
]

export default {
  name: 'Home',
  components: {
    CardShops,
  },
  data: () => ({ cards: demo }),
}
</script>
