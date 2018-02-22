<template>
  <div class="dictionary">
    <input type="text" v-model="word" placeholder="word">
    <button @click="search">Search</button>
  </div>
</template>

<script>
import DefinitionsResource from './../resources/definitions'

export default {
  data () {
    return {
      word: ''
    }
  },
  methods: {
    search () {
      DefinitionsResource.search(this.word)
        .then(response => {
          console.log(response)
        })
        .catch(err => {
          console.warn(err)
        })
    }
  }
}
</script>

<style scoped>
</style>

npm install vue-resource --save