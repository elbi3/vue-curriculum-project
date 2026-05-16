# "dark" and "light" modes, and introducing Vue Composables!
...with CSS custom properties!

## Explanation:
React prefers to grab everything and shove it into JavaScript state handling, for example: `const ThemeContext = createContext()`.
Vue developers often lean into CSS custom properties and app-level reactivity instead with `provide` and `inject`. This is also Vue's solution for "prop drilling".
It is this author's opinion that a good practice is to own the theme at the HTML root level and let CSS custom properties cascade. For this, Vue can simply flip a single attribute.

### on `provide` and `inject` with `ref`
You can use Vue's built-in dependency injection with `provide` and `ref`
```js
// App.vue
import { provide, ref } from 'vue'

const theme = ref('light')

provide('theme', theme)
```
and then:
```js
import { inject } from 'vue'

const theme = inject('theme')
```
If you provide a value at a parent or root level, any descendant can inject it. This means no prop drilling and no boilerplate wrappers.
So in App.vue you might have:
```js
// App.vue
import { provide, ref } from 'vue'

const theme = ref('light')
const toggleTheme = () => theme.value = theme.value === 'light' ? 'dark' : 'light'

provide('theme', { theme, toggleTheme })
```
and in a very-nested child component:
```js
// DeepChild.vue
import { inject } from 'vue'

const { theme, toggleTheme } = inject('theme')
```
The `provide()` function: it takes two arguments: the "injection key" and its "value". Component descendents use the key to lookup the value.
### on composables
Introducing Vue's composables!
Sometimes we want to reuse the same logic in multiple components (in our case, likely in *all* the components)
*encapsulate and reuse stateful logic*
stateful logic involves managing state that changes over time.
(note difference between *stateful* and *stateless* logic)
1. create a new directory `composables`
2. create a file for our theme change composable function
3. implement the theme changing logic for the function and export the it so the app has access to it
4. define CSS variables with the `:root` selector by using the "--var" pattern: 
```scss
:root {
    --bg: red;
    --text: orange;
}
```
5. apply the variable to other CSS selectors with this pattern: `background: var(--bg);`
6. use selector specificity to apply variables to different modes: 
```scss
:root[data-theme="light"] {
    --bg: gainsboro;
}
:root[data-theme="dark"] {
    --bg: midnightblue;
}
```
(the data-theme attribute is a typical way devs add information to index.html, and it's common for light/dark mode)
7. you can add this directly into the HTML if you want:
```html
<html lang="" data-theme="light">
    <head></head>
    <body></body>
</html>
```
8. `document.documentElement` is the `<html>` element itself, so you can call that to set the data-theme attribute to "dark". The CSS selector `:root` also refers to the `<html>` element
```js
document.documentElement  ===  <html>  ===  :root (in CSS)
```
9. use the `watch` vue function to set the theme to localstorage

[what is a "Composable"?](https://vuejs.org/guide/reusability/composables.html#what-is-a-composable)
[provide/inject](https://vuejs.org/guide/components/provide-inject.html#provide-inject)