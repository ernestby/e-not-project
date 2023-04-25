<template>
  <section class="messages">
    <div class="container">
      <div class="messages__content">
        <div class="messages__nuvbar">
          <p class="messages__nuvbar__title">Ваши сообщения</p>
          <div class="messages__block__online">
            <img src="../assets/Messages/Ellipse.png" alt="#" />
            <div class="messages__name">
              <h4>Баланчаева Б.Б.</h4>
              <p><span>онлайн</span></p>
            </div>
          </div>
          <div class="messages__block">
            <img src="../assets/Messages/Ellipse.png" alt="#" />
            <div class="messages__name">
              <h4>Алапаев Н.К.</h4>
              <p>оффлайн</p>
            </div>
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="5" cy="5" r="5" fill="#1BAA75" />
            </svg>
          </div>
          <div class="messages__block">
            <img src="../assets/Messages/Ellipse.png" alt="#" />
            <div class="messages__name">
              <h4>Баланчаева Б.Б.</h4>
              <p>оффлайн</p>
            </div>
          </div>
          <div class="messages__block">
            <img src="../assets/Messages/Ellipse.png" alt="#" />
            <div class="messages__name">
              <h4>Баланчаева Б.Б.</h4>
              <p>оффлайн</p>
            </div>
          </div>
          <div class="messages__block">
            <img src="../assets/Messages/Ellipse.png" alt="#" />
            <div class="messages__name">
              <h4>Баланчаева Б.Б.</h4>
              <p>оффлайн</p>
            </div>
          </div>
          <div class="messages__block">
            <img src="../assets/Messages/Ellipse.png" alt="#" />
            <div class="messages__name">
              <h4>Баланчаева Б.Б.</h4>
              <p>оффлайн</p>
            </div>
          </div>
        </div>
        <div class="messages__chat">
          <div class="messages__box__my">
            <p>Здравствуйте! Я оставил вам заявку на доверенность</p>
            <div class="messages__time__my">
              <p>16:29</p>
              <svg width="16" height="9" viewBox="0 0 16 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M7.7345 5.67317L8.67584 6.61451L14.3198 0.970506L15.2625 1.91317L8.67584 8.49984L4.43317 4.25717L5.37584 3.31451L6.7925 4.73117L7.7345 5.67251V5.67317ZM7.73584 3.78784L11.0372 0.48584L11.9772 1.42584L8.67584 4.72784L7.73584 3.78784ZM5.85117 7.55784L4.90917 8.49984L0.666504 4.25717L1.60917 3.31451L2.55117 4.25651L2.5505 4.25717L5.85117 7.55784Z"
                  fill="#F6F6F6" />
              </svg>
            </div>
          </div>
          <div class="messages__box__companion">
            <p>
              Здравствуйте! Ваши документы готовы. Вам необходимо подойти в наш
              офис на Московская 25, подписать и забрать Доверенность.
            </p>
            <div class="messages__time__companinon">
              <p>16:40</p>
            </div>
          </div>
          <div class="messages__box__my">
            <p>Хорошо, спасибо, я подойду завтра утром.</p>
            <div class="messages__time__my">
              <p class="messages__time__num">16:42</p>
              <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.66667 6.43317L0 3.7665L0.933333 2.83317L2.66667 4.5665L7.06667 0.166504L8 1.09984L2.66667 6.43317Z"
                  fill="#F6F6F6" />
              </svg>
            </div>
          </div>
          <div class="messages__box__input">
            <textarea name="" placeholder="Ваше сообщение"></textarea>
            <div class="messages__send">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M22.7345 11.1654L2.10954 0.852917C1.94789 0.772074 1.76631 0.739681 1.58668 0.759641C1.40704 0.7796 1.23701 0.851061 1.09704 0.965417C0.963376 1.07744 0.86361 1.22453 0.808956 1.39015C0.754303 1.55576 0.74693 1.73334 0.787666 1.90292L3.56267 11.9998L0.750166 22.0685C0.711941 22.2102 0.707479 22.3588 0.737139 22.5024C0.766799 22.6461 0.829754 22.7808 0.92094 22.8957C1.01213 23.0106 1.129 23.1024 1.26217 23.164C1.39533 23.2255 1.54107 23.2549 1.68767 23.2498C1.83442 23.2489 1.97893 23.2136 2.10954 23.1467L22.7345 12.8342C22.8881 12.7555 23.017 12.636 23.107 12.4888C23.197 12.3415 23.2446 12.1723 23.2446 11.9998C23.2446 11.8272 23.197 11.6581 23.107 11.5108C23.017 11.3636 22.8881 11.2441 22.7345 11.1654ZM3.14079 20.5404L5.21267 12.9373H13.8752V11.0623H5.21267L3.14079 3.45917L20.2127 11.9998L3.14079 20.5404Z"
                  fill="#F6F6F6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style lang="scss">
@import "../assets/scss/variables.scss";

.messages {
  font-family: "Montserrat";
  margin: 60px 0 92px 0;
  flex: 1;
  padding: 60px;

  &__content {
    display: flex;
  }

  &__nuvbar {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
    width: 320px;
  }

  &__nuvbar__title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 18px;
    width: 320px;
    height: 64px;
    color: $text-dark-blue;
  }

  &__block__online {
    display: flex;
    align-items: center;
    padding: 12px 16px 12px 16px;
    background: $text-dark-blue;
    box-shadow: 0px 10px 20px #acbbd2, 0px 5px 20px #dfdfdf;
    gap: 16px;

    h4 {
      color: $bg-light-gray;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 14px;
    }

    p {
      margin-top: 8px;
      font-weight: 500;
      font-size: 14px;
      line-height: 12px;

      span {
        color: $text-light-green;
      }
    }
  }

  &__block {
    display: flex;
    align-items: center;
    padding: 12px 16px 12px 16px;
    gap: 16px;

    h4 {
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 14px;
      color: $text-dark-blue;
      margin-right: 90px;
    }

    p {
      margin-top: 8px;
      font-weight: 500;
      font-size: 14px;
      line-height: 12px;
      color: #bdbdbd;
    }
  }

  &__box__my {
    background: $text-light-green;
    width: 320px;
    padding: 15px 15px 15px 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin: 45px 0 11px 390px;

    p {
      font-weight: 400;
      line-height: 140%;
      color: $bg-light-gray;
    }
  }

  &__time__my {
    display: flex;
    align-items: center;
    gap: 10px;

    &__time__num {
      font-weight: 400;
      font-size: 14px;
      color: $bg-light-gray;
    }
  }

  &__box__companion {
    background: $border-white;
    width: 320px;
    padding: 15px 15px 0 15px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    justify-content: center;
    margin-left: 30px;

    p {
      font-weight: 400;
      font-size: 14px;
      line-height: 140%;
      color: $text-dark-blue;
    }
  }

  &__time__companion {
    display: flex;
    align-items: center;

    &__time__num {
      font-weight: 400;
      font-size: 14px;
      color: $bg-light-gray;
    }
  }

  &__box__input {
    display: flex;
    width: 710px;
    margin: 59px 0 0 30px;

    textarea {
      resize: none;
      padding: 22px 0 1px 15px;
      width: 600px;
      border-width: 1px 0px 1px 1px;
      border-style: solid;
      border-color: $border-gray;
      font-family: "Montserrat";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #9a9a9a;
      outline: none;
      margin-left: 30px;
    }
  }

  &__send {
    width: 80px;
    height: 64px;
    background: $text-light-green;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }
}
</style>
