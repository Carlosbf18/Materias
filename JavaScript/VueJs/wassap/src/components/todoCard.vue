<template>
  <div>
    <div class="card" :class="{ complete: todoItem.isComplete }">
        <h3>{{todoItem.title}}</h3>
        <h4>{{todoItem.description}}</h4>
        <button @click="completeTask">complete</button>
        <button @click="deleteTask">Delete</button>    
      </div>
  </div>
</template>

<script>
export default {
  props: ['todoItem', 'onDelete'],
  methods: {
    completeTask () {
      this.todoItem.isComplete = !this.todoItem.isComplete
    },
    deleteTask () {
      this.onDelete(this.todoItem.id)
    }
  }
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .card {
    border: 1px solid #ccc;
  }

  .complete {
    background-color: blue;
  }
</style>
