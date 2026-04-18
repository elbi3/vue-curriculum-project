React Assignment Translation

Task Manager

points:
1. handle React state by copying before updating
2. handle React state by returning a *new* array or object with `.map()`
3. replace state rather than modifying it: "don't mutate state directly"
"react's immutable update pattern"

--> [Setup your framework and library tools] *or* add to your previous assignment. (Do this because it is simpler!)

You will:
add tasks from a list to the display,
and toggle their completed status on and off,


1. create a TaskManager Component
2. create dummy data: Make an array of objects with keys for `id`, `task`, and `completed`. 
3. export this list from a separate file (better) or put it at the top of your TaskManager Component 
4. initialize the `useState` hook with an empty array
5. create an `addTask` function that adds a task to tasks array
6. "add" button will add a completed task to the list (okay to hardcode this with the dummy data as opposed to adding input fields and capturing that data to display it)
7. implement a toggle function `toggletaskCompletion` that uses an `id` and updates the `completed` field 
8. use a `.map()` Array method to make a *shallow copy* of the original array, where only the correct task is updated and remaining state is preserved
9. display the tasks with their title and completion status
10. include a radio? button next to each task to toggle completion status (this button should call our `toggletaskCompltion` function)