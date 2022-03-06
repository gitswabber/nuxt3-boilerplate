<template>
  <div>
    Dynamic route test.
    <br>
    Change the url of groups-{GROUP}/{ID} and see what's going on.
    <br>
    <br>
    You are in <span class="emphasize">{{ $route.params.id }}</span> of <span class="emphasize">{{ $route.params.group }}</span> page now.
  </div>
</template>

<style scoped>
.emphasize {
  color: coral;
}
</style>
