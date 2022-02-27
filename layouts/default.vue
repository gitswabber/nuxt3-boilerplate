<template>
  <div>
    <v-app>
    <v-main>
      [layout header]
      <slot/>
      [layout footer]
    </v-main>
    </v-app>
  </div>
</template>

<script>
// This will also work in `<script setup>`
definePageMeta({
  // layout: "custom",
});
</script>

<style scoped>
</style>
