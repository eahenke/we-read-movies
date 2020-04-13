import React from 'react';
import { bool, func, number } from 'prop-types';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import styles from './play-pause-button.module.css';

const DEFAULT_SIZE = 52;

const PlayPauseButton = ({ isPlaying = false, onClick, size = DEFAULT_SIZE }) => {
    const Icon = isPlaying ? FaPauseCircle : FaPlayCircle;

    return (
        <button onClick={onClick}>
            <Icon className={styles.icon} size={size} />
        </button>
    );
};

PlayPauseButton.propTypes = {
    isPlaying: bool,
    onClick: func,
    size: number
};

export default PlayPauseButton;
