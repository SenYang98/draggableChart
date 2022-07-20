<template>
  <div id="app">
    <componentApp />
  </div>
</template>

<script>
// import Login from "./pages/Login";
import componentApp from "./pages/componentApp";

export default {
  name: "App",
  components: {
    componentApp
  },
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

