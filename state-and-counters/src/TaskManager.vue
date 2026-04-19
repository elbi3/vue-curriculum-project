<script setup lang="ts">
import { ref } from "vue";
const checkedTasks = ref([]);
</script>

<template>
    <input type="checkbox" class="task-check">
    <label for="task">dynamic task name</label>

</template>

<style>

</style>