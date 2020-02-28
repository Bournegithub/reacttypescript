import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import HeadMenu from '../compoents/headMenu/headMenu';
import { LayoutProvider} from 'react-page-layout';
import PublicLayout from '../compoents/publicLayout/publicLayout';
const layouts = {
    'public': PublicLayout,
};
interface IFEAProps {
    routes: any; // 必要属性
    location?: any,
}

class FrontendAuth extends React.Component<IFEAProps>{
    constructor(props:IFEAProps){
        super(props);
        console.log(props, 'FEAProps');
    }
    render() {
        const {routes,location} = this.props;
        const isLogin = localStorage.getItem('token');
        const {pathname} = location;
        const targetRouterConfig = routes.find((v:any) => {
            if (v.path === pathname) {
                return v.path === pathname;
            } else if(v.children) {
                targetRouterConfig(v.children);
            }
        });
        console.log('targetRouterConfig', targetRouterConfig);
        console.log('islogin', isLogin);
        // 路由合法无需登录直接跳转
        if(targetRouterConfig && !targetRouterConfig.auth && !isLogin){
            const { component } = targetRouterConfig;
            if(pathname === '/') {
                return <LayoutProvider  layouts={layouts}><Redirect to='/home' /></LayoutProvider>
            } else {
                return <LayoutProvider  layouts={layouts}><Route exact path={pathname} component={component} /></LayoutProvider>
            }
        }
        if(isLogin) {
            // 如果是登陆状态，想要跳转到登陆注册，重定向到主页
            if(pathname === '/login' || pathname === '/register'){
                return <LayoutProvider  layouts={layouts}><Redirect to='/home' /></LayoutProvider>
            }else{
                // 如果路由合法，就跳转到相应的路由
                if(targetRouterConfig){
                    // console.log(this.props.location, 'frontend-this.props.location');
                    // 此处可做判断引用对应的的layout模版
                    // 此种写法可对Route增加自定义属性
                    // return <LayoutProvider location={this.props.location} layouts={layouts}><Route path={pathname} render={(props) => <targetRouterConfig.component example={example} {...props}/>}/></LayoutProvider>
                    return  <LayoutProvider  layouts={layouts}><Route exact path={pathname} component={component} /></LayoutProvider>
                }else{
                    // 如果路由不合法，重定向到 404 页面
                    return <LayoutProvider  layouts={layouts}><Redirect to='/error' /></LayoutProvider>
                }
            }
        } else {
            // 非登陆状态下，当路由合法时且需要权限校验时，跳转到登陆页面，要求登陆
            if(targetRouterConfig && targetRouterConfig.auth){
                return <Redirect to='/login' />
            }else{
                // 非登陆状态下，路由不合法时，重定向至 404
                return <Redirect to='/error' />
            }
        }
    }
}
export default FrontendAuth;