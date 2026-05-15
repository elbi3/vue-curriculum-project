<script setup>
import { ref, onMounted } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const post = ref(null);

onMounted(async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${route.params.id}`);
  post.value = await res.json();
})

</script>

<template>
  <div v-if="post">
    <h2>{{ post.title }}</h2>
    <p>{{ post.body }}</p>
    <button @click="router.push('/blog')">Back to blog posts</button>
  </div>
</template>