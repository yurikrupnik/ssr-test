import React from 'react';
import request from 'axios';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import TableCell from '@material-ui/core/TableCell';
import TableBody from '@material-ui/core/TableBody';
import TablePagination from '@material-ui/core/TablePagination';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import CloseIcon from '@material-ui/icons/Close';

import Tab from '@material-ui/core/Tab';
import { Link } from 'react-router-dom';
import Tabs from '@material-ui/core/Tabs';
import makeStyles from '@material-ui/styles/makeStyles';
import useTheme from '@material-ui/styles/useTheme';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Form from './Form';

import Page from './components/Page';
import Hidden from '@material-ui/core/Hidden';
import Grid from '@material-ui/core/Grid';
import Header from './components/Header';

const api = {
    base: 'https://api.streamelements.com/kappa/v2/points',
    getByType(type) {
        return request.get(`${this.base}/5db1be8604b1e84302d2e00d/${type}?offset=0&page=1`)
            .then((res) => res.data);
    },
    getByUsername(name) {
        return request.get(`${this.base}/5db1be8604b1e84302d2e00d/${name}`)
            .then((res) => res.data);
    },
    updateByUser(user, amount) {
        return request.put(`${this.base}/5db1be8604b1e84302d2e00d/${user}/${amount}`)
            .then((res) => res.data);
    },
    getByName(name, cb = () => {
    }) {
        return request.get(`${this.base}/5db1be8604b1e84302d2e00d/${name}`)
            .then((res) => res.data)
            .then(cb);
    },
    deleteByUsername(name, cb = () => {
    }) {
        return request.delete(`${this.base}/5db1be8604b1e84302d2e00d/${name}`)
            .then((res) => res.data)
            .then(cb);
    },
    getAlltime(name, cb = () => {
    }) {
        return request.get(`${this.base}/5db1be8604b1e84302d2e00d/alltime?offset=0&page=1`)
            .then((res) => res.data)
            .then(cb);
    }
};

const columns = [
    {
        id: 'position',
        label: 'Position',
        minWidth: 100
    },
    {
        id: 'username',
        label: 'Name',
        minWidth: 170
    },
    {
        id: 'points',
        label: 'Points',
        minWidth: 170
    },
    {
        id: 'actions',
        label: 'Actions',
        minWidth: 170,
        component: (props) => {
            console.log('actions props', props);
            const { onDelete, closeModal, row } = props;
            const handleDelete = React.useCallback(() => {
                onDelete(row.username);
                closeModal();
            });
            return (
                <div>
                    <Button
                        onClick={handleDelete}
                    >
                        delete
                    </Button>
                    <Button
                        onClick={() => {
                        }}
                    >
                        edit
                    </Button>
                </div>
            );
        }
    }
];
const currentRoutes = [
    {
        label: 'current',
        to: '/dashboard/leaderboard/current',
        value: 'current'
    },
    {
        label: 'all time',
        to: '/dashboard/leaderboard/current',
        value: 'alltime'
    }
];

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

const tabsrStyle = makeStyles(({
    root: {
        // flexGrow: 1,
        color: '#212121',
        // backgroundColor: 'green'
    }
}));

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = event => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = event => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = event => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = event => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon/> : <FirstPageIcon/>}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0}
                        aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight/> : <KeyboardArrowLeft/>}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft/> : <KeyboardArrowRight/>}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon/> : <LastPageIcon/>}
            </IconButton>
        </div>
    );
}

import { Context } from '../../../api/points';

