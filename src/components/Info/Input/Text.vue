<template>
  <label>
    <p>
      {{ text }}
    </p>
    <input type="text" :placeholder="placeholder" />
  </label>
</template>

<script setup>
defineProps(['text', 'placeholder'])
</script>

<style lang="scss">
label {
  font-family: 'Montserrat';
  display: block;
  font-weight: 400;
  font-size: 16px;
  color: #24334b;

  p {
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 5px;
  }

  input {
    padding: 11px 10px;
    width: 100%;
    box-sizing: border-box;
  }
}
</style>
