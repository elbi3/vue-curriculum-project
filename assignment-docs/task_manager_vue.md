# task-manager

## Investigate:
How best to handle state in Vue.js by copying before updating?
Is Vue best practice also to create a shallow copy with `.map()`?
Is Vue best practice also to replace state rather than modifying it, to not mutate state directly?
Does Vue have the same "immutability" patterns?

You will:
add tasks from a list to the display,
and toggle their completed status on and off


1. create a TaskManager Component
2. create dummy data: Make an array of objects with keys for `id`, `task`, and `completed`. 
3. export this list from a separate file (better) or put it at the top of your TaskManager Component 
4. We can use `v-for` to display a dynamic list. Use v-for to display the imported dummy task data to ensure correct setup of `v-for` directive.
5. To render a block of elements for each list item, wrap the items in [`template`](https://vuejs.org/guide/essentials/list.html#v-for-on-template)). (Helpful for adding a checkbox later.)
5. Use `reactive()` to store the task list and pass the tasks array as its argument. 
6. Swap out the list reference used with the `v-for` directive with the variable holding the `reactive` state to display the stored state instead of the dummy list directly. Be sure to use `:key=` for each item.
7. Add a checkbox to change the boolean value state for any of the displayed tasks.
8. create an `addTask` function that adds a task to tasks array. Optional: ensure an empty value is not added to the array. Also reset the input value to blank.
9. If using a form, with type="submit" button, the `addTask` can be called on submit using something like this: `v-on:submit.prevent="addItem"` in the <form> attributes
10. Instead of implementing a toggle function `toggletaskCompletion`, checkbox should automatically update the "completed" value of a task because we are using `reactive()`
11. Don't forget to display the tasks with their title and completion status

[checkboxes](https://vuejs.org/guide/essentials/forms.html#checkbox)
[value bindings](https://vuejs.org/guide/essentials/forms.html#value-bindings)
[v-for directive](https://vuejs.org/guide/essentials/list.html#v-for)