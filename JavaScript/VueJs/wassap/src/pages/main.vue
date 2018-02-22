<template>
  <div class="main">
    <h3>Wassap</h3>
    <router-link to="/chats">Chat</router-link>
    <router-link to="/status">Status</router-link>
    <router-link to="/calls">Calls</router-link>
    <router-link to="/dictionary">Dic</router-link>
    <router-view class="container"/>
  </div>
</template>

<script>
export default {
}
</script>

<style scoped>
.main {
	padding: 5px;
	border: 1px solid black;
}
.container {
	padding: 5px;
	border: 1px solid blue;
}

</style>
