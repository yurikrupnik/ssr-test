import request from 'axios';
// import { url } from './config';
const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjoiNWRiMWJlODYwNGIxZTgzZGE0ZDJlMDBjIiwicm9sZSI6Im93bmVyIiwiY2hhbm5lbCI6IjVkYjFiZTg2MDRiMWU4NDMwMmQyZTAwZCIsInByb3ZpZGVyIjoidHdpdGNoIiwiYXV0aFRva2VuIjoiLTQxdDBNZDl3R0VobVdXbVR2bEFxRzhUbGpxNHBWTHJXMUJiWGNHcGxlcGJsWFoxIiwiaWF0IjoxNTcxOTMyODUzLCJpc3MiOiJTdHJlYW1FbGVtZW50cyJ9.PW3NShSqUw4RU7_x-CDg0dZqcMAePzrmnfRsxzG4Ogc'
const apiCall = request.create({
    baseURL: 'https://api.streamelements.com/kappa/v2/points',
    headers: {
        Authorization: `Bearer ${token}`
    }
});

const api = {
    base: 'https://api.streamelements.com/kappa/v2/points',
    getByType(type) {
        return apiCall.get(`/5db1be8604b1e84302d2e00d/${type}?offset=0&page=1`)
            .then((res) => res.data)
            .catch((err) => {
                console.log(err);
            });
    },
    getByUsername(name) {
        return apiCall.get(`/5db1be8604b1e84302d2e00d/${name}`)
            .then((res) => res.data)
            .catch((err) => {
                console.log(err);
                // return err;
            });
    },
    updateByUser(user, amount) {
        return apiCall.put(`/5db1be8604b1e84302d2e00d/${user}/${amount}`)
            .then((res) => res.data)
            .catch((err) => {
                console.log(err);
            });
    },
    getByName(name, cb = () => {}) {
        return apiCall.get(`/5db1be8604b1e84302d2e00d/${name}`)
            .then((res) => res.data)
            // .then(cb)
            .catch((err) => {
                console.log(err);
            });
    },
    deleteByUsername(name, cb = () => {}) {
        return apiCall.delete(`/5db1be8604b1e84302d2e00d/${name}`)
            .then((res) => res.data)
            // .then(cb)
            .catch((err) => {
                console.log(err);
            });
    },
    deleteByType(type) {
        return apiCall.delete(`/5db1be8604b1e84302d2e00d/reset/${type}`)
            .then((res) => res.data)
            .catch((err) => {
                console.log(err);
            });
    }
};

export default api;
