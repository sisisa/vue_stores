<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import { ref } from 'vue';

import { inputStore } from './stores/InputStore';
const counter = inputStore();

</script>

<template>
  <h1>Pinia入門</h1>
  <p>Count:{{ counter.count }}</p>
  <p>Count:{{ counter.count2 }}</p>
  <p>Count:{{ counter.age }}</p>
  <RouterView />
  <RouterLink to="/input">input</RouterLink>

</template>

<script>

</script>
<style scoped></style>