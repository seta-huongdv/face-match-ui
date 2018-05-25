import React from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles.scss';

export default class TopBarContainer extends React.Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
      return (
          <div className={styles.topBarContainer}>
              <div className={styles.topBarContainerInner}>
                  <Button variant="raised" color="primary">New Case</Button>
              </div>
          </div>
      );
  }
}

