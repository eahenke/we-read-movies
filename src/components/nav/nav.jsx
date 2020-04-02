import React from 'react';
import { Link } from 'gatsby';
import styles from './nav.module.css';

const PAGES = [
    {
        title: 'Episodes',
        url: '/'
    },
    {
        title: 'Subscribe',
        url: '/subscribe'
    },
    {
        title: 'About',
        url: '/about'
    }
];
const Nav = () => (
    <nav className={styles.nav}>
        {PAGES.map((page, idx) => (
            <Link key={`${page}-${idx}`} to={page.url}>
                {page.title}
            </Link>
        ))}
    </nav>
);

Nav.propTypes = {};

export default Nav;
