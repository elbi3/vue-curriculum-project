<script setup lang="ts">
import { ref } from "vue";
import TinyCard from "./TinyCard.vue";

const count = ref(0);

function increment() {
    count.value++
};

function incrementAfterDelay() {
    setTimeout(() => {
        count.value++
        console.log("incrementAfterDelay");
    }, 2000);
};

function incrementTwice() {
    count.value++
    console.log("increment once");
    count.value++
    console.log("increment twice");
};

function incrementLaterTwice() {
    setTimeout(() => {
        count.value++
        console.log("incrementAfterDelay 1");
    }, 2000);
    setTimeout(() => {
        count.value++
        console.log("incrementAfterDelay 2");
    }, 2000);
};

function incrementLaterStale() {
    //current gets a snapshot value of "count"
  const current = count.value
    console.log("CLICK");
  setTimeout(() => {
    //the snapshot value of "current" + 1 is applied to "count"
    //additional clicks cannot be recorded during this period
    count.value = current + 1
  }, 2000)
}


</script>

<template>
    <div class="counter-wrapper">

        <TinyCard />
        <p class="total">{{count}}</p>
        <div>
            <button class="counter-button" @click="increment">+1</button>
            <button class="counter-button" @click="incrementAfterDelay">+1 later</button>
        </div>
        <div>
            <button class="counter-button" @click="incrementTwice">+1 & +1</button>
            <button class="counter-button" @click="incrementLaterTwice">+1 later & +1 later</button>
        </div>
        <div>
            <button class="counter-button" @click="count++">+1</button>
            <button class="counter-button" @click="incrementLaterStale">+1 later STALE</button>
        </div>
    </div>
</template>

<style >
.counter-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}
.total {
    font-size: larger;
    font-weight: 900;
}
.counter-button {
    font-family: inherit;
    background-color: var(--button);
    color: var(--surface);
    border: 1px solid darkslateblue;
    border-radius: .25rem;
    /* color: inherit; */
    max-width: 20ch;
    padding-inline: .5rem;
    margin: .5rem;
    }
.counter-button:hover{
    border: 1px solid midnightblue;
    background-color: darkslateblue;
    color: aliceblue;
}
.counter-button:active{
    background-color: purple;
}
</style>