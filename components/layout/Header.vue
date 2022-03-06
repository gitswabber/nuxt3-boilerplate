<template>
  <div>
    <v-app-bar app>
      <v-app-bar-nav-icon @click="showSideBar = !showSideBar"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <NuxtLink to="/home">nuxt3 test app</NuxtLink>
      </v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script setup>
import {useShowSideBar} from "../../composables/status";

const showSideBar = useShowSideBar()
</script>

<style scoped>

</style>
