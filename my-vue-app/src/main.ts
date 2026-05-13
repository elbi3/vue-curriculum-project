import { createApp } from 'vue';
import App from './App.vue';
import "@/styles/global.css";
import { createPinia } from "pinia";
import router from "@/router";
import { VueQueryPlugin } from '@tanstack/vue-query';

const app = createApp(App);
// const pinia = createPinia();

app.use(createPinia()); //sometimes global access to stores needed for router setup
app.use(router);
app.use(VueQueryPlugin);

app.mount('#app');
