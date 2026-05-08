<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuery } from '@tanstack/vue-query';
import BreedCard from "./BreedCard.vue";

const apiLink = "https://dogapi.dog/api/v2";
const breedList = ref([]);
const dogBreedId = ref(null);
//note: const { originalKey: yourNewName } = someObject;
//JavaScript destructuring with renaming^

const { isPending: breedsPending, isError: breedsError, data: breedsData, error: breedsErr } = useQuery({
    queryKey: ["breeds"], 
    queryFn: fetchDogBreeds,
    select: (data) => data.data //remove outer object for easier data handling & display
    //select is like a built-in mapper:
    //instead of {data:[...dogs]}, we now have [...dogs]
});
const {isPending: breedPending, isError: breedError, data: breedData, error: breedErr} = useQuery({
    queryKey: ["breeds", dogBreedId],
    queryFn: fetchDogBreedsId,
    enabled: computed(() => !!dogBreedId.value),//explain this
    select: (singleBreedData) => singleBreedData.data.attributes//why did I add this?
});
const {isPending: factsPending, isError: factsError, data: factsData, error: factsErr} = useQuery({
    queryKey: ["facts"], 
    queryFn: fetchDogFacts,
    select: (data) => data.data[0].attributes.body
});

const {isPending: groupsPending, isError: groupsError, data: groupsData, error: groupsErr} = useQuery({
    queryKey: ["groups"], 
    queryFn: fetchDogGroups,
    select: (data) => data.data.map(group => ({
        id: group.id,
        name: group.attributes.name
    }))
});


async function fetchDogBreeds(){
    const response = await fetch(`${apiLink}/breeds`);
    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const myData = await response.json(); //don't forget to await this, because it is *still* a Promise


    return myData;
    //you can `return response.json()`, because `async` will unwrap the Promise returned from `response.json()`
};

async function findOne(id){
    const found = breedList.value.find((element) => element.id === id);
    if(found) {
        found.visible = true;
    };
};

async function fetchDogBreedsId({queryKey}){//tanstack passes a context object 
    const [ , id] = queryKey;
    let single = `https://dogapi.dog/api/v2/breeds/${id}`;
    if (!id) {return;};
//find the id in the ref array to toggle the visibility

    // const found = breedList.value.find((element) => element.id === id);
    // found.visible = true;
    const response = await fetch(single);
    if (!response.ok) {
    throw new Error("Network response was not ok");
}
    const singleData = await response.json();
    return singleData;
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
    <section class="dog-fact">
        <h2>dog fact for today: </h2>
        <p v-if="factsPending">Loading...</p>
        <p v-else-if="factsError">Error: {{ factsErr.message }}</p>
        <p v-else>🐕 {{factsData}}</p>
    </section>
    <section class="group">
        <h2>dog groups 🐶👋</h2>
        <p v-if="groupsPending">Loading...</p>
        <p v-else-if="groupsError">Error: {{ groupsErr.message }}</p>
        <ul v-else>
            <li v-for="group in groupsData" :key="group.id">{{ group.name }}</li>
        </ul>
    </section>
    <p v-if="breedsPending">Loading...</p>
    <p v-else-if="breedsError">Error: {{breedsErr.message}}</p>
    <ul v-else>
        <BreedCard v-for="item in breedsData" :key="item.id" :breed="item" />
        <!-- saving this, I refactored it into a child component:  -->
        <!-- <template v-for="item in breedsData" :key="item.id">
            <li class="breed-container">
                <h3 class="breed-names-link" @click="dogBreedId=item.id; findOne(item.id)">{{item.attributes.name}}</h3>
                <p>{{item.attributes.description}}</p>
                <div v-if="breedList.find(e => e.id === item.id)?.visible">
                     <p>lifespan: {{breedData?.life.min}}-{{breedData?.life.max}}</p>
                     <p>male weight: {{breedData?.male_weight.min}}-{{breedData?.male_weight.max}}, 
                     </p>
                     <p>female weight: {{breedData?.female_weight.min}}-{{breedData?.female_weight.max}}</p>
                     <p>hypoallergenic? {{breedData?.hypoallergenic}}</p>
                </div>
            </li>
        </template> -->
    </ul>
</template>

<style>
.group,
.dog-fact {
    background-color: aliceblue;
    border: 2px solid darkslateblue;
    border-radius: .15rem;
    margin: .5rem;
    padding: .5rem;
}
ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.breed-names-link{
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}
</style>



