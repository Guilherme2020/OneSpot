// import Home from '@/components/home/Index.vue'
// import Cadastrar from '@/components/cadastrar/Index.vue'
// import About from '@/components/about/Index.vue'
// import Chefes from '@/components/chefes/Index.vue'
// import Pratos from '@/components/pratos/Index.vue'
// import Perfil from  '@/components/chefes/Perfil.vue'
// import Api from  '@/components/api/Teste.vue'
// import Dados from '@/components/data/Index.vue'
// // import Dados from  '@/components/meusdados/Index.vue'
import Login  from './components/login/login.vue'
import Home from './components/home/home.vue'
export const routes = [
	{ path: '/', redirect: '/login'},
	{ path:'/login', component:Login, title: 'Login'},
	{ path: '/home',component:Home, title:'Home'}
]

// export const routes = [

//   { path: '', component: Home, titulo: 'Home'},
//   { path: '/dados', component: Dados, titulo: 'Data'},
//   { path: '/cadastrar', component: Cadastrar, titulo: 'Cadastrar'},
//   // { path: '/sobre/', component: About, titulo: 'Sobre'},
//   // { path: '/dados/', component: Dados, titulo: 'Dados'},
//   { path: '/chefes/',component: Chefes, titulo: 'Chefes'},
//   { path: '/perfil/:slug',component: Perfil, titulo: 'Perfil'},
//   { path: '/pratos/:busca',component: Pratos, titulo: 'Pratos'},
//   // { path: '/pratos/',component: Pratos, titulo: 'Pratos'},
//   { path: '/api',component: Api, titulo: 'Api'},
//   { path: '/sobre',component:About, titulo: 'Sobre' },
//   { path: '*', redirect: '/' }

// ];
