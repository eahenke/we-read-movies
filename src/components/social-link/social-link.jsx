import React from 'react';
import { number } from 'prop-types';
import { FaFacebookF, FaInstagram, FaTwitter, FaItunesNote } from 'react-icons/fa';
import { SOCIAL_PLATFORMS } from '../../constants';
import { socialPlatformPropType } from '../../prop-types';
import ExternalLink from '../external-link';
import styles from './social-link.module.css';

const ICON_COMPONENTS = {
    [SOCIAL_PLATFORMS.TWITTER]: FaTwitter,
    [SOCIAL_PLATFORMS.FACEBOOK]: FaFacebookF,
    [SOCIAL_PLATFORMS.INSTAGRAM]: FaInstagram,
    [SOCIAL_PLATFORMS.ITUNES]: FaItunesNote
};

const SocialLink = ({ platform, size, url }) => {
    const IconComponent = ICON_COMPONENTS[platform];
    if (!IconComponent) return null;

    return (
        <ExternalLink className={styles.link} href={url}>
            <IconComponent size={size} />
        </ExternalLink>
    );
};

SocialLink.propTypes = {
    size: number,
    ...socialPlatformPropType
};

export default SocialLink;
