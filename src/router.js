import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
	mode: 'history',
  	base: process.env.BASE_URL,
  	routes: [
  		{
		    path: '/',
		    name: 'welcome',
		    component: () =>  import('./views/Welcome.vue')
		},
		{
		    path: '/game',
		    name: 'game',
		    component: () => import('./views/Game.vue')
		},
		{
		    path: '/finish',
		    name: 'finish',
		    component: () => import('./views/Finish.vue')
		}
  	]
})
