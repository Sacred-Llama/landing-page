<template>
  <div class="bg-[#1c1b49]" id="app">
    <Navbar/>
    <div class="h-screen ">
      <router-view/>
    </div>
  </div>
</template>
<script>
import Navbar from '@/components/Navbar';

export default{
  components:{
    Navbar
  }
}
</script>
