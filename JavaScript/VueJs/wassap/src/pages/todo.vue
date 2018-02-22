<template>
  <div>
    <div class="todo-form">
      <label>
        title
        <input type="text" v-model="itemObj.title">
      </label>
      <label>
        description
        <input type="text" v-model="itemObj.description">
      </label>
      <button v-on:click="addItem">add</button>
    </div>
    <todo-list :todo-items="items">
      
    </todo-list>
  </div>
</template>

<script>
import TodoList from '../components/todoList'
export default {
  components: {
    TodoList
  },
  data () {
    return {
      itemObj: {
        title: '',
        description: '',
        isComplete: false
      },
      items: [{
        title: 'write component',
        description: 'write a vuejs component',
        isComplete: false,
        id: 1
      }, {
        title: 'write component',
        description: 'write a vuejs component',
        isComplete: false,
        id: 2
      }]
    }
  },
  methods: {
    addItem () {
      this.items.push({
        title: this.itemObj.title,
        description: this.itemObj.description,
        isComplete: false,
        id: this.items.lenght + 1
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card,.todo-form{
  border: 1px solid #ccc;
}

.complete {
  background-color: blue;
}
</style>
