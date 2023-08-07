<template>
  <div class="pt-[65px]  h-screen">
      <div class="w-full lg:w-[800px] mx-auto px-5 flex flex-col gap-4 items-center">
        <div class="h-[10rem] w-full lg:aspect-square lg:w-[24rem]    bg-hero bg-cover "></div>
        <div class="flex flex-col gap-4">
          <h2 class="text-3xl font-bold text-white">Two Entry only</h2>
            <input class="py-2 px-3.5 rounded-s-md" type="text" placeholder="Enter your name">
            <button class="py-2 px-3.5 bg-red-500 font-semibold rounded-md text-white">CLICK TO ENTER</button>
        </div>
        <div class="flex flex-col gap-4">
          
            <input class="py-2 px-3.5 rounded-s-md" type="text" placeholder="Enter your Wish">
            <button class="py-2 px-3.5 bg-red-500 font-semibold rounded-md text-white">CLICK TO WISH</button>
        </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "HomeView",
  components: {},
};
</script>
