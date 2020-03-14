import React from 'react';
import { Layout } from 'antd';
import HeadMenu from '../headMenu/headMenu';
import { Slot } from 'react-page-layout';
import HeadCustomer from '../headCustomer/headCustomer';
import '../../css/head.scss';
const { Header, Footer, Content } = Layout;

interface IProps {
    sendProps: any,
    children: any,
}
class PublicLayout extends React.Component<IProps>{
    constructor(props: any){
        super(props);
        console.log('PublicLayout-props', props);
    }

    render(){
        return (
            <Layout style={{ minHeight: '100vh',width: '100vw' }}>
                <Header>
                    <div className="head-inner">
                        <HeadMenu sendProps={this.props.sendProps} />
                        <HeadCustomer />
                    </div>
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