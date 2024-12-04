
<template>
hello
<h1>{{ count }}</h1>
<button @click="test">点击</button>
<div class="test">
  <div>
    less
  </div>
</div>
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

.test {
 >div {
  color: purple;
  font-weight: bold;
 }
}
</style>
