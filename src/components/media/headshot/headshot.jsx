import React from 'react';
import { string, shape } from 'prop-types';
import Image from 'gatsby-image';
import styles from './headshot.module.css';

const Headshot = ({ alt, src }) => <div className={styles.img}>{src ? <Image alt={alt} fluid={src} /> : null}</div>;

Headshot.propTypes = {
    alt: string.isRequired,
    src: shape({}).isRequired
};

export default Headshot;
