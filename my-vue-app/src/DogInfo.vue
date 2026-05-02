<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';

const { isPending, isError, data, error } = useQuery({
    queryKey: ["dogBreeds"], 
    queryFn: fetchDogData,
    select: (data) => data.data //remove outer object for easier data handling & display
    //select is like a built-in mapper:
    //instead of {data:[...dogs]}, we now have [...dogs]
});

async function fetchDogData(){
    const response = await fetch("https://dogapi.dog/api/v2/breeds");

    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const myData = await response.json(); //don't forget to await this, because it is *still* a Promise
    return myData;
    //you can `return response.json()`, because `async` will unwrap the Promise returned from `response.json()`
};

</script>

<template>
    <p v-if="isPending">Loading...</p>
    <p v-else-if="isError">Error: {{error.message}}</p>
    <ul v-else>
        <li v-for="item in data" :key="item.id">
            <span class="breed-names">{{item.attributes.name}}: </span>
            {{item.attributes.description}}
        </li>
    </ul>
</template>

<style>
.breed-names{
    font-weight: bold;
}
</style>