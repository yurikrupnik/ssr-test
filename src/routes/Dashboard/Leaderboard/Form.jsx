import React from 'react';
import PropTypes from 'prop-types';

// import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import {
    Formik, Form, Field, FieldArray
} from 'formik';
import FormHelperText from '@material-ui/core/FormHelperText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/core/SvgIcon/SvgIcon';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';


function RenderInput(props) {
    const {
        field, form, fullWidth, label, multiline, rows
    } = props;

    const { errors } = form;
    const {
        name, value, onChange, onBlur
    } = field;
    return (
        <FormControl fullWidth={fullWidth} component="div">
            <TextField
                multiline={multiline}
                rows={rows}
                label={label}
                value={value}
                name={name}
                onChange={onChange}
                onBlur={onBlur}
                error={!!errors[name]}
            />
            {errors && <FormHelperText>{errors[name]}</FormHelperText>}
        </FormControl>
    );
}

RenderInput.defaultProps = {
    fullWidth: false,
    multiline: false,
    label: '',
    rows: 0,
};

RenderInput.propTypes = {
    field: PropTypes.shape({
        name: PropTypes.string,
        value: PropTypes.string,
        onChange: PropTypes.func,
        onBlur: PropTypes.func
    }).isRequired,
    form: PropTypes.shape({
        errors: PropTypes.shape({})
    }).isRequired,
    fullWidth: PropTypes.bool,
    multiline: PropTypes.bool,
    label: PropTypes.string,
    rows: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number
    ])
};

const GiveEditPointsModal = (props) => {
    const { yes, username } = props;


    return (
        <Formik
            // initialValues={{ areas: [{ name: 'shit', description: '23123' }, { name: 'shita', description: 'lol' }] }}
            initialValues={{
                username: username || '',
                points: 0
            }}
            validate={(values) => {
                const errors = {};
                if (!values.username) {
                    errors.username = 'Username is Required';
                }
                if (values.username > 3) {
                    errors.username = 'That username is too short';
                }
                if (!values.points) {
                    errors.points = 'Points are Required';
                }
                return errors;
            }}
            onSubmit={(values, formStuff) => {
                console.log('values', values);  // eslint-disable-line
                console.log('formStuff', formStuff); // eslint-disable-line
            }}
        >
            {(props) => {
                const handleClose = () => {}
                const open = true;
                console.log(props);
                const { values, handleChange, errors} = props;
                console.log(errors);
                return (
                    <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
                        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                            <Typography component={'header'}>
                        <span>
                            Give points
                        </span>

                                <CloseIcon onClick={handleClose} />
                            </Typography>
                        </DialogTitle>
                        <Form />
                        <DialogContent>
                            <Form>
                                <Field
                                    label="Username"
                                    name="username"
                                    // className={classes.textField}
                                    // value={values.name}
                                    onChange={(e, q) => {
                                        console.log(e);
                                        console.log(q);
                                        handleChange(e)
                                    }}
                                    margin="normal"
                                    value={values['username']}
                                    component={TextField}
                                />
                                <Field
                                    label="Points"
                                    name="points"
                                    // className={classes.textField}
                                    // value={values.name}
                                    onChange={handleChange}
                                    margin="normal"
                                    value={values['points']}
                                    component={TextField}
                                />
                                {/*<TextField*/}
                                {/*    id="standard-name"*/}
                                {/*    label="Username"*/}
                                {/*    name="username"*/}
                                {/*    // className={classes.textField}*/}
                                {/*    // value={values.name}*/}
                                {/*    onChange={handleChange}*/}
                                {/*    margin="normal"*/}
                                {/*    value={values['username']}*/}
                                {/*/>*/}
                                {/*<TextField*/}
                                {/*    id="standard-name"*/}
                                {/*    label="Points"*/}
                                {/*    name="points"*/}
                                {/*    // className={classes.textField}*/}
                                {/*    // value={values.name}*/}
                                {/*    onChange={handleChange}*/}
                                {/*    margin="normal"*/}
                                {/*    value={values['points']}*/}
                                {/*/>*/}
                                {/*<FormControl  >*/}
                                {/*    <InputLabel htmlFor="component-error">Name</InputLabel>*/}
                                {/*    <Input*/}
                                {/*        id="component-error"*/}
                                {/*        value={'asd'}*/}
                                {/*        onChange={handleChange}*/}
                                {/*        aria-describedby="component-error-text"*/}
                                {/*    />*/}
                                {/*    <FormHelperText id="component-error-text">Error</FormHelperText>*/}
                                {/*</FormControl>*/}
                            </Form>
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={handleClose} color="primary">
                                Save changes
                            </Button>
                        </DialogActions>
                    </Dialog>
                );
            }}
        </Formik>
    );
};

GiveEditPointsModal.defaultProps = {
    yes: true
};

GiveEditPointsModal.propTypes = {
    yes: PropTypes.bool
};

export default GiveEditPointsModal;
