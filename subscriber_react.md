React Assignment Translation

State Management with Immer's "draft" object and `useImmer` hook

points:
1. manage complex React state using the useImmer hook from the Immer library
2. experience what it is like to work with "draft" state, especially for nested data structures
3. let a library track changes and handle immutability for you

--> [Setup your framework and library tools] *or* add to your previous assignment. (Do this because it is simpler!)

You will:
create a subscriber profile,
add logic to update the subscriber's profile and subscription status

1. you may already have immer installed, but check that you have it installed
2. create a `Subscriber` component
3. import the `useImmer` hook into the `Subscriber` component
4. create the subscriber object:
name: String.
email: String.
contactDetails: An object containing phone and address.
preferences: An object containing newsletter (boolean) and notifications (boolean).
5. set the subscriber object as the default state with the `useImmer` hook
6. create a function `updateContactDetails` to change phone number and address
7. create a function `toggleNewsletterSubscription` to switch the newsletter preference between true and false
8. create a UI with input fields for name, phone, and address
9. create a toggle button or checkbox for the newsletter subscription status
10. display the current state of the subscriber object in the UI to experience real-time updates
