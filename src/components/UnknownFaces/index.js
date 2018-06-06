import React from 'react';
import { range } from 'lodash';
import Button from '@material-ui/core/Button';
import styles from './styles.scss';

export default class ProcessedContent extends React.Component {
  render() {
    return (
      <div className={styles.px40}>
        <h2>Unknown Faces Detected</h2>
        <p>View all other people in this video who have been detected but do not match a known offender. To add an uknown person to the Person of interest database, hover over the thumbnail and select add.</p>
        <div className={styles.row}>
          {range(30).map(i => (
            <div className={styles.item}  key={i}>
              <div className={styles.image}>
                <img src="http://www.stylishandtrendy.com/wp-content/uploads/2012/08/Men-Hairstylef-for-Oval-face-2-120x120.jpg" alt=""/>
                <Button href="#" className={styles.link}>Add</Button>
                <div className={styles.overlay}></div>
              </div>
              <h4>Unknown</h4>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
