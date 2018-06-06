import React, {Fragment} from 'react';
import { range } from 'lodash';
import { string, shape, func } from 'prop-types';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';
import Slide from '@material-ui/core/Slide';
import RefreshIcon from '@material-ui/icons/Refresh';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

import AppContainer from 'components/AppContainer';
import ContentContainer from 'components/ContentContainer';
import ProcessedSidebar from '../../components/ProcessedSidebar';
import ProcessedContent from '../../components/ProcessedContent';
import UnknownFaces from '../../components/UnknownFaces';
import styles from './styles.scss';
import PropTypes from "prop-types";
import ProcessedList from "../../components/ProcessedList";

function TabContainer(props) {
  return (
    <Typography component="div" style={{ paddingTop: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

function Transition(props) {
  return <Slide direction="down" {...props} />;
}

@connect(null, (dispatch, ownProps) => ({
  // navigate to the page this modal has "opened over"
  onClose: () => dispatch({ type: ownProps.currentRoute.modalOver })
}))
export default class ExampleTakeoverModal extends React.Component {
  static propTypes = {
    // eslint-disable-next-line
    currentRoute: shape({
      modalOver: string.isRequired
    }).isRequired,
    onClose: func.isRequired
  };

  state = {
    value: 0,
  };

  handleChangeTab = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;
    return (
      <Dialog
        fullScreen
        open
        onClose={this.handleClose}
        TransitionComponent={Transition}
      >
        <AppBar
          position="fixed"
          classes={{
            root: styles.appBar
          }}
          color="primary"
        >
          <Toolbar
            classes={{
              root: styles.upperToolBar
            }}
          >
            <Typography
              variant="subheading"
              color="inherit"
              className={styles.title}
            >
              Processed Details: 12345.MOV
            </Typography>
            <IconButton color="inherit">
              <RefreshIcon />
            </IconButton>
            <IconButton color="inherit" onClick={this.props.onClose}>
              <CloseIcon />
            </IconButton>
          </Toolbar>

          <Toolbar
            classes={{
              root: styles.lowerToolBar
            }}
          >
            <Tabs indicatorColor="secondary"  value={value}  /*value={this.state.currentTab}*/ onChange={this.handleChangeTab} >
              <Tab label="Matched Faces" />
              <Tab label="Unknown Faces" />
            </Tabs>
          </Toolbar>
        </AppBar>
        { value === 0 &&
          <TabContainer>
            <Fragment>
              <div className={styles.processedWrapper}>
                <ProcessedSidebar />
                <ProcessedContent />
              </div>
            </Fragment>

          </TabContainer>
        }
        {value === 1 &&
          <TabContainer>
            <TabContainer>
              <div className={styles.processedWrapper}>
                  <UnknownFaces />
              </div>
            </TabContainer>

          </TabContainer>
        }

      </Dialog>
    );
  }
}
