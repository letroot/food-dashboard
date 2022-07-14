import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateOrderView from "../views/CreateOrderView.vue";
import CreateOrderDetailView from "../views/CreateOrderDetailView.vue";
import CreateOrderAtomicDetailView from "../views/CreateOrderAtomicDetailView.vue";
import CreateOrderNotesView from "../views/CreateOrderNotesView.vue";
import LoginView from "../views/LoginView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/create/order",
      name: "create_order",
      component: CreateOrderView,
    },
    {
      path: "/create/order/details",
      name: "create_order_details",
      component: CreateOrderDetailView,
    },
    {
      path: "/create/order/details_",
      name: "create_order_details_atomic",
      component: CreateOrderAtomicDetailView,
    },
    {
      path: "/create/order/notes",
      name: "create_order_notes",
      component: CreateOrderNotesView,
    },
  ],
});

export default router;
