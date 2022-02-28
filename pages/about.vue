<template>
  <div>
    <v-btn color="primary" to="/">Go to index</v-btn>
    <br>
    <v-btn color="primary" @click="click">Print console</v-btn>
  </div>
</template>

<script>
export default {
name: "about",
  methods: {
  click() {
    console.log('click')
  }
  }
}
</script>

<style scoped>

</style>
