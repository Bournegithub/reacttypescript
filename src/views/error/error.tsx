import React from 'react';
import ErrorModel from './errorModel';
import { Page, Section } from 'react-page-layout';
class ErrorPage extends React.Component{
    render() {
        return(
            <Page layout="public">
                <Section slot="main">
                    <h1 className="aaaa">error页面</h1>
                </Section>
            </Page>
        )
    }
}
export default ErrorPage;