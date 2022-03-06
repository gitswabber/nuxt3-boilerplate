<template>
  <div>
    <v-app>
      <v-main>
        <v-container>
          <v-row align="center" justify="center" style="height:100vh">
            <v-col align="center" justify="center" style="width: 100vh">
              <div class="ma-3"><h1>HELLO!</h1></div>
              <v-btn color="info" to="/home">entrance</v-btn>
            </v-col>
          </v-row>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: false
});
</script>
