import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)


import Login  from '../components/login/login.vue'
import Home from '../components/home/home.vue'

export default new Router({
	routes: [

		{ path: '/', redirect: '/login'},
		{ path:'/login', component:Login, title: 'Login'},
		{path:'/home',component:Home, title: 'Home'}

	]
})
