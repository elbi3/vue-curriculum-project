

use `<RouterView>` to allow title click that takes you to new url for a single blog post
The `:to` prop accepts either a string or an object, so you can use string interpolation for the dynamic id: `<RouterLink :to="`/blog/post/${blog.id}`">`
alternatively, you can use the object syntax: 
```html
<RouterLink :to="{ name: 'blog', params: { id: blog.id } }"></RouterLink>
```
your route will need a name to match this^ in your `router/index.js`