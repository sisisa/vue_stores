import { defineStore } from 'pinia';

export const inputStore = defineStore('counter', {
  state: () => ({
    count: 1,
    count2: 2,
    user: {
        name: 'John Doe',
        age: '',
    },
  }),
});