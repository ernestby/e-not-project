<template>
  <section class="heirs">
    <div class="container">
      <div class="heirs__content">
        <h1 class="heirs__title">Розыск наследников</h1>
        <form class="heirs__inp">
          <div class="heirs__box">
            <div class="heirs__block">
              <p>ФИО наследодателя (обязателен)</p>
              <input required type="text" placeholder="Введите ФИО" />
            </div>
            <div class="heirs__block">
              <p>ИНН наследодателя</p>
              <input type="text" placeholder="Введите ИНН" />
            </div>
            <button class="heirs__find">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.46881 17.3367C11.2147 17.3363 12.9102 16.7519 14.2854 15.6765L18.6093 20.0001L20.0001 18.6094L15.6762 14.2858C16.7523 12.9104 17.3371 11.2146 17.3375 9.46839C17.3375 5.13001 13.8074 1.6001 9.46881 1.6001C5.1302 1.6001 1.6001 5.13001 1.6001 9.46839C1.6001 13.8068 5.1302 17.3367 9.46881 17.3367ZM9.46881 3.56717C12.7235 3.56717 15.3703 6.21387 15.3703 9.46839C15.3703 12.7229 12.7235 15.3696 9.46881 15.3696C6.21411 15.3696 3.56728 12.7229 3.56728 9.46839C3.56728 6.21387 6.21411 3.56717 9.46881 3.56717Z"
                  fill="white"
                />
              </svg>
              Найти
            </button>
          </div>
        </form>
        <p class="heirs__row">не введено ФИО наследодателя</p>
        <div class="heirs__case">
          <h2>Пока ничего не найдено</h2>
          <EmptyIcon />
        </div>
        <div class="heirs__item" :class="isActive ? ' active' : ''">
          <div @click="isActive = !isActive" class="heirs__top">
            <div>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11ZM12 5C12.3956 5 12.7822 5.1173 13.1111 5.33706C13.44 5.55683 13.6964 5.86918 13.8478 6.23463C13.9991 6.60009 14.0387 7.00222 13.9616 7.39018C13.8844 7.77814 13.6939 8.13451 13.4142 8.41422C13.1345 8.69392 12.7781 8.8844 12.3902 8.96157C12.0022 9.03874 11.6001 8.99914 11.2346 8.84776C10.8692 8.69639 10.5568 8.44004 10.3371 8.11114C10.1173 7.78224 10 7.39556 10 7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21072 11.4696 5 12 5ZM12 13C10.1435 13 8.36301 13.7375 7.05025 15.0503C5.7375 16.363 5 18.1435 5 20C5 20.2652 5.10536 20.5196 5.29289 20.7071C5.48043 20.8946 5.73478 21 6 21C6.26522 21 6.51957 20.8946 6.70711 20.7071C6.89464 20.5196 7 20.2652 7 20C7 18.6739 7.52678 17.4021 8.46447 16.4645C9.40215 15.5268 10.6739 15 12 15C13.3261 15 14.5979 15.5268 15.5355 16.4645C16.4732 17.4021 17 18.6739 17 20C17 20.2652 17.1054 20.5196 17.2929 20.7071C17.4804 20.8946 17.7348 21 18 21C18.2652 21 18.5196 20.8946 18.7071 20.7071C18.8946 20.5196 19 20.2652 19 20C19 18.1435 18.2625 16.363 16.9497 15.0503C15.637 13.7375 13.8565 13 12 13Z"
                  fill="#1BAA75"
                />
              </svg>
              <h3>Нурмырзаев Баккелди Абылкасымович</h3>
            </div>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="plus">
              <path d="M11 19V13H5V11H11V5H13V11H19V13H13V19H11Z" fill="#24334B" />
            </svg>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="minus"
            >
              <path d="M19 12.998H5V10.998H19V12.998Z" fill="white" />
            </svg>
          </div>
          <div v-if="isActive" class="heirs__login">
            <ul>
              <p>
                <span>Наследодатель:</span>
                <a href="#">Нурмырзаев Баккелди Бекмолдоевич</a>
              </p>
              <p>
                <span>Наследователь:</span>
                <a href="#">Бекмолдоев Акбар Баккелдиевич</a>
              </p>
              <p>
                <span>Нотариус:</span>
                <a href="#">Частный нотариус Баланчаев Б.Б.</a>
              </p>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import EmptyIcon from '@/assets/HeirsSearch/EmptyIcon.vue'
