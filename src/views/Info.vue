<template>
  <section class="info">
    <div class="info__step active">
      <Approved :isActive="true" num="1" />
      <div class="flex jcsb">
        <Title text="Выбор нотариуса" />
        <Mark
          text="Вы также можете сразу перейти к поисковой форме “Нотариус” если знаете конкретного нотариуса, игнорируя предшествующие формы."
        />
      </div>
      <div class="info__form">
        <div class="flex">
          <Dropdown
            class="w-55"
            title="Область"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
          <Dropdown
            class="w-55"
            title="Район"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
        </div>
        <div class="flex">
          <Dropdown
            class="w-55"
            title="Область"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
          <Dropdown
            class="w-55"
            title="Район"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
        </div>
        <div class="dropdown-search">
          <p>Нотариус</p>
          <label @click="isActive = !isActive" :class="isActive ? 'active' : ''">
            <span>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M9.46881 17.3366C11.2147 17.3362 12.9102 16.7518 14.2854 15.6763L18.6093 20L20.0001 18.6093L15.6762 14.2856C16.7523 12.9103 17.3371 11.2145 17.3375 9.46827C17.3375 5.12989 13.8074 1.59998 9.46881 1.59998C5.1302 1.59998 1.6001 5.12989 1.6001 9.46827C1.6001 13.8066 5.1302 17.3366 9.46881 17.3366ZM9.46881 3.56705C12.7235 3.56705 15.3703 6.21375 15.3703 9.46827C15.3703 12.7228 12.7235 15.3695 9.46881 15.3695C6.21411 15.3695 3.56728 12.7228 3.56728 9.46827C3.56728 6.21375 6.21411 3.56705 9.46881 3.56705Z"
                  fill="#1BAA75"
                />
              </svg>
              {{ activeOption }}
            </span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M6 9L12 15L18 9"
                stroke="#1BAA75"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </label>
          <div v-show="isActive" class="dropdown-search__select">
            <div
              v-for="option in [
                'Движимое имущество',
                'Документы, копии, переводы, заявления',
                'Недвижимое имущество',
                'Брак, семья',
                'Иные физические лица',
                'Юридические лица',
              ]"
              :key="option"
              @click="activeOption = option"
              class="dropdown-search__option"
            >
              {{ option }}
            </div>
          </div>
        </div>
      </div>
      <Next />
    </div>
    <div class="info__step">
      <Approved :isActive="false" num="2" />
      <div class="flex jcsb">
        <Title text="Выбор объекта" />
        <Back />
      </div>
      <div class="flex jcsb">
        <div></div>
        <Mark
          text="Вам необходимо выбрать объект и его вид касательно чего вы хотите сделать нотариальный документ. Выбор объекта поможет вам быстро найти нужный вам нотариальный документ."
        />
      </div>
      <div class="info__form">
        <div class="info__form--wrapper">
          <Suptitle text="Объект" />
          <Accordeon
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
        </div>
        <div class="info__form--wrapper">
          <Suptitle text="Вид объекта" />
          <Accordeon :options="['Алименты', 'Заработная плата', 'Пенсии', 'Индексированная сумма сбережений']" />
        </div>
      </div>
      <Next />
    </div>
    <div class="info__step">
      <Approved :isActive="false" num="3" />
      <div class="flex jcsb">
        <Title text="Выбор документа" />
        <Back />
      </div>
      <div class="flex jcsb">
        <div></div>
        <Mark
          text="Вам необходимо выбрать объект и его вид касательно чего вы хотите сделать нотариальный документ. Выбор объекта поможет вам быстро найти нужный вам нотариальный документ."
        />
      </div>
      <div class="info__form">
        <div class="info__form--wrapper">
          <Suptitle text="Нотариальное действие" />
          <Accordeon
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
        </div>
        <div class="info__form--wrapper">
          <Suptitle text="Вид нотариального действия" />
          <Accordeon :options="['Алименты', 'Заработная плата', 'Пенсии', 'Индексированная сумма сбережений']" />
        </div>
        <div class="info__form--wrapper">
          <Suptitle text="Действие" />
          <Accordeon :options="['Алименты', 'Заработная плата', 'Пенсии', 'Индексированная сумма сбережений']" />
        </div>
        <div class="info__form--wrapper">
          <Suptitle text="Искомый документ" />
          <Accordeon :options="['Алименты', 'Заработная плата', 'Пенсии', 'Индексированная сумма сбережений']" />
        </div>
      </div>
      <Next />
    </div>
    <div class="info__step">
      <Approved :isActive="false" num="4" />
      <div class="flex jcsb">
        <Title text="Сторона 1 (личные данные)" />
        <Back />
      </div>
      <div class="info__form">
        <Suptitle text="Личные данные" />
        <div class="info__form--wrapper">
          <Text text="Фамилия" placeholder="Берманова" />
        </div>
        <div class="info__form--wrapper">
          <Text text="Имя" placeholder="Карина" />
        </div>
        <div class="info__form--wrapper">
          <Text text="Отчество" placeholder="Асланмухамедовна" />
        </div>
        <div class="info__form--wrapper">
          <Text text="Персональный номер (ИНН)" placeholder="10608198900000" />
        </div>
        <div class="info__form--wrapper">
          <div class="flex" style="gap: 25px">
            <Text class="w-55" text="Персональный номер (ИНН)" placeholder="10608198900000" />
            <Text class="w-55" text="Персональный номер (ИНН)" placeholder="10608198900000" />
          </div>
        </div>
      </div>
      <div class="info__form">
        <Suptitle text="Документ, удостоверяющий личность" />
        <div class="info__form--wrapper">
          <Text text="Наименование" placeholder="Паспорт ID" />
        </div>
        <div class="info__form--wrapper flex">
          <div class="info__form--details">
            <p>Серия и № паспорта*</p>
            <div class="flex">
              <Dropdown
                title=""
                :options="[
                  'Движимое имущество',
                  'Документы, копии, переводы, заявления',
                  'Недвижимое имущество',
                  'Брак, семья',
                  'Иные физические лица',
                  'Юридические лица',
                ]"
              />
              <input type="text" placeholder="0228339" />
            </div>
          </div>
          <div class="info__form--details">
            <p>Орган и дата выдачи</p>
            <div class="flex">
              <input type="text" placeholder="МКК" />
              <input type="text" placeholder="№217021" />
              от
              <input type="text" placeholder="01.08.2017" />
            </div>
          </div>
        </div>
        <Suptitle text="Адрес прописки (регистрации)" />
        <div class="info__form--wrapper flex">
          <Dropdown
            class="w-55"
            title="Область"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
          <Dropdown
            class="w-55"
            title="Область"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
        </div>
        <div class="info__form--wrapper flex adress-propiski">
          <Dropdown
            title="Населенный пункт, город"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
          <label class="street">
            <p>Улица</p>
            <input placeholder="Каримова" type="text" />
          </label>
          <label class="home">
            <p>Дом</p>
            <input placeholder="23" type="text" />
          </label>
          <label class="home">
            <p>Квартира</p>
            <input placeholder="16" type="text" />
          </label>
        </div>
        <Suptitle text="Адрес фактического места жительства" />
        <div class="info__form--wrapper flex">
          <Dropdown
            class="w-55"
            title="Область"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
          <Dropdown
            class="w-55"
            title="Область"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
        </div>
        <div class="info__form--wrapper flex adress-propiski">
          <Dropdown
            title="Населенный пункт, город"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
          <label class="street">
            <p>Улица</p>
            <input placeholder="Каримова" type="text" />
          </label>
          <label class="home">
            <p>Дом</p>
            <input placeholder="23" type="text" />
          </label>
          <label class="home">
            <p>Квартира</p>
            <input placeholder="16" type="text" />
          </label>
        </div>
      </div>
      <div class="info__form--wrapper" style="margin-top: 30px">
        <Suptitle text="Контактные данные" />
        <div class="flex" style="margin-top: 15px">
          <Text class="w-55" text="E-mail*" placeholder="karina@gmail.com" />
          <Text class="w-55" text="Номер телефона*" placeholder="Введите номер телефона" />
        </div>
      </div>
      <Next />
    </div>
    <div class="info__step">
      <Approved :isActive="false" num="5" />
      <div class="flex jcsb">
        <Title text="Сторона 2 (другие участники)" />
        <Back />
      </div>
      <div class="info__form">
        <Suptitle text="Количество участников" />
        <div class="flex jcsb">
          <div class="info__member member flex">
            <div class="member__qnty active">Участник 1</div>
            <div class="member__qnty">2</div>
            <div class="member__qnty">3</div>
          </div>
          <div class="flex">
            <Plus />
            <Minus />
          </div>
        </div>
        <div class="info__subject">
          <Suptitle text="Субъект" />
          <div class="flex">
            <div @click="isActiveRadio = 0" class="info__radio">
              <div class="info__radio--button">
                <svg
                  v-if="isActiveRadio === 0"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 8C1.5 4.41136 4.41136 1.5 8 1.5C11.5886 1.5 14.5 4.41136 14.5 8C14.5 11.5886 11.5886 14.5 8 14.5C4.41136 14.5 1.5 11.5886 1.5 8ZM8 2.5C4.96364 2.5 2.5 4.96364 2.5 8C2.5 11.0364 4.96364 13.5 8 13.5C11.0364 13.5 13.5 11.0364 13.5 8C13.5 4.96364 11.0364 2.5 8 2.5Z"
                    fill="#1BAA75"
                  />
                  <path
                    d="M8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 5.51472 10.4853 3.5 8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5Z"
                    fill="#1BAA75"
                  />
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 8C1.5 4.41136 4.41136 1.5 8 1.5C11.5886 1.5 14.5 4.41136 14.5 8C14.5 11.5886 11.5886 14.5 8 14.5C4.41136 14.5 1.5 11.5886 1.5 8ZM8 2.5C4.96364 2.5 2.5 4.96364 2.5 8C2.5 11.0364 4.96364 13.5 8 13.5C11.0364 13.5 13.5 11.0364 13.5 8C13.5 4.96364 11.0364 2.5 8 2.5Z"
                    fill="#1BAA75"
                  />
                </svg>
              </div>
              Физическое лицо
            </div>
            <div @click="isActiveRadio = 1" class="info__radio">
              <div class="info__radio--button">
                <svg
                  v-if="isActiveRadio === 1"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 8C1.5 4.41136 4.41136 1.5 8 1.5C11.5886 1.5 14.5 4.41136 14.5 8C14.5 11.5886 11.5886 14.5 8 14.5C4.41136 14.5 1.5 11.5886 1.5 8ZM8 2.5C4.96364 2.5 2.5 4.96364 2.5 8C2.5 11.0364 4.96364 13.5 8 13.5C11.0364 13.5 13.5 11.0364 13.5 8C13.5 4.96364 11.0364 2.5 8 2.5Z"
                    fill="#1BAA75"
                  />
                  <path
                    d="M8 12.5C10.4853 12.5 12.5 10.4853 12.5 8C12.5 5.51472 10.4853 3.5 8 3.5C5.51472 3.5 3.5 5.51472 3.5 8C3.5 10.4853 5.51472 12.5 8 12.5Z"
                    fill="#1BAA75"
                  />
                </svg>
                <svg v-else width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.5 8C1.5 4.41136 4.41136 1.5 8 1.5C11.5886 1.5 14.5 4.41136 14.5 8C14.5 11.5886 11.5886 14.5 8 14.5C4.41136 14.5 1.5 11.5886 1.5 8ZM8 2.5C4.96364 2.5 2.5 4.96364 2.5 8C2.5 11.0364 4.96364 13.5 8 13.5C11.0364 13.5 13.5 11.0364 13.5 8C13.5 4.96364 11.0364 2.5 8 2.5Z"
                    fill="#1BAA75"
                  />
                </svg>
              </div>
              Юридическое лицо
            </div>
          </div>
        </div>
        <Suptitle text="Личные данные" />
        <div class="info__form--wrapper">
          <Text text="Фамилия" placeholder="Берманова" />
        </div>
        <div class="info__form--wrapper">
          <Text text="Имя" placeholder="Карина" />
        </div>
        <div class="info__form--wrapper">
          <Text text="Отчество" placeholder="Асланмухамедовна" />
        </div>
        <div class="info__form--wrapper">
          <Text text="Персональный номер (ИНН)" placeholder="10608198900000" />
        </div>
        <div class="info__form--wrapper">
          <div class="flex" style="gap: 25px">
            <Text class="w-55" text="Персональный номер (ИНН)" placeholder="10608198900000" />
            <Text class="w-55" text="Персональный номер (ИНН)" placeholder="10608198900000" />
          </div>
        </div>
      </div>
      <div class="info__form">
        <Suptitle text="Документ, удостоверяющий личность" />
        <div class="info__form--wrapper">
          <Text text="Наименование" placeholder="Паспорт ID" />
        </div>
        <div class="info__form--wrapper flex">
          <div class="info__form--details">
            <p>Серия и № паспорта*</p>
            <div class="flex">
              <Dropdown
                title=""
                :options="[
                  'Движимое имущество',
                  'Документы, копии, переводы, заявления',
                  'Недвижимое имущество',
                  'Брак, семья',
                  'Иные физические лица',
                  'Юридические лица',
                ]"
              />
              <input type="text" placeholder="0228339" />
            </div>
          </div>
          <div class="info__form--details">
            <p>Орган и дата выдачи</p>
            <div class="flex">
              <input type="text" placeholder="МКК" />
              <input type="text" placeholder="№217021" />
              от
              <input type="text" placeholder="01.08.2017" />
            </div>
          </div>
        </div>
        <Suptitle text="Адрес прописки (регистрации)" />
        <div class="info__form--wrapper flex">
          <Dropdown
            class="w-55"
            title="Область"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
          <Dropdown
            class="w-55"
            title="Область"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
        </div>
        <div class="info__form--wrapper flex adress-propiski">
          <Dropdown
            title="Населенный пункт, город"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
          <label class="street">
            <p>Улица</p>
            <input placeholder="Каримова" type="text" />
          </label>
          <label class="home">
            <p>Дом</p>
            <input placeholder="23" type="text" />
          </label>
          <label class="home">
            <p>Квартира</p>
            <input placeholder="16" type="text" />
          </label>
        </div>
        <Suptitle text="Адрес фактического места жительства" />
        <div class="info__form--wrapper flex">
          <Dropdown
            class="w-55"
            title="Область"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
          <Dropdown
            class="w-55"
            title="Область"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
        </div>
        <div class="info__form--wrapper flex adress-propiski">
          <Dropdown
            title="Населенный пункт, город"
            :options="[
              'Движимое имущество',
              'Документы, копии, переводы, заявления',
              'Недвижимое имущество',
              'Брак, семья',
              'Иные физические лица',
              'Юридические лица',
            ]"
          />
          <label class="street">
            <p>Улица</p>
            <input placeholder="Каримова" type="text" />
          </label>
          <label class="home">
            <p>Дом</p>
            <input placeholder="23" type="text" />
          </label>
          <label class="home">
            <p>Квартира</p>
            <input placeholder="16" type="text" />
          </label>
        </div>
      </div>
      <div class="info__form--wrapper" style="margin-top: 30px">
        <Suptitle text="Контактные данные" />
        <div class="flex" style="margin-top: 15px">
          <Text class="w-55" text="E-mail*" placeholder="karina@gmail.com" />
          <Text class="w-55" text="Номер телефона*" placeholder="Введите номер телефона" />
        </div>
      </div>
      <div class="info__form">
        <div class="info__form--wrapper">
          <File />
        </div>
      </div>
      <Next />
    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import Dropdown from '@/components/Info/Dropdown.vue'
