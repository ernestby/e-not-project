<template>
    <section class="application-table">
        <div class="table-content">
            <table>
                <thead>
                    <tr class="table-wrapper">
                        <th class="table-indicator">QR </th>
                        <th class="table-indicator">ID
                            <Arrowicon />
                        </th>

                        <th class="table-indicator">Номер реестра
                            <Arrowicon />
                        </th>
                        <th class="table-indicator">
                            Нотариальное действие
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.50011 5H18.5001C18.792 5.10236 19.02 5.33401 19.1178 5.62742C19.2157 5.92084 19.1722 6.243 19.0001 6.5L14.0001 12V19L10.0001 16V12L5.00011 6.5C4.82804 6.243 4.78457 5.92084 4.88238 5.62742C4.98018 5.33401 5.20825 5.10236 5.50011 5"
                                    stroke="#1BAA75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>

                        </th>
                        <th class="table-indicator">
                            Вид действия
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.50011 5H18.5001C18.792 5.10236 19.02 5.33401 19.1178 5.62742C19.2157 5.92084 19.1722 6.243 19.0001 6.5L14.0001 12V19L10.0001 16V12L5.00011 6.5C4.82804 6.243 4.78457 5.92084 4.88238 5.62742C4.98018 5.33401 5.20825 5.10236 5.50011 5"
                                    stroke="#1BAA75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </th>
                        <th class="table-indicator">
                            Вид документа
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.50011 5H18.5001C18.792 5.10236 19.02 5.33401 19.1178 5.62742C19.2157 5.92084 19.1722 6.243 19.0001 6.5L14.0001 12V19L10.0001 16V12L5.00011 6.5C4.82804 6.243 4.78457 5.92084 4.88238 5.62742C4.98018 5.33401 5.20825 5.10236 5.50011 5"
                                    stroke="#1BAA75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </th>
                        <th class="table-indicator">
                            Обратившееся лицо
                            <Arrowicon />
                        </th>

                        <th class="table-indicator">
                            Статус
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M5.50011 5H18.5001C18.792 5.10236 19.02 5.33401 19.1178 5.62742C19.2157 5.92084 19.1722 6.243 19.0001 6.5L14.0001 12V19L10.0001 16V12L5.00011 6.5C4.82804 6.243 4.78457 5.92084 4.88238 5.62742C4.98018 5.33401 5.20825 5.10236 5.50011 5"
                                    stroke="#1BAA75" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </th>
                        <th class="table-indicator">
                            Дата создания
                            <Arrowicon />
                        </th>
                        <th class="table-indicator">
                            Дата добавления в реестр
                            <Arrowicon />
                        </th>

                        <th class="table-indicator">
                            Дата отмены
                            <Arrowicon />
                        </th>
                        <th class="table-indicator">
                            Пошлина
                        </th>
                        <th class="table-indicator">
                            Причина
                        </th>

                    </tr>
                </thead>
                <tbody>
                    <tr class="table-wrapper">
                        <td class="table-item">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M7 16H4C3.44772 16 3 16.4477 3 17V20C3 20.5523 3.44772 21 4 21H7C7.55228 21 8 20.5523 8 20V17C8 16.4477 7.55228 16 7 16Z"
                                    stroke="#24334B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M20 3H17C16.4477 3 16 3.44772 16 4V7C16 7.55228 16.4477 8 17 8H20C20.5523 8 21 7.55228 21 7V4C21 3.44772 20.5523 3 20 3Z"
                                    stroke="#24334B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M7 3H4C3.44772 3 3 3.44772 3 4V7C3 7.55228 3.44772 8 4 8H7C7.55228 8 8 7.55228 8 7V4C8 3.44772 7.55228 3 7 3Z"
                                    stroke="#24334B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                <path
                                    d="M21 16H18C17.4696 16 16.9609 16.2107 16.5858 16.5858C16.2107 16.9609 16 17.4696 16 18V21M21 21V21.01M12 7V10C12 10.5304 11.7893 11.0391 11.4142 11.4142C11.0391 11.7893 10.5304 12 10 12H7M3 12H3.01M12 3H12.01M12 16V16.01M16 12H17M21 12V12.01M12 21V20"
                                    stroke="#24334B" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </td>
                        <td class="table-item">015163</td>
                        <td class="table-item">125-8563</td>
                        <td class="table-item">Удостоверение</td>
                        <td class="table-item">Соглашение</td>
                        <td class="table-item"> Доверенность на получение з/п </td>
                        <td class="table-item"> ЧН Асаналиев Асанкадыр Токторбаевич </td>
                        <td class="table-item">Чалбеков Анарбек Ибраимович</td>
                        <td class="table-item">Исполнен</td>
                        <td class="table-item">01.01.2022</td>
                        <td class="table-item">01.01.2022</td>
                        <td class="table-item">01.01.2022</td>
                        <td class="table-item">Освобожден</td>
                        <td class="table-item">Отказ клиента</td>
                    </tr>
            </tbody>
            </table>
        </div>
    </section>
</template>

<script setup>
import { ref } from 'vue'
import Arrowicon from '@/assets/Table/Arrowicon.vue'
import FilterIcon from '@/assets/Table/FilterIcon.vue'
import DownloadIcon from '@/assets/Table/DownloadIcon.vue'
import EditIcon from '@/assets/Table/EditIcon.vue'
import OfferIcon from '@/assets/Table/OfferIcon.vue'
import RemoveIcon from '@/assets/Table/RemoveIcon.vue'
</script>

<style lang="scss" scoped>
.application-table {
    max-width: 1115px;
}

.table {
    &-content {
        overflow: auto;
        max-width: 100%;
    }

    &-wrapper {
        display: flex;
        align-items: center;

    }

    &-indicator {
        display: flex;
        align-items: center;
        gap: 13px;
        padding: 23px 16px;
        text-align: left;
        font-weight: 600;
        font-size: 16px;
        color: #24334B;
        width: max-content;
    }
    &-item {
        padding: 23px 10px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
}
</style>