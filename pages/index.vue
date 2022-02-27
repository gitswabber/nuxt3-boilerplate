<template>
  <div>
    This is index page.
    <br>
    <NuxtLink to="/about">Go to about</NuxtLink>
  </div>
</template>

<script>
export default {
name: "index"
}
definePageMeta({
  layout: true,
});
</script>

<style scoped>

</style>
