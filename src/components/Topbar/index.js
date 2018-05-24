import React from 'react';
import { TopBar as LibTopBar } from 'veritone-react-common';
import styles from './styles.scss';

const TopBar = props => <LibTopBar className={styles.topBar} appBarOffset {...props} />;

export default TopBar;
