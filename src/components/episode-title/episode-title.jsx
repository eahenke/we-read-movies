import React from 'react';
import { number, string } from 'prop-types';
import { formatEpisodeNumber } from '../../util';
import styles from './episode-title.module.css';

const EpisodeTitle = ({ num, title }) => (
    <>
        <span>{formatEpisodeNumber(num)}</span>
        <span className={styles.divider}> | </span>
        <span>{title}</span>
    </>
);

EpisodeTitle.propTypes = {
    num: number.isRequired,
    title: string.isRequired
};

export default EpisodeTitle;