const isActive = ref(false)
</script>

<style lang="scss">
.heirs {
  margin-top: 100px;
  &__title {
    font-weight: 600;
    font-size: 36px;
    font-family: 'Montserrat';
    color: #24334b;
  }
  &__box {
    display: flex;
    align-items: flex-end;
    margin-top: 50px;
    gap: 40px;
  }
  &__block {
    display: flex;
    width: 407px;
    flex-direction: column;
    justify-content: flex-end;
    gap: 5px;
    input {
      padding-left: 10px;
      color: #bdbdbd;
      font-weight: 400;
      font-size: 16px;
      height: 50px;
      background: #ffffff;
      border: 1px solid #eb5757;
      outline: none;

      &:focus {
        border: 1px solid #1baa75;
      }
    }
    p {
      font-weight: 600;
      font-family: 'Montserrat';
      color: #24334b;
    }
  }
  &__find {
    width: 320px;
    height: 50px;
    background: #1baa75;
    border: none;
    font-weight: 600;
    font-family: 'Montserrat';
    font-size: 16px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  &__row {
    font-weight: 400;
    margin-top: 5px;
    font-family: 'Montserrat';
    color: #3f5984;
  }
  &__case {
    display: none;
    text-align: center;
    margin: 48px 0 80px 0;
    h2 {
      font-weight: 600;
      font-family: 'Montserrat';
      font-size: 24px;
      line-height: 29px;
      text-align: center;
      color: #9a9a9a;
    }
  }
  &__sort {
    margin-left: 335px;
  }
  &__user__block {
    display: flex;
    align-items: center;
    margin-top: 70px;

    h3 {
      width: 500px;
      height: 24px;
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      color: #24334b;
    }
    span {
      color: #1baa75;
    }
    p {
      font-family: 'Montserrat';
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      color: #24334b;
    }
  }
  &__registr {
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #1baa75;
    gap: 16px;
    padding: 12px 10px 12px 19px;
    height: 20px;
    cursor: pointer;
    p {
      font-weight: 600;
      font-size: 14px;
      color: #1baa75;
    }
  }
  &__item {
    margin-top: 35px;
  }
  //   &__top  {
  //     display: flex;
  //     align-items: center;
  //     justify-content: space-between;
  //     padding: 23px;
  //     font-weight: 600;
  //     font-size: 16px;
  //     color: #24334b;
  //     div {
  //       display: flex;
  //       gap: 19px;
  //     }
  //     .minus {
  //       display: none;
  //     }
  //   }
  &__top {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 23px;
    font-weight: 600;
    font-size: 16px;
    color: #24334b;

    .minus {
      display: none;
    }

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
  &__item.active &__top {
    background: #3f5984;
    box-shadow: 0px 5px 20px #e9e9e9;
    color: #ffffff;

    .plus {
      display: none;
    }

    .minus {
      display: block;
    }

    svg {
      path {
        stroke: #fff;
      }
    }
  }

  &__info {
    P {
      font-family: 'Montserrat';
      font-weight: 400;
      font-size: 16px;
      line-height: 140%;
      color: #24334b;
    }
    p:first-child {
      font-family: 'Montserrat';
      font-weight: 600;
      font-size: 16px;
      line-height: 140%;
      color: #24334b;
    }
  }
  &__login {
    padding: 20px 15px;
    background: #ffffff;
    display: flex;
    gap: 10px;
    span {
      font-weight: 700;
      font-size: 16px;
      margin-right: 5px;
    }
    a {
      font-weight: 400;
      font-size: 16px;
      color: #24334b;
      &:focus-within {
        color: #1baa75;
      }
    }
    p {
      font-weight: 400;
      font-size: 16px;
      color: #24334b;
      margin-bottom: 10px;
    }
  }
}
</style>
