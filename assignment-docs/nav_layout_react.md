Assignment: Building a Multi-Page Layout for the Blog App

You will:
Convert a static, single-view Blog application into a functional Multi-Page Application (MPA) with React Router. 
You will organize blog content into logical views: a Home feed, an About page, and a dynamic Post view.


Utilize file-based routing to manage application views.
Implement a persistent Navigation Layout using the <Outlet/> pattern.
Use Dynamic Routing to load specific blog posts based on their ID.
Practice the useNavigate hook for programmatic navigation (e.g., clicking a button to go back).

Create dummy data:

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


PART 11 RECIPE GALLERY:
Assignment: Adding Navigation to the Recipe Gallery

📝 Overview
In this assignment, you will transition the Recipe Gallery from a single-page state-based component into a modern multi-page application using React Router (now part of the Remix framework). You will implement server-aware client-side routing to allow users to navigate between a home dashboard, a full gallery, and individual recipe detail pages using the file-based routing system.

Note: While this assignment can be completed using Remix or Vite, the instructions below are specifically tailored for the React Router (Remix) framework.

🎯 Objectives
Implement file-based routing for client-side navigation.
Create Dynamic Routes to display specific recipe details.
Use the useParams hook to extract URL parameters.
Implement a global layout with a navigation bar for a seamless user experience.
🛠️ Assignment Instructions
1. Setup Your Remix/React Router Environment
To initialize this project as a standalone instance:

Initialize the project: 
npx create-react-router@latest recipe-router-app 

cd recipe-router-app 

npm install

npm run dev

Framework Note: React Router v7+ uses a file-based routing system located in the app/routes directory. Ensure your files use the .jsx extension.
2. Configure the Route Structure
In Remix/React Router, routes are defined by creating files in app/routes/. Set up the following structure:

app/routes/_index.jsx — The Home component (a simple welcome page).
app/routes/gallery.jsx — The Gallery component you built previously.
app/routes/recipe.$id.jsx — A new RecipeDetail component (using the . syntax for dynamic parameters).
3. Create the RecipeDetail Component
Create a new file app/routes/recipe.$id.jsx.
Use the useParams hook to get the id from the URL.
Find the corresponding recipe from your data array using this ID.
Requirement: Display the recipe image, title, and a placeholder for "Cooking Instructions."
Include a "Back to Gallery" link using the Link component from @react-router/dom (or react-router).
4. Update the Gallery Component
Modify your existing gallery.jsx:

Remove the "Next" and "Previous" state-based buttons.
Instead, render the entire list of recipe thumbnails.
Wrap each thumbnail in a Link that points to /recipe/[id].
5. Navigation Layout
Create a global layout (usually in app/root.jsx) or a Navbar.jsx component that stays visible on all pages. It should contain links to:

Home (/)
Gallery (/gallery)
