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
@reduxForm({
    form: 'noteForm'
})

export default class NoteForm extends React.Component {
    static propTypes = {
        handleSubmit: func.isRequired,
        onClose: func.isRequired,
        open: bool,
        pristine: bool,
        noteModel: object
    };
    static defaultProps = {};


    render() {
        console.log(this.props.noteModel);
        return (
            <Dialog
                open={this.props.open}
                onClose={this.props.onClose}
                disableBackdropClick
                disableEscapeKeyDown
                maxWidth="md"
            >
                <form onSubmit={this.props.handleSubmit}>
                    <DialogTitle>{this.props.noteModel ? 'Edit Note' : 'New Note'}</DialogTitle>
                    <DialogContent>
                        {/*<DialogContentText>
                            Please provide the following information.
                        </DialogContentText>*/}
                        <FormControl fullWidth>
                            <Field style={{ width: 450 }}
                                   name="id"
                                   label="ID"
                                   defaultValue={this.props.noteModel ? this.props.noteModel.id : ''}
                                   component={RenderTextField}
                                   type="text"
                                   placeholder="ID"
                            />
                        </FormControl>
                       <FormControl fullWidth>
                            <Field style={{ width: 450 }}
                                   name="createdDate"
                                   label="Created Date"
                                   defaultValue={this.props.noteModel ? this.props.noteModel.createdDate : ''}
                                   component={RenderTextField}
                                   type="text"
                                   placeholder="created Date"
                            />
                        </FormControl>
                        <FormControl fullWidth>
                            <Field style={{ width: 450 }}
                                name="description"
                                defaultValue={this.props.noteModel ? this.props.noteModel.description : ''}
                                label="Note Description"
                                component={RenderTextField}
                                type="text"
                                placeholder="Note Description"
                            />
                        </FormControl>
                        {this.props.noteModel && <FormControl fullWidth>
                            <Field style={{ width: 450 }}
                                   name="createdBy"
                                   label="Created By"
                                   defaultValue={this.props.noteModel.createdBy}
                                   component={RenderTextField}
                                   type="text"
                                   placeholder="Created By"
                            />
                        </FormControl>}

                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.props.onClose} color="primary">
                            Cancel
                        </Button>
                        <Button
                            type="submit"
                            color="primary"
                            disabled={this.props.pristine}
                        >
                            {this.props.noteModel ? 'Update' : 'Create new'}
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        );
    }
}
