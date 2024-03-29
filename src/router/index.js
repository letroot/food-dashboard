import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CreateOrderView from "../views/CreateOrderView.vue";
import CreateVendorView from "../views/CreateVendorView.vue";
import OrderListView from "../views/OrderListView.vue";
import LoginView from "../views/LoginView.vue";
import { useUserStore } from "../stores/userStore";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  linkActiveClass: "active",
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginView,
    },
    {
      path: "/",
      name: "dashboard",
      component: HomeView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/create/order",
      name: "create-order",
      component: CreateOrderView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/create/vendor",
      name: "create-vendor",
      component: CreateVendorView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/orders",
      name: "list-orders",
      component: OrderListView,
      meta: {
        requiresAuth: true,
      },
    },
  ],
});

router.beforeEach(async (to, from, next) => {
  const userStore = useUserStore();
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  if (requiresAuth && !userStore.isAuthenticated) {
    console.log(
      "See, I work bro. You're simply not logged in. Why do you keep doing this?"
    );
    next("login");
  } else {
    next();
  }
});

export default router;
