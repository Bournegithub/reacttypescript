import React from 'react';
import { Page, Section } from 'react-page-layout';
class AboutPage extends React.Component{
    render() {
        return(
            <Page layout="public">
                <Section slot="main">
                    <h1 className="aaaa">about页面</h1>
                </Section>
            </Page>
        )
    }
}
export default AboutPage;