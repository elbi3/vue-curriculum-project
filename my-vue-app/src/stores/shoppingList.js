import { defineStore } from "pinia";
import { ref } from "vue";

export const useShoppingStore = defineStore("shopping", () => {

    const list = ref([
        {id: 1, name: "candy", quantity: 30, details: {flavor: "lemon", sour: true}},
        {id: 2, name: "soap", quantity: 5, details: {flavor: "mint", sour: false}},
        {id: 3, name: "crackers", quantity: 300, details: {flavor: "salty", sour: false}}
    ]);

    function addItem(item){
        //validate object matches required format
        list.value.push(item);
        console.log("pushed to list: ", item.name);
        console.log("Added item: ", item);
    };

    function updateItem(id, newVersion){
        const found = list.value.find((item) => item.id === id);

        if(!found) return;

        found.name = newVersion.name;
        found.quantity = newVersion.quantity;
        found.details.flavor = newVersion.details.flavor;
        found.details.sour = newVersion.details.sour;

    };

    function deleteItem(id){
        const index = list.value.findIndex((item) => item.id === id);
        list.value.splice(index, 1);
    };

    return { list, addItem, updateItem, deleteItem };
});