<template>
  <div class="card">
    <div>
      <img className="card__img" :src="product_data.image" alt="product" />
    </div>
    <div class="card__block">
      <h1 class="card__block-title">{{ product_data.name }} {{ product_data.model }}</h1>
      <p class="card__block-text">{{ product_data.specification }}</p>
      <p class="card__block-art">{{ product_data.art }}</p>
    </div>
    <div class="card__addblock">
      <div class="card__addblock-count">
        <button class="card__addblock-count-btn" @click="decrease">-</button>
        <input class="card__addblock-count-input" type="number" :value="product_data.amount" @change="change" @input="change" />
        <button class="card__addblock-count-btn" @click="increase">+</button>
      </div>
      <p class="card__btn-addblock-price" :class="eachPriceClass">{{ product_data.price }} ₽/шт.</p>
    </div>
    <div>
      <p class="card__price">
        {{ (Number(product_data.price) * product_data.amount).toLocaleString('ru-RU') }}
        ₽
      </p>
    </div>
    <button class="card__delete" @click="deleteProduct">
      <svg width="14" height="14" viewBox="0 0 14 14" mlns="http://www.w3.org/2000/svg">
        <path d="M1 1L13 13" stroke="#1F2432" stroke-width="1.5" />
        <path d="M1 13L13 1" stroke="#1F2432" stroke-width="1.5" />
      </svg>
    </button>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    index: {
      type: Number,
      required: true,
    },
    product_data: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  data() {
    return {
      count: 1,
    }
  },
  computed: {
    eachPriceClass() {
      return this.product_data.amount < 2 ? 'card__btn-addblock-price--hidden' : ''
    },
  },
  methods: {
    deleteProduct() {
      this.$store.dispatch('deleteProduct', { index: this.index })
    },
    decrease() {
      if (this.product_data.amount > 1) {
        this.$store.dispatch('changeProductAmount', {
          index: this.index,
          amount: this.product_data.amount - 1,
        })
      }
    },
    increase() {
      this.$store.dispatch('changeProductAmount', {
        index: this.index,
        amount: this.product_data.amount + 1,
      })
    },
    change(e) {
      const amount = parseInt(e.target.value, 10)
      if (amount > 1) {
        this.$store.dispatch('changeProductAmount', {
          index: this.index,
          amount,
        })
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

.card {
  display: flex;
  align-items: center;
  justify-content: space-around;
  max-width: 800px;
  height: 100%;
  position: relative;
  margin-top: 25px;
}

.card__img {
  height: 70px;
  padding: 20px;
  text-align: center;
}

.card__block {
  max-width: 320px;
}

.card__block-title {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 145%;
  color: #1f2432;
}

.card__block-text {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 150%;
  color: #2c3242;
  padding-right: 60px;
}

.card__block-art {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797b86;
}

.card__addblock-count {
  display: inline-flex;
}

.card__addblock-count-input,
.card__addblock-count-btn {
  width: 33px;
  height: 34px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  color: #1f2432;
  background-color: #f6f8fa;
  border: none;
  cursor: pointer;
  padding: 0;
  margin: 0;
}

.card__addblock-count-input {
  margin: 0 2px;
}

input[type='number'] {
  -moz-appearance: textfield;
}

.card__btn-addblock-price {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 145%;
  text-align: center;
  color: #1f2432;
}

.card__btn-addblock-price--hidden {
  display: none;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
}

.card__delete {
  position: absolute;
  top: 10px;
  right: 0;
  border: none;
  background: none;
  padding: 1px;
  width: 16px;
  height: 16px;
  cursor: pointer;
}

.card__delete:hover,
.card__addblock-count-btn:hover {
  background: #bfbfc34d;
  box-shadow: 2px 2px 4px #797b8692;
}

.card__delete:active,
.card__addblock-count-btn:active {
  background: #d2d2d425;
  box-shadow: 2px 2px 4px #c3c6d65f;
}

@media (max-width: 650px) {
  .card__block {
    max-width: 120px;
  }

  .card__addblock-count {
    display: flex;
    flex-direction: column;
  }

  .card__block-title {
    font-size: 14px;
  }

  .card__block-text {
    font-size: 10px;
  }

  .card__block-art {
    font-size: 12px;
  }
}
</style>