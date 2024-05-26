<template>
    <div>
        <label for="name">名前:</label>
        <input type="text" id="name" v-model="formData.name" />

        <label for="email">メールアドレス:</label>
        <input type="email" id="email" v-model="formData.email" />

        <button @click="submitForm">送信</button>
    </div>
</template>

<script>
import { useTableStore } from '@/stores/table.store';

export default {
    setup() {
        const store = useTableStore();
        const formData = ref(store.state.formData);

        const submitForm = () => {
            store.actions.addData(formData.value);
            store.actions.updateFormData({ name: '', email: '' });
        };

        return {
            formData,
            submitForm,
        };
    },
};
</script>
