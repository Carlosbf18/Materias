<template>
  <div>
    <div v-for="item in todoItems">
      <todo-card :todo-item="item" :on-delete="onDelete"></todo-card>
    </div>
  </div>
</template>

<script>
import TodoCard from './todoCard'
export default {
  components: {
    TodoCard
  },
  props: ['todoItems'],
  methods: {
    onDelete (id) {
      this.todoItems = this.todoItems.filter((item) => {
        if (item.id !== id) {
          return true
        } else {
          return false
        }
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
