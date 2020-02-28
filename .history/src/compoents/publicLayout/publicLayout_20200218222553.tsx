import React from 'react';
import { Layout } from 'antd';
import HeadMenu from '../headMenu/headMenu';
import { Slot } from 'react-page-layout';
const { Header, Footer, Content } = Layout;



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