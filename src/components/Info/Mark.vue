<template>
  <div @click="isActive = !isActive" class="mark" :class="isActive ? ' active' : ''">
    <p>
      {{text}}
    </p>
    <MarkIcon />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import MarkIcon from '@/assets/Info/MarkIcon.vue'

const isActive = ref(false)
defineProps(["text"])
</script>

<style lang="scss">
.mark {
  background: #ffffff;
  display: flex;
  gap: 6px;
  align-items: flex-start;
  justify-content: flex-end;
  padding: 10px 16px;
  box-sizing: border-box;
  width: 540px;
  height: 86px;

  p {
    max-width: 479px;
    font-weight: 400;
    font-size: 14px;
    color: #687c9b;
    display: none;
  }

  &.active {
    border: 1px solid #efefef;
    box-shadow: 0px 10px 20px #e9e9e9;

    p {
      display: block;
    }

    svg {
      fill: #1baa75;

      .question {
        stroke: #fff;

        &-dot {
          fill: #fff;
        }
      }
    }
  }
}
</style>
