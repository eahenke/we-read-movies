import React from 'react';
import { string, arrayOf, shape } from 'prop-types';
import cx from 'classnames';

import styles from './bio.module.css';
import Headshot from '../headshot';
import Box from '../box';
import { socialPlatformPropType } from '../../prop-types';
import SocialLink from '../social-link';

const Bio = ({ name, imageSrc, text, socialPlatforms = [] }) => (
    <div className={styles.bio}>
        {imageSrc && (
            <Box className={styles.imageContainer}>
                <Headshot alt={name} src={imageSrc} />
            </Box>
        )}
        <Box className={styles.textContainer}>
            <div className={cx(styles.titleBar, 'paragraph-heading')}>
                <span className={styles.bioTitle}>{name}</span>
                <span>
                    {socialPlatforms.map(({ platform, url }) => (
                        <SocialLink key={platform} platform={platform} size={20} url={url} />
                    ))}
                </span>
            </div>
            <p className={styles.bioText}>{text}</p>
        </Box>
    </div>
);

Bio.propTypes = {
    imageSrc: string,
    name: string.isRequired,
    socialPlatforms: arrayOf(shape(socialPlatformPropType)),
    text: string.isRequired
};

export default Bio;