<template>
  <h1 class="page-title">Board Games</h1>
  <Grid title="BoardGames" />
</template>

<script>
import Grid from "./components/Grid.vue";

export default {
  name: "App",
  components: {
    Grid,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.page-title{
   font-family:'Oswald', sans-serif;
   font-size: 50px;
}
</style>
