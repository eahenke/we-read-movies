import React from 'react';
import { string, shape, bool } from 'prop-types';
import Image from 'gatsby-image';
import cx from 'classnames';
import ExternalLink from '../navigation/external-link';
import Box from '../layout/box';
import styles from './episode-cover.module.css';
import { withLogo } from '../../hocs';

const EpisodeCover = ({ main = false, src, text, url, logo }) => {
    const hasEpisodeCover = !!src;
    const coverSrc = hasEpisodeCover ? src : logo;

    if (!main) return <Image fluid={coverSrc} />;

    return (
        <div className={cx(styles.episodeCoverContainer, { [styles.defaultCover]: !hasEpisodeCover })}>
            <div className={styles.episodeCover}>
                <Image fluid={coverSrc} />
            </div>
            {hasEpisodeCover && (
                <Box className={styles.attribution}>
                    {url ? <ExternalLink href={url}>{text}</ExternalLink> : <span>{text}</span>}
                </Box>
            )}
        </div>
    );
};

EpisodeCover.propTypes = {
    // TODO: src fix prop type
    logo: shape({}).isRequired,
    main: bool,
    src: shape({}).isRequired,
    text: string,
    url: string
};

export default withLogo(EpisodeCover);
