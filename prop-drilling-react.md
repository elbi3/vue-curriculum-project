# React and prop-drilling

Scenario: Say your app has a component tree App-->Dashboard-->Sidebar-->UserProfile. You have a user object that gets passed from App to UserProfile through two components (Dashboard, Sidebar) that do not use the user object data. This is known as "prop-drilling", where you pass data through components to get it to its destination. 

To correct this in React, we use the `createContext()` hook. 
1. make files `UserProvider.jsx` and `UserContext.jsx` and export both modules.
2. Make sure `UserProvider` contains user state like name, email and themePreference fields.
3. in `App.jsx` wrap the top-level components with `<UserProvider>` component.
4. then, instead of passing the user data through other components to its destination, simply import `useContext` hook and the `UserContext` component into the deeply nested `UserProfile.jsx` component.
5. Set `const { user } = useContext(UserContext);` to access the data in that component.
6. Show the results in the UI