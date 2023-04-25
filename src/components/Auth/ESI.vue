<template>
  <div class="auth-item">
    <div @click="isActive = !isActive" class="auth-item__top" :class="isActive ? ' active' : ''">
      <div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M7 16V11.361C7 10.851 7.1 10.362 7.285 9.908M17 16V12.815M9.222 7.735C10.0666 7.24842 11.0253 6.99478 12 7C14.28 7 16.203 8.33 16.805 10.15M10 17V14.823M14 17V11.853C14 10.83 13.105 10 12 10C10.895 10 10 10.83 10 11.853V12.647M6 3H3V6M18 3H21V6M6 21H3V18M18 21H21V18"
            stroke="#1BAA75"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        <h3>Вход через ЕСИ</h3>
      </div>
      <svg v-show="!isActive" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="#24334B" />
      </svg>
      <svg v-show="isActive" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M19 12.998H5V10.998H19V12.998Z" fill="white" />
      </svg>
    </div>
    <div v-show="isActive" class="auth-item__login">
      <div class="auth-item__btns">
        <button class="active">Вход через ИНН</button>
        <button>Вход через ID</button>
      </div>
      <label for="personal-number">
        <p>Персональный номер (ИНН)</p>
        <input v-model="inn" id="personal-number" type="text" />
      </label>
      <label for="password">
        <p>Пароль</p>
        <input v-model="password" id="password" type="password" />
      </label>
      <a href="#" class="forget-password">Забыли пароль?</a>
      <div v-show="err" class="auth-item__err">
        <div class="auth-item__info">
          <h3>Неудачная попытка входа</h3>
          <p>
            Вы не можете войти в личный кабинет, так как вы не зарегистрировались в ЕСИ. Для того, чтобы получить ЕСИ
            вам необходимо обратиться в ближайший ЦОН или к любому нотариусу в реестре для получения логина.
          </p>
        </div>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="#EB5757"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path d="M12 16H12.01" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
          <path d="M12 8V12" stroke="#EB5757" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
      </div>
      <Btn title="Войти" bg="#1BAA75" :disabled="isLoading" @click="handleClick" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import Btn from '../Buttons/Btn.vue'
const isActive = ref(false)
const isLoading = ref(false)
const inn = ref('')
const password = ref('')
const err = ref(false)

const handleClick = () => {
  err.value = false
  isLoading.value = true

  setTimeout(() => {
    if (inn.value.trim() === '' || password.value.trim() === '') {
      err.value = true
      isLoading.value = false
    } else {
      err.value = false
      isLoading.value = false
    }
  }, 4000)
}
</script>

<style lang="scss">
.auth-item {
  background: #fff;
  margin-bottom: 28px;

  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 23px;
    font-weight: 600;
    font-size: 16px;
    color: #24334b;

    h3 {
      font-weight: 600;
      font-size: 16px;
    }

    div {
      display: flex;
      gap: 19px;
    }
  }

  &__top.active {
    background: #3f5984;
    box-shadow: 0px 5px 20px #e9e9e9;
    color: #ffffff;

    svg {
      path {
        stroke: #fff;
      }
    }
  }

  &__login {
    padding: 30px 20px;
  }

  &__btns {
    display: flex;
    gap: 20px;
    margin-bottom: 30px;

    button {
      width: 230px;
      border: none;
      font-size: 16px;
      padding: 15px 0;
      background: transparent;
      font-family: 'Montserrat';
      transition: 0.3s;

      &.active {
        background: #1baa75;
        color: #f6f6f6;

        &:hover {
          box-shadow: 0px 10px 20px #99dbaf;
        }
      }
    }
  }

  label {
    position: relative;
    margin-bottom: 20px;
    display: block;

    &:focus-within {
      input {
        border: 1px solid #eb5757;
      }

      p {
        color: #eb5757;
      }
    }

    input {
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      color: #24334b;
      padding: 15px;
      background: transparent;
      border: 1px solid #cdcdcd;
      outline: none;
      box-sizing: border-box;
    }

    p {
      position: absolute;
      top: -14px;
      left: 15px;
      font-weight: 500;
      font-size: 14px;
      color: #24334b;
      display: inline;
      background: #fff;
      padding: 5px;
    }
  }

  .forget-password {
    font-size: 16px;
    line-height: 140%;
    text-decoration-line: underline;
    color: #24334b;
    margin-bottom: 30px;
    display: block;
  }

  &__err {
    background: #ffffff;
    border: 1px solid #efefef;
    box-shadow: 0px 10px 20px #e9e9e9;
    padding: 16px;
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;

    h3 {
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #24334b;
      margin-bottom: 5px;
    }

    p {
      font-size: 14px;
      color: #687c9b;
    }
  }

  &__info {
    max-width: 419px;
  }
}
</style>
