import React from 'react';
import HeadCustomerModel from './headCustomerModel';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from "react-router";

interface IState {
    isLogin: boolean
}


class HeadCustomer extends React.Component<any,IState>{
    constructor(props:any){
        super(props);
        // console.log('headcustomer-props', props);

        this.state = {
            isLogin: false,
        }
        // console.log('headcustomer-state', this.state);
    }

    render(){
        return (
            this.state.isLogin ? <div>1</div>: <div>2</div>
            // <div>登录注册</div>

        )
    }
}
export default HeadCustomer;