<template>
  <div class="top">
    <h1>{{title}}</h1>
    <div class="top__action">
      <div class="top__user">
        <div @click="isDropdownShow = !isDropdownShow" class="top__user-wrapper">
          <OrderListUserIcon />
          <h2>Берманова Карина Асланмухамедовна</h2>
          <svg
            :class="isDropdownShow ? 'active' : ''"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 14.5L17 9.5H7L12 14.5Z" fill="#24334B" />
          </svg>
        </div>
        <div v-show="isDropdownShow" class="top__user-dropdown">
          <router-link to="#">Редактировать профиль</router-link>
          <router-link to="#">Сменить пароль</router-link>
          <router-link to="#">Выход с кабинета</router-link>
        </div>
      </div>
      <div class="top__notification">
        <NotificationIcon />
      </div>
      <div class="header__lang--wrapper">
        <div class="header__lang">
          RU
          <img src="/src/assets/Header/arrow.svg" alt="arrow-icon" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import OrderListUserIcon from '@/assets/OrderList/OrderListUserIcon.vue'
import NotificationIcon from '@/assets/OrderList/NotificationIcon.vue'
import { ref } from 'vue'
const isDropdownShow = ref(false)
defineProps(["title"])
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

.top {
  display: flex;
  justify-content: space-between;
  align-items: center;

  h1 {
    font-weight: 600;
    font-size: 24px;
    color: $text-light-green;
  }

  &__action {
    display: flex;
    gap: 30px;
    align-items: center;
  }

  &__user {
    width: 282px;
    position: relative;

    &-dropdown {
      position: absolute;
      top: 110%;
      left: 0;
      width: 100%;
      z-index: 10;
      background: #fff;
      display: flex;
      flex-direction: column;
      gap: 30px;
      padding: 15px;
      box-sizing: border-box;
      border: 1px solid #efefef;
      filter: drop-shadow(0px 10px 20px #e9e9e9);

      a {
        font-weight: 400;
        font-size: 14px;
        color: #24334b;
      }
    }

    &-wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      cursor: pointer;

      svg.active {
        transform: rotate(180deg);
      }
    }

    h2 {
      font-weight: 500;
      font-size: 14px;
      color: #24334b;
      width: 174px;
    }
  }
}
</style>
