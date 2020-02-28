import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import { Slot } from 'react-page-layout';
import HeadMenu from '../headMenu/headMenu';

class PublicLayout extends React.Component{
    render(){
        return (
            <Layout style={{ minHeight: '100vh',width: '100vw' }}>
                <Header>
                    <HeadMenu />
                </Header>
                <Content>
                    <Slot name="main" />
                </Content>
                <Footer>Footer</Footer>
            </Layout>
        )
    }
}
export default PublicLayout;