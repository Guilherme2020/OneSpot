import Vue from 'vue'
import Router from 'vue-router'


import Login  from '../components/login/login.vue'
Vue.use(Router)


export default new Router({
	routes: [

		{ path: '/', redirect: '/login'},
		{ path:'/login', component:Login, title: 'Login'}


	]
})
