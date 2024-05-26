<script setup>
import { useStoreCounter } from '../stores/InputStore';
const counter = inputStore();

const patch = () => {
    counter.$patch({
        count: 100,
        user: {
            name: 'Jane Doe',
        },
    });
};
</script>

<template>
    <h2>Hello Pinia</h2>
    <p>カウント:{{ counter.count }}</p>
    <button @click="patch">Patch</button>
</template>