<script setup>
import logo from './assets/logo.png';
// const logoUrl = chrome.runtime.getURL(logo);


</script>

<template>

  <div class="bg-[pink] w-[200px] h-[200px]">
    111
    <img :src="logo" className='logo' alt='logo' />
  </div>

</template>

<style scoped>
.logo {
 width: 20px;
 height: 20px;
}

</style>
