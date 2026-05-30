<script setup lang="ts">
import Input from "@/components/Input.vue";
import { h } from "vue";


const myDiv = h("div", {class:"my-div", innerHTML: "my div"});
</script>

<template>
    {{myDiv.type}}
    <div class="playground-container">
        <Input />
    </div>
</template>

<style>
.playground-container {
    display: flex;
    justify-content: center;
}
</style>