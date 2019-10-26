import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter, withRouter, StaticRouter } from 'react-router-dom';
import Component from '../Header';
// import DashboardHeader from '../../Dashboard/DashboardHeader';
// import DefaultHeader from '../DefaultHeader';
// import ProfileHeader from '../ProfileHeader';

afterEach(cleanup);

test(`render ${Component.name} Component`, () => {
    // const props = {};
    // expect(1).toBe(1);
    const A = withRouter(Component);
    render(
        <StaticRouter location="/">
            <A>Title</A>
        </StaticRouter>
    ); // eslint-disable-line
});
test(`test with dashboard`, () => {
    // const props = {};
    // expect(1).toBe(1);
    const A = withRouter(Component);
    render(
        <StaticRouter location="/dashboard">
            <A>Title</A>
        </StaticRouter>
    ); // eslint-disable-line
});
