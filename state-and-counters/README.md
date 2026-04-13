# state-and-counters

## Investigate: 
How does state handling in Vue.js differ from React's state management? 
In React we think of state as a "snapshot".
React batches multiple updates and handles these asynchronously.
There are times when we cannot acces the new value of an updated variable.
This results in "stale" state values unless we use a state update function.
Example: `setCount(prevCount => prevCount + 1`

--> In React we use the `useState` hook, how does Vue handle this work?
--> Does the "snapshot" concept also apply to Vue?
--> Does Vue do "batch" updates?

So What *is* the reactivity behavior of Vue?
Vue mutates the actual value immediately.
Updates are applied immediately.
However, the DOM updates are still batched asynchronously, as in React.

## Walkthrough

1. Initialize your project by following this setup:

### Setup Beforehand:

1. make sure you have a currently supported Node.js version installed (currently Node 20 or higher)
2. consider adding the VSCode extension ["Vue (Official)"](https://marketplace.visualstudio.com/items?itemName=Vue.volar)

3. Project Setup:
-enter `npm create vue@latest` to install and execute ["create-vue"](https://github.com/vuejs/create-vue)
- follow do the setup prompts in the terminal: 
  - select "okay" to install create-vue package
  - enter a project name
  - choose whether to use TypeScript
  - add any extra features (I added Vitest)
  - no experimental features
  - skip all example code, and start with a blank Vue project

then follow instructions: 
```shell
   cd <your-project-folder>
   npm install
   npm run dev (view app at http://localhost:5173/)
```
4. Things to know about the codebase:
- note `setup` attribute in <script> tag in the root component `App.vue`
- a Vue component is a single file that encapsulates the logic, template, and style of that component. - this is called a "Single-File Component" (SFC) 
- it has JavaScript, HTML, and CSS co-located in one file. 
- [the cool reasons why are listed here](https://vuejs.org/guide/scaling-up/sfc.html#why-sfc)
- what this looks like:
```html
<script></script>
<template></template>
<style></style>
```
- we will be using Composition API for functional programming 
- if you prefer an OOP-centered coding style, you can use the [Options API](https://vuejs.org/guide/introduction.html#options-api)

### Main Project

2. Create a `Counter.vue` component:
- this is a new file for a functional component that displays a count and four buttons.
- use the reactivity function `ref` to store the current state of the variable count: 
```js
import { ref } from "vue";

const count = ref(0);
```
- write the following functions to experience how Vue handles state:
    - `increment()` increases our `count` variable by 1
    - `incrementAfterDelay()` increases the count by 1 after a 2-second delay using JavaScript's `setTimeout` 
    - `incrementTwice()` increments the count two times (2 lines of code) (note: in React, this would have demonstrated how React uses "batching" to handle multiple state updates)
    - (optional)`incrementLaterTwice()` increases count twice, but inside two instances of `setTimeout`
    - instead of doing a state updater function, mutate `ref` directly inside the html <template> in an event handler with this logic: `<button @click="count++">{{ count }}</button>` (React's solution is: setCount(prevCount => prevCount + 1))
    - finally, to see Vue's "gotcha", add a function `incrementLaterStale()` and click the button a bunch of times rapidly. You'll notice that it only updates once, and ignores following clicks.
```js
function incrementLaterStale() {
    //current gets a snapshot value of "count"
  const current = count.value

  setTimeout(() => {
    //the snapshot value of "current" + 1 is applied to "count"
    //additional clicks cannot be recorded during this period
    count.value = current + 1
  }, 2000)
}
```


## Resources

[Declaring Reactive State](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#declaring-reactive-state-1)
Instead of `useState` hook that React uses, use `ref()` or `reactive() Composition API functions. 


[Why Refs?](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#why-refs)

really nice explanation of Reactivity:
[Reactivity in Depth](https://vuejs.org/guide/extras/reactivity-in-depth.html)




