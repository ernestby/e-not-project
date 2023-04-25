<template>
  <div class="dropdown">
    <div @click="isShow = !isShow" class="dropdown__wrapper">
      {{ title }}
      <FilterIcon :class="isShow ? 'active' : ''" />
    </div>
    <div v-show="isShow" class="dropdown__content">
      <Checkbox v-for="option in options" :key="option" :title="option" />
      <div class="dropdown__bottom">
        <button>Готово</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Checkbox from '@/components/Checkbox/Checkbox.vue'
import FilterIcon from '@/assets/Table/FilterIcon.vue'
defineProps(['title', 'options'])

const isShow = ref(false)
</script>

<style lang="scss">
.dropdown {
  position: relative;

  &__wrapper {
    display: flex;
    align-items: center;
    cursor: pointer;
    justify-content: space-evenly;

    svg.active {
      path {
        fill: #1baa75;
      }
    }
  }

  &__content {
    width: 90%;
    position: absolute;
    background: #fff;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    border: 1px solid #efefef;
    box-shadow: 0px 10px 20px #e9e9e9;
  }

  &__bottom {
    button {
      font-weight: 600;
      font-size: 14px;
      color: #1baa75;
      border: none;
      background: transparent;
      display: block;
      width: 100%;
    }
  }
}
</style>
