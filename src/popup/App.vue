<script setup>
import logo from '../assets/logo.png';
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
<div class="w-full h-full">
  <HelloWorld></HelloWorld>
  <div class="bg-[pink] w-[200px] h-[200px]">
    111
    <img :src="logo" className='logo' alt='logo' />
  </div>

</div>
</template>

<style scoped>
.logo {
 width: 20px;
 height: 20px;
}

</style>
