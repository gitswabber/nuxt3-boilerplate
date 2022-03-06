<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="showSideBar = !showSideBar"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <div @click="goHome">Hello Nuxt world</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon to="/">
        <v-icon>mdi-exit-run</v-icon>
      </v-btn>
    </v-app-bar>
  </div>
</template>

<script setup>
import {useShowSideBar} from "../../composables/status";

const router = useRouter()

const showSideBar = useShowSideBar()

function goHome() {
  router.push({path: '/home'})
}
</script>

<style scoped>

</style>
