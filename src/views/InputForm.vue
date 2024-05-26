<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue';
import { inputStore } from '../stores/InputStore';
const counter = inputStore();

</script>

<template>
    <div class="wrapper">
        <nav>
            <h1 class="input-data">入力フォーム</h1>
            <form>
                <div class="form-group">
                    名前:<input type="text" id="name" name="name" v-model="formData.field1" class="input-form" />
                </div>

                <div class="form-group">
                    <label for="age">年齢:{{ counter.age }}</label>
                    <input type="number" id="age" v-model="formData.field2" class="input-form" />
                </div>

                <div class="form-group">
                    性別:<select name="gender" id="gender" v-model="formData.field3" class="input-form">
                        <option value="">性別:</option>
                        <option value="男性">男性</option>
                        <option value="女性">女性</option>
                        <option value="未記入">未記入</option>
                    </select>
                </div>
                <RouterLink to="/"><button class="register-button2" @click="reload()">戻る</button></RouterLink>
                <RouterLink :to="{ name: 'table2', query: formData }">
                    <button type="submit" class="register-button" @click="handleSubmit">
                        登録
                    </button>
                </RouterLink>
            </form>
        </nav>
    </div>
    <RouterView />
</template>

<script>
export default {
    // 定义组件的数据
    data() {
        return {
            // 表单数据对象，包含四个字段：field0、field1、field2、field3
            formData: {
                field0: '',
                field1: '',
                field2: '',
                field3: '',
            },
        };
    },
    methods: {
        // 提交表单的方法
        handleSubmit() {
            // 在控制台输出提交的表单数据
            console.log('Form submitted:', this.formData);
        },
    },
};

</script>
<style scoped>
.wrapper {
    width: 100%;
    max-width: 600px;
    text-align: center;
}

.input-form {
    display: flex;
    padding: 7px 25px;
    /* border-radius: 7px; */
    border: none;
    border-bottom: 4px solid white;
    background-color: gray;
    font-size: 16px;
    font-weight: bold;
    color: white;
    cursor: pointer;
}

.input-data {
    font-weight: bold;
}

.input-form:active {
    margin-top: 3px;
    /* background-color:black; */
    border-bottom: 2px solid #006366;
    background-color: black;
}


.register-button {
    border: 0;
    border-radius: 5px;
    background: #4676D7;
    color: #fff;
    padding: 8px 16px;
    font-size: 16px;
}

.register-button2 {
    border: 0;
    border-radius: 5px;
    background: red;
    color: #fff;
    padding: 8px 16px;
    font-size: 16px;
}

header {
    line-height: 1.5;
    max-height: 100vh;
}

.logo {
    display: block;
    margin: 0 auto 2rem;
}

nav {
    width: 100%;
    font-size: 12px;
    text-align: center;
    margin-top: 2rem;
}

nav a.router-link-exact-active {
    color: var(--color-text);
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
    border: 0;
}

@media (min-width: 1024px) {
    header {
        display: flex;
        place-items: center;
        padding-right: calc(var(--section-gap) / 2);
    }

    .logo {
        margin: 0 2rem 0 0;
    }

    header .wrapper {
        display: flex;
        place-items: flex-start;
        flex-wrap: wrap;
    }

    nav {
        text-align: left;
        margin-left: -1rem;
        font-size: 1rem;

        padding: 1rem 0;
        margin-top: 1rem;
    }
}
</style>