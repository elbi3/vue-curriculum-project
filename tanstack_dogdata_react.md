React Assignment Translation

TanStack Query to fetch Dog Data

points:
1. use TanStack Query to retrieve, cache, and manage async data from the Dog Data API
2. Handle `isPending`, `isError`, `isSuccess`
3. consume multiple endpoints

--> [Setup your framework and library tools] *or* add to your previous assignment. (Do this because it is simpler!)

You will:
send a GET request to https://dogapi.dog/api/v2/breeds, to display a list of dog breeds in your app.

1. install TanStack Query
2. create a GET request to `https://dogapi.dog/api/v2/breeds` using TanStack Query
3. display the fetched list of dog breeds (maybe make a component?)
4. handle API responses for different query states (`isPending`, `isError`, `isSuccess`)
5. do this by communicating the different states to the user in the UI by showing a loading spinner, or an error message, or the data (success)
6. fetch 2: fetch the `/facts` endpoint to get dog facts and display them in an interesting way
7. fetch 3: use the `/groups` endpoint to fetch information about dog groups and display them in an interesting way
8. consider making a component for each fetch if that make sense for your UI plan

[TanStack Query Quick Start](https://tanstack.com/query/latest/docs/framework/react/quick-start)
[Dog Data API](https://dogapi.dog/)