import {createStore} from "vuex";
// import persistedstate from 'vuex-persistedstate';

const store = createStore({
    state() {
        return {
            count: 0,
            cart: [{
                product_id: 1,
                product_name: '아이폰 거치대',
                category: 'A'
            }],
            // user: {}
        }
    },
    getters: {
        cartCount: (state) => {
            return state.cart.length
        }
    },
    mutations: {
        increment (state) {
            state.count++
        },
        // user(state, data) {
        //     state.user = data
        // }
    },
    // plugins: [
    //     persistedstate({
    //         paths: ['user']
    //     })
    // ]
})

export default store;