<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterView } from "vue-router";

const topUser = ref({
    name: "Heidi",
    email: "something-something77@fastest.mail",
  });

provide("mpc", topUser);
</script>

<template>
  <RouterView />
</template>

