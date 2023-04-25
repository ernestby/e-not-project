<template>
  <header class="header">
    <div class="header__content">
      <RouterLink to="/" class="header__logo">
        <img src="/src/assets/Header/logo.svg" alt="logo-icon" />
      </RouterLink>
      <nav>
        <RouterLink to="/about">О нас</RouterLink>
        <RouterLink to="/notaries">Нотариусы</RouterLink>
        <RouterLink to="/faq">Вопросы-ответы</RouterLink>
        <RouterLink to="/regulations">Нормативные акты</RouterLink>
      </nav>
      <div class="header__action">
        <RouterLink to="/auth">
          <img src="/src/assets/Header/own-room.svg" alt="own-room-icon" />
          Личный кабинет нотариуса
        </RouterLink>
        <div class="header__lang--wrapper">
          <div class="header__lang">
            RU
            <img src="/src/assets/Header/arrow.svg" alt="arrow-icon" />
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<style lang="scss">
@import "../../src/assets/scss/variables.scss";
.header {
  padding: 20px 60px;

  &__content {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    font-weight: 500;
    font-size: 16px;
    color: $text-dark-blue;
  }

  nav {
    display: flex;
    align-items: center;
    gap: 30px;
  }

  &__action {
    display: flex;
    gap: 40px;

    a {
      display: flex;
      align-items: center;
      gap: 10px;
    }
  }

  &__lang {
    display: flex;
    align-items: center;
  }
}
</style>
