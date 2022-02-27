<template>
  <div>
    <br>
    <NuxtLink to="/about">Go to about</NuxtLink>
    <br>
    <NuxtLink to="/todos">Go to todos</NuxtLink>
  </div>
</template>

<script>
export default {
  name: "index"
}
definePageMeta({
  layout: false
});
</script>

<style lang="scss">
/*%main-display {
  display: flex;
  justify-content: center;
  align-items: center;
}
#app {
  @extend %main-display;
  flex-direction: column;
}
body {
  @extend %main-display;
  margin: 0;
}
nav {
  @extend %main-display;
  background-color: black;
  width: 100vw;
  & > a {
    text-decoration: none;
    font-weight: bold;
    color: white;
    margin: 10px;
    &:hover {
      color: darken(white, 30%);
    }
  }
}*/
</style>
