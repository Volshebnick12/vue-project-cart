<template>
    <div class="header">
        <div class="header__cart">
            <div class="header__cart-block">
                <img class="header__cart-block-img" src="./image/SVG/card.svg" width="32" height="32" alt="Корзина">
                <div class="header__cart-block-wrapper">
                    <h3 class="header__cart-block-wrapper-title">Ваша корзина</h3>
                    <p v-bind="change"
                    :change="change" 
                    :message="message" 
                    class="header__cart-block-wrapper-text">{{ calculateCards }} {{ this.$store.state.message }}</p>
                    <p class="header__cart-block-wrapper-price">{{}} &#8381;</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
export default {
    props: {
        message: {
            type: String,
            required: true
        },
        change: Function
    },
    name: "HeaderCart",
    components: {

    },
    computed: {
        calculateCards() {
            return this.$store.state.cards.length;
        },
        // change() {
        //     if (this.$store.state.cards.length = 0) {
        //         this.$store.state.message = 'товар';
        //     } else (this.$store.state.cards.length = -1 && this.$store.state.cards.length > 4) {
        //         this.$store.state.message = 'товаров';
        //     }
        // }
    }

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
    color: #1F2432;
}

.header__cart-block-wrapper-text {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 145%;
    color: #797B86;
}

.header__cart-block-wrapper-price {
    font-family: 'Lato';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 145%;
    color: #1F2432;
}



</style>