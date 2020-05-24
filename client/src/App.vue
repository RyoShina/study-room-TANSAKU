<template>
  <v-app id="inspire">
    <v-app-bar
      app
      color="deep-purple"
      dark>
      <v-spacer />
      <v-toolbar-title>Study room TANSAKU</v-toolbar-title>
    </v-app-bar>

    <v-content class="grey lighten-4 fill-height">
      <router-view />
    </v-content>

    <v-footer
      color="deep-purple"
      app>
      <v-spacer />
      <span class="white--text">&copy; 2020 RyoShina Portforio apps.</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  name: 'StudyRoomTANSAKUApps',
  data: () => ({
    drawer: null,
  }),
}
</script>
