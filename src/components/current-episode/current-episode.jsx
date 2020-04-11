import React from 'react';
import { string, number, shape } from 'prop-types';
import Box from '../layout/box';
import Player from '../media/player';
import EpisodeTitle from '../episode-title';
import EpisodeLink from '../episode-link';
import ImageWithAttribution from '../media/image-with-attribution';
import styles from './current-episode.module.css';
import { coverArtPropType } from '../../prop-types';

const CurrentEpisode = ({ num, title, date, src, description, cover, slug }) => (
    <Box className={styles.episodeContainer}>
        <Box className={styles.coverContainer}>
            <EpisodeLink slug={slug}>
                <ImageWithAttribution src={cover.image.childImageSharp.fluid} text={cover.artist} />
            </EpisodeLink>
        </Box>
        <Box className={styles.episodeInfo} inset="md">
            <span className="section-heading">
                <EpisodeLink slug={slug}>
                    <EpisodeTitle num={num} title={title} />
                </EpisodeLink>
            </span>
            <div className={styles.meta}>
                <span className={styles.date}>{date}</span>
            </div>
            <p className={styles.description}>{description}</p>
            <div className={styles.playerContainer}>
                <Player src={src} title={title} />
            </div>
        </Box>
    </Box>
);
CurrentEpisode.propTypes = {
    cover: shape(coverArtPropType),
    date: string.isRequired,
    description: string.isRequired,
    num: number.isRequired,
    slug: string.isRequired,
    src: string,
    title: string.isRequired
};

export default CurrentEpisode;
