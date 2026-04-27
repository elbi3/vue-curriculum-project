State Management with Pinia 🍍 in Vue (Use Pinia! #2)

points:
1. learn about vue reactivity concepts with store patterns
2. in our subscriber project, we kept a single object in our store with "pinia". Now, we will store a collection.

You will:
display a grocery shopping list
add logic to update your shopping list

--> [Setup your framework and library tools] *or* add to your previous assignment. (Do this because it is simpler!)
--> hopefully you already installed pinia in "Use Pinia! #1"
--> hopefully you have `main.ts` set up with pinia as well!

1. create a ShoppingList.vue component
2. initialize state with pinia by creating a `shoppingList.js` store file in src/stores directory. note that best practice in Pinia is one store per domain/responsibility, so one file per store.
3. import `defineStore` from pinia and import `reactive` from vue into thie `shoppingList.js` store file
4. write the logic to define your shoppingList store by passing a unique name as the first argument to `defineStore`
5. don't forget to put "use" at the beginning of your setup function like, `useShoppingListStore`.
6. create a `shoppingList` array of objects, where each object has 
- id: A unique identifier.
- name: String.
- quantity: Number.
- details: A nested object containing category and notes. (I did `flavor`: `string`, and `sour`: `boolean` here)
7. initialize state with `reactive`, passing the `shoppingList` array as its value
8. create an action (a function in the store) to add an item the array, using any logic you want (maybe `array.push(item)`)
9. how will you create an object to push to the array?
10. create an action to delete (`array.splice(index, 1)`)
11. create an action and to update (`array.find()`)
12. render the shopping list in the browser
13. add UI elements to allow for adding, updating, and removing items:
14. map the functions to the UI elements (inputs, or buttons, you pick)
15. take advantage of Vue's *declarative bindings*



