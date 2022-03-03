<template>
  <div>
    <v-app>
      <v-navigation-drawer
          v-model="drawer"
          app
      >
        <!--  -->
      </v-navigation-drawer>

      <v-app-bar app>
        <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title><NuxtLink to="/">Application</NuxtLink></v-toolbar-title>
      </v-app-bar>

      <v-main>
        <div class="ma-5">
          <TheHeader></TheHeader>
          <slot/>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import TheHeader from "../components/TheHeader";

export default {
  components: {TheHeader},
  data: () => ({drawer: null}),
}
</script>
