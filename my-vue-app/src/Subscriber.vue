<script setup lang="ts">
import { useSubscriberStore } from "@/stores/subscriberStore.js"; //@ is an alias for "src"

const subscriber = useSubscriberStore();
</script>

<template>
    <h2>Hello {{subscriber.name}}!</h2>
    <h3>Feel free to update the following profile items: </h3>
    <div class="updates">
        <div class="input-container">
            <label for="contactEmail">Change Your Email:&nbsp;</label> 
            <input id="contactEmail" v-model="subscriber.contact.email">
        </div>
        <div class="input-container">
            <label for="contactPhone">Change Your Phone:&nbsp;</label> 
            <input id="contactPhone" v-model="subscriber.phone">
        </div>
        <div class="input-container">
            <label for="contactStreet">Change Your Street Address:&nbsp;</label> 
            <input v-model="subscriber.contact.street">
        </div>
        <div class="input-container">
            <label for="contactCity">Change Your City:&nbsp;</label> 
            <input id="contactCity" v-model="subscriber.contact.city">
        </div>
        <div class="input-container">
            <label for="contactState">Change Your State:&nbsp;</label> 
            <input id="contactState" v-model="subscriber.contact.state">
        </div>
        <div class="input-container">
            <p class="message2">do you wish to subscribe to our newsletter?</p>
            <input type="checkbox" v-model="subscriber.preferences.newsletter" />
        </div>
        <div class="input-container">
            <p class="message3">do you want to allow push notifications?</p>
            <input type="checkbox" v-model="subscriber.preferences.notifications" />
        </div>
    </div>
    <section class="subscriber">
        <p class="name"><span class="tag">NAME</span> {{subscriber.name}}</p>
        <p class="email"><span class="tag">EMAIL</span> {{subscriber.email}}</p>
        <div class="contact">
            <p class="contact-phone"><span class="tag">PHONE</span> {{subscriber.phone}}</p>//bug?
            <p class="contact-address"><span class="tag">STREET</span> {{subscriber.contact.address.street}}</p>
            <p class="contact-address"><span class="tag">CITY</span> {{subscriber.contact.address.city}}</p>
            <p class="contact-address"><span class="tag">STATE</span> {{subscriber.contact.address.state}}</p>
        </div>
        <p class="preferences"><span class="tag">NEWSLETTER? </span> {{subscriber.preferences.newsletter}}</p>
        <p class="preferences"><span class="tag">NOTIFICATIONS?</span> {{subscriber.preferences.notifications}}</p>
    </section>
</template>

<style>
    .subscriber {
        border: 2px solid navy;
        border-radius: .25rem;
        background-color: lavenderblush;
        padding: .5rem;
    }
    .input-container{
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }
    .updates {
        display: flex;
        flex-direction: column;
        gap: .2rem;
    }
    .tag{
        font-weight: bold;
    }
</style>