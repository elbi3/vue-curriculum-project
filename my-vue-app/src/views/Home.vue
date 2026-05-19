<script setup lang="ts">
import Counter from '@/components/Counter.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>

    </nav>
    <main class="home-main">
        <h2>hello! this is a learning space for the Vue metaframework</h2>
        <p>if you would like to see code to study any of the following topics, hit the links :D</p>
        <ul>
            <li><RouterLink to="/dogs">Take me to see stuff about dogs!</RouterLink></li>
            <li><RouterLink to="/shopping">I want to see my shopping list!</RouterLink></li>
            <li><RouterLink to="/tasks">I want to see my task manager app!</RouterLink></li>
            <li><RouterLink to="/subscriber">I would like to change my subscriber status.</RouterLink></li>
            <li><RouterLink to="/user-profile">I want to update my address.</RouterLink></li>
            <li><RouterLink to="/gallery">Let's look at the recipe gallery.</RouterLink></li>
            <li><RouterLink to="/gallery">Gallery</RouterLink></li>
            <li><RouterLink to="/gallery">Gallery</RouterLink></li>
            <li><RouterLink to="/gallery">Gallery</RouterLink></li>
            <li><RouterLink to="/gallery">Gallery</RouterLink></li>

        </ul>
        <RouterView />
    </main>

</template>

