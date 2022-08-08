<template>
    <div class="cart">
        <header-cart />
        <cards-header />
        <div class="cart__main">
            <div class="cart__main-left">
                <card class="cart__main-left-card" v-for="(card, index) in this.$store.state.cards" :key="card.index"
                    :product_data="card" @deleteCard="deleteCard(index)" />
                <check-install />
            </div>
            <div>
                <total />
            </div>
        </div>
        <div class="cart__slider">
            <slider />
        </div>
    </div>

</template>

<script>
import Card from './Card.vue';
import Total from './Total.vue';
import HeaderCart from './HeaderCart.vue';
import Slider from './Slider.vue';
import CardsHeader from './CardsHeader.vue';
import CheckInstall from './CheckInstall.vue';


export default {
    data() {
        return {
            checked: [],
            inputValue: '',
            cards: [],
        };
    },
    components: {
        Card,
        Total,
        HeaderCart,
        Slider,
        CardsHeader,
        CheckInstall
    },
    methods: {
        formSubmit() {
            console.log('formInstall', this.formInstall);
        },
        deleteCard(index) {
            this.$store.state.cards.splice(index, 1);
        }
    },
    mounted() {
    },
    computed: {
        calculateCards() {
            return this.$store.state.cards.length;
        }
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

.cart__slider {
    margin-top: 96px;
}

.cart__main-left-card {
    border-bottom: 1px solid #C4C4C4;
}

.cart__main-left-card:last-child {
    border: none;
}
</style>