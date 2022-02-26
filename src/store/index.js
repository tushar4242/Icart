import { createStore } from 'vuex'

// function updateLocalStorage(cart) {
//     localStorage.setItem('cart', JSON.stringify(cart))
// }

export default createStore({
    state: {
        cart: [],
    },
    getters: {
        productQuantity: state => product => {
            const item = state.cart.find(i => i.id === product.id)
            if (item) {
                return item.quantity;
            } else {
                return null;
            }
        },
        cartItems: state => {
            return state.cart
        },
        cartToatal: state => {
            return state.cart.reduce((a, b) => a + (b.val * b.quantity), 0)
        }
    },
    mutations: {
        addItemInCart(state, product) {
            let item = state.cart.find(i => i.id === product.id)

            if (item) {
                item.quantity++;
            } else {
                state.cart.push({...product, quantity: 1 });
            }

            // updateLocalStorage(state.cart);
        },
        removeItemFromCart(state, product) {
            let item = state.cart.find(i => i.id === product.id)
            if (item) {
                if (item.quantity > 1) {
                    item.quantity--
                } else {
                    state.cart = state.cart.filter(i => i.id != product.id)
                }
            }

            // updateLocalStorage(state.cart);
        },
        // updateCartFromLocalStorage(state) {
        //     const cart = localStorage.getItem('cart')
        //     if (cart) {
        //         state.cart = JSON.parse(cart)
        //     }
        // }
    },
    actions: {},
    modules: {}
})