<script setup lang="ts">
import Counter from '@/components/Counter.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <nav>

    </nav>
    <main class="home-main">
        <h2>hello! this is a learning space for the Vue metaframework</h2>
        <p>if you would like to study any of the following topics, hit the links :D</p>
        <ul>
            <li>forms</li>
        </ul>
        <RouterView />
    </main>

</template>

<style>
    body {
        display: flex;
        flex-direction: column;
        background-color: gainsboro;
        color: midnightblue;
        font-family: sans-serif;
        min-height: 100vh;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
    }
    h1{
    display: flex;
    justify-content: center;
    }
    main {
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    gap: 1rem;
    }
</style>