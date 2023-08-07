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
        "https://paypou.com/EJof/22879904",
        "https://shrtq.com/kKSS/22879904",
        "https://shrtq.com/kKSS/22879904",
        "https://cutpu.com/S0YZ/22879904",
        "https://urlef.com/qUmE/22879904",
        "https://recutt.com/RdpO/22879904",
        "https://paypou.com/xTdv/22879904",
        "https://shrtq.com/4leq/22879904",
        "https://cutpu.com/WCRG/22879904",
        "https://urlef.com/AgcS/22879904",
        "https://recutt.com/OHlf/22879904",
        "https://paypou.com/5Jn/22879904",
        "https://shrtq.com/SCH/22879904",
        "https://cutpu.com/Hwo/22879904",
        "https://urlef.com/7RJ/22879904",
        "https://recutt.com/OJB/22879904",
        "https://paypou.com/ocKGM/22879904",
        "https://shrtq.com/2xDfM/22879904",
        "https://cutpu.com/i25F0/22879904",
        "https://urlef.com/nEMz7/22879904",
        "https://recutt.com/C7rtI/22879904",

        // Add more links as needed
      ],
      pastepeso2: [
      "https://paypou.com/Hy4/22879904",
        "https://shrtq.com/Bln/22879904",
        "https://cutpu.com/vaM/22879904",
        "https://urlef.com/wTK/22879904",
        "https://recutt.com/ymk/22879904",
        "https://paypou.com/SZ64V/22879904",
        "https://shrtq.com/ZtojZ/22879904",
        "https://cutpu.com/JyqHA/22879904",
        "https://urlef.com/K3Vp6/22879904",
        "https://recutt.com/M8vac/22879904",
        "https://paypou.com/AUcK/22879904",
        "https://shrtq.com/ApAs/22879904",
        "https://cutpu.com/IO5q/22879904",
        "https://urlef.com/LWBq/22879904",
        "https://recutt.com/pvQ6/22879904",
        "https://paypou.com/Agm/22879904",
        "https://shrtq.com/lM1/22879904",
        "https://cutpu.com/zwV/22879904",
        "https://urlef.com/EJO/22879904",
        "https://recutt.com/ezp/22879904",
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
      alert('You succesfully joined')
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
