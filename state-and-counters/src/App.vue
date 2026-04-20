<script setup lang="ts">
import Counter from "./Counter.vue";
import UserProfile from "./UserProfile.vue";
import Gallery from "./Gallery.vue";
import TaskManager from "./TaskManager.vue";

</script>

<template>
  <header>
    <h1>You did it!</h1>
  </header>
  <main>
    <div class="container1">
      <!-- <UserProfile /> -->
      <!-- <Counter /> -->
      <Gallery />
      <!-- <TaskManager /> -->
    </div>
  </main>
</template>

<style>
/* Andy Bell CSS reset  */
*,
*::before,
*::after {
  box-sizing: border-box;
}

body,
h1,
h2,
h3,
h4,
p,
figure,
blockquote,
dl,
dd {
  margin: 0;
}

ul[role='list'],
ol[role='list'] {
  list-style: none;
}

html:focus-within {
  scroll-behavior: smooth;
}

a:not([class]) {
  text-decoration-skip-ink: auto;
}

img,
picture {
  max-width: 100%;
  display: block;
}

input,
button,
textarea,
select {
  font: inherit;
}


@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}
/* end reset */

body {
    display: flex;
    flex-direction: column;
    background-color: gainsboro;
    color: midnightblue;
    font-family: sans-serif;
    min-height: 100vh;
    text-rendering: optimizeSpeed;
    line-height: 1.5;
}
h1{
  display: flex;
  justify-content: center;
}
main {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  gap: 1rem;
}
</style>
