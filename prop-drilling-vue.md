# Vue and prop-drilling

Vue developers often lean into CSS custom properties and app-level reactivity instead with `provide` and `inject`. This is also Vue's solution for "prop drilling".

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

### the project
demonstrate how vue handles data in deeply-nested child components.
1. in your top level component (App.js?) use `ref` to store your data and `provide`to make it available
2. create a deeply-nested component 
3. import and use `inject` to retrieve the data from provide.
4. don't forget that when you provide a ref, the injected value is still a ref and you may need to unwrap it
5. display results in UI
6. consider checking for truthiness with the `variable?.name` pattern. The ?. optional chaining protects you if inject returns `undefined` before the data is ready.