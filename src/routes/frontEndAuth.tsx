import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { RouteComponentProps } from "react-router";
import HeadMenu from '../compoents/headMenu/headMenu';
import { LayoutProvider} from 'react-page-layout';
import PublicLayout from '../compoents/publicLayout/publicLayout';
import {getStorage} from "../utils/storageUtils";

const layouts = {
    'public': PublicLayout,
};
interface IProps{
    routes: any,
    location?: any,
}
interface IState {
    isLogin: boolean
}

class FrontendAuth extends React.Component<IProps, IState>{
    constructor(props:IProps){
        super(props);
        this.state = {
            isLogin: localStorage.getItem('token')? true: false,
        }
    }
    render() {
        const {routes,location} = this.props;
        console.log('front-props', this.props);
        const {pathname} = location;
        const targetRouterConfig = routes.find((v:any) => {
            if (v.path === pathname) {
                return v.path === pathname;
            } else if(v.children) {
                targetRouterConfig(v.children);
            }
        });
        // console.log('targetRouterConfig', targetRouterConfig);
        // 路由合法无需登录直接跳转
        if(targetRouterConfig && !targetRouterConfig.auth && !this.state.isLogin){
            const { component } = targetRouterConfig;
            if(pathname === '/') {
                return <Redirect to='/home' />
            } else {
                return <LayoutProvider layouts={layouts} ><Route exact path={pathname} component={component} loginStatus={this.state.isLogin}  /></LayoutProvider>
            }
        }
        if(this.state.isLogin) {
            // 如果是登陆状态，想要跳转到登陆注册，重定向到主页
            if(pathname === '/login' || pathname === '/register'){
                return <Redirect to='/home' />
            }else{
                // 如果路由合法，就跳转到相应的路由
                if(targetRouterConfig){
                    // 此处可做判断引用对应的的layout模版
                    return <LayoutProvider layouts={layouts} ><Route path={pathname} component={targetRouterConfig.component} loginStatus={this.state.isLogin} /></LayoutProvider>
                }else{
                    // 如果路由不合法，重定向到 404 页面
                    return <Redirect to='/error' />
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