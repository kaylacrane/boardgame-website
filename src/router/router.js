/*using webhistory*/
import { createWebHistory, createRouter } from "vue-router";
import Grid from "../components/Grid.vue";

//dynamically import
import BlogItem from "../components/BlogItem.vue";

const history = createWebHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: "/",
      component: Grid,
    },
    {
      path: "/blog/:itemId",
      name: "BlogItem",
      component: BlogItem,
    },
  ],
});

export default router;
