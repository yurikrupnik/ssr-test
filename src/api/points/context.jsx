import { createContext } from 'react';
import api from './api';
// const { Provider, Consumer } = createContext({
// data: [],
// loading: false,
// selected: null,
// fetch: () => {}
// });

export default createContext({
    data: [],
    loading: false,
    selected: null,
    // getByType: api.getByType,
    // getByUsername: api.getByUsername,
    // updateByUser: api.updateByUser,
    // getByName: api.getByName,
    // deleteByUsername: api.deleteByUsername,
    // getAlltime: api.getAlltime,
});
