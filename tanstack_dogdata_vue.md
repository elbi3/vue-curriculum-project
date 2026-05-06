Fetch Data with TanStack Query 🌴in Vue (Use TanStack! #1)

Investigate
What are best practices 
What is a Query? 
How do query keys work, and how do they act as "locker numbers" (a cache slot access)
TanStack Query uses the key as a cache identifier.
Not a lot of difference with React's implementation?
Understand the 3 core concepts of Vue Query: Queries, Mutations, Query Invalidations
Experience how Vue uses "the signals paradigm" to handle reactivity 
Learn how TanStack Query keys work, and how the keys act as "locker numbers" (a cache slot access)
"data" is what is stored in each "locker"

click happens
    → selectedId.value changes
        → Query sees the key changed
            → Query runs queryFn
                → queryFn fetches from API
                    → result lands in `data` (your singleBreedData)
                        → template reactively updates

You will:
Create some fetch calls from different api endpoints
Display a bunch of stuff about dogs!

To Do
1. install TanStack Query: `npm i @tanstack/vue-query`
2. initialize Vue Query by importing it into `main.ts`:
```js
import { VueQueryPlugin } from '@tanstack/vue-query'

app.use(VueQueryPlugin)
```
3. import `useQuery` into a `DogInfo.vue` component 
4. call the `useQuery` hook and pass it an object containing a unique key and a function `fetchDogData` 
6. note that you can destructure your "result" from the `useQuery` hook: [see third code sample here](https://tanstack.com/query/latest/docs/framework/vue/guides/queries#query-basics)
5. fetch 1: implement the `fetchDogData` function: create a GET request to `https://dogapi.dog/api/v2/breeds`. `fetchDogData` must return a Promise! 
5. I am using nested templates to map data using the `v-for` directive combined with scoped slots and a nested <template> element as a wrapper
5. let's take a detour to explore the "vueUse" library!
3. display the fetched list of dog breeds (maybe make a component?)
4. handle API responses for different query states (`isPending`, `isError`, `isSuccess`)
5. do this by communicating the different states to the user in the UI by showing a loading spinner, or an error message, or the data (success)
- note that the array you pass to `useQuery` can contain static strings as well as dynamic variables: 
6. fetch 1.5: display specific breed details by using the id endpoint (show name, description, and other attributes)
- note: be sure to use the "computed" [directive?] in your useQuery so that fetch happens when id (store it in ref!) is not null
- this way fetch happens when id is a non-null value, and not when app mounts
6. fetch 2: fetch the `/facts` endpoint to get dog facts and display them in an interesting way
7. fetch 3: use the `/groups` endpoint to fetch information about dog groups and display them in an interesting way
8. consider making a component for each fetch category (breeds, facts, groups) if that make sense for your UI plan

Resources
[TanStack Query Vue Installation](https://tanstack.com/query/latest/docs/framework/vue/installation)
[TanStack Query QuickStart](https://tanstack.com/query/latest/docs/framework/vue/quick-start)
[Reactivity In Depth - "signals paradigm"](https://vuejs.org/guide/extras/reactivity-in-depth.html#connection-to-signals)
[on Immutability in TanStack](https://tanstack.com/query/latest/docs/framework/vue/reactivity#immutability)
[Dog Data API](https://dogapi.dog/)