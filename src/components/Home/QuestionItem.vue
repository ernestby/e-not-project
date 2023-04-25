<template>
  <div class="question-item">
    <div @click="isActive = !isActive" class="question-item__top" :class="isActive ? ' active' : ''">
      <h3>{{ title }}</h3>
      <svg v-show="!isActive" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="#24334B" />
      </svg>
      <svg v-show="isActive" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12.998H5V10.998H19V12.998Z" fill="white" />
      </svg>
    </div>
    <div v-if="isActive" class="question-item__login">
      <p>
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, defineProps } from 'vue'

const isActive = ref(false)

defineProps(['title', 'description'])
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.question-item {
  background: $bg-white;
  margin-bottom: 28px;

  &__top.active {
    background: $bg-dark-blue;
    box-shadow: 0px 5px 20px $shadow-gray;
    color: $bg-white;

    svg {
      path {
        stroke: $bg-white;
      }
    }
  }

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 23px;
    font-weight: 600;
    font-size: 16px;
    color: $text-dark-blue;

    h3 {
      max-width: 615px;
      font-weight: 600;
      font-size: 16px;
    }

    div {
      display: flex;
      gap: 19px;
    }
  }

  &__login {
    padding: 30px 20px;

    p {
      font-weight: 400;
      font-size: 16px;
      color: $text-dark-blue;
    }
  }
}
</style>
