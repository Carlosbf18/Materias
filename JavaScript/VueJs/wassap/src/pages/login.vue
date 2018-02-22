<template>
  <div class="login">
    <input type="text" placeholder="username">
    <input type="password" placeholder="password">
    <button @click="signIn">Sign In</button>
  </div>
</template>

<script>
import Vue from 'vue'

export default {
  methods: {
    signIn () {
      /* this.$router.push({ name: 'Main', params: { abc: 123 } }) */
      Vue.googleAuth().signIn(authorizationCode => {
        console.log(authorizationCode)
        this.$router.push({ name: 'Main', params: { abc: 123 } })
      }, error => {
        console.warn(error)
      })
    }
  }
}
</script>

<style scoped>
</style>
