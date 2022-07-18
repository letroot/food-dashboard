<script setup>
import { ref } from "vue";
import { capitalize } from "lodash";

const userProfile = JSON.parse(localStorage.getItem("user-profile"));
const adminName = `${capitalize(userProfile.firstname)} ${capitalize(
  userProfile.lastname
)}`;

let toggleProfile = ref(false);

function logoutUser() {}

console.log(userProfile);
</script>

<template>
  <div
    class="flex py-4 px-4 items-center bg-white border-b-2 border-slate-100 tracking-tight"
  >
    <img src="../assets/img/jemi.png" alt="Jemi Eats logo" class="h-12 block" />
    <form class="ml-20 w-2/5">
      <div class="relative">
        <div
          class="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none"
        >
          <svg
            class="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </div>
        <input
          type="search"
          id="search"
          class="block p-3 pl-10 w-full text-sm text-gray-700 bg-slate-100 rounded-md border-gray-50 focus:ring-slate-100 focus:border-slate-100"
          placeholder="Search"
          required
        />
      </div>
    </form>
    <div class="ml-auto flex items-center">
      <span class="relative block bg-red-50 p-2 rounded-sm">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="black"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
          />
        </svg>
        <span
          class="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-xs font-normal leading-none text-white transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-xl"
          >10</span
        >
      </span>

      <div class="flex ml-12 items-center">
        <img
          class="inline object-cover w-10 h-10 mr-2 rounded-full border-2 border-red-400"
          src="https://images.pexels.com/photos/2589653/pexels-photo-2589653.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          alt="Profile image"
        />

        <div class="flex flex-col leading-tight relative">
          <span class="text-gray-800 text-sm font-semibold"
            >{{ adminName }}
          </span>
          <span class="text-gray-400 text-xs font-normal">Admin</span>
          <ul
            v-show="toggleProfile"
            class="absolute -right-8 top-10 shadow-lg bg-slate-50 transition-all"
          >
            <li class="rounded-md text-gray-800 text-sm">
              <button @click="logoutUser" class="px-6 py-2">Logout</button>
            </li>
          </ul>
        </div>

        <button @click="toggleProfile = !toggleProfile">
          <span class="relative block bg-red-50 p-0.5 rounded-full ml-5 mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="black"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </span>
        </button>
      </div>
    </div>
  </div>
</template>

<style></style>
