<script setup lang="ts">
import { computed, } from "vue";
import { RouterLink, RouterView } from 'vue-router';
import BackButton from '@/components/BackButton.vue';
import HomeNav from '@/components/HomeNav.vue';
import { useWindowSize } from "@/composables/useWindowSize";
const { width, height } = useWindowSize();

const colorChange = computed(() => {
    return width.value < 600 ? "goldenrod" : "aliceblue";
});
</script>

<template>
    <RouterLink to="/">🐾</RouterLink>
    <header class="home-header">
        <h1 class="home-title">Vue App Playground</h1>
    </header>
    <nav class="home-window">
        <HomeNav />
        <BackButton />
    </nav>
    <main class="home-main" :style="{backgroundColor: colorChange}">
        <RouterView />
    </main>
    <footer class="home-footer">

    </footer>
</template>