//create the router instance

import { createMemoryHistory, createRouter, createWebHistory } from "vue-router";

//import views

const routes = [];

export const router = createRouter({
    history: createMemoryHistory(),
    routes,
});