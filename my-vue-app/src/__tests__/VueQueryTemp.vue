<script setup lang="ts">
import { useQuery, useMutation } from '@tanstack/vue-query';
import { ref, computed } from "vue";

const dogBreedId = ref("036feed0-da8a-42c9-ab9a-57449b530b13");

const apiLink = "https://dogapi.dog/api/v2";
const url = "https://jsonplaceholder.typicode.com/posts";

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
const {isPending: blogsPending, isError: blogssError, data: blogssData, error: blogsErr} = useQuery({
    queryKey: ["blogs"], 
    queryFn: fetchBlogs
});
const formData = {id: "23f", content: "asfasdfas"};
const thing = useMutation({mutationFn: addPost});

async function addPost(formData){
    const response = await fetch(url, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
    } );

    if(!response.ok) {
        throw new Error("Network response was not ok");
    }

    return response.json();
};
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

async function fetchBlogs(){
    const response = await fetch(url);
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
        <!-- {{breedData}} -->
         <!-- {{factsData}} -->
         <!-- {{groupsData}} -->
        {{blogssData}}
    </div>
</template>

