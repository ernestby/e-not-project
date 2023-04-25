<template>
  <RouterLink to="/notarius-page/123" class="register__profile">
    <div class="register__img">
      <img :src="item.avatar" alt="Profile1-item" />
      <h1>{{ item.name }}</h1>
    </div>
    <div class="register__stars">
     <Stars />
      <h1>{{ item.rating }}</h1>
      <p>{{ item.votes }} оцен.</p>
    </div>
    <p class="register__street">
      {{ item.region }} обл
      <br />
      {{ item.area }} район
      <br />
      {{ item.place }}
    </p>
  </RouterLink>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { defineProps, ref } from 'vue'
import Stars from "@/assets/Register/Stars.vue"
const props = defineProps(['item'])
</script>

<style lang="scss"></style>
