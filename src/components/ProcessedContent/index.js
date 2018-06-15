import React from 'react';
import Button from '@material-ui/core/Button';
import IconCheck from '@material-ui/icons/Check';
import styles from './styles.scss';

export default class ProcessedContent extends React.Component {
  render() {
    return (
      <div className={styles.processedContent}>
        <h2>Potenial Matches</h2>
        <p>When you find a potenial match, select the "Add as Suspect" link to add them to your suspect list in your case folder.</p>
        <div className={styles.media}>
            <div className={styles.mediaImage}>
              <img src="https://www.raconteur.net/wp-content/uploads/2017/11/Colin-Elkins.jpg" alt="Generic placeholder image" width="120"/>
              <span className={styles.badge}><IconCheck /></span>
            </div>
            <div className={styles.mediaBody}>
              <h5>Media heading</h5>
              <div className={styles.certainly}>Certainly: <span className={styles.certainlyHigh}>98%</span></div>
              <p className={styles.foundIn}><span>Found in:</span> Known offender database, Sex offender database</p>
            </div>
            <div className={styles.mediaAction}>
              <Button variant="raised" color="default" className={styles.buttonViewDetail}>View Details</Button>
              <Button variant="raised" color="default" className={styles.buttonRemoveSuspect}>Remove Suspect</Button>
            </div>
        </div>
        <div className={styles.media}>
          <div className={styles.mediaImage}>
            <img src="https://www.raconteur.net/wp-content/uploads/2017/11/Colin-Elkins.jpg" alt="Generic placeholder image" width="120"/>
          </div>
          <div className={styles.mediaBody}>
            <h5>Media heading</h5>
            <div className={styles.certainly}>Certainly: <span className={styles.certainlyMedium}>98%</span></div>
            <p className={styles.foundIn}><span>Found in:</span> Known offender database, Sex offender database</p>
          </div>
          <div className={styles.mediaAction}>
            <Button variant="raised" color="default" className={styles.buttonViewDetail}>View Details</Button>
            <Button variant="raised" color="default" className={styles.buttonRemoveSuspect}>Remove Suspect</Button>
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.mediaImage}>
            <img src="https://www.raconteur.net/wp-content/uploads/2017/11/Colin-Elkins.jpg" alt="Generic placeholder image" width="120"/>
          </div>
          <div className={styles.mediaBody}>
            <h5>Media heading</h5>
            <div className={styles.certainly}>Certainly: <span className={styles.certainlyLow}>98%</span></div>
            <p className={styles.foundIn}><span>Found in:</span> Known offender database, Sex offender database</p>
          </div>
          <div className={styles.mediaAction}>
            <Button variant="raised" color="default" className={styles.buttonViewDetail}>View Details</Button>
            <Button variant="raised" color="default" className={styles.buttonRemoveSuspect}>Remove Suspect</Button>
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.mediaImage}>
            <img src="https://www.raconteur.net/wp-content/uploads/2017/11/Colin-Elkins.jpg" alt="Generic placeholder image" width="120"/>
          </div>
          <div className={styles.mediaBody}>
            <h5>Media heading</h5>
            <div className={styles.certainly}>Certainly: <span className={styles.certainlyHigh}>98%</span></div>
            <p className={styles.foundIn}><span>Found in:</span> Known offender database, Sex offender database</p>
          </div>
          <div className={styles.mediaAction}>
            <Button variant="raised" color="default" className={styles.buttonViewDetail}>View Details</Button>
            <Button variant="raised" color="default" className={styles.buttonRemoveSuspect}>Remove Suspect</Button>
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.mediaImage}>
            <img src="https://www.raconteur.net/wp-content/uploads/2017/11/Colin-Elkins.jpg" alt="Generic placeholder image" width="120"/>
          </div>
          <div className={styles.mediaBody}>
            <h5>Media heading</h5>
            <div className={styles.certainly}>Certainly: <span className={styles.certainlyMedium}>98%</span></div>
            <p className={styles.foundIn}><span>Found in:</span> Known offender database, Sex offender database</p>
          </div>
          <div className={styles.mediaAction}>
            <Button variant="raised" color="default" className={styles.buttonViewDetail}>View Details</Button>
            <Button variant="raised" color="default" className={styles.buttonRemoveSuspect}>Remove Suspect</Button>
          </div>
        </div>
        <div className={styles.media}>
          <div className={styles.mediaImage}>
            <img src="https://www.raconteur.net/wp-content/uploads/2017/11/Colin-Elkins.jpg" alt="Generic placeholder image" width="120"/>
          </div>
          <div className={styles.mediaBody}>
            <h5>Media heading</h5>
            <div className={styles.certainly}>Certainly: <span className={styles.certainlyLow}>98%</span></div>
            <p className={styles.foundIn}><span>Found in:</span> Known offender database, Sex offender database</p>
          </div>
          <div className={styles.mediaAction}>
            <Button variant="raised" color="default" className={styles.buttonViewDetail}>View Details</Button>
            <Button variant="raised" color="default" className={styles.buttonRemoveSuspect}>Remove Suspect</Button>
          </div>
        </div>
      </div>
    );
  }
}
