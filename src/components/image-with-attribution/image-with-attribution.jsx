import React from 'react';
import { string, shape } from 'prop-types';
import Image from 'gatsby-image';
import ExternalLink from '../external-link';
import styles from './image-with-attribution.module.css';

const ImageWithAttribution = ({ src, text, url }) => (
    <div>
        <Image fluid={src} />
        <div className={styles.attribution}>
            {url ? <ExternalLink href={url}>{text}</ExternalLink> : <span>{text}</span>}
        </div>
    </div>
);

ImageWithAttribution.propTypes = {
    // TODO: src fix prop type
    src: shape({}).isRequired,
    text: string.isRequired,
    url: string
};

export default ImageWithAttribution;
