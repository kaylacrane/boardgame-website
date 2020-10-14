<template>
  <div>Board Games</div>
  <ul class="bg-grid">
 
      <BoardgameCard  v-for="game in gamesList" v-bind:key="game.id" :data-id="game.id" :name="game.name" :image="game.image"></BoardgameCard>
 
  </ul>
</template>

<script>

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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
}
</style>
