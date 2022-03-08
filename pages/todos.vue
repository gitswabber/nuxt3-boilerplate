<template>
  <div>
    <div class="todos">
      <h2>TODO List</h2>
      <br>
      <div>

        <v-row style="width: 500px">
          <v-col>
            <v-text-field placeholder="Add new todo" v-model="title"></v-text-field>
          </v-col>
          <v-col cols="2">
            <v-btn color="primary" @click="addTodo(title)">add</v-btn>
          </v-col>
        </v-row>

        <div class="todo-section">
          <v-card v-for="todo in todos" :key="todo" class="mx-auto ma-3">
            <v-card-title>{{ todo.title }}</v-card-title>
            <v-card-text>created by {{ todo.by }}</v-card-text>
            <v-card-actions>
              <v-btn color="success" class="font-mono" @click="deleteTodo(todo.no)">DELETE</v-btn>
            </v-card-actions>
          </v-card>
          <div>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const {data} = await useAsyncData('getTodos', () => $fetch('/api/todos/getTodos'))
const todos = useState('todos', () => [])
const title = useState('title', () => '')
import TodoApi from "../server/api/todo-apis";

onMounted(() => {
  todos.value = data.value
})

async function addTodo(title) {
  todos.value = await TodoApi.addTodo(title)
}

async function deleteTodo(no) {
  todos.value = await TodoApi.deleteTodo(no)
}
</script>

<style lang="scss">
.todos {
  .todo-section {
    width: 700px;
  }
}
</style>
