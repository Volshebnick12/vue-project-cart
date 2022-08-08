import { createStore } from 'vuex'

const store = createStore({
  state() {
    return {
      cards: [
        {
          image: 'images/g2h.jpg',
          name: 'Вытяжное устрйство',
          model: 'G2H',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'G2H1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '1',
          amount: 1,
        },
        {
          image: 'images/bxc.jpg',
          name: 'Вытяжное устрйство',
          model: 'BXC',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'BXC1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '2',
          amount: 1,
        },
        {
          image: 'images/ghn.jpg',
          name: 'Вытяжное устрйство',
          model: 'GHN',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'GHN1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '3',
          amount: 1,
        },
        {
          image: 'images/tda.jpg',
          name: 'Вытяжное устрйство',
          model: 'TDA',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'TDA1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '4',
          amount: 1,
        },
      ],
      products: [
        {
          image: 'images/g2h.jpg',
          name: 'Вытяжное устрйство',
          model: 'G2H',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'G2H1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '1',
        },
        {
          image: 'images/bxc.jpg',
          name: 'Вытяжное устрйство',
          model: 'BXC',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'BXC1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '2',
        },
        {
          image: 'images/ghn.jpg',
          name: 'Вытяжное устрйство',
          model: 'GHN',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'GHN1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '3',
        },
        {
          image: 'images/tda.jpg',
          name: 'Вытяжное устрйство',
          model: 'TDA',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'TDA1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '4',
        },
        {
          image: 'images/g2h.jpg',
          name: 'Вытяжное устрйство',
          model: 'W5F',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'W5F1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '5',
        },
        {
          image: 'images/bxc.jpg',
          name: 'Вытяжное устрйство',
          model: 'KJ5',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'KJ51065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '6',
        },
        {
          image: 'images/ghn.jpg',
          name: 'Вытяжное устрйство',
          model: '3N4',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: '3N41065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '7',
        },
        {
          image: 'images/tda.jpg',
          name: 'Вытяжное устрйство',
          model: 'TMN',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: 'TMN1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '8',
        },
        {
          image: 'images/g2h.jpg',
          name: 'Вытяжное устрйство',
          model: '56N',
          specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
          art: '56N1065',
          price: '12644',
          price_range1: '6848',
          price_range2: '56584',
          index: '9',
        },
      ],
      order: [],
      checkboxes: false,
    }
  },
  mutations: {
    deleteProduct: (state, { index }) => {
      state.cards.splice(index, 1)
    },
    changeProductAmount: (state, { index, amount }) => {
      state.cards[index].amount = amount
    },
    newOrder: (state) => {
      state.order = state.cards.slice()
      state.cards.length = 0
      console.log(state.order)
    },
  },
  actions: {
    deleteProduct: (context, { index }) => {
      context.commit('deleteProduct', { index })
    },
    changeProductAmount: (context, { index, amount }) => {
      context.commit('changeProductAmount', { index, amount })
    },
    newOrder: (context) => {
      context.commit('newOrder')
    },
  },
  getters: {
    slider(state) {
      return state.slider
    },
    productsAmount(state) {
      return state.cards.reduce((acc, cur) => acc + parseInt(cur.amount, 10), 0)
    },
    productsPrice(state) {
      return state.cards.reduce((acc, cur) => acc + parseInt(cur.price, 10) * cur.amount, 0)
    },
  },
})

export default store
