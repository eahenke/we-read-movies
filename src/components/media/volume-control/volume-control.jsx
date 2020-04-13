import React from 'react';
import { bool, func, number, string } from 'prop-types';
import cx from 'classnames';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';
import Progress from '../progress';
import styles from './volume-control.module.css';

const VolumeControl = ({ className, size, onChange, onMute, onUnmute, isMuted, value }) => {
    const VolumeIcon = isMuted ? FaVolumeMute : FaVolumeUp;

    return (
        <div className={styles.volumeContainer}>
            <button onClick={() => (isMuted ? onUnmute() : onMute())}>
                <VolumeIcon size={16} />
            </button>
            <Progress
                className={cx(styles.volumeControlContainer, className)}
                max={1}
                onChange={val => {
                    onUnmute();
                    onChange(val);
                }}
                size={size}
                step={5}
                value={isMuted ? 0 : value}
            />
        </div>
    );
};

VolumeControl.propTypes = {
    className: string,
    isMuted: bool,
    onChange: func.isRequired,
    onMute: func.isRequired,
    onUnmute: func.isRequired,
    size: Progress.propTypes.size,
    value: number
};

export default VolumeControl;