<script setup lang="ts">
import { ref, computed } from "vue";
import { useQuery } from '@tanstack/vue-query';

const breedList = ref([]);
const selectedId = ref(null);
//note: const { originalKey: yourNewName } = someObject;

const { isPending, isError, data, error } = useQuery({
    queryKey: ["dogBreeds"], 
    queryFn: fetchDogData,
    select: (data) => data.data //remove outer object for easier data handling & display
    //select is like a built-in mapper:
    //instead of {data:[...dogs]}, we now have [...dogs]
});
//note JavaScript destructuring with renaming:
const {data: singleBreedData, isPending: isSinglePending} = useQuery({
    queryKey: ["dogBreed", selectedId],
    queryFn: fetchOneBreedData,
    enabled: computed(() => !!selectedId.value),//explain this
    select: (singleBreedData) => singleBreedData.data.attributes
});
function makeList(myData){
        const apiReactiveData = myData.map(element =>
           ({id: element.id, visible: false})
        );
        breedList.value = apiReactiveData;//check
};

async function fetchDogData(){
    const response = await fetch("https://dogapi.dog/api/v2/breeds");

    if(!response.ok) {
        throw new Error("Network response was not ok");
    }
    const myData = await response.json(); //don't forget to await this, because it is *still* a Promise

    //add ids to breedList ref for visibility toggle & click handling on individual breeds
    makeList(myData.data);
    // const apiReactiveData = myData.map(element => {
    //     return {id: element.id, isVisible: false};
    // });
    return myData;
    //you can `return response.json()`, because `async` will unwrap the Promise returned from `response.json()`
};

async function findOne(id){
    const found = breedList.value.find((element) => element.id === id);
    if(found) {
        found.visible = true;
    };
};

async function fetchOneBreedData({queryKey}){//tanstack passes a context object 
    const [ , id] = queryKey;
    let single = `https://dogapi.dog/api/v2/breeds/${id}`;
    if (!id) {return;};
//find the id in the ref array to toggle the visibility
    // findOne(id);
    // const found = breedList.value.find((element) => element.id === id);
    // found.visible = true;
    const response = await fetch(single);
    if (!response.ok) {
    throw new Error("Network response was not ok");
}
    const singleData = await response.json();
    return singleData;
};
</script>

<template>

    <p v-if="isPending">Loading...</p>
    <p v-else-if="isError">Error: {{error.message}}</p>
    <ul v-else>
        <template v-for="item in data" :key="item.id">
            <li class="breed-container">
                <h3 class="breed-names-link" @click="selectedId=item.id; findOne(item.id)">{{item.attributes.name}}</h3>
                <p>{{item.attributes.description}}</p>
                <div v-if="breedList.find(e => e.id === item.id)?.visible">
                    <!-- {{singleBreedData}} -->
                     <p>lifespan: {{singleBreedData.life.min}}-{{singleBreedData.life.max}}</p>
                     <p>male weight: {{singleBreedData.male_weight.min}}-{{singleBreedData.male_weight.max}}, 
                     </p>
                     <p>female weight: {{singleBreedData.female_weight.min}}-{{singleBreedData.female_weight.max}}</p>
                     <p>hypoallergenic? {{singleBreedData.hypoallergenic}}</p>
                </div>
            </li>
        </template>
    </ul>
</template>

<style>
.breed-names-link{
    font-weight: bold;
    cursor: pointer;
    text-decoration: none;
}
</style>