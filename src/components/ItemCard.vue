<template>
  <li class="game-card">
    <span class="game-name"
      ><i v-if="name.length < 10" class="icon fas fa-video"></i
      ><i
        v-else-if="name.length >= 10 && name.length < 20"
        class="icon fas fa-book"
      ></i
      ><i v-else class="icon fas fa-chess"></i><span>{{ name }}</span></span
    >
    <router-link :to="{ name: 'BlogItem', params: { itemId, name, image } }"
      ><img :src="image" alt="" class="game-image"
    /></router-link>
    <span v-if="favorite" class="favorite"><i class="fas fa-crown"></i></span>
    <span v-else class="not-favorite"
      ><i class="fas fa-heart-broken"></i><i class="fas fa-heart-broken"></i
    ></span>
  </li>
</template>

<script>
export default {
  name: "ItemCard",
  props: ["name", "image", "favorite", "itemId"],
  mounted() {
    // console.log(this.$route.params);
  },
};
</script>

<style lang="scss" scoped>
.game-card {
  color: white;
  font-family: "Oswald", sans-serif;
  border: 1px dashed grey;
  position: relative;
  list-style: none;
  background-color: black;
  max-height: 200px;
  overflow: hidden;
  border-radius: 10px;
  .favorite,
  .not-favorite {
    font-size: 18px;
    position: absolute;
    bottom: 0;
    right: 0;
    background-color: black;
    padding: 2px 5px;
    height: 24px;
    width: fit-content;
    line-height: 20px;
  }
  .not-favorite {
    color: orange;
  }
  .favorite {
    color: limegreen;
  }
}
.game-name {
  font-size: 18px;
  position: absolute;
  display: inline-block;
  max-width: 75%;
  background-color: black;
  padding: 2px 5px;
  text-align: left;
  .icon {
    color: red;
    margin-right: 5px;
    &.fa-video {
      color: blue;
    }
    &.fa-chess {
      color: yellow;
    }
  }
}
.game-image {
  width: 100%;
}
</style>
