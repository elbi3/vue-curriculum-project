React Assignment Translation

User Profile

points:
1.

--> [Setup your framework and library tools] *or* add to your previous assignment. (Do this because it is simpler!)

1. create a UserProfile Component
2. set up state handling for the `userProfile` variable with the `useState` hook
3. initialize `userProfile` with an object:
```js
{
    name: "",
    email: "",
    address: ""
}
```
4. add a nested object as the value for the `address`property, with "street", "city" and "country" fields.
5. use the spread operator twice: first for the profile, and then for the nested address information.
6. create a function `updateAddress` to updatethe `address` property inside the `userProfile` object
7. add 3 input fields to teh UI for each of the address fields.
8. add a button that calls the `updateAddress` function with the input field values
9. display the current user profile information (including address) below the form to show real-time updates.