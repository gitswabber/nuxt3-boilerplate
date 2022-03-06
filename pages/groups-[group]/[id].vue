<template>
  <div>
    Dynamic route test.
    <br>
    Change the url of groups-{GROUP}/{ID} and see what's going on.
    <br>
    <br>
    You are in '{{ $route.params.id }}' page of '{{ $route.params.group }}' group now.
  </div>
</template>
