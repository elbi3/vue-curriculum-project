<script setup lang="ts">
import { inject } from 'vue';

const topUser = inject("mpc");
</script>

<template>
    <div class="tiny-card-wrapper">
        <p>{{topUser?.name}}</p>
        <p>{{topUser?.email}}</p>
    </div>
</template>

<style scoped>
.tiny-card-wrapper {
    border: 2px solid orchid;
    padding: .3rem;
    margin-bottom: .5rem;
}
</style>