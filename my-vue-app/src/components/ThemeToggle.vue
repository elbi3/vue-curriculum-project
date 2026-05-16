<script setup lang="ts">
import { ref } from "vue";

const emoji = ref("🌝");

function onToggle() {
    emoji.value = emoji.value === "🌝" ? "🌚" : "🌝";
};
</script>

<template>
    <button class="button-toggle" @click="onToggle">mode: {{emoji}}</button>
</template>

<style>
    .button-toggle {
        border: 2px solid yellow;
    }
</style>