<script setup lang="ts">
import { watch, ref, onMounted, onUnmounted } from "vue";
import Chart from 'chart.js/auto';

const options = ref(["Svelte & Sveltekit", "React and Next.js", "Vue & Nuxt", "Astro mix'n'match", "Node & querySelectors"]);
const selectedOption = ref("");
const fakeNumbers = ref([120, 190, 80, 210, 150]);
const canvasRef = ref(null); //this references the dom element where chart happens
//ref is a box, so you have to put the item inside of the box by assigning it to ref.value
let chart = null; //non-reactive, so we don't need to track this with a ref
onMounted(() => {
    //instantiate and assign chart with its configuration to "chart" variable
    chart = new Chart(canvasRef.value, {
        type: "bar",
        data: {
            labels: ["Svelte & Sveltekit", "React and Next.js", "Vue & Nuxt", "Astro mix'n'match", "Node & querySelectors"],
            datasets: [{ label: 'feelings', data: [...fakeNumbers.value] }]
        }
    });
});
onUnmounted(() => {
    chart?.destroy()  // Clean up, just like a useEffect return function
});
//watch(dependency, callback)
watch(()=>fakeNumbers.value, (newNumbers) => {
  if (chart) {
    chart.data.datasets[0].data = newNumbers
    chart.update()
  }
});
function pollSubmit() {
    if(selectedOption.value === "Svelte & Sveltekit"){
        fakeNumbers.value = [500,0,0,0,0];
    }
    if(selectedOption.value === "React and Next.js"){
        fakeNumbers.value = [0,500,0,0,0];
    }
    if(selectedOption.value === "Vue & Nuxt"){
        fakeNumbers.value = [0,0,500,0,0];
    }
    if(selectedOption.value === "Astro mix'n'match"){
        fakeNumbers.value = [0,0,0,500,0];
    }
    if(selectedOption.value === "Node & querySelectors"){
        fakeNumbers.value = [0,0,0,0,100];
    }
};
</script>

<template>
    <section>
        <h2>What's your favorite JavaScript metaframework?</h2>
        <canvas ref="canvasRef" />
        <form @submit.prevent="pollSubmit" class="my-poll">
            <label class="radio-btn" v-for="option in options" :key="option">
            <input 
                type="radio" 
                name="poll" 
                class="radio-btn"
                :value="option" 
                v-model="selectedOption" 
            />
            {{ option }}
            </label>
            <button class="poll-btn" type="submit">vote</button>
        </form>
    </section>
</template>

<style>
.my-poll {
    display: flex;
    flex-direction: column;

    background-color: whitesmoke;
    padding: 1rem;
    border: 3px solid salmon;
}
.radio-btn {
    /* padding: .5rem; */
    font-size: 1.3rem;
}
.poll-btn {
    padding: .5rem;
    width: 10ch;
    border-radius: .25rem;
    border: 2px solid salmon;
    background-color: azure;
    font-weight: 700;
}
</style>