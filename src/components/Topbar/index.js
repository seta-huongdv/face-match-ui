import React from 'react';
import Button from '@material-ui/core/Button';
import { appBarHeight } from '../AppBar';
import styles from './styles.scss';
import {TopBar as LibTopBar} from 'veritone-react-common';
import IconButton from '@material-ui/core/IconButton';
import Divider from '@material-ui/core/Divider';
import InfoIcon from '@material-ui/icons/Info';
import Paper from '@material-ui/core/Paper';
import Drawer from '@material-ui/core/Drawer';

import {
  string,
  bool,
  func,
  arrayOf,
  element,
  number,
  shape
} from 'prop-types';

export default class TopBar extends React.Component {
  state ={
    right: false,
  }
  static propTypes = {
    appBarOffset: bool,
    leftOffset: number,
    leftText: string
  };
  static defaultProps = {
    leftOffset: 0
  };
  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };
  render() {
      return (
          <React.Fragment>
              <div className={styles.topBarContainer}>
                  <div className={styles.topBarContainerInner}>
                      <Button variant="raised" color="primary">New Case</Button>
                  </div>
              </div>
              <Paper
                  style={{
                    top: 60,
                    height: 59,
                    background: '#fafafa'
                  }}
                  className={styles.topBar}
                >
                <div className={styles.rightContainer}>
                    <span>
                      {/*{this.props.leftText}*/} Title Case
                    </span>
                    <IconButton onClick={this.toggleDrawer('right', true)} >
                      <InfoIcon></InfoIcon>
                    </IconButton>
                    <Drawer anchor="right" open={this.state.right} onClose={this.toggleDrawer('right', false)}>
                      <div
                        tabIndex={0}
                        role="button"
                        onClick={this.toggleDrawer('right', false)}
                        onKeyDown={this.toggleDrawer('right', false)}
                      >
                      </div>
                      <div className={styles.caseInfoHeader}>
                        <h2>Case Information</h2>
                      </div>
                      <div className={styles.caseInfoContent}>
                        <div className={styles.caseInfoHeading}>
                          <img src="../../img/star.png" alt="" className={styles.caseInfoImage}/>
                          <p>Los Angeles County Sheriff’s Department</p>
                          <p>450 Bauchet St. Los Angeles, CA 90012</p>
                        </div>
                        <div className={styles.caseInfoItem}>
                          <div className={styles.formGroup}>
                            <label>Case Name</label>
                            <p>Newport Island Theft </p>
                          </div>
                          <div className={styles.formGroup}>
                            <label>Case ID</label>
                            <p>0899865434222</p>
                          </div>
                          <div className={styles.formGroup}>
                            <label>Officer(s)</label>
                            <p>0899865434222</p>
                          </div>
                          <div className={styles.formGroupOther}>
                            <label>Description</label>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum in posuere augue. Maecenas molestie vestibulum dolor, eget mattis quam auctor ut. Aenean laoreet risus ex, at lacinia ante mattis accumsan.</p>
                          </div>

                        </div>
                        <div className={styles.caseInfoItem}>
                          <div className={styles.formGroup}>
                            <label>Status</label>
                            <p>Active</p>
                          </div>
                          <div className={styles.formGroup}>
                            <label>Created</label>
                            <p>Th Jan 28, 2016 12:15:00 PM
                              Cpt. Larry Wiesen</p>
                          </div>
                          <div className={styles.formGroup}>
                            <label>Last Modified</label>
                            <p>Th Jan 28, 2016 12:15:00 PM
                              Cpt. Larry Wiesen</p>
                          </div>
                        </div>
                      </div>


                    </Drawer>


                </div>
              </Paper>

          </React.Fragment>
      );
  }
}

