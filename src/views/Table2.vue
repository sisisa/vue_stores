<template>
    <!-- 应用程序的主要容器 -->
    <div class="app">
        <!-- 路由视图，用于显示不同的页面组件 -->
        <!-- 输入数据的标题 -->
        <h1 class="input-data">入力データ</h1>

        <!-- 数据表格 -->
        <table>
            <thead>
                <tr>
                    <th>id</th>
                    <th>名前</th>
                    <th>年齢</th>
                    <th>性別</th>
                </tr>
            </thead>
            <tbody>
                <!-- 遍历表格数据数组，为每个条目生成一行 -->
                <tr v-for="(register, index) in tableData" :key="index">
                    <td>{{ register.field0 }}</td>
                    <td>{{ register.field1 }}</td>
                    <td>{{ register.field2 }}</td>
                    <td>{{ register.field3 }}</td>
                </tr>
            </tbody>
        </table>

        <!-- 根据isPassing的值，动态设置标题的颜色和内容 -->
        <h2 :style="{ color: isPassing ? '' : 'red' }">
            データ入力完了
        </h2>


        <!-- テーブルの下に配置するボタン -->
        <RouterLink to="/">
            <button class="form_botton" @click="reload()">フォーム</button>
        </RouterLink>
    </div>
</template>



<script>
export default {
    data() {
        return {
            tableData: [], // 初始化tableData为空数组
            nextField0: 1,
        };
    },
    watch: {
        // 监视$route，当路由参数发生变化时触发
        $route(to, from) {
            // 检查query参数field0, field1, field2, field3是否存在
            if (to.query.field1 && to.query.field2 && to.query.field3) {
                this.addDataToTable(to.query.field1, to.query.field2, to.query.field3);
            }
        },
    },
    created() {
        // 组件创建时检查query参数field0, field1, field2, field3是否存在
        if (this.$route.query.field1 && this.$route.query.field2 && this.$route.query.field3) {
            this.addDataToTable(this.$route.query.field1, this.$route.query.field2, this.$route.query.field3);

        }
    },
    methods: {
        addDataToTable(field1, field2, field3) {
            // 将新数据添加到tableData中，并将field0自动增加
            this.tableData.push({
                field0: this.nextField0++,
                field1,
                field2,
                field3
            });
        }
    }
};

</script>

<style>
.app {
    font-family: Arial, sans-serif;
    padding: 20px;
}

.input-data {
    font-weight: bold;
}

table {
    width: 100%;
    border-collapse: collapse;
}

th,
td {
    border: 1px solid #ddd;
    padding: 8px;
    text-align: left;
}

th {
    background-color: #f2f2f2;
}

.form_botton {
    background-color: black;
}
</style>