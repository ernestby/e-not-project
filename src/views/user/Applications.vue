<template>
    <section class="application">
        <OwnRoomTop title="Заявки" />
        <div class="application-head">
            <div class="application-search">
                <input type="text" placeholder="Поиск по ключевому слову" class="application-search__input">
                <button class="application-search__btn">
                    <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M11.8359 21.6707C14.0182 21.6703 16.1376 20.9398 17.8567 19.5955L23.2615 25L25 23.2616L19.5952 17.8571C20.9402 16.1379 21.6713 14.0181 21.6718 11.8354C21.6718 6.41239 17.2592 2 11.8359 2C6.41263 2 2 6.41239 2 11.8354C2 17.2583 6.41263 21.6707 11.8359 21.6707ZM11.8359 4.45884C15.9043 4.45884 19.2128 7.76721 19.2128 11.8354C19.2128 15.9035 15.9043 19.2119 11.8359 19.2119C7.76752 19.2119 4.45897 15.9035 4.45897 11.8354C4.45897 7.76721 7.76752 4.45884 11.8359 4.45884Z"
                            fill="white" />
                    </svg>

                </button>
            </div>
            <button class="application-export__btn">Экспортировать в Exсel
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_774_7307)">
                        <path
                            d="M16 13.5004H9C8.724 13.5004 8.5 13.2764 8.5 13.0004C8.5 12.7244 8.5 3.27637 8.5 3.00037C8.5 2.72437 8.724 2.50037 9 2.50037H16C16.276 2.50037 16.5 2.72437 16.5 3.00037V13.0004C16.5 13.2764 16.276 13.5004 16 13.5004Z"
                            fill="#F3F4F6" />
                        <g clip-path="url(#clip1_774_7307)">
                            <path
                                d="M11 6H9C8.724 6 8.5 5.776 8.5 5.5C8.5 5.224 8.724 5 9 5H11C11.276 5 11.5 5.224 11.5 5.5C11.5 5.776 11.276 6 11 6Z"
                                fill="#388E3C" />
                            <path
                                d="M11 8H9C8.724 8 8.5 7.776 8.5 7.5C8.5 7.224 8.724 7 9 7H11C11.276 7 11.5 7.224 11.5 7.5C11.5 7.776 11.276 8 11 8Z"
                                fill="#388E3C" />
                            <path
                                d="M11 10H9C8.724 10 8.5 9.776 8.5 9.5C8.5 9.224 8.724 9 9 9H11C11.276 9 11.5 9.224 11.5 9.5C11.5 9.776 11.276 10 11 10Z"
                                fill="#388E3C" />
                            <path
                                d="M11 12H9C8.724 12 8.5 11.776 8.5 11.5C8.5 11.224 8.724 11 9 11H11C11.276 11 11.5 11.224 11.5 11.5C11.5 11.776 11.276 12 11 12Z"
                                fill="#388E3C" />
                            <path
                                d="M14 6H13C12.724 6 12.5 5.776 12.5 5.5C12.5 5.224 12.724 5 13 5H14C14.276 5 14.5 5.224 14.5 5.5C14.5 5.776 14.276 6 14 6Z"
                                fill="#388E3C" />
                            <path
                                d="M14 8H13C12.724 8 12.5 7.776 12.5 7.5C12.5 7.224 12.724 7 13 7H14C14.276 7 14.5 7.224 14.5 7.5C14.5 7.776 14.276 8 14 8Z"
                                fill="#388E3C" />
                            <path
                                d="M14 10H13C12.724 10 12.5 9.776 12.5 9.5C12.5 9.224 12.724 9 13 9H14C14.276 9 14.5 9.224 14.5 9.5C14.5 9.776 14.276 10 14 10Z"
                                fill="#388E3C" />
                            <path
                                d="M14 12H13C12.724 12 12.5 11.776 12.5 11.5C12.5 11.224 12.724 11 13 11H14C14.276 11 14.5 11.224 14.5 11.5C14.5 11.776 14.276 12 14 12Z"
                                fill="#388E3C" />
                        </g>
                        <path
                            d="M9.319 0.61543C9.205 0.52043 9.052 0.47943 8.908 0.50943L0.908 2.00943C0.671 2.05343 0.5 2.25943 0.5 2.50043V13.5004C0.5 13.7404 0.671 13.9474 0.908 13.9914L8.908 15.4914C8.938 15.4974 8.969 15.5004 9 15.5004C9.116 15.5004 9.229 15.4604 9.319 15.3854C9.434 15.2904 9.5 15.1484 9.5 15.0004V1.00043C9.5 0.85143 9.434 0.71043 9.319 0.61543Z"
                            fill="#2E7D32" />
                        <path
                            d="M7.37603 9.67125L5.79503 7.86425L7.39403 5.80825C7.56403 5.59025 7.52403 5.27625 7.30703 5.10625C7.09003 4.93625 6.77603 4.97625 6.60503 5.19325L5.12403 7.09725L3.87603 5.67125C3.69303 5.46125 3.37703 5.44225 3.17103 5.62425C2.96303 5.80625 2.94203 6.12225 3.12403 6.32925L4.49903 7.90125L3.10503 9.69325C2.93503 9.91125 2.97503 10.2252 3.19203 10.3952C3.28403 10.4662 3.39303 10.5002 3.50003 10.5002C3.64903 10.5002 3.79603 10.4342 3.89503 10.3072L5.17003 8.66725L6.62403 10.3282C6.72303 10.4422 6.86103 10.5002 7.00003 10.5002C7.11703 10.5002 7.23403 10.4592 7.32903 10.3762C7.53703 10.1942 7.55803 9.87825 7.37603 9.67125Z"
                            fill="#F9FAFB" />
                    </g>
                    <defs>
                        <clipPath id="clip0_774_7307">
                            <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                        </clipPath>
                        <clipPath id="clip1_774_7307">
                            <rect width="6" height="6.99998" fill="white" transform="translate(8.5 5)" />
                        </clipPath>
                    </defs>
                </svg>
            </button>
        </div>
        <div class="application-mid">
            <button class="application-mid__btn">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        d="M16.9501 6.00006L13.3801 10.5501L14.8101 11.9801C15.8401 10.6701 19.7901 5.61006 19.7901 5.61006C19.9047 5.46243 19.9756 5.28559 19.9946 5.09966C20.0137 4.91374 19.9801 4.72621 19.8978 4.55843C19.8154 4.39064 19.6876 4.24935 19.529 4.15063C19.3703 4.05192 19.187 3.99975 19.0001 4.00006H6.83014L8.83014 6.00006H16.9501ZM2.81014 2.81006L1.39014 4.22006L10.0001 13.0001V19.0001C10.0001 19.5501 10.4501 20.0001 11.0001 20.0001H13.0001C13.5501 20.0001 14.0001 19.5501 14.0001 19.0001V16.8301L19.7801 22.6101L21.1901 21.2001L2.81014 2.81006Z"
                        fill="#F6F6F6" />
                </svg>

                Свернуть фильтр
            </button>
            <div class="application-mid__sort">
                <span class="application-mid__text">Сортировка за:</span>
                <button class="application-mid__select">2022 год
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6 9L12 15L18 9" stroke="#1BAA75" stroke-width="2" stroke-linecap="round"
                            stroke-linejoin="round" />
                    </svg>
                </button>
            </div>
        </div>
        <div class="application-bottom">
            <label class="application-bottom__label">
                Номер реестра
                <input type="number" class="application-bottom__input" placeholder="Введите номер">
            </label>
            <label class="application-bottom__label">
                Дата добавления в реестр
                <input type="date" class="application-bottom__input" placeholder="__.__.____">
            </label>
            <label class="application-bottom__label">
                ФИО Нотариуса
                <input type="text" class="application-bottom__input" placeholder="Введите ФИО">
            </label>
        </div>
        <ApplicationTable />
    </section>
