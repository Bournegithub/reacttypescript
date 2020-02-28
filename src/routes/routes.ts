// 路由map
import HomePage from '../views/home/home';
import ListPage from '../views/list/list';
import ErrorPage from '../views/error/error';
import NeedLoginPage from '../views/needLogin/needLogin';
import LoginPage from '../views/login/login';
import AboutPage from '../views/about/about';
import RegisterPage from '../views/regsiter/register';



interface IRoutes {
    path: string,
    name: string,
    component: any,
    auth: boolean,
}

const Routers: Array<IRoutes> = [
    {path: '/', name:'home', component: HomePage, auth: false},
    {path: '/home', name:'home', component: HomePage, auth: false},
    {path: '/list:id', name:'list', component: ListPage, auth: false},
    {path: '/login', name: 'login', component: LoginPage, auth: false},
    {path: '/register', name: 'register', component: RegisterPage, auth: false},
    {path: '/about', name: 'about', component: AboutPage, auth: false},
    {path: '/error', name:'error', component: ErrorPage, auth: false},
    {path: '/needlogin', name:'needlogin', component: NeedLoginPage, auth: true},
];
export default Routers;