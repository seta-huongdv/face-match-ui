import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import styles from './styles.scss'
import MediaCard from "../MediaCard";
function TabContainer(props) {
    return (
        <Typography component="div" style={{ padding: 8 * 3 }}>
            {props.children}
        </Typography>
    );
}

TabContainer.propTypes = {
    children: PropTypes.node.isRequired,
};

class MediaProcessTabs extends React.Component {
    state = {
        value: 0,
    };

    handleChange = (event, value) => {
        this.setState({ value });
    };

    render() {
        const { value } = this.state;

        return (
            <div className={styles.root}>
                <Grid container>
                    <Grid item xs={12}>
                        <AppBar position="static" color="default">
                            <Tabs value={value}
                                  className={styles.tabNav}
                                  indicatorColor="primary"
                                  onChange={this.handleChange}>
                                <Tab label="Media" className={styles.tabItem}/>
                                <Tab label="Processed" className={styles.tabItem}/>
                                <Tab label="Suspects" className={styles.tabItem}/>
                                <Tab label="Notes" className={styles.tabItem}/>
                            </Tabs>
                        </AppBar>
                    { value === 0 &&
                        <TabContainer>
                            <Grid container spacing={24}>
                                <Grid item xs={6} sm={3}>
                                    <MediaCard/>
                                </Grid>
                              <Grid item xs={6} sm={3}>
                                <MediaCard/>
                              </Grid>
                              <Grid item xs={6} sm={3}>
                                <MediaCard/>
                              </Grid>
                            </Grid>
                        </TabContainer>
                      }
                      {value === 1 && <TabContainer>Tab 2</TabContainer>}
                      {value === 2 && <TabContainer>Item Three</TabContainer>}
                      {value === 3 && <TabContainer>Item Three</TabContainer>}
                    </Grid>
                </Grid>

            </div>
        );
    }
}

MediaProcessTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaProcessTabs);
