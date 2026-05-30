//create the router instance

import { createWebHistory, createRouter } from "vue-router";
//import layout component
import Layout from "@/layouts/Layout.vue";
//import pages
import Home from "@/pages/Home.vue";
import Blog from "@/pages/Blog.vue";
import Gallery from "@/pages/Gallery.vue";
import Playground from "@/pages/Playground.vue";
//import child components
import DogInfo from "@/components/DogInfo.vue";
import Counter from "@/components/Counter.vue";
import Recipes from "@/components/Recipes.vue";
import BlogPosts from "@/components/BlogPosts.vue";
import Post from "@/components/Post.vue";
import ShoppingList from "@/components/ShoppingList.vue";
import TaskManager from "@/components/TaskManager.vue";
import Subscriber from "@/components/Subscriber.vue";
import UserProfile from "@/components/UserProfile.vue";
import UserRegistration from "@/components/UserRegistration.vue";

const routes = [
    { path: '/', component: Layout,
        children: [
            { path: "", component: Home},
            { path: "counter", component: Counter },
            { path: "dogs", component: DogInfo },
            { path: "shopping", component: ShoppingList },
            { path: "tasks", component: TaskManager },
            { path: "subscriber", component: Subscriber },
            { path: "user-profile", component: UserProfile },
            { path: "user-registration", component: UserRegistration }
        ]
    },
    { path: "/gallery", component: Gallery, 
        children: [
            { path: "", redirect: { name: "recipe", params: {id: 0} }},
            { path: "recipes/:id", name: "recipe",  component: Recipes } 
        ]
     },
    { path: "/blog", component: Blog,
        children: [
            { path: "", component: BlogPosts },
            { path: "post/:id", component: Post }
        ]
     },
    { path: "/playground", component: Playground }, 
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;