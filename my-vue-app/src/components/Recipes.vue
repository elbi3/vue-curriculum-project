<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useRouter, useRoute } from "vue-router";
import recipes from "@/data/recipeData.js";

const router = useRouter();
const route = useRoute();

//grab URL param if there, otherwise start at 0
const currentRecipe = ref(Number(route.params.id) || 0);

function syncRoute() {
    router.push({ name: "recipe", params: { id: currentRecipe.value }});
};

function next(){
    const isLast = currentRecipe.value === recipes.length-1;
    currentRecipe.value = isLast ? 0 : currentRecipe.value + 1;
    syncRoute();
};
function previous(){
    const isFirst = currentRecipe.value === 0;
    currentRecipe.value = isFirst ? recipes.length - 1 : currentRecipe.value - 1;
    syncRoute();
};

</script>

<template>
    <div class="image-display">
        <p>{{recipes[currentRecipe].title}}</p>
        <p>recipe # {{currentRecipe}}</p>
        <img class="recipe-image" :src="recipes[currentRecipe].image" alt={{title}}>
    </div>
    <div class="btn-container">
        <button class="previous"  @click="previous">⬅️</button>
        <button class="next" @click="next">➡️</button>
    </div>
</template>

<style>
    .image-display{
            display: flex;
            flex-direction: column;
    };
    .btn-container{
        display: flex;
        flex-direction: row;
    }
    .recipe-image{
        max-width: 20ch;
    }
</style>