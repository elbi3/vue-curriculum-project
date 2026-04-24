<script setup lang="ts">
import { reactive, ref } from "vue";
import tasks from "./data/tasks.js";

//make a copy of "tasks" so we are not mutating state shared with another file:
const checkedTasks = reactive([...tasks]);
//capture input value in ref so it can be added to state
const inputText = ref("");

function addItem(){
    //don't add empty values:
    if(!inputText.value.trim()) return;
    checkedTasks.push({id: checkedTasks.length + 1, task: inputText.value, completed: false});
    //clear the UI after adding the input text to state
    inputText.value="";
}
</script>

<template>
    <form class="my-form" v-on:submit.prevent="addItem">
        <label for="new-task">Add Your Task:&nbsp;</label> 
        <input id="new-task" v-model="inputText"> 
        <button type="submit" class="form-button">add</button>
    </form>
    <section class="tasks-list">
            <template v-for="(item, index) in checkedTasks" :key="index">
                <div class="box">
                    <p>{{item.task}}</p>
                    <div class="finished">
                        <input type="checkbox" id={{item.index+item.task}} v-model="item.completed" />
                        <label for="finished">{{ item.completed }}</label>
                    </div>
                </div>
            </template>
    </section>
    <!-- //keeping this here as a note for the simpler way to do it: -->
    <!-- <section class="tasks-list" v-for="item in checkedTasks">
        {{item.task}} - {{item.completed}}
    </section> -->
<!-- <pre>{{checkedTasks}}</pre> -->
</template>

<style>
    .box {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        border: 1px solid navy;
        padding:.3rem;
    }
    .tasks-list{
        background-color: lavenderblush;
    }
</style>