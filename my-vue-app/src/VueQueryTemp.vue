<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import { ref, computed } from "vue";

const dogBreedId = ref("036feed0-da8a-42c9-ab9a-57449b530b13");

const apiLink = "https://dogapi.dog/api/v2";
const {isPending: breedsPending, isError: breedsError, data: breedsData, error: breedsErr} = useQuery({
    queryKey: ["breeds"], 
    queryFn: fetchDogBreeds
});
const {isPending: breedPending, isError: breedError, data: breedData, error: breedErr} = useQuery({
    queryKey: ["breeds", dogBreedId], 
    queryFn: fetchDogBreedsId,
    enabled: computed(() => !!dogBreedId.value)
});
const {isPending: factsPending, isError: factsError, data: factsData, error: factsErr} = useQuery({
    queryKey: ["facts"], 
    queryFn: fetchDogFacts
});
const {isPending: groupsPending, isError: groupsError, data: groupsData, error: groupsErr} = useQuery({
    queryKey: ["groups"], 
    queryFn: fetchDogGroups
});
async function fetchDogBreeds(){
    const response = await fetch(`${apiLink}/breeds`);
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
};
async function fetchDogBreedsId(){
    const response = await fetch(`${apiLink}/breeds/${dogBreedId.value}`);//I thought ref was different than this?
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
};
async function fetchDogFacts(){
    const response = await fetch(`${apiLink}/facts`);
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
};
async function fetchDogGroups(){
    const response = await fetch(`${apiLink}/groups`);
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
};
</script>

<template>
    <div>
        <!-- {{breedsData.data[0]}} -->
        {{breedData}}
         <!-- {{factsData}} -->
         <!-- {{groupsData}} -->
    </div>
</template>

<style>

</style>