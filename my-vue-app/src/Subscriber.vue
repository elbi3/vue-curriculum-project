<script setup lang="ts">
import { useSubscriberStore } from "@/stores/subscriberStore.js"; //@ is an alias for "src"

const subscriber = useSubscriberStore();
</script>

<template>
    <input v-model="subscriber.contact.phone">
</template>

<style>

</style>