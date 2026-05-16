<script setup lang="ts">
import { reactive } from "vue";

let userAddress = {
    street:"Jefferson Ave S",
    city:"Seattle",
    state:"WA"
};

let userProfile = {
    name: "Heidi",
    email: "something-something77@fastest.mail",
    address: userAddress
};

let state = reactive(userProfile);

function updateAddress(){
    console.log("userAddress: ", state.address.street);
};

</script>

<template>
    <form class="my-form" v-on:submit.prevent="updateAddress">
        <h2>Update Your Address:</h2>
        <label for="street">street</label>
        <input id="street" v-model="state.address.street">
        <label for="city">city</label>
        <input id="city" v-model="state.address.city">
        <label for="state">state</label>
        <input id="state" v-model="state.address.state">
        <button type="reset" class="form-button">submit</button>
    </form>
    <!-- <pre>{{state}}</pre>  -->
    <section class="user-display">
        <p>{{state.name}}</p>
        <p>{{state.email}}</p>
        <p>{{state.address.street}}</p>
        <p>{{state.address.city}}</p>
        <p>{{state.address.state}}</p>
    </section>
</template>

<style scoped>
.my-form {
    display: flex;
    flex-direction: column;
}
    .user-display {
        background-color: whitesmoke;
        border: 2px solid darkcyan;
        border-radius: .15rem;
        padding: 1rem;
        margin-top: 1rem;
    }
</style>