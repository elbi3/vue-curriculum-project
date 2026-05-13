React Assignment Translation

TanStack Query to fetch Dog Data

points:
1. learn about TanStack Query's mutation hook `useMutation`

--> [Setup your framework and library tools] *or* add to your previous assignment. (Do this because it is simpler!)

You will:
perform CRUD operations using TanStack Query
interact with fake REST API `https://jsonplaceholder.typicode.com/`

1. Set up your `Blog` component
2. set up a `fetchPosts`: GET all blog posts with `useQuery` hook
3. display the fetched blog posts in a list
4. add a form element for new post submission
5. use TanStack Query's `useMutation` hook to make a POST request to submit a new blog post to the server 
6. add an edit button to each post element in the UI
7. implement edit button functionality to replace existing post with a PUT request
8. as part of edit functionality, use a form to allow user to make these updates
9. add a feature that allows the user to update the title of a post by making a PATCH request
10. add a delete button to each post element in the UI
11. implement delete button functionality by making a DELETE request
12. add a feature that allows the user to filter posts by 'User ID'