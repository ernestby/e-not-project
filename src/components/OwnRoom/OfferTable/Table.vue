<template>
  <table>
    <thead>
      <tr>
        <th>QR</th>
        <th class="lilTd">
          <Dropdown title="Вид действия" :options="dropdownOptions" />
        </th>
        <th class="bigTd">
          <Dropdown title="Вид документа" :options="dropdownOptions" />
        </th>
        <th class="lilTd">
          <Dropdown title="Статус" :options="dropdownOptions" />
        </th>
        <th class="lilTd">Дата</th>
        <th class="bigTd">Нотариус</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(_,i) in offers" :key="i">
        <td class="qr-code" :class="qrActive ? ' active': ''">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M7 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H7C7.55228 21 8 20.5523 8 20V17C8 16.4477 7.55228 16 7 16Z"
              stroke="#24334B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M20 3H17C16.4477 3 16 3.44772 16 4V7C16 7.55228 16.4477 8 17 8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z"
              stroke="#24334B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M7 3H4C3.44772 3 3 3.44772 3 4V7C3 7.55228 3.44772 8 4 8H7C7.55228 8 8 7.55228 8 7V4C8 3.44772 7.55228 3 7 3Z"
              stroke="#24334B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M21 16H18C17.4696 16 16.9609 16.2107 16.5858 16.5858C16.2107 16.9609 16 17.4696 16 18V21M21 21V21.01M12 7V10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12H7M3 12H3.01M12 3H12.01M12 16V16.01M16 12H17M21 12V12.01M12 21V20"
              stroke="#24334B"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </td>
        <td class="lilTd">Договор</td>
        <td class="bigTd">Договор купли-продажи квартиры(жилого дома)</td>
        <td class="lilTd">Исполнен</td>
        <td class="lilTd">01.01.2022</td>
        <td class="bigTd">
            <div class="order-list__name">
                ЧН Абдыгулов Баяман Алыкулович
            </div>
            <div class="order-list__actions">
                <OfferIcon />
                <EditIcon />
                <DownloadIcon />
                <RemoveIcon />
            </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import { ref } from 'vue'
import Dropdown from '@/components/OwnRoom/OfferTable/Dropdown.vue'
import FilterIcon from '@/assets/Table/FilterIcon.vue'
import DownloadIcon from '@/assets/Table/DownloadIcon.vue'
import EditIcon from '@/assets/Table/EditIcon.vue'
import OfferIcon from '@/assets/Table/OfferIcon.vue'
import RemoveIcon from '@/assets/Table/RemoveIcon.vue'

const qrActive = ref(false)

defineProps(["dropdownOptions", "offers"])

</script>

<style lang="scss" scoped>
table {
  margin-top: 40px;
  width: 100%;
  border-collapse: collapse;

  thead {
    border: 1px solid #cdcdcd;
    border-bottom: 2px solid #cdcdcd;
    height: 64px;

    th {
      background: #ffffff;
      font-weight: 600;
      font-size: 16px;
      text-align: center;
      color: #24334b;
    }
  }

  tbody {
    tr {
      border: 1px solid transparent;
      height: 64px;

      &:hover {
        background: #ffffff;
        border-color: #cdcdcd;
      }

      td {
        padding: 16px;
        box-sizing: border-box;
        font-weight: 500;
        font-size: 14px;
        color: #24334b;
        text-align: center;
      }
    }
  }
}

.test {
  width: 225px;
}

.bigTd {
  width: 225px;
}

.lilTd {
  width: 180px;
  text-align: center;
}

.qr-code {
  &:hover {
    svg {
      path {
        stroke: #1BAA75;
        fill: #1BAA75;
      }
    }
  }
}
</style>
