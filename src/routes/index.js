import loadable from '@loadable/component';

// import Header from './Header';
// import Dashboard from './Dashboard';
// import Root from './Root';
// import Brands fro/m './Brands';
// import Careers from './Careers';
// import Dreamteam from './Dreamteam';
// import Groundcontrol from './Groundcontrol';

const Dashboard = loadable(() => import(/* webpackChunkName: "dashboard" */ './Dashboard'));
const Header = loadable(() => import(/* webpackChunkName: "header" */ './Header'));
const Root = loadable(() => import(/* webpackChunkName: "root" */ './Root'));
const Brands = loadable(() => import(/* webpackChunkName: "brands" */ './Brands'));
const Careers = loadable(() => import(/* webpackChunkName: "Careers" */ './Careers'));
const Dreamteam = loadable(() => import(/* webpackChunkName: "Dreamteam" */ './Dreamteam'));
const Groundcontrol = loadable(() => import(/* webpackChunkName: "Groundcontrol" */ './Groundcontrol'));

// const Register = loadable(() => import(/* webpackChunkName: "Register" */ './Register'));
// const ChatRoom = loadable(() => import(/* webpackChunkName: "ChatRoom" */ './ChatRoom'));
// const Projects = loadable(() => import(/* webpackChunkName: "Projects" */ './Projects'));

const routes = [
    {
        path: '/',
        component: Header,
        key: 'root'
    },
    {
        path: '/',
        component: Root,
        key: 'main',
        exact: true
    },
    {
        path: '/dashboard',
        component: Dashboard,
        key: 'das'
    },
    {
        path: '/brands',
        component: Brands,
        key: 'brands'
    },
    {
        path: '/careers',
        component: Careers,
        key: 'careers'
    },
    {
        path: '/dreamteam',
        component: Dreamteam,
        key: 'dreamteam',
        // exact: true
    },
    {
        path: '/groundcontrol',
        component: Groundcontrol,
        key: 'Shows',
        // exact: true
    }
];

export default routes;