</template>

<script setup>
import OwnRoomTop from '@/components/OwnRoom/OwnRoomTop.vue'
import Btn from '@/components/Buttons/Btn.vue'
import ApplicationTable from '../../components/OwnRoom/OfferTable/ApplicationTable.vue'
</script>

<style lang="scss" scoped>
.application {
    flex: 1;
    padding: 60px;

    &-head {
        display: flex;
        align-items: center;
        gap: 30px;
        margin: 40px 0;
        max-width: 100%;
    }

    &-search {
        width: 100%;

        &__input {
            padding: 15px;
            width: 100%;

            &::placeholder {
                font-weight: 400;
                font-size: 14px;
                color: #BDBDBD;
            }
        }

        &__btn {
            width: 80px;
            height: 50px;
            background: #1BAA75;
            display: flex;
            align-items: center;
            justify-content: center;
        }

        & {
            display: flex;
            align-items: center;
        }
    }

    &-export__btn {
        border: 1px solid #1BAA75;
        font-weight: 600;
        font-size: 14px;
        color: #1BAA75;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 10px;
        height:  50px;
        width: 300px;
    }

    &-mid {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-bottom: 30px;

        &__sort {
            display: flex;
            align-items: center;
            gap: 10px;
        }

        &__btn {
            background: #1BAA75;
            box-shadow: 0px 10px 20px #99DBAF;
            font-weight: 600;
            font-size: 16px;
            color: #F6F6F6;
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 10px 30px;
        }

        &__text {
            font-weight: 600;
            font-size: 16px;
            color: #24334B;
        }

        &__select {
            background: #FFFFFF;
            border: 1px solid #1BAA75;
            padding: 12px 10px;
            font-weight: 600;
            font-size: 14px;
            width: 250px;
            color: #1BAA75;
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
    }

    &-bottom {
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        gap: 40px;

        &__input {
            padding: 12px 10px;
            width: 100%;
            border: 1px solid #CDCDCD;

            &[type=number]::-webkit-inner-spin-button,
            &[type=number]::-webkit-outer-spin-button {
                -webkit-appearance: none;
                margin: 0;
            }

            &::placeholder {
                font-weight: 400;
                font-size: 14px;
                color: #BDBDBD;
            }
        }

        &__label {
            width: 100%;
            font-weight: 500;
            font-size: 14px;
            color: #24334B;
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
    }


}
</style>

