<template>
  <section class="document">
    <div class="container">
      <div class="document__content">
        <div class="document__block">
          <img src="/src/assets/Document/Doc_logo.png" alt="#" />
          <div class="document__box">
            <p class="document__row">
              Узнайте, как получить нотариальные услуги быстро, удобно и безопасно с помощью портала
            </p>
            <p class="document__link"><a href="#">Подробнее</a></p>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section class="services">
    <div class="container">
      <div class="services__content">
        <h2 class="services__title">Сервисы и публичные реестры</h2>
        <div class="services__block">
          <div v-for="item in routeItems" :key="item.title">
            <RouterLink :to="item.to" class="services__box">
              <component :is="item.img"></component>
              <p>{{ item.title }}</p>
            </RouterLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss">
@import '../../assets/scss/variables.scss';
.document {
  &__content {
    margin-top: 144px;
    margin: 144px 0 120px 0;
    height: 266px;
    box-shadow: 0px 20px 35px $shadow-dark-blue;
    position: relative;
  }

  &__block {
    background: $text-light-green;
    display: flex;
    justify-content: center;
    gap: 123px;

    img {
      position: absolute;
      bottom: 18px;
      left: 93px;
    }
  }

  &__box {
    padding: 50px 90px 99px 489px;
  }

  &__row {
    font-weight: 600;
    font-size: 28px;
    font-family: 'Montserrat';
    width: 635px;
    line-height: 140%;
    color: $bg-white;
    margin-bottom: 27px;
  }

  a {
    color: $bg-white;
  }

  a:hover {
    text-decoration: underline;
  }

  &__link {
    cursor: pointer;
    color: $bg-white;
  }
}

.services {
  &__title {
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
    color: $text-dark-blue;
    margin-bottom: 50px;
  }

  &__block {
    display: flex;
    justify-content: center;
    background: $bg-white;
    border: 1px solid $border-gray;
    height: 242px;
    margin-bottom: 120px;
  }

  &__box {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    cursor: pointer;
    gap: 33px;
    width: 242px;
    height: 242px;

    svg {
      path {
        stroke: $bg-dark-blue;
      }
    }

    &:hover {
      background: $bg-dark-blue;
      filter: drop-shadow(0px 20px 35px $drop-dark-blue);

      p {
        color: $bg-white;
      }

      svg {
        path {
          stroke: $bg-white;
        }
      }
    }

    p {
      font-weight: 600;
      font-size: 18px;
      line-height: 22px;
      font-family: 'Montserrat';
      width: 150px;
      color: $text-dark-blue;
    }
  }
}
</style>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import AvtoIcon from '../../assets/Services/AvtoIcon.vue'
import Book from '../../assets/Services/Book.vue'
import Coin from '../../assets/Services/Coin.vue'
import Doc from '../../assets/Services/Doc.vue'
import Man from '../../assets/Services/Man.vue'

const routeItems = [
  {
    img: Doc,
    title: 'Проверка доверенности',
    to: '/',
  },
  {
    img: AvtoIcon,
    title: 'Проверка заложенного движимого имущества',
    to: '/',
  },
  {
    img: Man,
    title: 'Розыск наследников',
    to: '/notarius-list',
  },
  {
    img: Book,
    title: 'Наследственные дела',
    to: '/',
  },
  {
    img: Coin,
    title: 'Реестр нотариусов КР',
    to: '/',
  },
]
</script>
