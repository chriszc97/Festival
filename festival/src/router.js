import VueRouter from 'vue-router';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';

const routes = [
  { path: '/home', component: Home, name: 'Home' },
  { path: '/profile', component: Profile, name: 'Profile' },
  { path: '/login', component: Login, name: 'Login' }
];

export default new VueRouter({ routes, mode: 'history' });
