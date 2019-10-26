import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Context from './context';
import api from './api';

const toggleLoading = (prevState) => ({ loading: !prevState.loading });

const PointsProvider = (props) => {
    const { children } = props;
    // const [topData, setTopData] = React.useState({
    //     data: [],
    //     total: 0
    // });
    const [allTimeData, setAllTimeData] = React.useState([]);
    const [allTimeDataTotal, setAllTimeDataTotal] = React.useState(0);

    const [topData, setTopData] = React.useState([]);
    const [topDataTotal, setTopDataTotal] = React.useState(0);

    const [loading, setLoading] = React.useState(false);
    const [search, setSearch] = React.useState('');
    // console.log('Context.Provider', Context.Provider);

    const getByType = React.useCallback((apiType, force) => {
        if (!force && apiType === 'alltime' && !!allTimeDataTotal) {
            return Promise.resolve(allTimeData);
        } else if (!force && apiType === 'top' && !!topDataTotal) {
            return Promise.resolve(topData);
        } else {
            return api.getByType(apiType)
                .then((res) => {
                    if (apiType === 'top') {
                        setTopData(res.users.map((v, i) => {
                            v.position = `#${i + 1}`; // eslint-disable-line
                            return v;
                        }));
                        setTopDataTotal(res._total); // eslint-disable-line
                    } else {
                        setAllTimeData(res.users.map((v, i) => {
                            v.position = `#${i + 1}`; // eslint-disable-line
                            return v;
                        }));
                        setAllTimeDataTotal(res._total); // eslint-disable-line
                    }
                    return res;
                });
        }
    }, [allTimeData, allTimeDataTotal, topData, topDataTotal]);


    const getByUsername = React.useCallback((name) => {
        return api.getByUsername(name)
            .then((res) => res);
    }, []);

    const deleteByType = React.useCallback((apiType) => {
        return api.deleteByType(apiType)
            .then(() => {
                const type = apiType === 'current' ? 'top' : apiType;
                getByType(type, true);
            });
    }, [getByType]);

    const deleteByUsername = React.useCallback((name, type) => {
        return api.deleteByUsername(name)
            .then((res) => {
                // console.log(res);
                // const type = apiType === 'current' ? 'top' : apiType;
                getByType(type, true);
            });
    }, [getByType]);

    return (
        <Context.Provider value={{
            // ...this.state,
            // fetch: this.fetch,
            // total,
            allTimeDataTotal,
            topData,
            topDataTotal,
            allTimeData,
            getByType,
            // data,
            // getByType: api.getByType,
            getByUsername,
            deleteByUsername,
            deleteByType
            // updateByUser: api.updateByUser,
            // getByName: api.getByName,
            // deleteByUsername: api.deleteByUsername,
            // getAlltime: api.getAlltime,
        }}
        >
            {children}
        </Context.Provider>
    );
}

// class PointsProvider extends Component {
//     constructor(props, context) {
//         super(props, context);
//         this.state = {
//             data: [],
//             loading: false,
//             selected: null,
//             lastFetch: ''
//         };
//         this.fetch = this.fetch.bind(this);
//         this.toggleCallback = this.toggleCallback.bind(this);
//     }
//
//     fetch(params, cb) {
//         this.setState(toggleLoading, this.toggleCallback(params, cb));
//     }
//
//     toggleCallback(params, cb) {
//         return () => api.fetch(params)
//             .then((data) => {
//                 this.setState(prevState => ({
//                     data,
//                     loading: !prevState.loading
//                 }), cb);
//             })
//             .catch((error) => {
//                 this.setState(prevState => ({
//                     error,
//                     loading: !prevState.loading
//                 }));
//             });
//     }
//
//     render() {
//         const { children } = this.props;
//         return (
//             <Provider value={{
//                 ...this.state,
//                 fetch: this.fetch
//             }}
//             >
//                 {children}
//             </Provider>
//         );
//     }
// }

PointsProvider.propTypes = {
    children: PropTypes.element.isRequired,
};

export default PointsProvider;
