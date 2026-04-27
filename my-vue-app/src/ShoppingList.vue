<script setup lang="ts">
import { useShoppingStore } from "@/stores/shoppingList.js"; //@ is an alias for "src"
import { ref } from "vue";

const shopping = useShoppingStore();
const {addItem, updateItem, deleteItem} = shopping;

const newItem = ref({
    id: Date.now(),
    name:"",
    quantity: 0,
    details: {flavor: "", sour: false}
}); 
//best practices is to use the same form to edit
const editingId = ref(null);

function startEdit(item){
    //change editing status to the id of the item we want to edit
    editingId.value = item.id;
    //change the ref to the current item to edit
    newItem.value = {
        id: Date.now(),
        name: item.name,
        quantity: item.quantity,
        details: {flavor: item.details.flavor, sour: item.details.sour}
    };
};

function handleSubmit(){
    //would be nice to have some input checks to make sure inputs are valid
    console.log("object in ref is this newItem: ", newItem.value);
    if(editingId.value !== null) {
        updateItem(editingId.value, {...newItem.value});
    } else {
        //be sure to include "value" or you will pass ref instead of the object
        //also when you use ref in JavaScript, you have to use `.value` because it is a wrapper. in template it auto-unwraps, which is why `v-model="newItem.name"` works
        //clone the object before pushing, or we will end up pushing the same object and mutating previously added items
        addItem({...newItem.value});
        //^this is the "setState" best practice in Vue. 
    }
    //reset form after new item is added by mutating the current state:
    newItem.value.name = "";
    newItem.value.quantity = 0;
    newItem.value.details.flavor = "";
    newItem.value.details.sour = false;
    //reset editing ref
    editingId.value = null;

};

</script>

<template>
    <div class="columns">
        <div class="my-list">
            <h2>Shopping List</h2>

            <section class="my-list" >
                <template v-for="item in shopping.list" :key="item.id">
                    <p>{{item.name}}---how many: {{item.quantity}}---what flavor: {{item.details.flavor}}</p>
                    <button @click="startEdit(item)">FIX</button>
                    <button @click="deleteItem(item.id)">X</button>
                </template>
            </section>
        </div>

        <form class="my-form" v-on:submit.prevent="handleSubmit">
            <h2>Add a new item: </h2>
            <div class="input-container">

                <label for="anItemName">item:</label>
                <input id="anItemName" v-model="newItem.name">
            </div>
            <div class="input-container">

                <label for="quantity">how many:</label>
                <input id="quantity" v-model="newItem.quantity">
            </div>
            <div class="input-container">

                <label for="flavor">what flavor:</label>
                <input id="flavor" v-model="newItem.details.flavor">
            </div>
            <div class="input-container2">

                <label for="sour">sour?</label>
                <input id="sour" type="checkbox" class="check" v-model="newItem.details.sour" />
            </div>
            <!-- <input id="sour" v-model="newItem.details.sour"> -->
            <button type="submit">ADD ITEM➡️</button>
        </form>
    </div>
</template>

<style>
    .columns {
        gap: 1rem;
        display: flex;
        flex-direction: row;
    }

    .input-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .input-container2{
        background-color: lightgoldenrodyellow;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }
    .my-list {
        background-color: whitesmoke;
        padding: .3rem;
        border: 1px solid lightseagreen;
        display: flex;
        flex-direction: column;
        gap: .2rem;
    }
    .my-form {
        padding: .3rem;
        background-color: lightcyan;
        display: flex;
        flex-direction: column;
    }
    .check {
        width: 3rem;
        height: 3rem;
    }
</style>