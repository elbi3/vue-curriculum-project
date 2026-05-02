React Assignment Translation

Recipe Gallery 

points:
1. use React state to manage dynamic content for display
2. use React state to respond to user actions

--> [Setup your framework and library tools] *or* add to your previous assignment. (Do this because it is simpler!)

You will:
display images from a list,
and navigate through the list using "next" and "previous" buttons


1. create a Gallery Component
2. create dummy data: Make an array of objects with keys for id, url, and image description.
3. export this list from a separate file (better) or put it at the top of your Gallery Component 
4. add the useState hook to your Gallery component to track the index of current display image
5. in the UI display the image along with its description
6. implement "next" and "previous" buttons to go through the list of photos using state updates
7. add logic to handle array-length limit (don't navigate past the final image) 