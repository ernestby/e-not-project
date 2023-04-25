<template>
  <div>
    <div class="register__block">
      <FilterItem v-for="item in items" :key="item.id" :item="item" />
    </div>
    <div class="register__btn">
      <button>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.0002 21.0002L21.3002 12.7002C22.3002 11.8002 22.3002 10.3002 21.3002 9.3002L15.7002 3.7002C14.8002 2.7002 13.3002 2.7002 12.3002 3.7002L2.7002 13.3002C1.7002 14.2002 1.7002 15.7002 2.7002 16.7002L7.0002 21.0002H22.0002M5.0002 11.0002L14.0002 20.0002"
            stroke="#F6F6F6"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
        Очистить фильтр
      </button>
    </div>
  </div>
</template>

<script setup>
import FilterItem from "./FilterItem.vue";

const items = [
  {
    id: 0,
    title: "Область",
    options: [
      "Чуй",
      "Талас",
      "Ыссык-Кол",
      "Нарын",
      "Жалал-Абад",
      "Ош",
      "Баткен",
    ],
  },
  {
    id: 1,
    title: "Регион, район",
    options: [
      "Чуй",
      "Талас",
      "Ыссык-Кол",
      "Нарын",
      "Жалал-Абад",
      "Ош",
      "Баткен",
    ],
  },
  {
    id: 2,
    title: "Город, село",
    options: [
      "Чуй",
      "Талас",
      "Ыссык-Кол",
      "Нарын",
      "Жалал-Абад",
      "Ош",
      "Баткен",
    ],
  },
  {
    id: 3,
    title: "Тип нотариуса",
    options: [
      "Чуй",
      "Талас",
      "Ыссык-Кол",
      "Нарын",
      "Жалал-Абад",
      "Ош",
      "Баткен",
    ],
  },
  {
    id: 4,
    title: "Рабочие дни",
    options: [
      "Чуй",
      "Талас",
      "Ыссык-Кол",
      "Нарын",
      "Жалал-Абад",
      "Ош",
      "Баткен",
    ],
  },
  {
    id: 5,
    title: "Нотариальный округ",
    options: [
      "Чуй",
      "Талас",
      "Ыссык-Кол",
      "Нарын",
      "Жалал-Абад",
      "Ош",
      "Баткен",
    ],
  },
];
</script>

<style lang="scss"></style>
