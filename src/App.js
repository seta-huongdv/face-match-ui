import React, { Component } from 'react';
import { noop } from 'lodash';
import './App.css';
import { AppBar } from 'veritone-react-common';
import { AppContainer, TopBar, NavigationSideBar } from 'veritone-react-common';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import IconButton from 'material-ui/IconButton';
import ErrorOutline from 'material-ui-icons/ErrorOutline';
import AttachMoneyIcon from 'material-ui-icons/Apps';
/*import page*/
import {Details} from './pages/Details';
import {Home} from './pages/Home';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home"
        };
    }

    onNavigateHandle (page) {
        console.log(page);
    };

    render() {
      const testSectionTree = {
          children: {
              overview: {
                  label: 'Overview',
                  iconClassName: 'icon-overview'
              },
              billing: {
                  label: 'Billing Dashboard',
                  icon: <AttachMoneyIcon />
              },
              engines: {
                  label: 'Engines',
                  iconClassName: 'icon-engines'
              }
          }
      };

      const defaultProps = {
          sections: testSectionTree,
          activePath: [],
          onNavigate: this.onNavigateHandle()
      };
        const status = this.props.page
    return (
        <React.Fragment>
            <AppBar
                currentAppName="React Sample App"
                appSwitcher
                profileMenu
                backgroundColor="#2b485c"
            />
            <TopBar
                appBarOffset={true}
                leftOffset={0}
                leftText="New Port Island Theff"
                rightIconButtons={[
                    <IconButton key="1">
                        <ErrorOutline />
                    </IconButton>
                ]}
            />
            <AppContainer
                appBarOffset
                appFooterOffset="short"
                topBarOffset
            >
                <div className="sidebar">
                    <NavigationSideBar {...defaultProps} activePath={['engines']} onNavigate={this.onNavigateHandle} />
                </div>
                {/*{this.props.page == "home" && <Home/>}
                {this.props.page == "details" && <Details/>}*/}
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
