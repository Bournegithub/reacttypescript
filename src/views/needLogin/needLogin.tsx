import React from 'react';
import { Page, Section } from 'react-page-layout';
import NeedLoginModel from './needLoginModel';
class NeedLoginPage extends React.Component{
    render() {
        return(
            <Page layout="public">
                <Section slot="main">
                    <h1 className="aaaa">无需登录页面</h1>
                </Section>
            </Page>
        )
    }
}
export default NeedLoginPage;