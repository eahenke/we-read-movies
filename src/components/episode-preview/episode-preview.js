import React from 'react';
import { string, number } from 'prop-types';
import Box from '../box';
import Player from '../player';
import styles from './episode-preview.module.css';

const EpisodePreview = ({ num, title, date, duration, src, description }) => (
    <Box className={styles.episodeContainer}>
        {/* Wrap this in a link to dynamic page */}
        <span className="section-heading">
            <span>Episode {num}</span>
            <span className={styles.divider}> | </span>
            <span>{title}</span>
        </span>
        <div className={styles.meta}>
            <span className={styles.date}>{date}</span>
            <span className={styles.duration}>Duration: {duration}</span>
        </div>
        <div className={styles.playerContainer}>
            <Player src={src} title={title} />
        </div>
        <p className={styles.description}>{description}</p>
    </Box>
);

EpisodePreview.propTypes = {
    date: string.isRequired,
    description: string.isRequired,
    duration: string.isRequired,
    num: number.isRequired,
    src: string,
    title: string.isRequired
};

export default EpisodePreview;
