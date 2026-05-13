1. either start up a new project with the routing option selected, or incorporate React Router with its npm install
2. create a file for dummy data:
```js
export const posts = [

  { id: 1, title: 'React Router Tips', content: 'Use Link instead of anchor tags...' },

  { id: 2, title: 'State Management', content: 'Context API vs Redux...' },

  { id: 3, title: 'The Future of Web', content: 'AI and React are merging...' }

];
```


## Adding vue-router to the project
1. install
2. add `router`, `views` directories
3. import `createMemoryHistory` and `createRouter` into a new `index.js` file in `src/router`. 
4. in `router/index.js` add routes array and export the router instance:
```js
const routes = [];

export const router = createRouter({
    history: createMemoryHistory(), //this or createWebHistory?
    routes,
});
```
5. create views that will be imported into the `router/index.js` and add them to the routes array. Example code:
```js
import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]
```
6. import and register the plugin with `use()` in `main.ts`(always remember to call the `use()` plugin before `mount()`)
7. implement composables `useRouter` and `useRoute` inside relevant components
(the `router` object returned by `createRouter()` is our router instance we access it by calling `ueRouter()`. the current route is `route` and is accessed with `useRoute()`)
8. consider a layout route: however Vue Router does not do layouts as in other frameworks, instead it uses nested routes, named views, and dynamic layouts with middleware. We will do a Nested route layout approach:
- Layout contains <RouterView />, 
- and child pages are rendered inside this

[router sestup guide](https://router.vuejs.org/guide/)
[dynamic routes](https://router.vuejs.org/guide/essentials/dynamic-matching.html#Dynamic-Route-Matching-with-Params)

[large example project](https://github.com/saymenghour/vue3-enterprise-boilerplate/blob/main/src/router/guards.ts)
[small example project](https://github.com/kouts/vue3-ts-vite-starter-template/tree/main)