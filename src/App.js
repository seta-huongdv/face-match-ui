import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { AppBar } from 'veritone-react-common';
import { AppContainer, TopBar } from 'veritone-react-common';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
/*import page*/
import {Details} from './pages/Details';
import {Home} from './pages/Home';

class App extends Component {
  render() {
    return (
        <React.Fragment>
            <AppBar
                currentAppName="React Sample App"
                appSwitcher
                profileMenu
                backgroundColor="#2b485c"
            />
            <TopBar appBarOffset={true}>
            </TopBar>
            <AppContainer
                appBarOffset
                topBarOffset
            >
                <BrowserRouter>
                    <Switch>
                        <Route path='/details' component={Details}/>
                        <Route path='/home' component={Home}/>
                        <Route path='/' component={Home}/>
                    </Switch>
                </BrowserRouter>
            </AppContainer>
        </React.Fragment>
    );
  }
}
export default App;
