<template>
  <div class="total">
    <h3 class="total-title">Итого</h3>
    <div class="total__top">
      <div class="total__top-block">
        <p class="total__top-text">Сумма заказа</p>
        <p class="total__top-text">{{ cartPrice }}&#8381;</p>
      </div>
      <div class="total__top-block">
        <p class="total__top-text">Количество</p>
        <p class="total__top-text">{{ productsAmount }} шт</p>
      </div>
      <div class="total__top-block">
        <p class="total__top-text">Установка</p>
        <p class="total__top-text">{{ installationPrice }}</p>
      </div>
    </div>
    <div class="total__buttom">
      <div class="total__buttom-block">
        <p class="total__buttom-text">Стоимость товаров</p>
        <p class="total__buttom-price">{{ totalPrice }}&#8381;</p>
      </div>
      <button class="total__buttom-order" @click="createOrder">Оформить заказ</button>
      <button class="total__buttom-buy">Купить в 1 клик</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Total',
  components: {},
  computed: {
    productsAmount() {
      return this.$store.getters.productsAmount
    },
    installationPrice() {
      if (this.$store.state.checkboxes === true) {
        return this.$store.getters.productsAmount * 2500
      } else {
        return 'Нет'
      }
    },
    cartPrice() {
      return this.$store.getters.productsPrice
    },
    totalPrice() {
      if (this.$store.state.checkboxes === true) {
        return this.cartPrice + this.installationPrice
      } else {
        return this.cartPrice
      }
    },
  },
  methods: {
    createOrder() {
      this.$store.dispatch('newOrder')
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

.total {
  background: #f6f8fa;
  border-radius: 5px;
  width: 425px;
  padding: 35px 30px;
}

.total-title {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 120.52%;
  color: #1f2432;
  margin-bottom: 31px;
}

.total__top,
.total__buttom {
  display: flex;
  flex-direction: column;
}

.total__top-block {
  display: inline-flex;
  justify-content: space-between;
  padding-bottom: 17px;
  align-items: flex-end;
}

.total__top-text,
.total__buttom-text {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 145%;
  color: #1f2432;
}

.total__top-block:last-child {
  margin-bottom: 0;
  border-bottom: 1px solid #aeb0b6;
  padding-bottom: 29px;
}

.total__buttom-block {
  margin: 16px 0 32px 0;
  display: inline-flex;
  justify-content: space-between;
  align-items: flex-end;
}

.total__buttom-price {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 26px;
  line-height: 130%;
  letter-spacing: 0.005em;
  color: #1f2432;
}

.total__buttom-order {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  color: #ffffff;
  background: #0069b4;
  border-radius: 4px;
  padding: 14px 113px;
  border: none;
  margin-bottom: 12px;
  cursor: pointer;
}

.total__buttom-buy {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 145%;
  color: #0069b4;
  background: #ffffff;
  border: 1px solid #0069b4;
  border-radius: 4px;
  padding: 14px 113px;
  border: 1px solid #0069b4;
  cursor: pointer;
}

.total__buttom-order:hover {
  background: #0069b4d4;
  box-shadow: 0 0 2px #708a9d;
}

.total__buttom-order:active {
  background: #4b87b151;
  box-shadow: 0 0 2px #030d14;
}

.total__buttom-buy:hover {
  background: #b6dff894;
  box-shadow: 0 0 2px #62beff53;
}

.total__buttom-buy:active {
  background: #59b6f899;
  box-shadow: 0 0 2px #030d14;
}
</style>