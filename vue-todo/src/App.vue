<template>
  <div id="app">
    <TodoHeader></TodoHeader>
    <TodoInput v-on:addTodo="addTodo"></TodoInput>
    <TodoList v-bind:propsdata="todoItems" @removeTodo="removeTodo"></TodoList>
    <TodoFooter v-on:removeAll="clearAll"></TodoFooter>
  </div>
</template>

<script>
import TodoHeader from './components/todoHeader.vue';
import TodoInput from './components/todoInput.vue';
import TodoList from './components/todoList.vue';
import TodoFooter from './components/todoFooter.vue';

  export default {
    data(){
      return {
        todoItems: []
      }
    },
    created(){
            if(localStorage.length>0){
                for(var i=0; i<localStorage.length; i++){
                    this.todoItems.push(localStorage.key(i));
                }
            }
        },
    methods: {
      addTodo(todoItem){
        localStorage.setItem(todoItem, todoItem);
        this.todoItems.push(todoItem);
      },
      clearAll(){
        localStorage.clear();
        this.todoItems = [];
      },
      removeTodo(todoItem, index){
        localStorage.removeItem(todoItem);
        this.todoItems.splice(index, 1);
      }
    },
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