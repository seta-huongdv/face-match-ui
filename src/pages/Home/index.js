import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import Link from 'redux-first-router-link';

import { ROUTE_EXAMPLE_TABS } from 'state/modules/routing';
import AppContainer from 'components/AppContainer';
import AppBar from 'components/AppBar';
import TopBarContainer from 'components/TopBarContainer';
import SideBar from 'components/SideBar';//MediaProcessTabs
import MediaProcessTabs from 'components/MediaProcessTabs';//MediaProcessTabs
import ContentContainer from 'components/ContentContainer';

export default class Home extends React.Component {
  static propTypes = {};

  render() {
    return (
      <Fragment>
        <AppBar />
        <AppContainer>
          <TopBarContainer/>
          <SideBar />
          <ContentContainer sideBarOffset>
            <Grid container>
              <Grid item xs={12}>
                <MediaProcessTabs>{'home content test1234'.repeat(200)}</MediaProcessTabs>
              </Grid>
            </Grid>
          </ContentContainer>
        </AppContainer>
      </Fragment>
    );
  }
}
