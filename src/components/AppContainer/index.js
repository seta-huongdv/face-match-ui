import React from 'react';
import { bool } from 'prop-types';
import { AppContainer as LibAppContainer } from 'veritone-react-common';
import styles from './styles.scss';

const AppContainer = ({ ...props }) => (
  <LibAppContainer appBarOffset topBarOffset {...props} />
);
AppContainer.propTypes = {
  sideBarOffset: bool
};
export default AppContainer;
