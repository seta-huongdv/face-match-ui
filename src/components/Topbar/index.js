import React from 'react';
import Button from '@material-ui/core/Button';
import { appBarHeight } from '../AppBar';
import styles from './styles.scss';
import {TopBar as LibTopBar} from 'veritone-react-common';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Paper from '@material-ui/core/Paper';

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
  static propTypes = {
    appBarOffset: bool,
    leftOffset: number,
    leftText: string
  };
  static defaultProps = {
    leftOffset: 0
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
                    height: 60,
                    background: '#fafafa'
                  }}
                  className={styles.topBar}
                >
                <div className={styles.rightContainer}>
                    <span>
                      {/*{this.props.leftText}*/} Title Case
                    </span>
                </div>
              </Paper>

          </React.Fragment>
      );
  }
}

