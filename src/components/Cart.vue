<template>
  <div class="cart">
    <header-cart />
    <Cards-header />
    <div class="cart__main">
      <div class="cart__main-left">
        <Card
          v-for="(card, index) in $store.state.cards"
          :key="card.index"
          class="cart__main-left-card"
          :product_data="card"
          :index="index"
        />
        <Check-install />
        <OrderCreated :class="eachOrderClass" />
      </div>
      <div>
        <Total />
      </div>
    </div>
    <div class="cart__slider">
      <Slider />
    </div>
  </div>
</template>

<script>
import Card from './Card.vue'
import Total from './Total.vue'
import HeaderCart from './HeaderCart.vue'
import Slider from './Slider.vue'
import CardsHeader from './CardsHeader.vue'
import CheckInstall from './CheckInstall.vue'
import OrderCreated from './OrderCreated.vue'

export default {
  name: 'Cart',
  components: {
    Card,
    Total,
    HeaderCart,
    Slider,
    CardsHeader,
    CheckInstall,
    OrderCreated,
  },
  data() {
    return {
      checked: [],
      inputValue: '',
      cards: [],
    }
  },
  computed: {
    calculateCards() {
      return this.$store.state.cards.length
    },
    eachOrderClass() {
      if (this.$store.state.order.length > 1) {
        return 'cart__order'
      } else {
        return 'cart__order--hidden'
      }
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

.cart {
  display: flex;
  flex-direction: column;
  margin: 100px 80px 95px 80px;
}

.cart__main {
  display: inline-flex;
  justify-content: space-between;
  gap: 55px;
}

.cart__main-left {
  display: flex;
  flex-direction: column;
  max-width: 800px;
}

.cart__order--hidden,
.cart__install-hidden {
  display: none;
}

.cart__order,
.cart__install {
  display: flex;
}

.cart__slider {
  margin-top: 96px;
}

.cart__main-left-card {
  border-bottom: 1px solid #c4c4c4;
}

.cart__main-left-card:last-child {
  border: none;
}
</style>