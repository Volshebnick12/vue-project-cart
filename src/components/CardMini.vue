<template>
  <div class="card">
    <img class="card__img" :src="product_data.image" alt="product" />
    <div class="card__wrapper">
      <h1 class="card__wrapper-title">{{ product_data.name }} {{ product_data.model }}</h1>
      <p class="card__wrapper-text">{{ product_data.specification }}</p>
      <p class="card__wrapper-price">
        {{ product_data.price_range1 }}&#8381; - {{ product_data.price_range2 }}&#8381;
      </p>
      <p class="card__wrapper-price-evro">
        {{ product_data.price_range1 }}&#8364; - {{ product_data.price_range2 }}&#8364;
      </p>
      <button class="card__wrapper-btn">Подробнее</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CardMini',
  props: {
    product_data: {
      type: Object,
      default() {
        return {}
      },
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
  background: #f6f8fa;
  border-radius: 5px;
  width: 290px;
  padding: 25px;
  text-align: center;
}

.card__img {
  padding: 50px;
  margin-bottom: 5px;
  height: 100px;
}

.card__wrapper {
  text-align: start;
}

.card__wrapper-title {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  font-size: 22px;
  line-height: 120.52%;
  color: #1f2432;
  padding-bottom: 10px;
}

.card__wrapper-text {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 145%;
  color: #1f2432;
  padding-bottom: 59px;
}

.card__wrapper-price {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 22px;
  line-height: 130%;
  letter-spacing: 0.005em;
  color: #1f2432;
  padding-bottom: 3px;
}

.card__wrapper-price-evro {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 145%;
  color: #797b86;
  padding-bottom: 20px;
}

.card__wrapper-btn {
  background: #0069b4;
  border-radius: 4px;
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 145%;
  text-align: center;
  color: #ffffff;
  padding: 14px 115px;
  border: none;
  cursor: pointer;
}

.card__wrapper-btn:hover {
  background: #0069b4d4;
  box-shadow: 0 0 2px #708a9d;
}

.card__wrapper-btn:active {
  background: #0069b451;
  box-shadow: 0 0 2px #030d14;
}
</style>