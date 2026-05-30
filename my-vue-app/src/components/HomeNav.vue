<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav class="home-nav">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
    </nav>
</template>
