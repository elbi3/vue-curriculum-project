<script setup lang="ts">
import { ref } from "vue";

const emoji = ref("🌝");

function onToggle() {
    emoji.value = emoji.value === "🌝" ? "🌚" : "🌝";
    const current = document.documentElement.getAttribute("data-theme")
    if(current === "light") {
        document.documentElement.setAttribute('data-theme', 'dark')
    } else {
        document.documentElement.setAttribute('data-theme', 'light')
    };
};
</script>

<template>
    <button class="button-toggle" @click="onToggle">mode: {{emoji}}</button>
</template>

<style scoped>
    .button-toggle {
        border: 2px solid yellow;
    }
</style>