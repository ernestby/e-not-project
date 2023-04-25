<script setup>
import { ref, defineProps } from 'vue'
const isActive = ref(false)
const activeOption = ref('Все')

const handleChange = value => {
  activeOption.value = value
  isActive.value = false
}

defineProps(['title', 'options'])
</script>

<template>
  <div class="accordeon">
    <p>{{ title }}</p>
    <label @click="isActive = !isActive" :class="isActive ? 'active' : ''">
      <span>{{ activeOption }}</span>
      <svg
        class="arrow"
        :class="{ active: isActive }"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M6 9L12 15L18 9" stroke="#1BAA75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
      </svg>
    </label>
    <div v-show="isActive" class="accordeon__select">
      <div v-for="option in options" :key="option" @click="handleChange(option)" class="accordeon__option">
        {{ option }}
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.accordeon {
  width: 100%;
  position: relative;

  &__select {
    background: #fff;
    width: 100%;
    border: 1px solid #1baa75;
    border-top: none;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 15px;
    padding: 15px;
  }

  p {
    margin-bottom: 5px;
  }

  &__option {
    color: #24334b;
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #ffffff;
    border: 1px solid #1baa75;
    padding: 12px 10px;
    box-sizing: border-box;

    &.active {
        border-bottom: 1px solid transparent;
    }
  }
}

.arrow.active {
  transform: rotate(180deg);
  transition: 0.3s;
}
</style>
