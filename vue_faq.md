# Vue tidbits

## .value and ref()
1. When do you use .value with ref()?
The answer depends on *where you are at*. 
Are you in JavaScript <script></script>, or html <template></template>?

In <script setup> → usually use .value
In <template> → Vue auto-unwraps refs, so NO .value
```html
<script setup>
const count = ref(0);
count.value++;
console.log(count.value);
<script>
```
count is actually: `{ value: 0 }`
because `ref()` returns an object wrapper.
Vue automatically "unwraps" the `ref()` in the html:
```html
<p>{{ count }}</p>

```
(so, you don't^ need to add `.value`)
also:
```html
<input v-model="count">
```

## Function Reference
passing a function like this: `@click="handleClick"` is the same as `button.onclick = handleClick;`
= when clicked, execute the expression
if you need to pass arguments, it's going to look like you are calling the function: `@click="handleDelete(blog.id)"`
but it is waiting for the event
--> if you are coming from React, this looks weird because:
```js
onClick={handleDelete(id)}
```
this^ runs on render. Vue's templates work differently.
`@click="handleDelete(id)"` is an expression to run later.

## `<script setup>` ordering of code:
1. imports
2. composable calls (useForm, useField, useStorage)
3. derived state & watches
4. functions & handlers

## quick
### attributes:
`:` is shorthand for `v-bind`--> binds a dynamic JavaScript expression to an attribute
example: `:disabled`
### events:
`@` is shorthand for `v-on`--> binds event listeners
example: `@submit`