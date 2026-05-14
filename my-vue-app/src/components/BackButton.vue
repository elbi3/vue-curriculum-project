<script setup lang="ts">
import { useRouter } from "vue-router";
const router = useRouter();

const goBack = () => {
  if (window.history.state?.back) {
    // alternatively: window.history.length > 1
    router.back();
  } else {
    router.push('/');
  }
}
</script>

<template>
    <button @click="goBack">back</button>
</template>