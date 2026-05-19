<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuery } from '@tanstack/vue-query';

const props = defineProps<{
  breed: {
    id: string;
    attributes: {
      name: string;
      description: string;
    };
  };
}>();

const apiLink = "https://dogapi.dog/api/v2";
const showDetail = ref(false);

const { isPending: breedPending, isError: breedError, data: breedData, error: breedErr } = useQuery({
  queryKey: ["breeds", computed(() => props.breed.id)],
  queryFn: fetchDogBreedById,
  enabled: computed(() => showDetail.value),  // only fetch when expanded
  select: (data) => data.data.attributes      // same select you already had
});

async function fetchDogBreedById({ queryKey }) {
  const [, id] = queryKey;
  const response = await fetch(`${apiLink}/breeds/${id}`);
  if (!response.ok) throw new Error("Network response was not ok");
  return response.json();
}
</script>

<template>
  <li class="breed-container">
    <h3 class="breed-names-link" @click="showDetail = !showDetail">
      🙌 {{ breed.attributes.name }} 🥰
    </h3>
    <p>{{ breed.attributes.description }}</p>

    <div v-if="showDetail">
      <p v-if="breedPending">Loading...</p>
      <p v-else-if="breedError">Error: {{ breedErr.message }}</p>
      <template v-else-if="breedData">
        <p>lifespan: {{ breedData.life.min }}–{{ breedData.life.max }}</p>
        <p>male weight: {{ breedData.male_weight.min }}–{{ breedData.male_weight.max }}</p>
        <p>female weight: {{ breedData.female_weight.min }}–{{ breedData.female_weight.max }}</p>
        <p>hypoallergenic? {{ breedData.hypoallergenic }}</p>
      </template>
    </div>
  </li>
</template>

<style scoped>
*,
*::before,
*::after {
  box-sizing: border-box;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}
.breed-container {
    background-color: aliceblue;
    border: 2px solid darkslateblue;
    border-radius: .15rem;
    margin: .5rem;
    padding: .5rem;
    list-style: none;
}
.breed-names-link {
  font-weight: bold;
  cursor: pointer;
}
</style>