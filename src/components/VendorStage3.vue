<script setup>
defineEmits(["nextStage"]);
</script>

<template>
  <div class="flex flex-col pt-12 px-12 w-full text-gray-800">
    <div id="form-header" class="flex flex-col">
      <span class="text-xl text-gray-800 font-semibold">Store Information</span>
      <span class="text-xs text-gray-500 mt-1"
        >Please create an account to continue
      </span>
    </div>
    <hr class="border-slate-200 w-full mt-8" />

    <div class="mt-8 flex flex-col">
      <form @submit.prevent="$emit('nextStage')">
        <div class="flex space-x-12">
          <div>
            <label for="order-type" class="text-xs">Store address</label>
            <div class="flex">
              <div class="mt-1 xl:w-72">
                <input
                  type="text"
                  class="appearance-none block w-full px-3 py-1.5 text-sm font-normal text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label for="order-type" class="text-xs">Website</label>
            <div class="flex">
              <div class="mt-1 xl:w-72">
                <input
                  type="url"
                  class="appearance-none block w-full px-3 py-1.5 text-sm font-normal text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex mt-4 space-x-12">
          <div>
            <label for="order-type" class="text-xs">Social media</label>
            <div class="flex">
              <div class="mt-1 xl:w-72">
                <input
                  type="text"
                  class="appearance-none block w-full px-3 py-1.5 text-sm font-normal text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>
          </div>

          <div>
            <label for="order-type" class="text-xs">Store type</label>
            <div class="flex">
              <div class="mt-1 xl:w-72">
                <select
                  class="appearance-none block w-full px-3 py-1.5 text-sm font-normal text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
                >
                  <option value="type">Restaurant</option>
                </select>
              </div>
            </div>
          </div>
        </div>

        <div class="flex mt-4 space-x-12">
          <div>
            <label for="order-type" class="text-xs">Category</label>
            <div class="flex">
              <div class="mt-1 xl:w-72">
                <input
                  type="text"
                  class="appearance-none block w-full px-3 py-1.5 text-sm font-normal text-gray-500 bg-white bg-clip-padding bg-no-repeat border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-red-500 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>

        <div class="flex flex-col mt-10">
          <div></div>
        </div>

        <button
          type="submit"
          class="inline-block mt-10 px-32 py-3 bg-pink-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-pink-700 hover:shadow-lg focus:bg-pink-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-pink-800 active:shadow-lg transition duration-150 ease-in-out"
        >
          Continue
        </button>
      </form>
    </div>
  </div>
</template>

<style></style>
