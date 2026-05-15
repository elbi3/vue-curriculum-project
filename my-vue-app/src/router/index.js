//create the router instance

import { createWebHistory, createRouter } from "vue-router";
//import layout component
import Layout from "@/layouts/Layout.vue";
//import views
import Home from "@/views/Home.vue";
import Blog from "@/views/Blog.vue";
import Gallery from "@/views/Gallery.vue";
//import child components
import DogInfo from "../DogInfo.vue";
import Counter from "@/components/Counter.vue";
import Recipes from "@/components/Recipes.vue";


const routes = [
    { path: '/', component: Layout,
        children: [
            { path: "", component: Home },
            { path: "counter", component: Counter },
            { path: "dogs", component: DogInfo, }
        ]
    },
    { path: "/gallery", component: Gallery, 
        children: [
            { path: "", redirect: { name: "recipe", params: {id: 0} }},
            { path: "recipes/:id", name: "recipe",  component: Recipes } 
        ]
     },
    { path: "/blog", component: Blog },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;