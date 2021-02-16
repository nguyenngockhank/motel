<template>
  <div id="myApp">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
* {
  padding: 0;
  margin: 0;
}
#myApp {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 8px;
}
</style>
