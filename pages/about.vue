<template>
  <div>
    {{ greetings }}
    <br>
    <v-btn color="primary" @click="click">Print console</v-btn>
  </div>
</template>

<script>
import {useGreetings} from "../composables/status";

export default {
  name: "about",
  data() {
    return {
      greetings: useGreetings()
    }
  },
  methods: {
    click() {
      console.log('click')
      this.greetings = this.greetings + '!!'
    }
  }
}
</script>

<style scoped>

</style>
