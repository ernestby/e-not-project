<template>
  <section class="base">
    <div class="container">
      <div class="base__content">
        <div class="base__left">
          <h1>Нормативно-правовая база</h1>
          <ul>
            <li v-for="item in items" :key="item.id">
              <a :href="item.url">{{ item.title }}</a>
              <Arrow />
            </li>
          </ul>
        </div>
        <div class="base__right">
          <img src="/src/assets/Base/img.png" alt="file-img" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import Arrow from './Arrow.vue';
const items = [
  {
    id: 0,
    title: "Постановление Кабинета Министров Кыргызской Республики от 10.12.2021г. № 297",
    url: "#"
  },
  {
    id: 1,
    title: "Закон об Инвестициях В Кыргызской Республике от 27 марта 2003 года № 66",
    url: "#"
  },
  {
    id: 2,
    title: "Закон об Инвестициях В Кыргызской Республике от 27 марта 2003 года № 64",
    url: "#"
  },
  {
    id: 3,
    title: "Закон об Инвестициях В Кыргызской Республике от 27 марта 2003 года № 66",
    url: "#"
  },
  {
    id: 4,
    title: "Закон об Инвестициях В Кыргызской Республике от 27 марта 2003 года № 66",
    url: "#"
  }
]
</script>

<style lang="scss" scoped>
@import "../../assets/scss/variables.scss";

.base {
  &__content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 120px;
  }
  &__left {
    a {
      max-width: 527px;
      color: $text-dark-blue;

      &:active ~ svg {
        path {
          fill: $text-light-green;
        }
      }
      &:active {
        color: $text-light-green;
      }
    }
    h1 {
      font-weight: 600;
      font-size: 36px;
      color:$text-dark-blue;
      margin-bottom: 65px;
    }
    ul {
      display: flex;
      flex-direction: column;
      gap: 43px;
    }
    li {
      display: flex;
      gap: 47px;
      font-weight: 400;
      font-size: 16px;
      color: $text-dark-blue;
    }
  }
}
</style>