<template>
  <v-card class="mx-auto" max-width="344">
    <v-card-text align="left">
      <div>２３区名</div>
      <v-img src="@/assets/unset-img.jpg" height="200px"></v-img>
      <p class="display-1 text--primary">
        店舗名
      </p>
      <v-chip class="ma-2">Default</v-chip>
      <v-chip class="ma-2">Default</v-chip>
      <v-chip class="ma-2">Default</v-chip>
      <v-chip class="ma-2">Default</v-chip>
      <v-chip class="ma-2">Default</v-chip>
    </v-card-text>
    <v-card-actions>
      <v-btn text color="deep-purple accent-4">
        詳細
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "CardShops",
  data: () => ({}),
};
</script>
