<script setup>
import logo from './assets/logo.png';
// const logoUrl = chrome.runtime.getURL(logo);
</script>

<template>
  <img :src="logo" className='logo' alt='logo' />
</template>

<style scoped>
.logo {
 width: 20px;
 height: 20px;
}

</style>
