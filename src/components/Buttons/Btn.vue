<template>
  <button :style="'background:' + bg" class="btn" :disabled="disabled">
    <img v-show="icon" :src="icon" alt="">
    {{ title }}
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const props = defineProps(["title", "bg", "icon", "disabled"]);

</script>

<style lang="scss">
@import "../../assets/scss/variables.scss";
.btn {
  font-family: "Montserrat";
  width: 320px;
  padding: 14px 0;
  border: none;
  color: $bg-white;
  font-weight: 600;
  font-size: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: .3s;

  &:not(:disabled):hover {
    opacity: 0.96;
    box-shadow: 0px 10px 20px $shadow-green;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
}
</style>
