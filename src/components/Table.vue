<template>
    <table>
        <thead>
            <tr>
                <th>名前</th>
                <th>メールアドレス</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item in data" :key="item.id">
                <td>{{ item.name }}</td>
                <td>{{ item.email }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import { useTableStore } from '@/stores/table.store';

export default {
    setup() {
        const store = useTableStore();
        const data = ref(store.state.data);

        return {
            data,
        };
    },
};
</script>
