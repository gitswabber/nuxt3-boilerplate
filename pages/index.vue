<template>
  <div>
    <v-app>
      <v-main>
        {{ greetings }}
        <br>
        Current config : {{ config }}
        <div class="ma-3">
          <div>This is event & vuetify test. Counter: {{ counter }}</div>
          <div>
            <v-btn color="primary" class="font-mono" @click="inclement">
              +
            </v-btn>
            <v-btn color="error" class="font-mono" @click="counter--">
              -
            </v-btn>
          </div>
        </div>
        <div class="ma-5">
          <div>This is router test.</div>
          <NuxtLink to="/about">Go to about</NuxtLink>
          <br>
          <NuxtLink to="/teams-DevOpsPlatform/jessie">Go to dynamic route</NuxtLink>
          <br>
          <NuxtLink to="/todos">Go to todos</NuxtLink>
          <br>
          <NuxtLink to="/users">Go to users</NuxtLink>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
// Composition API
import {ref, onMounted} from 'vue'
import {useGreetings} from "../composables/status";

const config = useRuntimeConfig()
const greetings = useGreetings()

const el = ref()

onMounted(() => {
  console.log('on mounted')
  el.value // <div>
})
const counter = useState('counter', () => Math.round(Math.random() * 1000))

function inclement() {
  counter.value++
}

definePageMeta({
  layout: false
});
</script>

<!--<script>
// Options API
export default {
  name: "index",
  data() {
    return {
      counter: Math.round(Math.random() * 1000),
      config: useRuntimeConfig()
    }
  },
  methods: {
    inclement() {
      this.counter++
    }
  },
  mounted() {
    console.log('mounted!')
  }
}
definePageMeta({
  layout: false
});
</script>-->

<style scoped>

</style>