import Title from '@/components/Info/Title.vue'
import Suptitle from '@/components/Info/Suptitle.vue'
import Mark from '@/components/Info/Mark.vue'
import Approved from '@/components/Info/Approved.vue'
import Accordeon from '@/components/Info/Accordeon.vue'
import Back from '@/components/Info/Btn/Back.vue'
import Next from '@/components/Info/Btn/Next.vue'
import Plus from '@/components/Info/Btn/Plus.vue'
import Minus from '@/components/Info/Btn/Minus.vue'
import Text from '@/components/Info/Input/Text.vue'
import File from '@/components/Info/Input/File.vue'
const isActive = ref(false)
const isActiveRadio = ref(0)
const activeOption = ref('ЧН Абылгазиева Нурмира Нарматовна')
</script>

<style lang="scss" scoped>
@import '../assets/scss/variables.scss';
.flex {
  display: flex;
  gap: 20px;
}
.aic {
  align-items: center;
}
.jcsb {
  justify-content: space-between;
}
.w-55 {
  width: 55%;
}
.member {
  display: flex;
  align-items: center;

  &__qnty {
    font-family: 'Montserrat';
    font-weight: 500;
    font-size: 16px;
    cursor: pointer;

    &.active {
      padding: 12px 20px;
      color: #1baa75;
      background: #f6f6f6;
    }
  }
}
.dropdown-search {
  width: 100%;
  position: relative;

  span {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__select {
    position: absolute;
    top: 80px;
    left: 0;
    background: #fff;
    width: 100%;
    z-index: 10;
  }

  p {
    margin-bottom: 5px;
  }

  &__option {
    color: #24334b;
    margin: 15px;
    cursor: pointer;
  }

  label {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    background: #ffffff;
    border: 1px solid #1baa75;
    padding: 12px 10px;
    box-sizing: border-box;
  }
}
.info {
  padding: 40px 40px 40px 72px;
  flex: 1;
  background: #ffffff;
  box-shadow: 0px 10px 40px #e9e9e9;

  &__subject {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }

  &__radio {
    display: flex;
    align-items: center;

    &--button {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  &__step {
    border-left: 2px solid #cdcdcd;
    padding-top: 20px;
    padding-left: 52px;
    padding-bottom: 30px;
    position: relative;

    &.active {
      border-color: #1baa75;
    }
  }

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 20px;

    .adress-propiski {
      .dropdown {
        width: 284px;
        font-size: 14px;
        font-weight: 500;
        color: #24334b;
      }

      p {
        font-weight: 500;
        font-family: 'Montserrat';
        font-size: 14px;
        line-height: 130%;
        color: #24334b;
        margin: 0;
      }

      input {
        padding: 11px 10px;
        font-family: 'Montserrat';
        font-size: 16px;
        line-height: 140%;
        color: #24334b;
      }

      .street {
        input {
          width: 284px;
        }
      }
    }

    &--details {
      width: 50%;

      p {
        font-weight: 500;
        font-size: 14px;
        line-height: 130%;
        color: #24334b;
        margin-bottom: 5px;
      }

      .flex {
        gap: 10px;
        align-items: center;
      }

      .dropdown {
        width: 80px;
      }

      input {
        width: 100%;
        flex: 1;
        display: block;
        padding: 12px 10px;
        font-size: 16px;
        line-height: 140%;
        background: #ffffff;
        border: 1px solid #1baa75;
      }
    }
  }
}
</style>
