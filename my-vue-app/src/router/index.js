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


const routes = [
    { path: '/', component: Layout,
        children: [
            { path: "", component: Home },
            { path: "counter", component: Counter },
            { path: "dogs", component: DogInfo, }
        ]
    },
    { path: "/gallery", component: Gallery },
    { path: "/blog", component: Blog },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;