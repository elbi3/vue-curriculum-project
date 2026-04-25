React Assignment Translation

State Management with Immer's "draft" object and `useImmer` hook

points:
1. manage complex React state using the useImmer hook from the Immer library
2. experience what it is like to work with "draft" state, especially for nested data structures
3. let a library track changes and handle immutability for you

--> [Setup your framework and library tools] *or* add to your previous assignment. (Do this because it is simpler!)

You will:
create and display a shopping list,
and add functionality to change the shopping list 

1. install immer with npm
2. create a ShoppingList component
3. import useImmer from the use-immer package
4. create a `shoppingList` array of objects, where each object has 
- id: A unique identifier.
- name: String.
- quantity: Number.
- details: A nested object containing category and notes.
5. initialize state with the `shoppingList` array by using `useImmer`
6. create an `addItem` function using `draft` state provided by `useImmer` for "direct-style mutations"
7. create an `updateItem` function using `draft` state provided by `useImmer` for "direct-style mutations"
8. create a `removeItem` function using `draft` state provided by `useImmer` for "direct-style mutations"
9. render the shopping list in the browser
10. add UI elements to allow for adding, updating, and removing items:
11. map the functions to the UI elements (inputs, or buttons, you pick)