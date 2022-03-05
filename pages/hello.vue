<template>
  <div>
    Page visits: {{ message }}
    <v-btn color="primary" @click="sayHello">hello</v-btn>
  </div>
</template>

<script setup>
import Api from "../server/api/axios-api";

const { hello } = await useAsyncData('hello', () => $fetch('/api/hello'))

import { useNuxtApp } from '#app'

let { $axios } = useNuxtApp()
// const axios = $axios

let message = useState('message', () => 'default message')

onMounted(() => {
  // let aaa
  // Api.sayHello().then(result => {
  //   aaa = result
  // })
  // console.log('11'+aaa)
/*  $axios.get('http://localhost:8080/hello').then((response) => {
    console.log(response)
  })*/
})

async function sayHello() {
  // message = await useAsyncData('sayHello', () => Api.sayHello())
  // message.value = await $fetch(Api.sayHello())
  // message.value = await useFetch(useRuntimeConfig().api + '/hello', {method: 'DELETE'})
  message.value = await useFetch('/api/hello/hello')
  console.log(message)
}
</script>

<style scoped>

</style>
