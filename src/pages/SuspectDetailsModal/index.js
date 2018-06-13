import React from 'react';
import { range } from 'lodash';
import { string, shape, func } from 'prop-types';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import ArrowBack from '@material-ui/icons/ArrowBack';
import Grid from '@material-ui/core/Grid';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import AppContainer from 'components/AppContainer';
import styles from './styles.scss';

function Transition(props) {
    return <Slide direction="down" {...props} />;
}
function TabContainer(props) {
  return (
    <Typography component="div">
      {props.children}
    </Typography>
  );
}

TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};

@connect(null, (dispatch, ownProps) => ({
    // navigate to the page this modal has "opened over"
    onClose: () => dispatch({ type: ownProps.currentRoute.modalOver })
}))
export default class SuspectDetailsModal extends React.Component {
    static propTypes = {
        // eslint-disable-next-line
        currentRoute: shape({
            modalOver: string.isRequired
        }).isRequired,
        onClose: func.isRequired
    };

    state = {
        currentTab: 0,
        value: 0
    };

    handleChangeTab = (event, value) => {
      this.setState({ value });
    };

    render() {
      const { value } = this.state;
        return (
            <Dialog
                fullScreen
                open
                onClose={this.handleClose}
                TransitionComponent={Transition}
            >
                <AppBar
                    position="fixed"
                    classes={{
                        root: styles.appBar
                    }}
                    color="primary"
                >
                    <Toolbar
                        classes={{
                            root: styles.upperToolBar
                        }}
                    >
                        <IconButton color="inherit">
                          <ArrowBack />
                        </IconButton>
                        <Typography
                            variant="subheading"
                            color="inherit"
                            className={styles.title}
                        >
                            Processed Details: 12345.MOV
                        </Typography>

                    </Toolbar>
                </AppBar>
                <AppContainer>
                    <div className={styles.appContainerSuspect}>
                        <Grid container spacing={24}>
                            <Grid item  sm={5}>
                                <div className={styles.suspectItemImage}>
                                    <Grid container spacing={24}>
                                        <Grid item sm={6}>
                                          <img src="../../img/victim1.png" alt="" className={styles.imgResponsive}/>
                                          <p>Source: 21372163.MOV</p>
                                        </Grid>
                                        <Grid item sm={6}>
                                          <img src="../../img/victim2.png" alt="" className={styles.imgResponsive}/>
                                          <p>Database Match <span className={styles.match}>98%</span></p>
                                        </Grid>
                                    </Grid>
                                </div>
                            </Grid>
                            <Grid item  sm={7}>
                                <Grid container spacing={24}>
                                    <Grid item sm={4}>
                                        <div className={styles.suspectItem}>
                                            <h3>Booking ID</h3>
                                            <span>LACS-237816-382176</span>
                                        </div>
                                    </Grid>
                                    <Grid item sm={4}>
                                        <div className={styles.suspectItem}>
                                            <h3>Last Name</h3>
                                            <span>LACS-237816-382176</span>
                                        </div>
                                    </Grid>
                                    <Grid item sm={4}>
                                        <div className={styles.suspectItem}>
                                            <h3>Gender</h3>
                                            <span>Male</span>
                                        </div>
                                    </Grid>
                                    <Grid item sm={4}>
                                        <div className={styles.suspectItem}>
                                            <h3>Booking Date</h3>
                                            <span>11/01/2017</span>
                                        </div>
                                    </Grid>
                                    <Grid item sm={4}>
                                        <div className={styles.suspectItem}>
                                            <h3>First Name</h3>
                                            <span>James</span>
                                        </div>
                                    </Grid>
                                    <Grid item sm={4}>
                                        <div className={styles.suspectItem}>
                                            <h3>Race</h3>
                                            <span>--</span>
                                        </div>
                                    </Grid>
                                    <Grid item sm={4}>
                                        <div className={styles.suspectItem}>
                                            <h3>Suspect ID</h3>
                                            <span>--</span>
                                        </div>
                                    </Grid>
                                    <Grid item sm={4}>
                                        <div className={styles.suspectItem}>
                                            <h3>Middle</h3>
                                            <span>n/a</span>
                                        </div>
                                    </Grid>
                                    <Grid item sm={4}>
                                        <div className={styles.suspectItem}>
                                            <h3>Age</h3>
                                            <span>47</span>
                                        </div>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Tabs
                          value={value}
                          onChange={this.handleChangeTab}
                          indicatorColor="primary"
                          textColor="primary"
                          className={styles.suspectTabs}
                        >
                            <Tab label="Additional Images" className={styles.suspectTab} />
                        </Tabs>
                        {value === 0 && <TabContainer>
                            <div className={styles.additionalRow}>
                                <div className={styles.additionalCol}>
                                    <div className={styles.additionalItem}>

                                    </div>
                                </div>
                                <div className={styles.additionalCol}>
                                    <div className={styles.additionalItem}>

                                    </div>
                                </div>
                            </div>

                        </TabContainer>}
                    </div>
                </AppContainer>
            </Dialog>
        );
    }
}
