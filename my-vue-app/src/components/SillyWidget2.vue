<script setup lang="ts">
import { ref } from "vue";

const weatherRef = ref([67, "poor air quality!"]);

const simulateCrash = () => {
    throw new Error("Corrupted weather data received from server! oh no!");
};
</script>

<template>

    <div class="weather-widget">
        <h3>🌤 Air Quality Widget</h3>
        <p>Temperature Today: <span class="emphasis">{{weatherRef[0]}}°F</span></p>
        <p>Condition Outside: <span class="emphasis">{{weatherRef[1]}}</span></p>
        <button @click="simulateCrash">Simulate Bad Data 😈</button>
    </div>
</template>

<style>
.weather-widget {
    border: 3px solid goldenrod;
    background-color: lemonchiffon;
    border-radius: .3rem;
    padding: .5rem;
}
    .emphasis {
        font-weight: 700;
    }
</style>