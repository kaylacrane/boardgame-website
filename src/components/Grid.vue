<template>
  <ul class="bg-grid">
    <ItemCard
      v-for="game in gamesList"
      v-bind:key="game.gameId"
      :data-id="game.gameId"
      :name="game.name"
      :image="game.image"
      :favorite="game.owned"
      :itemId="game.gameId"
    ></ItemCard>
  </ul>
</template>

<script>
import ItemCard from "./ItemCard.vue";

export default {
  name: "Grid",
  components: {
    ItemCard,
  },
  props: [],
  //lifecycle method mounted is for executing things when component has just been mounted
  mounted() {
    fetch("https://bgg-json.azurewebsites.net/collection/edwalter")
      .then((response) => response.json())
      .then((data) => {
        this.gamesList = data;
        console.log(this.gamesList);
      });
  },
  data() {
    return {
      gamesList: [],
    };
  },
};
</script>

<style lang="scss" scoped>
.bg-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: auto;
  padding: 0;
  grid-gap: 2px;
}
</style>
