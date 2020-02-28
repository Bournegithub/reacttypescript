import AboutPage from "../views/about/about";
import NeedLoginPage from "../views/needLogin/needLogin";
import ErrorPage from "../views/error/error";

interface Imenus {
    path: string,
    name: string,
    icon: string,
}
const menus: Array<Imenus> = [
    {path: '/home', name:'home', icon: 'bars'},
    {path: '/about', name: 'about', icon: 'bars'},
    {path: '/needlogin', name:'needlogin', icon: 'bars'},
];
export default menus;