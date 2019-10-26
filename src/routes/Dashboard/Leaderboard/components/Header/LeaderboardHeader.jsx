import React from 'react';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
// import Page from '../Page';
import makeStyles from '@material-ui/styles/makeStyles/makeStyles';

import DialogTitle from '@material-ui/core/DialogTitle';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/core/SvgIcon/SvgIcon';
import DialogContent from '@material-ui/core/DialogContent';
import Input from '@material-ui/core/Input';
import DialogActions from '@material-ui/core/DialogActions';
import Dialog from '@material-ui/core/Dialog';

import {
    Formik, Form, Field, FieldArray
} from 'formik';

import { Context } from '../../../../../api/points';


const useHeaderStyle = makeStyles(({
    root: {
        // flexGrow: 1,
        textAlign: 'right',
        // paddingTop: '18px',
        padding: '6px 0',
    },
    button: {
        marginLeft: '15px'
    }
}));
const useStyles = makeStyles(({
    root: {
        flexGrow: 1,
        color: 'rgba(255,255,255,0.87)',
        background: '#5771dc',
        // marginLeft: '14px'
    },
    // button: {
    //     margin: '6px 8px',
    // }
}));
const LeaderboardHeader = () => {
    const styles = useStyles();
    const stylesHeader = useHeaderStyle();
    const points = React.useContext(Context);
    // console.log(points);

    const [open, setOpen] = React.useState(false);
    const handleClose = React.useCallback(() => {
        setOpen(!open);
    });
    return (
        <div>
            <Hidden smUp>
                <Grid item xs>
                    <header className={stylesHeader.root}>
                        shit here
                    </header>
                </Grid>
            </Hidden>
            <Hidden smDown>
                <Grid item xs>
                    <header className={stylesHeader.root}>
                        <Button
                            classes={{
                                root: styles.root
                            }}
                            color="primary"
                            variant="contained"
                            href="https://streamelements.com/yurikrupnik-624/leaderboard"
                        >
                            PUBLIC LEADERBOARD
                        </Button>
                        <Button
                            color="primary"
                            classes={{
                                root: stylesHeader.button
                            }}
                            onClick={handleClose}
                            variant="contained"
                        >
                            GIVE POINTS
                        </Button>
                        <Button
                            variant="contained"
                            classes={{
                                root: stylesHeader.button
                            }}
                            onClick={() => {
                            }}
                            color="secondary"
                        >
                            RESET
                        </Button>
                    </header>
                </Grid>
            </Hidden>
            <Dialog onClose={handleClose} open={open}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                    <Typography component={'header'}>
                        <span>
                            Give points
                        </span>

                        <CloseIcon onClick={handleClose} />
                    </Typography>
                </DialogTitle>
                <DialogContent>
                    <span>
                        <Input
                            // component={Input}
                            placeholder="Username"
                        />
                        <Input
                            placeholder="Points"
                        />
                    </span>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default LeaderboardHeader;
