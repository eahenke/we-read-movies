import React from 'react';
import { string, shape } from 'prop-types';
import Image from 'gatsby-image';
import ExternalLink from '../navigation/external-link';
import Box from '../layout/box';
import styles from './episode-cover.module.css';

const EpisodeCover = ({ src, text, url }) => (
    <div className={styles.episodeCoverContainer}>
        <div className={styles.episodeCover}>
            <Image fluid={src} />
        </div>
        <Box className={styles.attribution}>
            {url ? <ExternalLink href={url}>{text}</ExternalLink> : <span>{text}</span>}
        </Box>
    </div>
);

EpisodeCover.propTypes = {
    // TODO: src fix prop type
    src: shape({}).isRequired,
    text: string.isRequired,
    url: string
};

export default EpisodeCover;
