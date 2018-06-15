import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import MediaCard from "../MediaCard";
import NotesList from "../NotesList";
import ProcessedList from "../ProcessedList";
import SuspectsList from "../SuspectsList";


import ChatIcon from '@material-ui/icons/Chat';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import styles from './styles.scss'

function TabContainer(props) {
    return (
        <Typography component="div" style={{ paddingTop: 8 * 3 }}>
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
                <AppBar position="static" color="default" className={styles.appBar}>
                    <div className={styles.tabBarWrap}>
                        <Tabs value={value}
                              className={styles.tabNav}
                              indicatorColor="primary"
                              onChange={this.handleChange}>
                          <Tab label="Media" className={styles.tabItem}/>
                          <Tab label="Processed" className={styles.tabItem}/>
                          <Tab label="Suspects" className={styles.tabItem}/>
                          <Tab label="Notes" className={styles.tabItem}/>
                        </Tabs>
                        <div className={styles.tabBarIconWrap}>
                            <div className={styles.tabBarIcon}>
                              <ChatIcon />
                            </div>
                            <div className={styles.tabBarIcon}>
                              <img src="../../img/iconUpload.png" alt=""/>
                            </div>
                            <div className={styles.tabBarSelect}>
                                <FormControl>
                                    <InputLabel htmlFor="age-simple">Sort By All Media</InputLabel>
                                    <Select>
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </div>
                        </div>
                    </div>
                </AppBar>
                { value === 0 &&
                    <TabContainer>
                        <Grid container spacing={24}>
                            <Grid item xs={6} md={4} lg={3} >
                                <MediaCard/>
                            </Grid>
                            <Grid item xs={6} md={4} lg={3}>
                                <MediaCard/>
                            </Grid>
                            <Grid item xs={6} md={4} lg={3}>
                                <MediaCard/>
                            </Grid>
                        </Grid>
                    </TabContainer>
                }
                {value === 1 && <TabContainer>
                  <Grid container spacing={24}>
                    <Grid item  xs={6} md={4} lg={3}>
                      <ProcessedList />
                    </Grid>
                    <Grid item  xs={6} md={4} lg={3}>
                      <ProcessedList />
                    </Grid>
                    <Grid item  xs={6} md={4} lg={3}>
                      <ProcessedList />
                    </Grid>
                  </Grid>

                </TabContainer>}
                {value === 2 && <TabContainer>
                  <Grid container spacing={24}>
                    <Grid item xs={6} md={4} lg={3}>
                      <SuspectsList />
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                      <SuspectsList />
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                      <SuspectsList />
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                      <SuspectsList />
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                      <SuspectsList />
                    </Grid>
                    <Grid item xs={6} md={4} lg={3}>
                      <SuspectsList />
                    </Grid>
                  </Grid>
                </TabContainer>}
                {value === 3 && <TabContainer>
                    <NotesList></NotesList>
                </TabContainer>}

            </div>
        );
    }
}

MediaProcessTabs.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(MediaProcessTabs);
