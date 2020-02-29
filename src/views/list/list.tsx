import React from 'react';
import { Page, Section } from 'react-page-layout';
import ListModel from './listModel';
class ListPage extends React.Component{
    render() {
        return(
            <Page layout="public">
                <Section slot="main">
                    <h1 className="aaaa">list页面</h1>
                </Section>
            </Page>
        )
    }
}
export default ListPage;