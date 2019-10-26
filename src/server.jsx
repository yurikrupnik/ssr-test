import path from 'path';
import express from 'express';
import morgan from 'morgan';
import { port, databaseUrl } from './config';
// import render from './services/render'; // todo fix
import api from './api';
import db from './services/db';
import server from './services/socket/server';
// import App from './components/App';
// import routes from './routes';

const app = express();

const assets = path.resolve(__dirname, 'assets');

app.use(express.static(assets));
app.use(morgan('dev'));
app.use(express.json(), express.urlencoded({ extended: false }));
app.set('view engine', 'ejs');
app.set('views', assets);

app.use(db(databaseUrl));
app.use(api);
// app.use((req, res, next) => {
//     console.log('req.url', req.url); // eslint-disable-line no-console
//     console.log('req.session', req.session.id); // eslint-disable-line no-console
//     console.log('req.user', req.user); // eslint-disable-line no-console
//     if (req.isAuthenticated()) {
//         console.log('Authenticated'); // eslint-disable-line no-console
//     } else {
//         console.log('Authenticated not'); // eslint-disable-line no-console
//     }
//     return next();
// });
// app.use(render());

server(app).listen(port, (err) => {
    if (err) {
        console.log('err', err); // eslint-disable-line no-console
    } else {
        console.log(`running at port: ${port}`); // eslint-disable-line no-console
    }
});
