import { defineStore } from "pinia";
import { ref, reactive } from "vue";

export const useSubscriberStore = defineStore("subscriber", () => {
    const name = ref("me");
    const email = ref("me@me.com");
    const phone = ref("222-222-2222");//bug?
    const contact = reactive({
        address: {street:"222 my street", city:"my-city", state:"my-reactive-state"}
    }); //phone, address fields
    const preferences = reactive({
        newsletter: false,
        notifications: false
    }); //newsletter, notifications fields


    return { name, email, contact, preferences };
});