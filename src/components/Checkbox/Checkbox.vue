<template>
  <label @click="isActive = !isActive" :class="isActive ? ' active' : ''">
    <div v-show="isActive" class="checkbox__pin">
      <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M10.4969 2.71779C10.6528 2.85417 10.6686 3.09108 10.5322 3.24694L5.28222 9.24694C5.21387 9.32505 5.11621 9.37134 5.01248 9.3748C4.90875 9.37825 4.80822 9.33856 4.73483 9.26517L2.48483 7.01517C2.33839 6.86872 2.33839 6.63129 2.48483 6.48484C2.63128 6.33839 2.86872 6.33839 3.01517 6.48484L4.98173 8.45141L9.96778 2.75307C10.1042 2.5972 10.3411 2.58141 10.4969 2.71779Z"
          fill="white"
        />
      </svg>
    </div>
    <div v-show="!isActive" class="checkbox__mark"></div>
    {{ title }}
  </label>
</template>

<script setup>
import { ref } from 'vue'

const isActive = ref(false)
defineProps(['title'])
</script>

<style lang="scss">
label {
  display: flex;
  align-items: center;
  font-weight: 400;
  font-size: 14px;
  gap: 16px;
  color: #24334b;

  &.active {
    color: #1baa75;
  }
}

.checkbox {
  &__mark {
    width: 16px;
    height: 16px;
    padding: 2px;
    box-sizing: border-box;

    border: 1px solid #cdcdcd;
    box-shadow: 0px 5px 12px -5px rgba(174, 174, 174, 0.06), 0px 5px 30px -5px rgba(160, 160, 160, 0.1);
    background: #ffffff;
    border-radius: 2px;
  }

  &__pin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border: 1px solid #cdcdcd;
    box-shadow: 0px 5px 12px -5px rgba(174, 174, 174, 0.06), 0px 5px 30px -5px rgba(160, 160, 160, 0.1);
    background: #1baa75;
    border-radius: 2px;
    text-align: center;
  }
}
</style>
