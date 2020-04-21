import React from 'react';
import { string, number, shape } from 'prop-types';
import Image from 'gatsby-image';
import Box from '../layout/box';
import EpisodeTitle from '../episode-title';
import EpisodeLink from '../episode-link';
import { coverArtPropType } from '../../prop-types';
import styles from './episode-preview.module.css';

const EpisodePreview = ({ cover, date, num, slug, title }) => (
    <Box>
        <EpisodeLink slug={slug}>
            <Box>
                <Image fluid={cover.image.childImageSharp.fluid} />
            </Box>
        </EpisodeLink>
        <Box>
            <span className="paragraph-heading">
                <EpisodeLink slug={slug}>
                    <EpisodeTitle num={num} title={title} />
                </EpisodeLink>
            </span>
            <span className={styles.meta}>{date}</span>
        </Box>
    </Box>
);

EpisodePreview.propTypes = {
    cover: shape(coverArtPropType),
    date: string,
    num: number,
    slug: string,
    title: string
};

export default EpisodePreview;
