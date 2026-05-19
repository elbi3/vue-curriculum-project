Assignment: Integrating React Hook Form with TanStack Query and Mock REST APIs

Due: Sun May 24, 2026 11:59pmDue: Sun May 24, 2026 11:59pm

Objective
In this assignment, you will integrate React Hook Form with TanStack Query (React Query) to handle data fetching, caching, and mutations against a local Mock REST API (JSON Server). This architecture represents the industry standard for enterprise React applications, separating form client-state from server-state while eliminating unnecessary network requests and state synchronization bugs.

Learning Outcomes
By the end of this assignment, you will be able to:

Leverage TanStack Query’s useQuery hook to load remote server data and hydratively seed a form using React Hook Form’s reset() API.

Implement data mutations via TanStack Query’s useMutation hook bound to HTTP REST methods (PUT/POST).

Configure Cache Invalidation routines using queryClient.invalidateQueries to automatically re-fetch fresh data post-mutation.

Integrate server-side network validation failures (such as a 409 Conflict) directly into localized field errors using setError.

 

Assignment Specifications & Requirements
1. External Infrastructure Setup
Establish a local relational data mock framework using json-server. Your system database must store a single object structure under a /profile endpoint containing:

username: String. Mandatory.

email: String. Must validate as a correct email format.

bio: Long Text (TextArea layout element).

notifications: Boolean checkbox.

2. Core Operational Requirements
A. Data Querying Phase (useQuery)
Fetch user records from http://localhost:3001/profile inside a managed query block key named ["userProfile"].

While the hook's isLoading parameter tracks as true, display an explicit visual loading block.

Once the server payload resolves, use a declarative side-effect mechanism to populate the inputs inside React Hook Form.

B. Data Mutation Phase (useMutation)
Wrap your HTTP PUT updates inside a TanStack Query useMutation block.

Upon successful completion of the mutation (onSuccess execution block):

Force a cache invalidation on the primary database key (["userProfile"]).

Call React Hook Form's reset(data) method using the updated server response payload to clear out internal input modification history flags.

C. Interface Interlocking Statuses (isDirty)
The form save controller action button must remain completely disabled if no changes have been applied to the inputs. Track this state natively via React Hook Form’s formState.isDirty parameter combined with the mutation's isPending state indicator.

D. Mapping Mock Server Rejections
Simulate a remote email constraint collision: if the field contains "conflict@example.com", short-circuit your async block to reject the promise with an explicit server error payload. Capture this inside the mutation's onError callback hook, and pass it directly back onto the UI layout using setError("email", { message: "..." }).