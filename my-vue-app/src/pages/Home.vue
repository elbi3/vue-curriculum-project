<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <main class="home-main">
        <h2>hello! this is a learning space for the Vue metaframework</h2>
        <nav class="topical-site-navigation">
            <ul class="home-content-links">
                <li><RouterLink to="/dogs">➡️ Take me to see stuff about dogs!</RouterLink></li>
                <li><RouterLink to="/shopping">➡️ I want to see my shopping list!</RouterLink></li>
                <li><RouterLink to="/tasks">➡️ I want to see my task manager app!</RouterLink></li>
                <li><RouterLink to="/subscriber">➡️ I would like to change my subscriber status.</RouterLink></li>
                <li><RouterLink to="/user-profile">➡️ I want to update my address.</RouterLink></li>
                <li><RouterLink to="/gallery">➡️ Let's look at the recipe gallery.</RouterLink></li>
                <li><RouterLink to="/blog">➡️ I want to look at the blog.</RouterLink></li>
                <li><RouterLink to="/counter">➡️ I want play with counters.</RouterLink></li>
            </ul>
        </nav>
        <RouterView />
    </main>

</template>

