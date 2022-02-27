<template>
  <div class="todos">
    <v-container fluid>
      <h4>투두 리스트</h4>
      <v-container class="todo-section">
        <v-card v-for="todo in todos" :key="todo" class="ma-3">
          <v-card-title>{{ todo.title }}</v-card-title>
          <v-card-text>{{ todo.content }}</v-card-text>
        </v-card>
      </v-container>
    </v-container>
  </div>
</template>

<script setup lang="ts">
import data from "../assets/data.js"

const todos = ref([...data]);
</script>

<style lang="scss">
.todos {
  .todo-section {
    width: 600px;
  }
}
</style>
