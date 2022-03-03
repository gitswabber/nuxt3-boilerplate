<template>
  <div>
    <br>
    <v-container>
      <v-row>
        Hi, Your name is {{ userStore.id }}.
      </v-row>
      <v-row>
        <v-col>
          <v-text-field
              solo
              v-model="name"
              label="Name"
          ></v-text-field>
        </v-col>
        <v-col>
          <v-btn color="info" @click="changeUser(name)">CHANGE NAME</v-btn>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<!--<script>
import {useUserStore} from "~/stores/user";

export default {
  setup() {
    const userStore = useUserStore()
    return {userStore}
  },
  data() {
    return {
      name: ''
    }
  },
  methods: {
    changeUser(id) {
      this.userStore.changeUser(id)
    }
  }
}
</script>-->

<script setup lang="ts">
import {useUserStore} from "~/stores/user";

const userStore = useUserStore()

// const name = ref('')
const name = ref('')

function changeUser(id) {
  userStore.changeUser(id)
}
</script>
<style scoped>
</style>
