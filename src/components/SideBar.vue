<script setup>
// import { BeakerIcon } from "@heroicons/vue/solid";


</script>

<!-- TODO -->
<!-- Use loop to populate sidebar list -->

<!-- TODO -->
<!-- Replace SVGs with HeroIcon components -->

<template>
  <aside class="w-64 min-h-full" aria-label="Sidebar">
    <div class="py-4 px-3 bg-white border-r-2 border-slate-50 rounded">
      <ul class="space-y-2">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-sm font-normal transition duration-75 text-gray-600 rounded-lg hover:bg-red-100 hover:text-pink-700 hover:font-semibold"
          >
            <svg
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
              <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
            </svg>
            <span class="ml-3">Dashboard</span>
          </a>
        </li>

        <li>
          <button
            type="button"
            class="flex items-center p-2 w-full text-sm font-normal transition duration-75 text-gray-600 rounded-lg hover:bg-red-100 hover:text-pink-700 hover:font-semibold"
            aria-controls="dropdown-orders"
            data-collapse-toggle="dropdown-orders"
          >
            <svg
              class="flex-shrink-0 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                clip-rule="evenodd"
              ></path>
            </svg>
            <span
              class="flex-1 ml-3 text-left whitespace-nowrap "
              sidebar-toggle-item
              >Orders</span
            >
            <svg
              sidebar-toggle-item
              class="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
          <ul id="dropdown-orders" class="hidden py-2 space-y-2">
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-600 rounded-lg transition duration-75 group hover:bg-red-100 hover:text-pink-700"
                >Create orders</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-600 rounded-lg transition duration-75 group hover:bg-red-100 hover:text-pink-700"
                >All orders</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-600 rounded-lg transition duration-75 group hover:bg-red-100 hover:text-pink-700"
                >Gifted orders</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-600 rounded-lg transition duration-75 group hover:bg-red-100 hover:text-pink-700"
                >Scheduled orders</a
              >
            </li>
            <li>
              <a
                href="#"
                class="flex items-center p-2 pl-11 w-full text-sm font-normal text-gray-600 rounded-lg transition duration-75 group hover:bg-red-100 hover:text-pink-700"
                >Group orders</a
              >
            </li>
          </ul>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-sm font-normal transition duration-75 text-gray-600 rounded-lg hover:bg-red-100 hover:text-pink-700 hover:font-semibold"
          >
            <svg
              class="flex-shrink-0 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Vendors</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-sm font-normal transition duration-75 text-gray-600 rounded-lg hover:bg-red-100 hover:text-pink-700 hover:font-semibold"
          >
            <svg
              class="flex-shrink-0 w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.707 7.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l2-2a1 1 0 00-1.414-1.414L11 7.586V3a1 1 0 10-2 0v4.586l-.293-.293z"
              ></path>
              <path
                d="M3 5a2 2 0 012-2h1a1 1 0 010 2H5v7h2l1 2h4l1-2h2V5h-1a1 1 0 110-2h1a2 2 0 012 2v10a2 2 0 01-2 2H5a2 2 0 01-2-2V5z"
              ></path>
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Deliveries</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-sm font-normal transition duration-75 text-gray-600 rounded-lg hover:bg-red-100 hover:text-pink-700 hover:font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Menu</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-sm font-normal transition duration-75 text-gray-600 rounded-lg hover:bg-red-100 hover:text-pink-700 hover:font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Chats</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-sm font-normal transition duration-75 text-gray-600 rounded-lg hover:bg-red-100 hover:text-pink-700 hover:font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">KPI</span>
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-sm font-normal transition duration-75 text-gray-600 rounded-lg hover:bg-red-100 hover:text-pink-700 hover:font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Users</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="flex items-center p-2 text-sm font-normal transition duration-75 text-gray-600 rounded-lg hover:bg-red-100 hover:text-pink-700 hover:font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">JemiEats Staff</span>
          </a>
        </li>

        <li>
          <a
            href="#"
            class="flex items-center p-2 text-sm font-normal transition duration-75 text-gray-600 rounded-lg hover:bg-red-100 hover:text-pink-700 hover:font-semibold"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clip-rule="evenodd"
              />
            </svg>
            <span class="flex-1 ml-3 whitespace-nowrap">Settings</span>
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<style></style>
