import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useSubscriberStore = defineStore("subscriber", () => {
    const name = ref("");
    const email = ref("");
    const contact = reactive({
        phone: "",
        address: {street:"", city:"", state:""}
    }); //phone, address fields
    const preferences = reactive(
        newsletter: false,
        notifications: false
    ); //newsletter, notifications fields


    return { name, email, contact, preferences };
});