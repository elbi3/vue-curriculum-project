<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/gallery">Gallery</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
    </nav>
</template>

<style>
/* vue gives you an active class for RouterLink: */
.router-link-active {
  font-weight: bold;
}
</style>