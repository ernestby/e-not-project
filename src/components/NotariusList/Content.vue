<template>
  <section class="register">
    <div class="container">
      <div class="register__content">
        <h1>Реестр нотариусов Кыргызской Республики</h1>
        <div class="register__input">
          <label class="register__search">
            <div class="register__flex">
              <input type="text" placeholder="Поиск по ключевому слову" />
              <button>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M11.8359 21.6707C14.0182 21.6703 16.1376 20.9398 17.8567 19.5955L23.2615 25L25 23.2616L19.5952 17.8571C20.9402 16.1379 21.6713 14.0181 21.6718 11.8354C21.6718 6.41239 17.2592 2 11.8359 2C6.41263 2 2 6.41239 2 11.8354C2 17.2583 6.41263 21.6707 11.8359 21.6707ZM11.8359 4.45884C15.9043 4.45884 19.2128 7.76721 19.2128 11.8354C19.2128 15.9035 15.9043 19.2119 11.8359 19.2119C7.76752 19.2119 4.45897 15.9035 4.45897 11.8354C4.45897 7.76721 7.76752 4.45884 11.8359 4.45884Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </label>
        </div>
        <div class="register__filter">
          <button @click="showFilters = !showFilters">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-show="showFilters"
            >
              <path
                d="M16.9501 6.00006L13.3801 10.5501L14.8101 11.9801C15.8401 10.6701 19.7901 5.61006 19.7901 5.61006C19.9047 5.46243 19.9756 5.28559 19.9946 5.09966C20.0137 4.91374 19.9801 4.72621 19.8978 4.55843C19.8154 4.39064 19.6876 4.24935 19.529 4.15063C19.3703 4.05192 19.187 3.99975 19.0001 4.00006H6.83014L8.83014 6.00006H16.9501ZM2.81014 2.81006L1.39014 4.22006L10.0001 13.0001V19.0001C10.0001 19.5501 10.4501 20.0001 11.0001 20.0001H13.0001C13.5501 20.0001 14.0001 19.5501 14.0001 19.0001V16.8301L19.7801 22.6101L21.1901 21.2001L2.81014 2.81006Z"
                fill="#F6F6F6"
              />
            </svg>
            <svg
              v-show="!showFilters"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.50001 5H18.5C18.7919 5.10236 19.0199 5.33401 19.1177 5.62742C19.2155 5.92084 19.1721 6.243 19 6.5L14 12V19L10 16V12L5.00001 6.5C4.82793 6.243 4.78446 5.92084 4.88227 5.62742C4.98008 5.33401 5.20815 5.10236 5.50001 5"
                stroke="#fff"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            {{ showFilters ? 'Свернуть' : 'Развернуть' }} фильтр
          </button>
          <div class="register__fixed">
            <label @click="isCheckFirst = !isCheckFirst" :class="isCheckFirst ? ' active' : ''">
              <div v-show="isCheckFirst" class="register__pin">
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4969 2.71779C10.6528 2.85417 10.6686 3.09108 10.5322 3.24694L5.28222 9.24694C5.21387 9.32505 5.11621 9.37134 5.01248 9.3748C4.90875 9.37825 4.80822 9.33856 4.73483 9.26517L2.48483 7.01517C2.33839 6.86872 2.33839 6.63129 2.48483 6.48484C2.63128 6.33839 2.86872 6.33839 3.01517 6.48484L4.98173 8.45141L9.96778 2.75307C10.1042 2.5972 10.3411 2.58141 10.4969 2.71779Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div v-show="!isCheckFirst" class="register__mark"></div>
              Круглосуточно
            </label>
            <label @click="isCheckSecond = !isCheckSecond" :class="isCheckSecond ? ' active' : ''">
              <div v-show="isCheckSecond" class="register__pin">
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M10.4969 2.71779C10.6528 2.85417 10.6686 3.09108 10.5322 3.24694L5.28222 9.24694C5.21387 9.32505 5.11621 9.37134 5.01248 9.3748C4.90875 9.37825 4.80822 9.33856 4.73483 9.26517L2.48483 7.01517C2.33839 6.86872 2.33839 6.63129 2.48483 6.48484C2.63128 6.33839 2.86872 6.33839 3.01517 6.48484L4.98173 8.45141L9.96778 2.75307C10.1042 2.5972 10.3411 2.58141 10.4969 2.71779Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div v-show="!isCheckSecond" class="register__mark"></div>
              Выездной
            </label>
          </div>
          <div class="register__fix">
            <p>Сортировка:</p>
            <div @click="isActive = !isActive" class="register__box" :class="isActive ? 'active' : ''">
              <p>В алфавитном порядке</p>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M6 9L12 15L18 9"
                  stroke="#1BAA75"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
        <Filter v-show="showFilters" />
        <div class="register__user">
          <template v-for="item in paginatedItems" :key="item.id">
            <Item :item="item" />
          </template>
        </div>
        <div class="register__scroll">
          <ul class="pagination">
            <li v-if="currentPage > 1">
              <a @click="currentPage--">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_181_748)">
                    <path d="M10 4L6 8L10 12" stroke="#6B7280" stroke-width="1.5" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_181_748">
                      <rect width="16" height="16" fill="white" transform="translate(16) rotate(90)" />
                    </clipPath>
                  </defs>
                </svg>
                Пред.
              </a>
            </li>
            <li v-for="page in pages" :key="page" :class="{ active: currentPage === page }">
              <a @click="currentPage = page">{{ page }}</a>
            </li>
            <li v-if="currentPage < totalPages">
              <a @click="currentPage++">
                След.
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_181_771)">
                    <path d="M6 12L10 8L6 4" stroke="#1BAA75" stroke-width="1.5" stroke-linejoin="round" />
                  </g>
                  <defs>
                    <clipPath id="clip0_181_771">
                      <rect width="16" height="16" fill="white" transform="matrix(0 -1 1 0 0 16)" />
                    </clipPath>
                  </defs>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        <div class="register__map">
          <h2>Поиск нотариуса на карте</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2924.252093263493!2d74.63955111225368!3d42.867523002769474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x389eb7003ee8fde1%3A0x8566a67bd1943650!2z0J_Rg9GC0LXQv9GA0L7QstC-0LTQvdCw0Y8g0YPQu9C40YbQsCwg0JHQuNGI0LrQtdC6!5e0!3m2!1sru!2skg!4v1681858493146!5m2!1sru!2skg"
            width="1214"
            height="607"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed, ref } from 'vue'
