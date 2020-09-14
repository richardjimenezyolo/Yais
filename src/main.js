import Vue from 'vue';

import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

import VueRouter from 'vue-router';

import App from './App.vue';
import Home from './views/Home.vue';
import Login from './views/Login.vue';
import Add from './views/Add.vue';

Vue.use(VueRouter);
Vue.use(Vuetify);

const router = new VueRouter({
	routes: [
		{path: '/', component: Home},
		{path: '/login', component: Login},
		{path: '/add', component: Add},
	]
})

new Vue({
	router,
	vuetify: new Vuetify,
	el: '#app',
	render: h => h(App)
})