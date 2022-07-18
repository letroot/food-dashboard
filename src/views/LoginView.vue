<script setup>
import axios from "axios";
import { ref } from "vue";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/userStore";

const userStore = useUserStore();

const router = useRouter();
let email = ref("");
let password = ref("");

async function loginHandler() {
  try {
    const response = await axios.post(
      "https://jemi-eats.herokuapp.com/users/login",
      {
        emailorMobile: email.value,
        password: password.value,
      }
    );
    userStore.loginUser(response.data.data.user);
    router.push("/");
  } catch (err) {
    console.log(err);
    alert("Username or password wrong");
  }
}
</script>

<template>
  <div>
    <div class="flex flex-col w-1/3 justify-center mx-auto mt-48">
      <h3 class="text-3xl font-semibold text-gray-700">Admin Login</h3>

      <form class="mt-3" @submit.prevent="loginHandler">
        <div class="mb-6">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-700"
            >Your email
          </label>
          <input
            type="email"
            id="email"
            class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5"
            placeholder="Your email address"
            v-model="email"
            required=""
          />
        </div>
        <div class="mb-6">
          <label
            for="password"
            class="block mb-2 text-sm font-medium text-gray-700 dark:text-gray-300"
            >Your password</label
          >
          <input
            type="password"
            id="password"
            v-model="password"
            class="bg-gray-50 border border-gray-300 text-gray-700 text-sm rounded-lg focus:ring-pink-500 focus:border-pink-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-pink-500 dark:focus:border-pink-500"
            required=""
          />
        </div>

        <button
          type="submit"
          class="text-white bg-pink-700 hover:bg-pink-800 focus:ring-4 focus:outline-none focus:ring-pink-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-pink-600 dark:hover:bg-pink-700 dark:focus:ring-pink-800"
        >
          Submit
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>
