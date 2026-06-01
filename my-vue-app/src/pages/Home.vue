<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from 'vue-router';
import { useWindowSize } from "@/composables/useWindowSize";
import Chart from "@/components/Chart.vue";
const { width, height } = useWindowSize();

const colorChange = computed(() => {
    return width.value < 600 ? "papayawhip" : "aliceblue";
});

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
        <div class="home-window" :style="{backgroundColor: colorChange}">
            <h3>Resize the browser!</h3>
            <p>Width: {{width}}</p>
            <p>Height: {{height}}</p>
        </div>
        <RouterView />
        <div>
            <Chart/>
        </div>
    </main>

</template>

