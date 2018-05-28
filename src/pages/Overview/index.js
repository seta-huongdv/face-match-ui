import React, { Fragment } from 'react';

import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Link from 'redux-first-router-link';
import {
    ROUTE_OVERVIEW,
    ROUTE_CASE_DETAILS,
    ROUTE_EXAMPLE_TABS,
    ROUTE_HOME
} from 'modules/routing';
import AppContainer from 'components/AppContainer';
import AppBar from 'components/AppBar';
import TopBar from 'components/TopBar';
import NewCase from 'components/NewCase';


export default class Overview extends React.Component {
  static propTypes = {};
  render() {
      return (
          <Fragment>
              <AppBar />
              <AppContainer>
                  <TopBar/>
                  <NewCase />
              </AppContainer>
          </Fragment>
      );
    }
}