import Btn from '../Buttons/Btn.vue'
import Filter from './Filter.vue'
import Item from './Item.vue'
import img1 from '../../assets/Register/Profile1.png'
import img2 from '../../assets/Register/Profile2.png'
import img3 from '../../assets/Register/Profile3.png'
import img4 from '../../assets/Register/Profile4.png'

const showFilters = ref(false)
const itemsPerPage = 4
const items = ref([
  {
    id: 0,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img1,
    region: 'Чуй',
    area: 'Первомайский',
    place: 'г. Бишкек',
  },
  {
    id: 1,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img2,
    region: 'Баткен',
    area: 'Баткен',
    place: 'г. Баткен',
  },
  {
    id: 2,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img1,
    region: 'Чуй',
    area: 'Первомайский',
    place: 'г. Бишкек',
  },
  {
    id: 3,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img4,
    region: 'Жалал-Абад',
    area: 'Ункур',
    place: 'г. Токмок',
  },
  {
    id: 4,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img1,
    region: 'Чуй',
    area: 'Первомайский',
    place: 'г. Бишкек',
  },
  {
    id: 5,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img3,
    region: 'Талас',
    area: 'Ленинский',
    place: 'Кумбоз',
  },
  {
    id: 6,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img1,
    region: 'Чуй',
    area: 'Первомайский',
    place: 'г. Бишкек',
  },
  {
    id: 7,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img1,
    region: 'Чуй',
    area: 'Первомайский',
    place: 'г. Бишкек',
  },
  {
    id: 8,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img1,
    region: 'Чуй',
    area: 'Первомайский',
    place: 'г. Бишкек',
  },
  {
    id: 9,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img1,
    region: 'Чуй',
    area: 'Первомайский',
    place: 'г. Бишкек',
  },
  {
    id: 10,
    name: 'Баланчаев Баланча Баланчаевич',
    rating: '4.0',
    votes: 45,
    avatar: img1,
    region: 'Чуй',
    area: 'Первомайский',
    place: 'г. Бишкек',
  },
])
const isActive = ref(false)
const isCheckFirst = ref(false)
const isCheckSecond = ref(false)

const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(items.value.length / itemsPerPage))
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage)
const endIndex = computed(() => startIndex.value + itemsPerPage)

const paginatedItems = computed(() => items.value.slice(startIndex.value, endIndex.value))
const pages = computed(() => {
  const result = []
  for (let i = 1; i <= totalPages.value; i++) {
    result.push(i)
  }
  return result
})
</script>

<style lang="scss">
@import '../../assets/scss/variables.scss';

