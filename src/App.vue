<template>
  <div id="app">
      <!-- <input-val></input-val> -->
      <!-- <List></List> -->
      <Add v-show="flag"></Add>
      <Modify v-show="flag==false" @handleToggle="getFlag"></Modify>
      <todo-list @handleToggle="getFlag"></todo-list>
  </div>
</template>

<script>
// import inputVal from './components/inputVal.vue';
// import List from './components/list.vue';
import Add from './components/add.vue';
import TodoList from './components/todolist.vue';
import Modify from './components/modify.vue';
export default {
  name: 'app',
  components:{
    // InputVal:inputVal,
    // List
    Add,
    TodoList,
    Modify
  },
  data(){
    return{
      flag:true
    }
  },
  methods:{
    getFlag(idx){
      console.log(idx)
      this.flag=idx;
    }
  }
}
</script>

<style>

</style>
