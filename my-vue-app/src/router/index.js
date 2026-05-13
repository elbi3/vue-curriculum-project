//create the router instance

import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
//import views

const routes = [
    { path: '/', component: Home },
];

export const router = createRouter({
    history: createWebHistory(),
    routes,
});