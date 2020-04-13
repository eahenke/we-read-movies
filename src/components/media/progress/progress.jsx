import React from 'react';
import { func, number, string, oneOf } from 'prop-types';
import cx from 'classnames';
import { toTitleCase } from '../../../util';
import styles from './progress.module.css';

function getPercentage(value, max) {
    return max ? (value / max) * 100 : 0;
}

function getSecondsPerPercentage(max) {
    return max / 100;
}

function getStyle(color, percentage) {
    return {
        '--seek-value': `${percentage}%`,
        color
    };
}

function getSizeClass(size) {
    return `progress${toTitleCase(size)}`;
}

const Progress = ({ className, color, max, onChange, size = 'md', step, value }) => {
    const percentage = getPercentage(value, max);
    const secondsPerPercentage = getSecondsPerPercentage(max);

    return (
        <input
            className={cx(styles.progress, styles[getSizeClass(size)], className)}
            max={100}
            min={0}
            onChange={e => {
                onChange(e.target.value * secondsPerPercentage);
            }}
            step={step}
            style={getStyle(color, percentage)}
            type="range"
            value={percentage}
        />
    );
};

Progress.propTypes = {
    className: string,
    color: string,
    max: number,
    onChange: func,
    size: oneOf(['sm', 'md']),
    step: number,
    value: number
};

export default Progress;
