<script setup lang="ts">
import { ref } from "vue";

import recipes from "./data/recipeData.js"

const currentRecipe = ref(0);

console.log("recipes array: ", recipes);

function next(){
    if(currentRecipe.value === (recipes.length-1)) {
        currentRecipe.value = 0;
        return;
    }
    currentRecipe.value++;
};
function previous(){
    if(currentRecipe.value === 0) {
        currentRecipe.value = recipes.length;
    }
    currentRecipe.value--;
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