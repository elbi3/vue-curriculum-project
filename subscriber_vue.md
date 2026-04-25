State Management with Pinia 🍍 in Vue (Use Pinia! #1)

points:
1. learn about view reactivity concepts with store patterns
1. learn how to define a store using the `defineStore` function from the "pinia" library
1. learn how Pinia defines a store by passing a unique name to `defineStore` and assigning this function's output to a setup function 
3. employ best practices by putting "use" at the beginning of that store setup function name ("useShoeStore")
4. food for thought: remember, a Pinia store is global, and shared. So we cannot have one subscriber store for many subscribers. Think about how you would store information for multiple instances of a component, without having the store replicating data across all the components. What would you do if you needed to display multiple subscribers? (stores are singleton by default)
5. when creating components like this, think about whether your state is local to a specific component, or shared globally across the entire application. Should we have used `reactive()` instead here? Is this a "per-instance" example of state usage? It may also be helpful to think about a store more like a database, where you have a table of users, and a component represents one row of this users table.
6. in "Setup Stores" (Composition API), `ref()`s become `state` properties
7. you can destructure from a store with `import { storeToRefs } from 'pinia'`!


How does Vue/pinia simplify nested state updates? What is mutating a draft state? 
Instead of state immutability, Vue does...its thing. 

You will:
display a single subscriber and whether they are currently subscribed to our newsletter,
and add logic to update the subscriber's information

--> [Setup your framework and library tools] *or* add to your previous assignment. (Do this because it is simpler!)

1. install the pinia library with `npm i pinia`
2. Set up pinia: in `main.ts` add `import { createPinia } from 'pinia'` 
3. create a pinia instance and pass it to the app as a plugin. Your `main.ts` should now look like this:
```shell
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
```
4. I found the pinia cheatsheet, and if you would like to use it, install a pdf extension "vscode-pdf" by tomoki1207 and then in the VSCode command pallete enter "View: Reopen Editor With" and the pdf option should show up
5. add a `stores` folder in the `src` directory
6. inside src/stores, add a new file `SubscriberStore.js`
7. in this file, import `defineStore` from "pinia"
8. write the logic to define your subscriber store by passing a unique name as the first argument to `defineStore`
9. best practices is to put "use" at the front of the setup function, and pass a unique name for the store as well as "a function that defines reactive properties and methods and returns an object with the properties and methods we want to expose."
10. add these fields to your subscriber store with `ref()` or `reactive()` (import them!):
name: String.
email: String.
contactDetails: An object containing phone and address.
preferences: An object containing newsletter (boolean) and notifications (boolean).
11. use simple input binding in the UI logic to update the store directly. Pinia unwraps refs: `user.firstname = "Sam"` (see #16)
12. so, add a functionality to update contact details, 
13. add a functionality to toggle newsletter subscription
14. if you need more logic than a simple update, add a function to the state that does the update along with the logic. (this is an "action")
15. bonus: come up with a need for using the `computed` function to compute a value derived from state
16. UI: add inputs for name, phone, address and toggle for subscription. 
17. Display current data to show updates.

[defining a store with pinia](https://pinia.vuejs.org/core-concepts/#Defining-a-Store)
[Setup Stores](https://pinia.vuejs.org/core-concepts/#Setup-Stores)