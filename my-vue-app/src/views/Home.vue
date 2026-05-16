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
            <li>forms</li>
        </ul>
        <RouterView />
    </main>

</template>

