import Vue from 'vue'
import Router from 'vue-router'
// import Todo from '@/pages/todo'
import Login from '@/pages/login'
import Main from '@/pages/main'
import ChatList from '@/pages/chat-list'
import Status from '@/pages/status'
import Calls from '@/pages/calls'
import Dictionary from '@/pages/dictionary'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/main/:abc',
      name: 'Main',
      component: Main,
      children: [
        {
          path: '/',
          redirects: '/chats'
        },
        {
          path: '/chats',
          name: 'Chats',
          component: ChatList
        },
        {
          path: '/status',
          name: 'Status',
          component: Status
        },
        {
          path: '/calls',
          name: 'Calls',
          component: Calls
        },
        {
          path: '/dictionary',
          name: 'Dictionary',
          component: Dictionary
        }
      ]
    }
  ]
})
