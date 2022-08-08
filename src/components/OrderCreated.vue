<template>
  <div class="order">
    <h2 class="order__title">Ваш заказ сформирован!</h2>
    <p class="order__text">С Вами свяжется менеджер, для подтверждения заказа</p>
  </div>
</template>

<script>
export default {
  name: 'OrderCreated',
  order_data: {
    type: Object,
  },
}
</script>

<style scoped >
.order {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 800px;
}
.order__title {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 145%;
  color: #1f2432;
}

.order__text {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 150%;
  color: #2c3242;
  padding-right: 60px;
}
</style>