<template>
  <div>
    This is store test with pinia 🍍
    <br>
    Change user and then refresh this page!
    <br>
    Current user : {{ userStore.id }}
    <br>
    Admin : {{ userStore.isAdmin }}
    <div class="ma-5">
      <v-text-field placeholder="User id" v-model="name"></v-text-field>
      <v-btn color="info" @click="changeUser(name)">change</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "~/stores/user";

const userStore = useUserStore()

const name = useState('name', () => '')

function changeUser(id) {
  userStore.changeUser(id)
}
</script>

<style scoped>

</style>
