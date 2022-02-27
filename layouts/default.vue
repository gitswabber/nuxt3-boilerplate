<template>
  <div>
    This is default layout!!!
    <slot />
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
