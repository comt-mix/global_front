import { createRouter, createWebHistory } from "vue-router";
import routing from "./routing";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routing,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;
