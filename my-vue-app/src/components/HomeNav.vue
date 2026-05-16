<script setup lang="ts">
import { RouterLink } from 'vue-router';
import ThemeToggle from '@/components/ThemeToggle.vue';
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <ThemeToggle />
    </nav>
</template>
