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
        list.push(item);
    };
    function updateItem(id){
        list.filter((item) => {
            if(id !== item.id) {
                return item;
            }
        });
    };
    function deleteItem(){
        list.splice(index, 1);
    };
    return { list };
});