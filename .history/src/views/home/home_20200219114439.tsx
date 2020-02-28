import React from 'react';
import HomeModel from './homeModel';
import menus from '../../routes/menus';
import { Page, Section } from 'react-page-layout';
class HomePage extends React.Component{
    render() {
        return(
            <Page layout="public">
                <Section slot="main">
                    <h1 className="aaaa">home页面</h1>
                </Section>
            </Page>
        )
    }
}
export default HomePage;