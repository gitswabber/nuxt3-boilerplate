<template>
  <div>
    Page visits: {{ data }}
  </div>
</template>

<script setup>
const { hello } = await useAsyncData('hello', () => $fetch('/api/hello'))
</script>

<style scoped>

</style>
