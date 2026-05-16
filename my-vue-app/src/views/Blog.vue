<script setup lang="ts">
import { RouterLink } from 'vue-router';
import BackButton from '@/components/BackButton.vue';
import HomeNav from '@/components/HomeNav.vue';
</script>

<template>
    <RouterLink to="/">👟</RouterLink>
    <header class="home-header">
        <h1 class="home-title">Vue App Playground</h1>
    </header>
    <nav>
        <HomeNav />
        <BackButton />
    </nav>
    <main class="home-main">
        <RouterView />
    </main>
    <footer class="home-footer">

    </footer>
</template>