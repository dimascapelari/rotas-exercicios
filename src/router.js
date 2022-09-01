import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio'
import Usuario from './components/usuario/Usuario'

Vue.use(Router) // chamar usando $router

export default new Router({
    // mode: 'hash',
    mode: 'history',
    routes: [{
        path: '/',
        component: Inicio
    }, {
        path: '/usuario/:id',
        component: Usuario
    }]
})