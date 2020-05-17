<template>
  <div class="home">
    <Shops />
  </div>
</template>

<script>
// @ is an alias to /src
import Shops from '@/components/card/shops.vue'

export default {
  name: 'Home',
  components: {
    Shops
  }
}
</script>
