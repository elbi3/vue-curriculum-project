<script setup lang="ts">
import { ref, onErrorCaptured } from "vue";

const hasError = ref(false);
const errorMessage = ref("");

onErrorCaptured((err) => {
    hasError.value = true;
    errorMessage.value = err.message;
    return false //-->this prevents the error from propagating further up
});

const retry = () => {
    hasError.value = false;
    errorMessage.value = ""; //resetting both these values will cause Vue to re-evaluate
};

</script>

<template>
    <slot v-if="!hasError" />
    <div v-else class="fallback">
        <p>⚠️ Widget Unavailable</p>
        <p class="error-msg">{{errorMessage}}</p>
        <button @click="retry">Retry</button>
    </div>
</template>

<style>
.fallback{}
.error-msg{}
</style>