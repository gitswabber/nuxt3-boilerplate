<template>
  <div>
    <v-btn color="primary" to="/">hello</v-btn>
    <v-btn color="primary" @click="click">hello2</v-btn>
    This is about!
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
