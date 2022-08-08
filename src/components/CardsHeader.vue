<template>
  <div class="top">
    <div class="top__block">
      <h1 class="top__block-title">Ваша корзина</h1>
      <p class="top__block-p">
        {{ calculateCards }}
      </p>
    </div>
    <button class="top__clean" @click="cleanCart">Отчистить корзину</button>
  </div>
</template>

<script>
import productsPlural from '../helpers/productsPlural'

export default {
  name: 'CardsHeader',
  props: {},
  computed: {
    calculateCards() {
      const amount = this.$store.getters.productsAmount
      return `${amount} ${productsPlural(amount)}`
    },
  },
  methods: {
    cleanCart() {
      this.$store.state.cards.length = 0
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

.top {
  display: flex;
  justify-content: space-between;
  max-width: 800px;
  align-items: end;
}

.top__block {
  display: inline-flex;
  align-items: end;
  justify-content: start;
}

.top__block-title {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 44px;
  line-height: 120.52%;
  color: #1f2432;
  margin-right: 22px;
}

.top__block-p,
.top__clean {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  color: #797b86;
}

.top__block-p--visibility {
  display: none;
}

.top__p {
  font-size: 18px;
  line-height: 145%;
}

.top__clean {
  font-size: 14px;
  line-height: 150%;
  text-align: right;
  text-decoration-line: underline;
  cursor: pointer;
  background: none;
  border: none;
}

.top__clean:hover {
  opacity: 0.7;
}

.top__clean:active {
  color: #a3121299;
}
</style>