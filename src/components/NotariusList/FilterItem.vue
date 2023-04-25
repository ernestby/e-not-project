<template>
  <div class="register__item">
    <p>{{ item.title }}</p>
    <label @click="isActive = !isActive" :class="isActive ? 'active' : ''">
      <span>{{ activeOption }}</span>
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 9L12 15L18 9"
          stroke="#1BAA75"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </label>
    <div v-show="isActive" class="register__select">
      <div
        v-for="option in item.options"
        :key="option"
        @click="activeOption = option"
        class="register__option"
      >
        {{ option }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from "vue";
const isActive = ref(false);
const activeOption = ref("Все");
defineProps(["item"]);
</script>

<style lang="scss">
label {
  display: flex;
  align-items: center;
}
.register {
  &__item {
    position: relative;
  }

  &__select {
    position: absolute;
    top: 80px;
    left: 0;
    background: #fff;
    width: 100%;
    z-index: 10;
  }

  &__option {
    color: #24334b;
    margin: 15px;
    cursor: pointer;
  }
}
</style>
