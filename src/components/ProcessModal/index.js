import React from 'react';
import {func, bool, object, string} from 'prop-types';
import { reduxForm, Field } from 'redux-form';
import { formComponents } from 'veritone-react-common';
const { Input, Select } = formComponents;
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import Grid from '@material-ui/core/Grid';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import MenuItem from '@material-ui/core/MenuItem';
import Divider from '@material-ui/core/Divider';
import Switch from '@material-ui/core/Switch';

import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';
import IconClose from '@material-ui/icons/Close';
import InfoIcon from '@material-ui/icons/Info';

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
  form: 'processModal'
})

export default class ProcessModal extends React.Component {
  static propTypes = {
    handleSubmit: func.isRequired,
    onClose: func.isRequired,
    open: bool,
    pristine: bool
  };
  static defaultProps = {};
  state = {
    checkedB: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };
  render() {
    return (

      <Dialog
        open={this.props.open}
        onClose={this.props.onClose}
        disableBackdropClick
        disableEscapeKeyDown
        maxWidth={false}
      >
        <div className={styles.processModal}>
          <form onSubmit={this.props.handleSubmit}>
            <DialogTitle className={styles.modalShareTitle}>Process Media File
              <Button className={styles.modalBtnClose} onClick={this.props.onClose} ><IconClose /></Button>
              <p style={{marginBottom: 0, color:'rgba(0,0,0,0.7)', fontSize: 15,marginTop: 5, minWidth: 490}}>Choose a database to search against. Process automatically or manually idnetify faces.</p>
            </DialogTitle>
            <DialogContent>
              <div className={styles.processContentModal}>
                <div className={styles.processLeft}>
                  <img src="../../img/demo.png" alt="" style={{maxWidth: '100%'}}/>
                  <div className={styles.switchFaceID}>
                    <FormControlLabel
                      control={
                        <Switch
                          checked={this.state.checkedB}
                          onChange={this.handleChange('checkedB')}
                          value="checkedB"
                          color="primary"
                        />
                      }
                      label="Manual Face ID"
                    />
                    <InfoIcon color="action" />
                  </div>

                </div>
                <div className={styles.processRight}>
                    <h3>Choose Database</h3>
                    <p>Select one or more database to process your query.</p>
                    <FormControl fullWidth>
                      <label className={styles.formControlLabel}>Known Offender Database</label>
                      <Field style={{ fontWeight: 300, marginBottom: 40}}
                             name="Data Base"
                             component={RenderTextField}
                             select
                             fullWidth
                             value={this.state.database}
                             onChange={this.handleChange}
                             className={styles.formControlInput}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value="hai">Hai</MenuItem>
                        <MenuItem value="olivier">Olivier</MenuItem>
                        <MenuItem value="kevin">Kevin</MenuItem>

                      </Field>
                    </FormControl>
                    <FormControl fullWidth>
                      <label className={styles.formControlLabel}>Sex Offender Database</label>
                      <Field style={{ fontWeight: 300, marginBottom: 40}}
                             name="Data Base"

                             component={RenderTextField}
                             select
                             fullWidth
                             className={styles.formControlInput}
                      >
                        <MenuItem>
                          1
                        </MenuItem>

                      </Field>
                    </FormControl>
                    <div className={styles.listItemProcess}>
                      <label className={styles.formControlLabel}>Manually Identified Faces</label>
                      <div className={styles.listItemProcessImage}>
                        <Grid container spacing={8}>
                          <Grid item xs={3}>
                            <div className={styles.itemProcessImage}>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.itemProcessImage}>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.itemProcessImage}>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.itemProcessImage}>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.itemProcessImage}>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.itemProcessImage}>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.itemProcessImage}>
                            </div>
                          </Grid>
                          <Grid item xs={3}>
                            <div className={styles.itemProcessImage}>
                            </div>
                          </Grid>
                        </Grid>
                      </div>

                    </div>
                </div>
              </div>
              <Divider />
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
        </div>


      </Dialog>
    );
  }
}
