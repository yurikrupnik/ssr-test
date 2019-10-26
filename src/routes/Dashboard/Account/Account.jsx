import React from 'react';
import routes from './routes';
import Router from '../../../components/Router';

export default React.memo(() => (
    <Router routes={routes} />
));
