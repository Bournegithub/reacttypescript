import React from 'react';
import HeadMenuModel from './headMenuModel';
import menus from '../../routes/menus';
import { Link } from 'react-router-dom';
import { Menu, Icon } from 'antd';

interface Imenus {
    path: string,
    name: string,
    icon: string,
}
class HeadMenu extends React.Component{
    state = {
        current: 'home',
    }

    renderMenu = (menus: Array<Imenus>) => {
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