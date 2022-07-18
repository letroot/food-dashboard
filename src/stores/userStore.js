import { defineStore } from "pinia";
import router from "../router";
import axios from "axios";

export const useUserStore = defineStore({
  id: "userstore",
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated() {
      return !!this.user;
    },
  },
  actions: {
    loginUser(user) {
      this.user = user;
      return this.user;
    },
    logoutUser() {
      this.user = null;
      router.push("/login");
    },
  },
  persist: true,
});

export const useOrderStore = defineStore({
  id: "orderstore",
  state: () => ({
    orders: {},
  }),
  getters: {
    getOrders() {
      try {
        const response = axios.get(
          "https://jemi-eats.herokuapp.com/"
        );
        return response;
      } catch (err) {
        console.log(err);
      }
    },
  },
  actions: {},
  // persist: true,
});
