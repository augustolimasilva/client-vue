import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '@/components/Login.vue'
import CadastroUsuario from '@/components/CadastroUsuario.vue'
import VueResource from 'vue-resource';

Vue.use(VueRouter)
Vue.use(VueResource);

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
    component: CadastroUsuario,
    meta: {auth:true}
  }
]

export default new VueRouter({
  mode: 'history',
  routes,
  linkActiveClass:'active'
})




