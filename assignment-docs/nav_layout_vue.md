(I think I combined the blog post and recipe gallery refactor with navigation assignments?)

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
2. add `router`, `pages` directories
3. import `createMemoryHistory` and `createRouter` into a new `index.js` file in `src/router`. 
4. in `router/index.js` add routes array and export the router instance:
```js
const routes = [];

export const router = createRouter({
    history: createMemoryHistory(), //this or createWebHistory?
    routes,
});
```
5. create the page content components (stored in `pages` directory) that will be imported into the `router/index.js` and add them to the routes array. Example code:
```js
import HomeView from './HomeView.vue'
import AboutView from './AboutView.vue'

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
]
```
6. import and register the plugin with `use()` in `main.ts`(always remember to call the `use()` plugin before `mount()`)
7. implement composables `useRouter` and `useRoute` inside relevant components as needed
(the `router` object returned by `createRouter()` is our router instance we access it by calling `ueRouter()`. the current route is `route` and is accessed with `useRoute()`)
let's make something that will "persist across navigation"
8. Layout. Vue is not as opinionated about this as other frameworks. It favors its component composition over framework handling. 
9. Make a layout component that uses <RouterView>. This will be a regular component that handles the abstraction and ideology that frameworks attempt to enforce
10. make a `layouts` directory to work alongside `pages` (aka views) directory. `layouts` will contain components that include `<RouterView/>` in their code,
and `pages` will contain components that are rendered by `<RouterView/>`. Smaller components (`<Counter/>`, `<Button/>`) go in the `components` directory.
11. Refactor App.vue to be a template with a <RouterView/>. This is the root of the project, and will render layouts with their page content based on our router array
12. Refactor component locations based on views and components. 
13. Refactor repeated code into smaller components
14. use `router.back()` to program a 'back button' for navigation *within* the app
15. use `router.push()` to program a 'go home' for navigation if you've hit the page from *outside* the app 
(maybe you started on "Gallery" and not "Home", so there's no browser history for the app)
16. you can also use `router.go()`


[router sestup guide](https://router.vuejs.org/guide/)
[dynamic routes](https://router.vuejs.org/guide/essentials/dynamic-matching.html#Dynamic-Route-Matching-with-Params)
[nested routes](https://router.vuejs.org/guide/essentials/nested-routes.html)

[large example project](https://github.com/saymenghour/vue3-enterprise-boilerplate/blob/main/src/router/guards.ts)
[small example project](https://github.com/kouts/vue3-ts-vite-starter-template/tree/main)
--for `window.history.state`:
[browser native API](https://developer.mozilla.org/en-US/docs/Web/API/History/state)