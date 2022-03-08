<template>
  <div>
    This is store test with pinia 🍍
    <br>
    Change user and then refresh this page!
    <br>
    <br>
    You are : <b>{{ userStore.id }}</b>
    <br>
    Are you admin? : <b>{{ userStore.isAdmin === true ? 'Yes, I am.' : 'No, I am not.' }}</b>
    <div class="ma-5"></div>
    <div style="width: 500px">
      <v-text-field placeholder="User id" v-model="name"></v-text-field>
      <v-btn color="info" @click="changeUser(name)">change</v-btn>
    </div>
  </div>
</template>

<script setup lang="ts">
import {useUserStore} from "../stores/user";

const userStore = useUserStore()

const name = useState('name', () => '')

function changeUser(id) {
  userStore.changeUser(id)
}
</script>
