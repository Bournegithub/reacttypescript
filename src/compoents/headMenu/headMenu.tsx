import React from 'react';
import HeadMenuModel from './headMenuModel';
import menus from '../../routes/menus';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

interface IMenus {
    path: string,
    name: string,
    icon: string,
}
interface IState {
    current: string
}
class HeadMenu extends React.Component<any,IState>{
    constructor(props:any){
        super(props);
        console.log('headmenu-props', props);

        this.state = {
            current: this.props.sendProps.location.pathname || 'home',
        }
        // console.log('headcustomer-state', this.state);
    }


    renderMenu = (menus: Array<IMenus>) => {
        return menus.map((item, index) => {
            return <Menu.Item title={item.name} key={item.path}><Link to={item.path}><Icon type={item.icon}></Icon><span>{item.name}</span></Link></Menu.Item>
        })
    }

    render() {
        return(
            <div className="headmenu">
                <Menu theme="dark" defaultSelectedKeys={[this.state.current]} mode="horizontal">
                    {this.renderMenu(menus)}
                </Menu>
            </div>
        )
    }
}
export default HeadMenu;