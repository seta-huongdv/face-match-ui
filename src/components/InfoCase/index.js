import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import styles from './styles.scss';

export default class InfoCase extends React.Component{
  render(){
      return(
          <div>
                <Grid container spacing={24}>
                      <Grid item sm={3}>
                          <Typography component="div" className={styles.infoCaseItem}>
                              <Typography component="p" className={styles.infoCaseLabel}>Case Id Number: </Typography>
                              <Typography component="span" className={styles.infoCaseContent}>87638127638</Typography>
                          </Typography>
                      </Grid>
                      <Grid item sm={3}>
                          <Typography component="div" className={styles.infoCaseItem}>
                              <Typography component="p" className={styles.infoCaseLabel}>Date Created: </Typography>
                              <Typography component="span" className={styles.infoCaseContent}>11/01/2017</Typography>
                          </Typography>
                      </Grid>
                      <Grid item sm={3}>
                          <Typography component="div" className={styles.infoCaseItem}>
                              <Typography component="p" className={styles.infoCaseLabel}>Lead Agency/ Department: </Typography>
                              <Typography component="span" className={styles.infoCaseContent}>Los Angeles Country Sheriff's Department</Typography>
                          </Typography>
                      </Grid>
                      <Grid item sm={3}>
                          <Typography component="div" className={styles.infoCaseItem}>
                              <Typography component="p" className={styles.infoCaseLabel}>Officer</Typography>
                              <Typography component="span" className={styles.infoCaseContent}>J.Williams</Typography>
                          </Typography>
                      </Grid>
                </Grid>
          </div>
        )
    }
}
