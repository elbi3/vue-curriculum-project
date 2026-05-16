<script setup lang="ts">
import { provide, ref } from "vue";
import { RouterView } from "vue-router";

const mode = ref("light");

function updateMode() {}
provide("theme", {mode, updateMode});
</script>

<template>
  <RouterView />
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
