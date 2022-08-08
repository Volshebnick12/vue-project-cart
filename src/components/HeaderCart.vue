<template>
  <div class="header">
    <div class="header__cart">
      <div class="header__cart-block">
        <img class="header__cart-block-img" src="images/svg/cart.svg" width="32" height="32" alt="Корзина" />
        <div class="header__cart-block-wrapper">
          <h3 class="header__cart-block-wrapper-title">Ваша корзина</h3>
          <p class="header__cart-block-wrapper-text">
            {{ calculateCards }}
          </p>
          <p class="header__cart-block-wrapper-price">{{ calculateCartPrice }} &#8381;</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import productsPlural from '../helpers/productsPlural'
export default {
  name: 'HeaderCart',
  components: {},
  props: {},
  computed: {
    calculateCards() {
      const amount = this.$store.getters.productsAmount
      return `${amount} ${productsPlural(amount)}`
    },
    calculateCartPrice() {
      return this.$store.getters.productsPrice
    },
  },
}
</script>

<style scoped>
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

.header__cart {
  display: flex;
  justify-content: end;
}

.header__cart-block {
  display: inline-flex;
  align-items: center;
}

.header__cart-block-wrapper {
  display: flex;
  flex-direction: column;
  padding-left: 10px;
}

.header__cart-block-wrapper-title {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #1f2432;
}

.header__cart-block-wrapper-text {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 145%;
  color: #797b86;
}

.header__cart-block-wrapper-price {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 145%;
  color: #1f2432;
}
</style>