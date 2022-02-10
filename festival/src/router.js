import VueRouter from 'vue-router';
import Home from './pages/Home';

const routes = [{ path: '/home', component: Home, name: 'Home' }];

export default new VueRouter({ routes, mode: 'history' });
