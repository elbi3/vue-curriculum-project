<script setup lang="ts">
import SillyWidget from '@/components/SillyWidget.vue';
import SillyWidget2 from '@/components/SillyWidget2.vue';
import ErrorBoundary from '@/components/ErrorBoundary.vue';

</script>

<template>
    <div class="widgets">
        <ErrorBoundary>
            <SillyWidget />
        </ErrorBoundary>

            <SillyWidget2 />

    </div>

</template>

<style>
.widgets {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}
</style>