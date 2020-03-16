import React from 'react';
import { Page, Section } from 'react-page-layout';

class AboutPage extends React.Component<any>{
    constructor(props: any){
        super(props);
        console.log('about-props', props);
    }
    render() {
        return(
            <Page layout="public" sendProps={this.props}>
                <Section slot="main">
                    <h1 className="aaaa">about页面 test gfw</h1>
                </Section>
            </Page>
        )
    }
}
export default AboutPage;