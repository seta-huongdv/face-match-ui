import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
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
import SideBar from 'components/SideBar';//MediaProcessTabs
import InfoCase from 'components/InfoCase';//MediaProcessTabs
import MediaProcessTabs from 'components/MediaProcessTabs';//MediaProcessTabs
import ContentContainer from 'components/ContentContainer';

export default class CaseDetails extends React.Component {
  static propTypes = {};

  render() {
    return (
      <Fragment>
        <AppBar />
        <AppContainer>
          <TopBar/>
          <ContentContainer>
             <h1>CaseDetails</h1>
              <Link to={{type: ROUTE_HOME}}>Home</Link>
              <Link to={{type: ROUTE_OVERVIEW}}>Overview</Link>
          </ContentContainer>
        </AppContainer>
      </Fragment>
    );
  }
}
