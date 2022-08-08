<template>
  <div class="slider">
    <div class="slider__top">
      <h3 class="slider__top-title">Просмотренные товары</h3>
      <p class="slider__top-number">
        {{ pagination }} <span class="slider__top-number-list">/ {{ paginationAll }}</span>
      </p>
    </div>
    <div class="slider__cards">
      <div class="slider__cards-wrapper" :style="{ 'margin-left': '-' + 365 * currentSlideIndex + 'px' }">
        <CardMini v-for="card in $store.state.products" :key="card.index" :product_data="card" class="slider__cards-wrapper-card" />
      </div>
      <button class="slider__cards-prev" @click="prevSlider"></button>
      <button class="slider__cards-next" @click="nextSlider"></button>
    </div>
  </div>
</template>

<script>
import CardMini from './CardMini.vue'
export default {
  name: 'Slider',
  components: { CardMini },
  data() {
    return {
      currentSlideIndex: 0,
    }
  },
  computed: {
    pagination() {
      return this.currentSlideIndex + 1
    },
    paginationAll() {
      return this.$store.state.products.length - 3
    },
  },
  methods: {
    prevSlider() {
      if (this.currentSlideIndex > 0) {
        this.currentSlideIndex--
      }
    },
    nextSlider() {
      if (this.currentSlideIndex >= this.$store.state.products.length - 4) {
        this.currentSlideIndex = 0
      } else {
        this.currentSlideIndex++
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

.slider {
  display: flex;
  flex-direction: column;
  position: relative;
}

.slider__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
}

.slider__top-title {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 120.52%;
  color: #1f2432;
  margin-bottom: 60px;
}

.slider__top-number {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 150%;
  color: #212121;
  position: relative;
  padding-right: 65px;
  margin-bottom: 60px;
}

.slider__top-number-list {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 150%;
  color: #6c6a6a;
  position: relative;
}

.slider__cards {
  max-width: 1450px;
  overflow: hidden;
}

.slider__cards-wrapper {
  display: flex;
  transition: all ease 2s;
}

.slider__cards-prev {
  background: url(/images/svg/arrow.svg) no-repeat;
  background-size: 50px 50px;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -8px;
  cursor: pointer;
  transform: rotate(180deg);
  right: 120px;
  border: none;
}

.slider__cards-next {
  background: url(/images/svg/arrow.svg) no-repeat;
  width: 50px;
  height: 50px;
  position: absolute;
  top: -8px;
  right: 0;
  cursor: pointer;
  border: none;
}

.slider__cards-prev:hover,
.slider__cards-next:hover {
  opacity: 0.7;
}

.slider__cards-prev:active {
  opacity: 0.3;
  background-size: 47px 47px;
  top: -8px;
  right: 120px;
}

.slider__cards-next:active {
  opacity: 0.3;
  background-size: 47px 47px;
  top: -8px;
  right: 0;
}

.slider__cards,
.slider__cards-wrapper {
  display: inline-flex;
  gap: 25px;
}
</style>