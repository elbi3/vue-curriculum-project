Assignment: Building a Multi-Page Layout for the Blog App

You will:
Convert a static, single-view Blog application into a functional Multi-Page Application (MPA) with React Router. 
You will organize blog content into logical views: a Home feed, an About page, and a dynamic Post view.


Utilize file-based routing to manage application views.
Implement a persistent Navigation Layout using the <Outlet/> pattern.
Use Dynamic Routing to load specific blog posts based on their ID.
Practice the useNavigate hook for programmatic navigation (e.g., clicking a button to go back).

🛠️ Assignment Instructions

1. Project Setup & Data

To initialize this project as a standalone instance:

Initialize the project:


npx create-react-router@latest blog-remix-app

cd blog-remix-app

npm install

npm run dev

 

Environment Note: Remix/React Router v7 uses Hot Module Replacement (HMR) via WebSockets (WS). Ensure all component files use the .jsx extension.

Data Source: Create a file named app/data/posts.js to act as your data source:

export const posts = [

  { id: 1, title: 'React Router Tips', content: 'Use Link instead of anchor tags...' },

  { id: 2, title: 'State Management', content: 'Context API vs Redux...' },

  { id: 3, title: 'The Future of Web', content: 'AI and React are merging...' }

];

2. Create the Component Architecture
In the Remix file-based system, paths are determined by the files in app/routes/. Create the following:

Layout (app/root.jsx): This is your application shell. It must contain your <nav> bar and the <Outlet /> component (imported from react-router) to render the specific content of child routes.
Home (app/routes/_index.jsx): Displays a list of all blog post titles. Each title should be a <Link> leading to its specific post (e.g., /post/1).
About (app/routes/about.jsx): A simple page describing the purpose of this blog.
PostView (app/routes/post.$postId.jsx): A dynamic component that displays the full content of a selected post based on the URL parameter.
3. Implement the Router Logic
By organizing your files in the app/routes/ folder, the routing logic is handled automatically:

/ → Renders the _index.jsx content inside the root.jsx layout.
/about → Renders the about.jsx component.
/post/:postId → Renders the post.$postId.jsx component.
4. Dynamic Post Loading
Inside app/routes/post.$postId.jsx:

Import useParams to extract the postId from the URL.
Use .find() to locate the correct post object from your posts.js data array.
Bonus Challenge: Use the useNavigate hook to create a "Return to Feed" button that programmatically sends the user back to the Home (/) page.
🏗️ Integration & UI
UI Responsibility: The student is responsible for the CSS (.css) integration as they see fit for a standalone app.
App Integration: The student has the option to package this as one app by importing the component into a main root.jsx (the Remix entry point).
📚 Relevant Study Material & Exercises
W3Schools: React Router TutorialLinks to an external site. (Core routing concepts)
W3Schools: JavaScript Array find()Links to an external site. (Essential for matching IDs)
W3Schools: React Link ComponentLinks to an external site. (Client-side navigation basics)
W3Schools: JavaScript ModulesLinks to an external site. (Importing/Exporting your post data)
React Router Docs: The Outlet ComponentLinks to an external site. (Understanding nested layouts)
React Router (Remix) DocumentationLinks to an external site.
Assignment Submission:

Once you have completed the assignment, please prepare the following for submission:

GitHub Repository:
Push your program to a new GitHub repository.
Ensure that your repository is public so that it can be accessed and reviewed.
Your repository should include all source code files and a README.md file that briefly describes the project and how to run it.
Demonstration:
Provide a video demonstrating your program in action. The demonstration should include:

Show the program's functionality.
You need to present test cases and demonstrate that you are passing those cases.(we expect you to have at least 3 test cases testing normal cases and at least 3 test cases testing edge cases)
Submission:
Submit the link to your GitHub repository.
Include a link to your video demonstration. Youtube link (public or unlisted)