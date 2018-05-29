import React from 'react';
import { node } from 'prop-types';

import styles from './styles.scss';
import {appBarHeight, topBarHeight} from "veritone-react-common";

const ContentContainer = ({ children }) => (
  <div className={styles.content}>{children}</div>
);

ContentContainer.propTypes = {
  children: node
};

export default ContentContainer;
