import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Cart from '../views/Cart.vue'
import loginPage from '../views/loginPage.vue'
import About from '../views/About.vue'
import Payment from '../views/payment.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    }, {
        path: '/getUser',
        name: 'loginPage',
        component: loginPage
    },
    {
        path: '/cart',
        name: 'Cart',
        component: Cart
    },
    {
        path: '/about',
        name: 'About',
        component: About
    },
    {
        path: '/payment',
        name: 'Payment',
        component: Payment
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router