import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import VideocamIcon from '@material-ui/icons/Videocam';
import styles from './styles.scss';
import Link from 'redux-first-router-link';

import {
    ROUTE_EXAMPLE_TABS,
    ROUTE_EXAMPLE_TAKEOVER
} from 'state/modules/routing';

class ProcessedList extends React.Component{
  state = {
    checked: false,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render(){
    return (
      <div>
        <Card className={styles.card}>
          <Checkbox
            className={styles.mediaCheckbox}
            checked={this.state.checked}
            onChange={this.handleChange('checked')}
            value="checkedB"
            color="primary"
          />
          <CardHeader
            className={styles.cardHeader}
            action={
              <IconButton className={styles.cardHeaderBtn}>
                <MoreVertIcon/>
              </IconButton>
            }
          />
          <CardMedia
            className={styles.media}
            image="https://material-ui.com/static/images/cards/contemplative-reptile.jpg"
            title="Contemplative Reptile"

          >
              <Link to={{ type: ROUTE_EXAMPLE_TAKEOVER }}>
                  <Button href="#" className={styles.viewMatches}  onClick={this.handleOpen}>View Matches</Button>
              </Link>
          </CardMedia>
          <CardContent>
            <Typography gutterBottom variant="headline" component="h2" className={styles.mediaName}>
              128376123.MOV
              <IconButton className={styles.mediaIcon}>
                <VideocamIcon/>
              </IconButton>
            </Typography>
            <Typography component="p" className={styles.mediaDateLabel}>
              Date Uploaded: 10/22/2017 10:04:00 AM
            </Typography>
            <Typography component="p" className={styles.mediaDateLabel}>
                Result Found:   80
            </Typography>
            <Typography component="span" className={styles.mediaHours}>10:04</Typography>
          </CardContent>
        </Card>
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={this.handleClose}
        >
          <div className={styles.modalNewCase}>
            <Typography variant="title" id="modal-title">
              Processed Details: 89321312.MOV
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </Typography>
          </div>
        </Modal>
      </div>
    );
  }

}

export default ProcessedList;
