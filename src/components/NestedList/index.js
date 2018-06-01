import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import PersonIcon from '@material-ui/icons/Person';
import FolderIcon from '@material-ui/icons/Folder';


import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import styles from './styles.scss'

/*const styles = theme => ({
    root: {
        width: '100%',
        maxWidth: 360,
        backgroundColor: theme.palette.background.paper,
    },
    nested: {
        paddingLeft: theme.spacing.unit * 4,
    },
});*/

class NestedList extends React.Component {
    static propTypes = {};
    static defaultProps = {};

    state = {
      open: false,
      anchorEl: null
    };
    handClickMoreMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
    handleMoreMenuClose = () => {
      this.setState({ anchorEl: null });
    };
    handleClick = () => {
        this.setState({ open: !this.state.open });
    };
  render() {
    const { anchorEl } = this.state;
        return (
            <div className={styles.root}>
                <List component="nav" className={styles.sideBarNav}>
                    <ListItem button className={styles.nestedItem}>
                        <ExpandMore />
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText className={styles.nestedText}  inset primary="Active Case" />
                    </ListItem>
                    <Divider />


                    <ListItem button className={styles.nestedItem}>
                        <ExpandMore />
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText className={styles.nestedText} inset primary="Closed Case" />
                    </ListItem>
                    <Divider />


                    <ListItem button onClick={this.handleClick} className={ this.state.open ? styles.nestedItem + ' ' + "active" : styles.nestedItem}>
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText className={styles.nestedText} inset primary="Archived Case" />
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" className={styles.nestedItemChildWrap}>
                            <ListItem button  className={styles.nestedItemChild}>
                                <ListItemIcon  className={styles.nestedIconChild}>
                                    <FolderIcon/>
                                </ListItemIcon>
                                <ListItemText className={styles.nestedText} inset  primary="Starred" />
                                <IconButton className={styles.nestedIconMore} onClick={this.handClickMoreMenu}><MoreVertIcon /></IconButton>
                              <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={this.handleMoreMenuClose}
                              >
                                <MenuItem onClick={this.handleMoreMenuClose}>Profile</MenuItem>
                                <MenuItem onClick={this.handleMoreMenuClose}>My account</MenuItem>
                                <MenuItem onClick={this.handleMoreMenuClose}>Logout</MenuItem>
                              </Menu>
                            </ListItem>
                        </List>
                    </Collapse>
                </List>
            </div>
        );
    }
}

NestedList.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NestedList);
