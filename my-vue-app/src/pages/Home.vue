<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from 'vue-router';
import { useLocalStorage } from "@vueuse/core";
import { useWindowSize } from "@/composables/useWindowSize";
import Chart from "@/components/Chart.vue";
const { width, height } = useWindowSize();

const colorChange = computed(() => {
    return width.value < 600 ? "papayawhip" : "aliceblue";
});

const accessibilityView  = useLocalStorage(
    "accessibility-view",
    false
);
</script>

<template>
    <main class="home-main">
        <h2>hello! this is a learning space for the Vue metaframework</h2>
        <div class="accessibility-demo-container">
            <label for="accessibility-toggle" class="toggle reluctant">
                <input name="accessibility-toggle" type="checkbox" v-model="accessibilityView">
                ⬇️ Show this section bigger ⬇️
            </label>
            <nav class="topical-site-navigation">
                <ul class="home-content-links" :class="{ accessibility: accessibilityView}">
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
        </div>
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

<style>
.check {
    color: green;
}
</style>