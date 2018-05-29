import React from 'react';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import styles from './styles.scss';

export default class InfoCase extends React.Component{
  render(){
      return(
          <div className={styles.infoCaseWrap}>
              <Typography component="div" className={styles.infoCaseItem}>
                <img src="../../img/star.png" alt=""/>
              </Typography>
              <Typography component="div" className={styles.infoCaseItem}>
                  <Typography component="p" className={styles.infoCaseLabel}>Case Id Number: </Typography>
                  <Typography component="span" className={styles.infoCaseContent}>87638127638</Typography>
              </Typography>
              <Typography component="div" className={styles.infoCaseItem}>
                  <Typography component="p" className={styles.infoCaseLabel}>Date Created: </Typography>
                  <Typography component="span" className={styles.infoCaseContent}>11/01/2017</Typography>
              </Typography>
              <Typography component="div" className={styles.infoCaseItem}>
                  <Typography component="p" className={styles.infoCaseLabel}>Lead Agency/ Department: </Typography>
                  <Typography component="span" className={styles.infoCaseContent}>Los Angeles Country Sheriff's Department</Typography>
              </Typography>
              <Typography component="div" className={styles.infoCaseItem}>
                  <Typography component="p" className={styles.infoCaseLabel}>Officer</Typography>
                  <Typography component="span" className={styles.infoCaseContent}>J.Williams</Typography>
              </Typography>
              <Typography component="div" className={styles.infoCaseItem}>
                  <IconButton className={styles.cardHeaderBtn}>
                      <MoreVertIcon/>
                  </IconButton>
              </Typography>
          </div>
        )
    }
}
