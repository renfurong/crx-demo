
<template>
hello
<h1>{{ count }}</h1>
<button @click="test">点击</button>
</template>

<script setup>
import { ref } from 'vue'
import { useCounterStore } from '../store/counter'
import { storeToRefs } from 'pinia'

defineProps({
  msg: String,
})
const { count } = storeToRefs(useCounterStore())
const test = () => {
  useCounterStore().increment()
}
</script>


<style scoped>
.read-the-docs {
  color: #888;
}
</style>
