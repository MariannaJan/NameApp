import Vue from 'vue'
import Router from 'vue-router'
import Names from './components/Names.vue'
import About from './components/About.vue'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'names',
            component: Names
        },
        {
            path: '/about',
            name: 'about',
            component: About
        }
    ]
})