const useTabStyles = makeStyles((theme) => ({
    root: {
        // textTransform: 'uppercase',
        // color: '#6a6a6a',
        color: 'red',
        minWidth: 72,
        fontWeight: 600,
        fontSize: '12px',
        // marginRight: theme.spacing(4),
        // fontFamily: [
        //     '-apple-system',
        //     'BlinkMacSystemFont',
        //     '"Segoe UI"',
        //     'Roboto',
        //     '"Helvetica Neue"',
        //     'Arial',
        //     'sans-serif',
        //     '"Apple Color Emoji"',
        //     '"Segoe UI Emoji"',
        //     '"Segoe UI Symbol"',
        // ].join(','),
        '&:hover': {
            // color: '#40a9ff',
            // opacity: 1,
        },
        '&$selected': {
            color: 'green',
            fontWeight: theme.typography.fontWeightMedium,
        },
        '&:focus': {
            // color: 'red',
        },
    },
    selected: {},
}));

const Leaderboard = (props) => {

    const points = React.useContext(Context);
    // console.log('points', points);
    const tabsStyles = useTabStyles(props);
    // const theme = useTheme();
    const styles = useStyles();
    const stylesHeader = useHeaderStyle();
    const stylesTabs = tabsrStyle();
    const { location, match } = props;
    const { params } = match;
    const { type } = params;

    const handleChangeTab = React.useCallback((event, i) => {
        props.history.push(`/dashboard/leaderboard/${currentRoutes[i].value}`);
    }, []);

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(!open);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // table
    // const [page, setPage] = React.useState([]);
    const [page, setPage] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    // data
    // const [data, setData] = React.useState([]);

    React.useEffect(() => {
        const apiType = type === 'current' ? 'top' : type;
        // console.log('apiType', apiType);
        points.getByType(apiType)
            .then((res) => {
                // setData(res.users.map((v, i) => {
                //     v.position = `#${i + 1}`; // eslint-disable-line
                //     return v;
                // }));
                console.log(res);
                // setTotal(res._total); // eslint-disable-line
            });
    }, [type]);


    const [showModalForSearch, setShowModalForSearch] = React.useState(false);
    const handleChange = React.useCallback((e) => {
        setSearch(e.target.value);
    }, []);

    const handleToggleShowModalForSearch = React.useCallback(() => {
        setShowModalForSearch(!showModalForSearch);
    });
    const onChangeRowsPerPage = React.useCallback((e) => {
        setRowsPerPage(Number(e.target.value));
    }, []);

    // console.log(data);
    const [form, addEditForm] = React.useState([
        {},
        {}
    ]);
    const givePoints = React.useCallback(() => {
        api.updateByUser();
    }, [addEditForm]);


    const [resetModalOpen, setResetModalOpen] = React.useState(false);
    const [selectedResetName, setSelectedResetName] = React.useState('');

    const toggleResetModalOpen = React.useCallback(() => {
        if (resetModalOpen) {
            setSelectedResetName(''); // bug todo
        }
        setResetModalOpen(!resetModalOpen);
        // cb();
    }, [setResetModalOpen, resetModalOpen]);

    const resetAll = React.useCallback(() => {
        toggleResetModalOpen();
        points.deleteByType(type);
    }, [toggleResetModalOpen]);


    const resetOne = React.useCallback(() => {
        toggleResetModalOpen();
        points.deleteByUsername(selectedResetName, type === 'current' ? 'top' : type);
    }, [toggleResetModalOpen, selectedResetName]);


    const tableData = type === 'current' ? points.topData : points.allTimeData;
    const totalTableCount = type === 'current' ? points.topDataTotal : points.allTimeDataTotal;

    const [openSearchModal, setOpenSearchModal] = React.useState(false);

    const toggleOpenSearchModal = React.useCallback(() => {
        setOpenSearchModal(!openSearchModal);
    }, [openSearchModal, setOpenSearchModal]);

    const [search, setSearch] = React.useState('');
    const [selected, setSelected] = React.useState({});

    const searchByName = React.useCallback((e) => {
        e.preventDefault();
        if (!search) {
            return;
        }
        points.getByUsername(search)
            .then((res) => {
                console.log('res', res);
                if (!res) {
                    return;
                }

                toggleOpenSearchModal();
                setSelected(res);
                setSearch('');
            });
    }, [toggleOpenSearchModal, setSearch, search]);

    return (
        <Page>
            <Dialog onClose={toggleOpenSearchModal} open={openSearchModal}>
                <DialogContent>
                    <h2>
                        Search results
                    </h2>
                    <CloseIcon onClick={toggleOpenSearchModal} />
                    <div>
                        <div>
                            Position: {selected.rank}
                        </div>
                        <div>
                            Name: {selected.username}
                        </div>
                        <div>
                            {type === 'alltime' ? 'Points all time:' : 'Points'} {type === 'alltime' ? selected.pointsAlltime : selected.points}
                        </div>
                    </div>
                </DialogContent>
            </Dialog>
            <Dialog onClose={toggleResetModalOpen} open={resetModalOpen}>
                <DialogContent>
                    <h2>
                        Reset current points
                    </h2>
                    <div>
                        {
                            selectedResetName ? `This will reset ${selectedResetName} current points`
                                : 'This will reset the current leaderboard. This can not be undone!'
                        }
                    </div>
                </DialogContent>
                <DialogActions>
                    <Button onClick={() => {
                        toggleResetModalOpen();

                    }} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={selectedResetName ? resetOne : resetAll} color="primary">
                        Reset
                    </Button>
                </DialogActions>
            </Dialog>
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
                            onClick={toggleResetModalOpen}
                            color="secondary"
                        >
                            RESET
                        </Button>
                    </header>
                </Grid>
            </Hidden>
            <Paper>
                <Tabs
                    value={currentRoutes.findIndex((v) => v.value === type)}
                    indicatorColor="primary"
                    // textColor="primary"
                    aria-label="disabled tabs example"
                    onChange={handleChangeTab}
                    classes={{
                        // root: stylesTabs.stylesTabs
                    }}
                >
                    {
                        currentRoutes.map((v) => (
                            <Tab
                                // color="default"
                                classes={{
                                    root: tabsStyles.root
                                    // root: tabsStyles.root,
                                //     // selected: tabsStyles.selected
                                }}
                                // style={{
                                //     color: 'red'
                                // }}
                                key={v.label}
                                label={v.label}
                                // component={Link}
                                to={v.to}
                            />
                        ))
                    }
                </Tabs>
                <form>
                    <Input
                        placeholder="Search"
                        name="search"
                        value={search}
                        onChange={handleChange}
                    />
                    <Button
                        color="primary"
                        // color="inherit"

                        onClick={searchByName}
                        // type="submit"
                    >
                        Search
                    </Button>
                </form>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell
                                    key={column.id}
                                    align={column.align}
                                    style={{ minWidth: column.minWidth }}
                                >
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {tableData.map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.position}>
                                    {columns.map((column) => {
                                        if (column.component) {
                                            const Com = column.component;
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    <Com onDelete={setSelectedResetName} closeModal={toggleResetModalOpen} row={row} />
                                                </TableCell>
                                            );
                                        }
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                colSpan={3}
                                count={totalTableCount}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                SelectProps={{
                                    inputProps: { 'aria-label': 'rows per page' },
                                    native: true,
                                }}
                                onChangePage={(e) => {
                                    console.log('onChangePage', e);
                                    setPage();
                                }}
                                onChangeRowsPerPage={onChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            </Paper>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
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
            <Dialog onClose={handleToggleShowModalForSearch} open={showModalForSearch}>
                <DialogTitle id="customized-dialog-title" onClose={handleToggleShowModalForSearch}>
                    <Typography component={'header'}>
                        <span>
                            Give points
                        </span>

                        <CloseIcon onClick={handleToggleShowModalForSearch} />
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
                    <Button onClick={handleToggleShowModalForSearch} color="primary">
                        Save changes
                    </Button>
                </DialogActions>
            </Dialog>
        </Page>
    );
};

export default Leaderboard;
