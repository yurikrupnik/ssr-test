import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
// import styles from './nav.scss';
import styles from './nav.css';

// console.log('styles', styles); // eslint-disable-line

const MainNav = ({ routes }) => (
    <div className={styles.header}>
        {routes.map((route) => (
            <div key={route.key}>
                <NavLink
                    to={route.path}
                    className={styles.navLink}
                    activeClassName={styles.active}
                >
                    {route.key}
                </NavLink>
            </div>
        ))}
    </div>
);

MainNav.propTypes = {
    routes: PropTypes.arrayOf(PropTypes.shape({
        key: PropTypes.string.isRequired,
        path: PropTypes.string.isRequired
    })).isRequired,
};

export default MainNav;
