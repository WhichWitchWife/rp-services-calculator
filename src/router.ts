import { createRouter, createWebHistory } from "vue-router";

import IndexPage from "@/pages/IndexPage.vue";

const routes = [
  {
    path: "/rp-services-calculator/",
    component: IndexPage,
    meta: {
      title: "FFXIV RP Services Calculator",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
