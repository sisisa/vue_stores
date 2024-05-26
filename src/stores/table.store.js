import { defineStore } from 'pinia';

export const useTableStore = defineStore('table', {
  state: () => {
    return {
      data: [],
      formData: {
        name: '',
        email: '',
      },
    };
  },
  actions: {
    addData(newData) {
      this.data.push(newData);
    },
    updateFormData(newFormData) {
      this.formData = newFormData;
    },
  },
});
