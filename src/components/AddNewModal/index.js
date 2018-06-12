import React from 'react';
import {bool, func, object, string} from 'prop-types';
import {Field, reduxForm} from 'redux-form';
import {formComponents} from 'veritone-react-common';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import styles from './styles.scss';

const {Input} = formComponents;

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

const RenderSelectField = ({
                             input: {value, onChange},
                             label,
                             meta: {touched, error},
                             ...custom
                           }) => (
  <div>
    <Select
      value={value}
      onChange={onChange}
      label={label}
      {...custom}
    />
    {
      touched && ((error && <FormHelperText error>{error}</FormHelperText>))
    }
  </div>
)

RenderSelectField.propTypes = {
  input: object.isRequired,
  label: string.isRequired,
  meta: object.isRequired
}

const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required'
    }

    if (!values.database) {
        errors.database = 'Required'
    }

    return errors
}

export class AddNewModal extends React.Component {
  static propTypes = {
    handleSubmit: func.isRequired,
    onClose: func.isRequired,
    open: bool,
    pristine: bool
  };
  static defaultProps = {};

  handleSubmit = values => {
    console.log(JSON.stringify(values))
  }

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
            <Button className={styles.modalBtnClose} onClick={this.props.onClose}>x</Button>
            <p style={{marginBottom: 0, color: '#9e9e9e', fontSize: 15, marginTop: 5, minWidth: 490}}>Identify and help
              train face recognition engines to find this individual</p>
          </DialogTitle>
          <DialogContent>
            <FormControl fullWidth>
              <Field style={{fontWeight: 300, marginBottom: 30, marginTop: 0}}
                     name="name"
                     component={RenderTextField}
                     label="Name"
                     type="text"
                     margin="normal"
                     fullWidth
              />
            </FormControl>
            <FormControl fullWidth>
              <Field
                name="database"
                component={RenderSelectField}
                label="Database"
                value={10}
                type="select"
                margin="none"
                fullWidth>
                <MenuItem value={10} selected={true}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Field>
            </FormControl>
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.onClose} variant="raised" color="primary">
              Cancel
            </Button>
            <Button
              variant="raised"
              color="primary"
              disabled={this.props.pristine}
              onClick={this.props.handleSubmit}
            >
              Add
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    );
  }
}

export default reduxForm({
  form: 'addPerson',
  initialValues: {
    database: 10
  },
  validate
})(AddNewModal)
