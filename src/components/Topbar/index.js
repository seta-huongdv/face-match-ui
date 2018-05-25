import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles.scss';
import {TopBar as LibTopBar} from 'veritone-react-common';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';

export default class TopBar extends React.Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
      return (
          <React.Fragment>
              <div className={styles.topBarContainer}>
                  <div className={styles.topBarContainerInner}>
                      <Button variant="raised" color="primary">New Case</Button>
                  </div>
              </div>
              <LibTopBar appBarOffset
                         sideBarOffset
                         leftOffset={240}
                         leftText="Newport Insland Theft"
                         rightIconButtons={[
                             <IconButton key="1">
                                 <InfoIcon/>
                             </IconButton>,
                         ]}
              />
          </React.Fragment>
      );
  }
}

