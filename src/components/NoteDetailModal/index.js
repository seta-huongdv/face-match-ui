import React from 'react';
import {func, bool, object, string} from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { formComponents } from 'veritone-react-common';
import Grid from '@material-ui/core/Grid';
import AccountCircle from '@material-ui/icons/AccountCircle';
const { Input, Select } = formComponents;
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconClose from '@material-ui/icons/Close';
import styles from '../../css/main.css';
const RenderTextField = ({
                           input: {value, onChange},
                           label,
                           meta: {touched, error},
                           ...custom
                         }) => (
  <div>
    <TextField
      // value={value}
      onChange={onChange}
      label={label}
      {...custom}
    />
    {
      touched && ((error && <FormHelperText error>{error}</FormHelperText>))
    }
  </div>
)

RenderTextField.propTypes = {
  input: object.isRequired,
  label: string.isRequired,
  meta: object.isRequired
}
/*const validate = values => {
    const errors = {};
    if (!values.email) {
        errors.email = 'Required'
    }

    if (!values.subject) {
        errors.subject = 'Required'
    }

    if (!values.message) {
        errors.message = 'Required'
    }



    return errors
}*/
@reduxForm({
  form: 'NoteDetailModal'
})

export default class NoteDetailModal extends React.Component {
  static propTypes = {
    handleSubmit: func.isRequired,
    onClose: func.isRequired,
    open: bool,
    pristine: bool
  };
  static defaultProps = {};


  render() {

    return (

      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth="sm"
      >
        <form onSubmit={this.props.handleSubmit}>
          <DialogTitle className={styles.modalShareTitle}>Note Details
            <Button className={styles.modalBtnClose} onClick={this.props.onClose} ><IconClose /></Button>
            <p style={{marginBottom: 0, color: '#9e9e9e', fontSize: 15, marginTop: 5, minWidth: 490}}>Select one or more databases to process your query</p>
          </DialogTitle>
          <DialogContent>
            <div className={styles.creationDate}>
              <label htmlFor="">Creation Date</label>
              <Grid container spacing={8} alignItems="flex-end">
                <Grid item className={styles.iconCalendar}>
                  <img src="../../img/icon-calendar.png" alt=""/>
                </Grid>
                <Grid item>

                  <TextField id="input-with-icon-grid" defaultValue="4/11/2018" className={styles.inputCalendar}/>
                  <TextField id="input-with-icon-grid" defaultValue="08:00:00 AM" className={styles.inputCalendar}/>
                  <TextField id="input-with-icon-grid" defaultValue="PST" className={styles.inputCalendar}/>
                </Grid>
              </Grid>
            </div>

            <FormControl fullWidth>
              <Field style={{ fontWeight: 300, marginBottom: 20}}
                     name="subject"
                     label="Created By"
                     component={RenderTextField}
                     type="text"
                     defaultValue="Charlotte Lee"
                     fullWidth
                     className={styles.formControlInput}
              />
            </FormControl>

            <FormControl fullWidth>
              <Field style={{ fontWeight: 300}}
                     name="message"
                     label="Note Description"
                     component={RenderTextField}
                     defaultValue="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius ex incidunt, nesciunt optio placeat quaerat quidem! Animi aperiam blanditiis consequatur cumque debitis distinctio eos, odio optio quaerat ratione sequi sit?"
                     type="text"
                     fullWidth
                     multiline
                     rows="5"
                     className={styles.formControlInput}
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button
              variant="raised"
              type="submit"
              color="primary"
              disabled={this.props.pristine}
            >
              Process
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}
