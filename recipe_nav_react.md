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
🏗️ Integration & UI
UI Responsibility: The student is responsible for the CSS (.css) integration as they see fit for a standalone app.
App Integration: The student has the option to package these assignments into one master app by importing components into the main layout located in app/root.jsx.
📚 Relevant Study Material & Exercises
W3Schools: React Router TutorialLinks to an external site. (Foundational concepts for routing)
W3Schools: JavaScript Array find()Links to an external site. (Essential for retrieving the recipe by ID)
W3Schools: React Link ComponentLinks to an external site. (Understanding navigation without page refreshes)
W3Schools: JavaScript Template LiteralsLinks to an external site. (Useful for creating dynamic paths like /recipe/${id})
React Router Docs: Main ConceptsLinks to an external site. (Deep dive into the modern Remix-based router)
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