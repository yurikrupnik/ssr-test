import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import makeStyles from '@material-ui/styles/makeStyles';

const useStyles = makeStyles((theme) => {
    return {
        root: {
            borderRadius: 0,
            height: '100%',
            padding: '0 25px',
            // flexGrow: 1,
            // theme.palette.alternateDark
            backgroundColor: theme.palette.type === 'dark' ? '#020a23' : theme.palette.background.paper
        }
    };
});

const Page = (props) => {
    const styles = useStyles(props);
    const { children } = props;
    return (
        <Paper
            classes={{
                root: styles.root
            }}
        >
            {children}
        </Paper>
    );
};

Page.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.node,
        PropTypes.func,
        PropTypes.string,
        PropTypes.element
    ]).isRequired,
};

export default Page;
