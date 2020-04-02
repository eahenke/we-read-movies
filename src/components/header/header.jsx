import React from 'react';

import styles from './header.module.css';
import Logo from '../logo';
import Nav from '../nav';

const Header = () => (
    <header className={styles.header}>
        <div className={styles.logoContainer}>
            <Logo />
        </div>
        <div className={styles.navContainer}>
            <Nav />
        </div>
    </header>
);

Header.propTypes = {};

export default Header;
