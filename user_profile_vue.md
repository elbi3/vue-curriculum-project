# user-profile

## Investigate

What are best practices in Vue for handling nested state?
What is the pre-cursor to using a state handling library?
How does Vue handle deep reactivity?
How can we use the `reactive()` function to implement deep reactivity in Vue?
How does "v-model" help us simplify form elements?
How does Vue's "two-way binding" compare to React's copying data into state? especially from forms?
Notice the difference between React's "controlled inputs" whereas `v-model` makes state *implicitly controlled*

You will:
Create a small form that updates the address portion of a user profile.
Display the form and the current values of the entire user profile.

1. create a UserProfile Component. Don't forget to use html `setup` attribute to allow imports and top-level variables and functions. 
(remember that `setup`is syntactic sugar for using the Composition API inside SFCs: it makes for less boilerplate, allows declaring props and emitted events using pure TS, & better runtime performance)
2. create a `userProfile` object:
```js
{
    name: "",
    email: "",
    address: ""
}
```
3. assign a variable `state` to the output of the `reactive()` function. 
4. pass the `userProfile` into the `reactive()` function to make our `state` variable a reactive object(previously we used `ref()`, which stores primitive values.) 
5. create a second object `userAddress` with "street", "city" and "country" fields, and set it as the value for the `address` field in `userProfile`. this is our nested object.
6. use the "mustache syntax" to display the top-level attributes of `userProfile` in the browser
7. add a form that has three input fields for each of the `userAddress` fields.
8. add a submit button to the form that calls the `updateAddress` function with the input field values and has `v-on:submit.prevent="updateAddress"`
6. create a function `updateAddress` to call `console.log` the state changes.
9. make sure to display the current user profile information (including address) below the form to show real-time updates.
10. to make your form inputs semantic HTML, add a `label` to each `input` with a `for` attribute in the `label` and an `id` attribute on the `input`. The values of `for` and `id` need to match.
11. notice that if you make your form button "submit" the fields will not clear. To solve this I set the button as `type="reset"` for now. Clearing the inputs clears the state. (note for later: I would like to know how Vue best practices handles this.)

## Resources

[<script setup>](https://vuejs.org/api/sfc-script-setup.html#script-setup)
[deep reactivity](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#deep-reactivity)
[reactive()](https://vuejs.org/guide/essentials/reactivity-fundamentals.html#reactive)
[v-model for two-way binding](https://vuejs.org/guide/components/v-model.html#basic-usage)

notes
v-bind is one-way, v-model is two-way: display a value vs sync the value
use v-bind: for attributes, and v-model for form inputs
with `reactive()` you access properties directly, like `userObj.name`. `.value` lets you access `ref()`
note how Vue does direct mutation, because it tracks property access and updates (get, set)