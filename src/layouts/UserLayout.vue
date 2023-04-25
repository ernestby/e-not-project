<template>
  <div class="app-user-layout">
    <section :class="isActive ? 'sidebar active' : 'sidebar'">
      <div class="sidebar-wrapper">
        <div class="sidebar-head">
          <router-link to="/"><img src="../assets/sidebar/logo.svg" alt="logo"></router-link>
          <img src="../assets/sidebar/close.svg" @click="isActive = !isActive" alt="close" class="sidebar-close">
        </div>
        <h2 class="sidebar-title">Личный кабинет</h2>
        <div :class="isActive ? 'sidebar-list active' : 'sidebar-list'">
          <router-link v-for="(item, i) in sidebarList" :to="item.link" :key="item.id"
            @click="setRoute(item.link, i), firstIndex = i"
            :class="firstIndex === i ? 'sidebar-item active' : 'sidebar-item'">
            <img :src="item.img" alt="icons" class="sidebar-icons">
            <span class="sidebar-link">{{ item.text }}</span>
          </router-link>
        </div>
        <div :class="isActive ? 'sidebar-list active' : 'sidebar-list'">
          <router-link :to="item.link" v-for="item in sidebarListSecond" :key="item.id">
            <div class='sidebar-item'>
              <img :src="item.img" alt="icons" class="sidebar-icons">
              <span class="sidebar-link">{{ item.text }}</span>
            </div>
          </router-link>
        </div>



        <router-link to="/"
          :class='isActive ? "sidebar-item sidebar-last-item close" : "sidebar-item sidebar-last-item "'>
          <img src="../assets/sidebar/left.svg" alt="left" class="sidebar-icons">
          <div class="sidebar-link sidebar-last-link">
            Выход с кабинета</div>
        </router-link>
      </div>
      <!-- <h1>qwertydasfdas</h1> -->
    </section>
    <section class="content">
      <OwnRoomTop title="Заявки" />
      <router-view />
    </section>
  </div>
</template>


<script setup>
import { ref } from "vue"
import OwnRoomTop from '@/components/OwnRoom/OwnRoomTop.vue'

let isActive = ref(false)
const firstIndex = ref(0)

const sidebarList = [
  {
    id: 0,
    img: '/src/assets/sidebar/imgOne.svg',
    text: "Заявки",
    link: "/",
  },
  {
    id: 1,
    img: "/src/assets/sidebar/imgtwo.svg",
    text: "Мои шаблоны",
    link: "/",
  },
  {
    id: 2,
    img: "/src/assets/sidebar/imgThree.svg",
    text: "Мои файлы",
    link: "/",
  },
  {
    id: 3,
    img: "/src/assets/sidebar/imgFour.svg",
    text: "Переписка",
    link: "/",
  },
  {
    id: 4,
    img: "/src/assets/sidebar/imgFive.svg",
    text: "Мои платежи",
    link: "/",
  },
]
const sidebarListSecond = [
  {
    id: 0,
    img: "/src/assets/sidebar/imageOne.svg",
    text: "Шаблоны",
    link: "/",
  },
  {
    id: 1,
    img: "/src/assets/sidebar/imageTwo.svg",
    text: "Реестр нотариальных действий",
    link: "/applications",
  },
  {
    id: 2,
    img: "/src/assets/sidebar/imageThree.svg",
    text: "Руководства пользователя",
    link: "/Applications",
  },
  {
    id: 3,
    img: "/src/assets/sidebar/imageFour.svg",
    text: "Профиль",
    link: "/",
  },
]


</script>

<style lang="scss" scoped>
.app-user-layout {
  display: flex;
  height: inherit;
}

.sidebar {
  width: 280px;
  background: #1baa75;
  padding: 50px 0 10px;
  box-sizing: border-box;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    -ms-overflow-style: none;
  }

  &.active {
    width: 73px;
    padding: 20px 0;
    overflow: hidden;

    & .sidebar-head {
      flex-direction: column;
      align-items: start;
      gap: 20px;
      margin: 0px;
      margin-left: 14.5px;
    }

    & .sidebar-title {
      display: none;
    }

    & .sidebar-link {
      display: none;
    }

    & .sidebar-item {
      padding: 0;
      justify-content: center;
    }

    & .sidebar-close {
      transform: rotate(180deg);
    }

    & .sidebar-icons {
      padding: 10px 0;
    }
  }

  &-mini-item {
    background: #3f5984;
  }

  &-head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 10px 50px 25px;
  }

  &-title {
    font-weight: 700;
    font-size: 18px;
    color: #ffffff;
    margin-left: 25px;
  }

  &-item {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 12px 25px 12px 20px;
    cursor: pointer;

    &:hover {
      transition: 0.2s;
      background: #24334b;
    }

    &.active {
      background: #24334b;
    }

    &.sidebar-another-item {
      background: #3f5984;
      position: relative;
    }
  }

  &-up {
    position: absolute;
    z-index: 1;
    right: 10px;

    &.active {
      display: none;
    }
  }

  &-list {
    padding: 20px 0;
    border-bottom: 1px solid #ffffff;
  }

  &-link {
    font-weight: 500;
    font-size: 16px;
    color: #ffffff;
    max-width: 195px;
  }

  &-close {
    cursor: pointer;
  }
}

.content {
  flex: 1;
  padding: 60px;
}
</style>