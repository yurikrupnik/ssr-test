import React from 'react';
import { render, hydrate } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import routes from './routes';
import config from './config';
import providers from './api/providers';
import './styles/_index.scss';

const renderMethod = config.isProd ? hydrate : render;

renderMethod(
    <BrowserRouter>
        <App providers={providers} routes={routes} />
    </BrowserRouter>, global.document.getElementById('root')
);
