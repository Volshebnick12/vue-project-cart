import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            cards: [
                {
                    image: './src/components/image/G2H.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'G2H',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'G2H1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '1'
                },
                {
                    image: './src/components/image/BXC.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'BXC',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'BXC1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '2'
                },
                {
                    image: './src/components/image/GHN.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'GHN',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'GHN1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '3'
                },
                {
                    image: './src/components/image/TDA.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'TDA',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'TDA1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '4'
                }
            ],
            products: [
                {
                    image: './src/components/image/G2H.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'G2H',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'G2H1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '1'
                },
                {
                    image: './src/components/image/BXC.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'BXC',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'BXC1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '2'
                },
                {
                    image: './src/components/image/GHN.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'GHN',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'GHN1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '3'
                },
                {
                    image: './src/components/image/TDA.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'TDA',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'TDA1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '4'
                },
                {
                    image: './src/components/image/G2H.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'W5F',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'W5F1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '5'
                },
                {
                    image: './src/components/image/BXC.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'KJ5',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'KJ51065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '6'
                },
                {
                    image: './src/components/image/GHN.jpg',
                    name: 'Вытяжное устрйство',
                    model: '3N4',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: '3N41065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '7'
                },
                {
                    image: './src/components/image/TDA.jpg',
                    name: 'Вытяжное устрйство',
                    model: 'TMN',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: 'TMN1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '8'
                },
                {
                    image: './src/components/image/G2H.jpg',
                    name: 'Вытяжное устрйство',
                    model: '56N',
                    specification: '12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия',
                    art: '56N1065',
                    price: '12644',
                    price_range1: '6848',
                    price_range2: '56584',
                    index: '9'
                }
            ],
            message: 'товара'
        }
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        CARDS(state) {
            return state.cards;
        },
        slider(state) {
            return state.slider;
        }
    }
})

export default store;