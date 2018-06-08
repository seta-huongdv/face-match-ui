import React from 'react';
import {func, bool, object, string} from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { formComponents } from 'veritone-react-common';
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
  form: 'shareCaseForm'
})

export default class AddNewModal extends React.Component {
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
          <DialogTitle className={styles.modalShareTitle}>Add New
            <Button className={styles.modalBtnClose} onClick={this.props.onClose} >x</Button>
            <p style={{marginBottom: 0, color:'#9e9e9e', fontSize: 15,marginTop: 5, minWidth: 490}}>Identify and help train face recognition engines to find this individual</p>
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <Field style={{ fontWeight: 300, marginBottom: 30, marginTop: 0}}
                     name="Name"
                     component={RenderTextField}
                     label="Name"
                     type="text"
                     margin="normal"
                     fullWidth
              />
            </FormControl>
            <FormControl fullWidth>
              <Field style={{ fontWeight: 300, marginBottom: 20}}
                     name="Data Base"
                     label="Data Base"
                     component={RenderTextField}
                     select
                     placeholder="Subject"
                     fullWidth
              />
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} variant="raised" color="primary">
              Cancel
            </Button>
            <Button
              variant="raised"
              type="submit"
              color="primary"
              disabled={this.props.pristine}
            >
              Share
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}