<template>
  <div class="pt-[65px] h-screen">
    <div class="w-full lg:w-[800px] mx-auto px-5 flex flex-col gap-4 items-center">
      <div class="h-[10rem] w-full lg:aspect-square lg:w-[24rem] bg-hero bg-cover"></div>
      <div class="flex flex-col gap-4">
        <h2 class="text-3xl font-bold text-white">Two Entry only</h2>
        <input class="py-2 px-3.5 rounded-s-md" type="text" placeholder="Enter your name">
        <button v-if="remainingLinks1.length > 0" @click="openRandomLink1" class="py-2 px-3.5 bg-red-500 font-semibold rounded-md text-white">CLICK TO ENTER</button>
      </div>
      <div class="flex flex-col gap-4">
        <input class="py-2 px-3.5 rounded-s-md" type="text" placeholder="Enter your Wish">
        <button v-if="remainingLinks2.length > 0" @click="openRandomLink2" class="py-2 px-3.5 bg-red-500 font-semibold rounded-md text-white">CLICK TO WISH</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      pastepeso1: [
        "https://example.com",
        "https://google.com",
        "https://github.com",
        "https://youtube.com",
        // Add more links as needed
      ],
      pastepeso2: [
        "https://example.com",
        "https://google.com",
        "https://github.com",
        "https://youtube.com",
        // Add more links as needed
      ],
    };
  },
  computed: {
    remainingLinks1() {
      return this.pastepeso1.filter(link => !this.isLinkClicked(link));
    },
    remainingLinks2() {
      return this.pastepeso2.filter(link => !this.isLinkClicked(link));
    },
  },
  methods: {
    isLinkClicked(link) {
      const clickedLinks = JSON.parse(localStorage.getItem('clickedLinks')) || [];
      return clickedLinks.includes(link);
    },
    openRandomLink(remainingLinks) {
      if (remainingLinks.length > 0) {
        const randomIndex = Math.floor(Math.random() * remainingLinks.length);
        const randomLink = remainingLinks[randomIndex];
        this.openLinkInNewTab(randomLink);
        this.markLinkAsClicked(randomLink);
      }
    },
    openRandomLink1() {
      this.openRandomLink(this.remainingLinks1);
    },
    openRandomLink2() {
      this.openRandomLink(this.remainingLinks2);
    },
    openLinkInNewTab(link) {
      window.open(link, '_blank');
    },
    markLinkAsClicked(link) {
      const clickedLinks = JSON.parse(localStorage.getItem('clickedLinks')) || [];
      clickedLinks.push(link);
      localStorage.setItem('clickedLinks', JSON.stringify(clickedLinks));
    },
  },
};
</script>
