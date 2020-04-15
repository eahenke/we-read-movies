import React from 'react';
import { string } from 'prop-types';
import { FaItunesNote, FaSpotify, FaRss } from 'react-icons/fa';
import Box from '../layout/box';
import ExternalLink from '../navigation/external-link';
import styles from './subscription-platform.module.css';

const ICON_COMPONENTS = {
    SPOTIFY: FaSpotify,
    ITUNES: FaItunesNote,
    RSS: FaRss
};

function getIcon(name = '') {
    return ICON_COMPONENTS[name.toUpperCase()];
}

const SubscriptionPlatform = ({ name, url }) => {
    const IconComponent = getIcon(name);

    return (
        <Box className={styles.platform}>
            <ExternalLink href={url}>
                <IconComponent size={72} />
                <span className={styles.name}>{name}</span>
            </ExternalLink>
        </Box>
    );
};

SubscriptionPlatform.propTypes = {
    name: string.isRequired,
    url: string.isRequired
};

export default SubscriptionPlatform;
