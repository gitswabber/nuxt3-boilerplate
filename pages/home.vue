<template>
  <div>
    <div>
      See the current environment variables.
      <br>
      env : {{ config.env }}
      <br>
      api : {{ config.api }}
      <br>
      description : {{ config.description }}
    </div>
    <v-divider class="ma-3"></v-divider>
    <div>
      <div>counter : {{ counter }}</div>
      <div>
        <v-btn color="primary" @click="increment">
          increment
        </v-btn>
        <v-btn color="error" @click="counter--">
          decrement
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {onMounted, onUpdated} from "vue";

const config = useRuntimeConfig()

// state composable
const counter = useState('counter', () => Math.round(Math.random() * 1000))

// lifecycle hooks(https://vuejs.org/api/composition-api-lifecycle.html)
onMounted(() => {
  console.log('mounted')
})

onUpdated(() => {
  console.log('updated')
})

watch(counter, (counter, prevCounter) => {
  console.log('counter is changed. pre : ' + prevCounter)
})

// function
function increment() {
  counter.value++
}

</script>

<style scoped>
</style>
