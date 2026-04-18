React Assignment Translation

Counter

points:
1. use React's state handling in different ways to observe batching behavior
2. use React's state updater function to see changes in real time and avoid "stale" state values

--> [Setup your framework and library tools]

1. create a Counter Component
2. implement a function `increment` that increases the count by 1
3. add a button that calls the `increment` function
4. implement a function `incrementAfterDelay`that increases the count by 1 after a 2 second delay using the native JavaScript function `setTimeout`
5. add a button that calls `incrementAfterDelay` 
6. implement a third function `incrementTwice` that increments twice immediately in the function scope
7. add a button that calls `incrementTwice`
8. implement a fourth function `correctIncrementTwice` that increments the count by 2 using a state updated function like so: `setCount(prevCount => prevCount + 1)`
9. add a button that calls `correctIncrementTwice`