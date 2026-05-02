# recipe-gallery

## Investigate:
How does Vue.js use state to manage dynamic content for display?
How does Vue.js use state to respond to user actions?

You will:
display images from a list,
and navigate through the list using "next" and "previous" buttons


1. create a Gallery Component
2. create dummy data: Make an array of objects with keys for id, url, and image description.
3. export this list from a separate file (better) or put it at the top of your Gallery Component 
4. use `ref()` to track which index position to render from the recipes array
5. in the UI display the image along with its description
6. use handlebars to display the recipe title as text
7. use the `v-bind` shorthand ":" directive in the HTML to dynamically display the image: `:src="array[index-position].imageUrl` (not exactly that)
6. add "next" and "previous" buttons to go through the list of photos using our counter ref state
7. implement a function that handles "next" click 
8. implement a function that handles "previous" click
9. add logic to handle array-length limit (don't navigate past the final image) 
(I chose to add logic so that the array would loop, because this felt like a natural UI choice to me)

[build-in directives](https://vuejs.org/api/built-in-directives.html)