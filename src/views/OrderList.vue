<template>
  <section class="order-list">
    <OwnRoomTop title="Заявки" />
    <div class="order-list__top">
      <h2>Ваши заявки</h2>
      <Btn title="Оформить заявку" bg="#1BAA75" icon="/src/assets/Buttons/offer-icon.svg" />
    </div>
    <div class="order-list__table">
      <Table :dropdownOptions="typeOfDoc" :offers="paginatedItems" />
    </div>
    <div class="order-list__bottom">
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
  </section>
</template>

<script setup>
import OwnRoomTop from '@/components/OwnRoom/OwnRoomTop.vue'
import Btn from '@/components/Buttons/Btn.vue'
import Table from '@/components/OwnRoom/OfferTable/Table.vue'
import { computed, ref } from 'vue'

const typeOfDoc = ['Доверенность', 'Договор', 'Соглашение', 'Завещание']
const offers = new Array(40)
const itemsPerPage = 6

const currentPage = ref(1)

const totalPages = computed(() => Math.ceil(offers.length / itemsPerPage))
const startIndex = computed(() => (currentPage.value - 1) * itemsPerPage)
const endIndex = computed(() => startIndex.value + itemsPerPage)

const paginatedItems = computed(() => offers.slice(startIndex.value, endIndex.value))
const pages = computed(() => {
  const result = []
  for (let i = 1; i <= totalPages.value; i++) {
    result.push(i)
  }
  return result
})
</script>

<style lang="scss">
@import '../assets/scss/variables.scss';

.order-list {
  flex: 1;
  padding: 60px;
  box-sizing: border-box;

  &__actions {
    display: none;
    justify-content: center;

    svg {
      cursor: pointer;
    }
  }

  &__table {
    height: 448px;
  }

  table {
    tr {
      &:hover {
        td {
          .order-list__name {
            display: none;
          }
          .order-list__actions {
            display: flex;
            align-items: center;
            gap: 26px;
          }
        }
      }
    }
  }

  &__top {
    margin-top: 60px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2 {
      font-weight: 600;
      font-size: 18px;
      color: #1f2937;
    }
  }
}

.pagination {
  display: flex;
  justify-content: space-between;
  margin: 17px auto;
  padding: 8px 10px;
  max-width: 583px;
  background: #fff;
  border: 1px solid #CDCDCD;

  li {
    font-family: 'Montserrat';
    color: #24334b;
    font-size: 16px;
    border: 1px solid transparent;
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

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
