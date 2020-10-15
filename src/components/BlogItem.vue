<template>
  <div>
    <h2>{{ $route.params.name }}</h2>
    <router-link to="/"><i class="fas fa-backspace"></i></router-link>
    <span>Back</span>
    <img :src="$route.params.image" alt="" class="item-image" />
  </div>
</template>

<script>
// import { useRoute } from "vue-router";

export default {
  props: [],
  //   async setup() {
  //     const {
  //       params: { itemId },
  //     } = useRoute();
  //   },
};
</script>

<style lang="scss" scoped>
.item-image {
  height: 400px;
  display: block;
  margin: auto;
}
</style>
