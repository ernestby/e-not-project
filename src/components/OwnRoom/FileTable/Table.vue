<template>
  <table>
    <thead>
      <tr>
        <th>
          <div class="files-list__name" @click="isActive = !isActive">
            <div class="checkbox-input">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 0H3C2.20435 0 1.44129 0.316071 0.87868 0.87868C0.316071 1.44129 0 2.20435 0 3V15C0 15.7956 0.316071 16.5587 0.87868 17.1213C1.44129 17.6839 2.20435 18 3 18H15C15.7956 18 16.5587 17.6839 17.1213 17.1213C17.6839 16.5587 18 15.7956 18 15V3C18 2.20435 17.6839 1.44129 17.1213 0.87868C16.5587 0.316071 15.7956 0 15 0ZM16 15C16 15.2652 15.8946 15.5196 15.7071 15.7071C15.5196 15.8946 15.2652 16 15 16H3C2.73478 16 2.48043 15.8946 2.29289 15.7071C2.10536 15.5196 2 15.2652 2 15V3C2 2.73478 2.10536 2.48043 2.29289 2.29289C2.48043 2.10536 2.73478 2 3 2H15C15.2652 2 15.5196 2.10536 15.7071 2.29289C15.8946 2.48043 16 2.73478 16 3V15Z"
                  fill="#24334B"
                />
                <path
                  v-show="isActive"
                  d="M11.7002 5.38993L7.92019 10.3899L6.29019 8.27993C6.12708 8.07041 5.88742 7.93427 5.62393 7.90145C5.36044 7.86863 5.09471 7.94182 4.88519 8.10493C4.67567 8.26804 4.53952 8.5077 4.5067 8.77119C4.47389 9.03468 4.54708 9.30041 4.71019 9.50993L7.14019 12.6199C7.23436 12.7391 7.35445 12.8353 7.49133 12.9011C7.62821 12.967 7.7783 13.0008 7.93019 12.9999C8.08291 12.9996 8.23351 12.9642 8.37045 12.8966C8.50739 12.829 8.62703 12.7309 8.72019 12.6099L13.2902 6.60993C13.452 6.39776 13.5228 6.13001 13.4872 5.86558C13.4516 5.60116 13.3124 5.36171 13.1002 5.19993C12.888 5.03815 12.6203 4.96728 12.3558 5.00291C12.0914 5.03854 11.852 5.17776 11.6902 5.38993H11.7002Z"
                  fill="#24334B"
                />
              </svg>
            </div>
            Наименование файла
          </div>
        </th>
        <th>
          <div class="files-list__download">
            <ArrowIcon />
            Дата загрузки
          </div>
        </th>
        <th>
          <div class="files-list__size">
            <ArrowIcon />
            Размер
          </div>
        </th>
        <th>
          <div class="files-list__format">
            Формат
            <FormatMenu />
          </div>
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(_,i) in files" :key="i">
        <td>
          <div class="files-list__name">
            <Checkbox title="Фото_для док.jpg" />
          </div>
        </td>
        <td>
          <div class="files-list__download">21.01.2022</div>
        </td>
        <td>
          <div class="files-list__size">350 кб</div>
        </td>
        <td>
          <div class="files-list__format">
            <div class="files-list__format--title">jpg</div>
            <div class="files-list__format--icons">
              <DownloadIcon />
              <RemoveIcon />
            </div>
          </div>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script setup>
import ArrowIcon from '@/assets/Table/ArrowIcon.vue'
import DownloadIcon from '@/assets/Table/DownloadIcon.vue'
import RemoveIcon from '@/assets/Table/RemoveIcon.vue'
import FormatMenu from '@/assets/Table/FormatMenu.vue'
import Checkbox from '@/components/OwnRoom/FileTable/Checkbox.vue'
import { ref } from "vue";

const isActive = ref(false)
defineProps(["files"])
</script>

<style></style>
