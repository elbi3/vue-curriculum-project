<script setup lang="ts">
import { ref, computed } from "vue";

// const weatherRef = ref([79, "sunny"]);
const shouldCrash = ref(false);

const simulateCrash = () => {
    shouldCrash.value = true;
};

const weatherRef = computed(() => {
    if(shouldCrash.value) {
        throw new Error("Corrupted weather data received from server! oh no!");
    }
    return [79, "sunny"];
});
</script>

<template>

    <div class="weather-widget">
        <h3>🌤 Weather Widget</h3>
        <p>Temperature Today: <span class="emphasis">
            {{weatherRef[0]}}°F
        </span></p>
        <p>Condition Outside: <span class="emphasis">{{weatherRef[1]}}</span></p>
        <button class="bad" @click="simulateCrash">Simulate Bad Data 😈</button>
    </div>
</template>

<style>
    .bad {
        background-color: thistle;
        border-radius: .25rem;
        border: 2px solid darkmagenta;
    }
    .emphasis {
        font-weight: 700;
    }
</style>