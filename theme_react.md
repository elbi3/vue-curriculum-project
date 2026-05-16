“Dark Mode” requires a global state that can be accessed by every component
You will:
- build a Global Theme Switcher using the React Context API to manage a “Light” vs “Dark” theme across your entire application.
- use createContext to establish a global theme state.
- Create a custom Provider component to manage the toggle logic.
- Apply dynamic CSS classes or inline styles based on the current Context value.
Persist the user’s preference (Optional).


1. Create a new file src/ThemeContext.jsx:
2. Define two theme objects (light and dark)
3. Create the context and a ThemeProvider component.
4. use useState hook inside the provider to track if the current theme is "light" or "dark".
5. Provide the Toggle Function:
- the value prop of your ThemeContext.Provider should include:
- the current theme string (e.g., "light").
- a function (e.g., toggleTheme) that switches the state between light and dark.
6. Setup the Global Wrapper on the root component by wrapping entire application in the <ThemeProvider>.
7. Create the ThemeSwitcher Component
8. Use useContext(ThemeContext) to access the toggleTheme function and the current theme state.
9. Render a button that, when clicked, triggers the toggleTheme function.
10. Consume the Theme in the UI by accessing the current theme via Context.
11. Apply a CSS class to the main container based on the theme (e.g., <div className={theme === 'dark' ? 'dark-mode' : 'light-mode'}>).