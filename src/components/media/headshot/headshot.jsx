import React from 'react';
import { string } from 'prop-types';
import styles from './headshot.module.css';

const Headshot = ({ src, alt }) => <img alt={alt} className={styles.img} src={src} />;

Headshot.propTypes = {
    alt: string.isRequired,
    src: string.isRequired
};

export default Headshot;
