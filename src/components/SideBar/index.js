import React from 'react';
// import {} from 'lodash';
import { appBarHeight, topBarHeight } from 'veritone-react-common';
import styles from './styles.scss';
import NestedList from '../NestedList';
// import { PropTypes } from 'helpers/react';
// const {} = PropTypes;

export default class SideBar extends React.Component {
  static propTypes = {};
  static defaultProps = {};

  render() {
      return (
          <aside className={styles.container} style={{ top: appBarHeight + topBarHeight + 19 }} >
              <NestedList />
          </aside>
      );
    }
}
