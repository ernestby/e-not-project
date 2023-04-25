<script setup>
import { RouterLink, RouterView, useRoute } from 'vue-router'
import { computed } from 'vue'
import UserLayout from './layouts/UserLayout.vue'
import MainLayout from './layouts/MainLayout.vue'
import NotariusLayout from './layouts/NotariusLayout.vue'
const route = useRoute()

const layout = computed(() => {
  if (route.meta.layout === 'user') {
    return UserLayout
  } else if (route.meta.layout === 'notarius') {
    return NotariusLayout
  } else {
    return MainLayout
  }
})
</script>

<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<style lang="scss">
@import './assets/scss/variables.scss';
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  background: $bg-light-gray;
}

body,
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul {
  list-style: none;
  padding: 0;
}

a {
  text-decoration: none;
}

button {
  cursor: pointer;
  border: none;
}

.container {
  max-width: 1234px;
  margin: 0 auto;
  padding: 0 20px;
  box-sizing: border-box;
}
input {
  outline: none;
}
</style>
