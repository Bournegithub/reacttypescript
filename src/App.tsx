import React from 'react';
import './App.css';
import { HashRouter, Switch } from 'react-router-dom';
import FrontendAuth from './routes/frontEndAuth';
import Routes from './routes/routes';
import {RouteComponentProps} from "react-router";

// const App = () => {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }
//
// export default App;

interface IProps{
    routes?: any,
}
interface IState {
    isLogin: boolean
}

class App extends React.Component<IProps, IState>{
    constructor(props:IProps) {
        super(props);
        console.log('app-props',props);
        this.state = {
            isLogin: false,
        }
    }
    render(){
        return(
            <HashRouter>
                <Switch>
                    <FrontendAuth routes = {Routes} />
                </Switch>
            </HashRouter>
        )
    }
}
export default App;
