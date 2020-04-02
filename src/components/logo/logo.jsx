import React from 'react';
import styles from './logo.module.css';

const Logo = () => (
    <div className={styles.logo}>
        <h1 className={styles.title}>
            We Read
            <br />
            <span>Movies</span>
        </h1>
    </div>
);

Logo.propTypes = {};

export default Logo;
