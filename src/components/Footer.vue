<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__content">
        <div class="footer__logo">
          <img src="/src/assets/Footer/logo.svg" alt="logo-icon" />
          E-notariat
        </div>
        <ul>
          <li>Общество</li>
          <li>About Us</li>
          <li>Guidelines and how to</li>
          <li>Quote from the best</li>
          <li>How to start a blog</li>
        </ul>
        <ul>
          <li>Образец</li>
          <li>About Us</li>
          <li>Guidelines and how to</li>
          <li>Quote from the best</li>
          <li>How to start a blog</li>
        </ul>
        <ul>
          <li>Ресурсы</li>
          <li>Accessibility</li>
          <li>Usability</li>
          <li>Marketplace</li>
          <li>Design & Dev</li>
        </ul>
      </div>
      <div class="footer__bottom">
        <div class="footer__analys">
          <img src="/src/assets/Footer/analys.svg" alt="analys-icon">
          2023 E-Notariat Все права зашищены
        </div>
        <div class="footer__icons">
          <a href="">
            <img src="/src/assets/Footer/facebook.svg" alt="facebook">
          </a>
          <a href="">
            <img src="/src/assets/Footer/instagram.svg" alt="instagram">
          </a>
          <a href="">
            <img src="/src/assets/Footer/whatsup.svg" alt="whatsup">
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup></script>

<style lang="scss" scoped> 
@import "../../src/assets/scss/variables.scss";
.footer {
  background: $text-light-green;
  color: $bg-white;
  padding: 48px 0;

  &__logo {
    display: flex;
    align-items: center;
    gap: 10px;
  }

  &__icons {
    display: flex;
    gap: 25px;
  }

  &__bottom {
    margin-top: 64px;
  }

  &__bottom, 
  &__analys {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  &__analys {
    gap: 32px;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  &__logo {
    width: 40%;
  }

  ul {
    li {
      font-weight: 400;
      font-size: 16px;
      color: $text-white;
      margin-bottom: 20px;

      &:first-child {
        font-weight: 600;
        font-size: 20px;
        color: $bg-white;
        margin-bottom: 26px;
      }
    }
  }
}
</style>
