import Vue from 'vue'
import VueRouter from 'vue-router'
import StartView from '../views/StartView.vue'
import QuizView from '../views/QuizView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: StartView
  },
  {
    path: '/quiz',
    name: 'quiz',
    component: QuizView
  }
  
]

const router = new VueRouter({
  routes
})

export default router
