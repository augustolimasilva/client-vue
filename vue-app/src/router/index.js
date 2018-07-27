import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import CadastroUsuario from '@/components/CadastroUsuario.vue'
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import store from '@/store/store.js'

Vue.use(VueRouter)
Vue.use(VueResource);

async function requireAuth (to, from, next) {
  if (store.state.token == null) {
    next({ name: 'Login' })
  } else {
    next();
  }
}

export const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    //meta: {auth:false}
  },
  {
    path: '/cadastrousuario',
    name: 'CadastroUsuario',
    component: CadastroUsuario
    //beforeEnter: requireAuth
  }
]

export default new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass:'active'
})