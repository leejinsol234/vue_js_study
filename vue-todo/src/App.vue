<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput></TodoInput>
    <TodoList></TodoList>
    <TodoFooter></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/todoHeader.vue';
import TodoInput from './components/todoInput.vue';
import TodoList from './components/todoList.vue';
import TodoFooter from './components/todoFooter.vue';

  export default {
    components: {
      'TodoHeader': TodoHeader,
      'TodoInput': TodoInput,
      'TodoList': TodoList,
      'TodoFooter': TodoFooter
    }
  }
</script>

<style>
</style>