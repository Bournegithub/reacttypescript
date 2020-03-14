import React from 'react';
import { Page, Section } from 'react-page-layout';
class HomePage extends React.Component<any>{
    constructor(props:any){
        super(props);
        console.log(props, 'home-props');
    }
    render() {
        return(
            <Page layout="public" sendProps={this.props}>
                <Section slot="main">
                    <h1 className="aaaa">home页面</h1>
                </Section>
            </Page>
        )
    }
}
export default HomePage;