.register {
  &__fixed {
    display: flex;
    align-items: center;
    gap: 30px;

    label {
      display: flex;
      font-weight: 600;
      font-size: 14px;
      &.active {
        color: #1baa75;
      }
    }
  }
  &__pin {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 16px;
    height: 16px;
    box-sizing: border-box;
    border: 1px solid #cdcdcd;
    box-shadow: 0px 5px 12px -5px rgba(174, 174, 174, 0.06), 0px 5px 30px -5px rgba(160, 160, 160, 0.1);
    background: #1baa75;
    border-radius: 2px;
    text-align: center;
  }

  &__mark {
    width: 16px;
    height: 16px;
    padding: 2px;
    box-sizing: border-box;

    border: 1px solid #cdcdcd;
    box-shadow: 0px 5px 12px -5px rgba(174, 174, 174, 0.06), 0px 5px 30px -5px rgba(160, 160, 160, 0.1);
    background: #ffffff;
    border-radius: 2px;
  }
  &__content {
    margin-top: 100px;

    h1 {
      font-weight: 600;
      font-size: 36px;
      color: #24334b;
      margin-bottom: 50px;
    }
  }
  &__filter {
    margin-top: 40px;
    button {
      width: 320px;
      padding: 14px 0;
      border: none;
      color: #ffffff;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      transition: 0.3s;
      background: #1baa75;

      &:not(:disabled):hover {
        opacity: 0.96;
        box-shadow: 0px 10px 20px #99dbaf;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
  &__flex {
    display: flex;
    width: 100%;
    button {
      width: 80px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background: #1baa75;
      border: none;
    }
  }
  label {
    position: relative;
    gap: 16px;
    align-items: center;

    &:focus-within {
      input {
        border: 1px solid #1baa75;
      }

      p {
        color: #1baa75;
      }
    }
    input {
      font-family: 'Montserrat';
      width: 100%;
      font-weight: 400;
      font-size: 16px;
      color: #24334b;
      padding: 15px;
      height: 50px;
      box-sizing: border-box;
      background: transparent;
      border: 1px solid #cdcdcd;
      outline: none;
    }
  }
  &__filter {
    display: flex;
    justify-content: space-between;
  }
  &__fix {
    display: flex;
    align-items: center;
    gap: 20px;

    p {
      font-weight: 600;
      font-size: 16px;
      color: #24334b;
    }
  }
  &__box {
    display: flex;
    align-items: center;
    background: #ffffff;
    border: 1px solid #1baa75;
    gap: 16px;
    padding: 12px 10px 12px 19px;
    height: 20px;
    cursor: pointer;

    &.active {
      svg {
        transform: rotate(180deg);
      }
    }

    p {
      font-weight: 600;
      font-size: 14px;
      color: #1baa75;
    }
  }
  &__item {
    margin-top: 40px;
    label {
      background: #fff;
      position: relative;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 311px;
      font-weight: 400;
      font-size: 16px;
      color: #24334b;
      padding: 15px;
      border: 1px solid #cdcdcd;
      outline: none;
      box-sizing: border-box;
      cursor: pointer;

      &.active {
        border: 1px solid #1baa75;

        p {
          color: #1baa75;
        }

        svg {
          transform: rotate(180deg);
        }
      }
    }
    p {
      font-weight: 500;
      font-size: 14px;
      color: #24334b;
      margin-bottom: 5px;
    }
  }
  &__block {
    gap: 40px;
    max-width: 85%;
    display: flex;
    flex-wrap: wrap;
    margin-bottom: 40px;
  }
  &__btn {
    margin-bottom: 56px;
    button {
      width: 320px;
      padding: 14px 0;
      border: none;
      color: #ffffff;
      font-weight: 600;
      font-size: 16px;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      transition: 0.3s;
      background: #3f5984;

      &:not(:disabled):hover {
        opacity: 0.96;
        box-shadow: 0px 10px 20px #99dbaf;
      }

      &:disabled {
        opacity: 0.5;
        cursor: not-allowed;
      }
    }
  }
  &__profile {
    max-width: 286px;
    padding: 23px 21px 31px 20px;
    background: transparent;
    box-sizing: border-box;
    transition: 0.3s;
    margin-top: 56px;

    &:hover {
      background: #fff;
      box-shadow: 0px 5px 20px #e9e9e9;
    }
  }
  &__img {
    text-align: center;
    h1 {
      font-weight: 500;
      font-size: 18px;
      text-align: center;
      color: #24334b;
      margin-top: 20px;
    }
  }
  &__stars {
    display: flex;
    gap: 8px;
    h1 {
      font-weight: 600;
      font-size: 16px;
      color: #24334b;
    }
    p {
      font-weight: 400;
      font-size: 16px;
      max-width: 246px;
      height: 60px;
      color: #bdbdbd;
    }
  }
  &__street {
    max-width: 229px;
    font-weight: 400;
    font-size: 16px;
    color: #24334b;
    margin-top: -22px;
  }
  &__user {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 50px;
  }
  &__scroll {
    max-width: 583px;
    margin: 0 auto 120px;
    background: #ffffff;
    border: 1px solid #cdcdcd;
    box-sizing: border-box;
  }
  &__map {
    h2 {
      font-weight: 600;
      font-size: 36px;
      color: #24334b;
      margin-bottom: 50px;
    }
    iframe {
      margin-bottom: 110px;
    }
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 8px 10px;
  
  li {
    font-family: 'Montserrat';
    color: #24334b;
    font-size: 16px;
    border: 1px solid transparent;
    background: #fff;

    a {
      display: flex;
      align-items: center;
    }

    svg {
      margin: 0 9px;
    }

    &.active {
      border: 1px solid #1baa75;
      color: #1baa75;
    }
  }
}
</style>
