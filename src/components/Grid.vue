<template>
  <div>{{ name }}</div>
  <ul class="bg-grid">
 
      <BoardgameCard  v-for="game in gamesList" v-bind:key="game.id" :name="game.name"></BoardgameCard>
 
  </ul>
</template>

<script>
// import BoardGamesApi from "@/services/fetchGames";
import BoardgameCard from "./BoardgameCard.vue";


export default {
  name: "Grid",
    components: {
    BoardgameCard,
  },
  props: String ,
  //lifecycle method mounted is for executing things when component has just been mounted
  mounted() {
    
    fetch("https://bgg-json.azurewebsites.net/collection/edwalter")
      .then((response) => response.json())
      .then((data) => {
        this.gamesList = data;
        console.log(this.gamesList);
      });
  },
  data(){
    return{
gamesList:[]
    }
  },

};
</script>

<style lang="scss" scoped>
.bg-grid {
  display: grid;
  grid-template: auto / 1fr 1fr 1fr 1fr;
}
</style>
