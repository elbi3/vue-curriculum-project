<script setup lang="ts">
import Counter from '@/components/Counter.vue';
import { RouterLink, RouterView } from 'vue-router';
</script>

<template>
    <RouterLink to="/">🐾</RouterLink>
    <header class="home-header">
        <h1 class="home-title">Vue App Playground</h1>
    </header>
    <nav>

    </nav>
    <main class="home-main">
        <RouterView />
    </main>
    <footer class="home-footer">

    </footer>
</template>