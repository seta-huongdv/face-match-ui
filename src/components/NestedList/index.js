import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';


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

    state = { open: true };

    handleClick = () => {
        this.setState({ open: !this.state.open });
    };

    render() {
        return (
            <div className={styles.root}>
                <List component="nav" className={styles.sideBarNav}>
                    <ListItem button className={styles.nextedItem}>
                        <ExpandMore />
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText className={styles.nestedText} inset primary="Active Case" />
                    </ListItem>
                    <ListItem button className={styles.nextedItem}>
                        <ExpandMore />
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText className={styles.nestedText} inset primary="Closed Case" />
                    </ListItem>
                    <ListItem button onClick={this.handleClick} className={styles.nextedItem}>
                        {this.state.open ? <ExpandLess /> : <ExpandMore />}
                        <ListItemIcon>
                            <PersonIcon />
                        </ListItemIcon>
                        <ListItemText className={styles.nestedText} inset primary="Archived Case" />
                    </ListItem>
                    <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                        <List component="div" className={styles.nextedItemChildWrap}>
                            <ListItem button  className={styles.nextedItemChild}>
                                <ListItemIcon>
                                    <FolderIcon/>
                                </ListItemIcon>
                                <ListItemText className={styles.nestedText} inset  primary="Starred" />
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
