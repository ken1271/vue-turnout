import Vue from 'vue'
import App from './component/App.vue'
import VueRouter from 'vue-router'
import { firebaseApp } from './firebaseApp'

Vue.use(VueRouter)

import store from './store'

import Dashboard from './component/Dashboard.vue'
import Signin from './component/Signin.vue'
import Signup from './component/Signup.vue'

const router = new VueRouter({
  mode:'history',
  routes: [
    { path: '/dashboard', component: Dashboard},
    { path: '/signin', component: Signin},
    { path: '/signup', component: Signup}
  ]
})

firebaseApp.auth().onAuthStateChanged(user =>{
  if(user){
    store.dispatch('signIn', user)
    router.push('/dashboard')
  }else {
    router.replace('/signin')
  }
})

 new Vue({
   el: '#app',
   router,
   store,
   render: h => h(App)
 })
