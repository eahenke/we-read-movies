import React from 'react';

import { shape, string } from 'prop-types';
import { graphql } from 'gatsby';
import { episodePropType } from '../../prop-types';
import PageLayout from '../../components/page-layout';
import EpisodeTitle from '../../components/episode-title';
import Player from '../../components/media/player';
import ImageWithAttribution from '../../components/media/image-with-attribution';
import styles from './episode.module.css';

function getFluidImage(image) {
    return image.childImageSharp.fluid;
}

const Episode = ({ data }) => {
    const { title, num, description, src, date, duration, cover } = data.episodesJson;
    const { name: artistName, url: artistUrl } = data.artistsJson;

    return (
        <PageLayout>
            <h1 className={styles.title}>
                <EpisodeTitle num={num} title={title} />
            </h1>

            <ImageWithAttribution src={getFluidImage(cover.image)} text={artistName} url={artistUrl} />
            <Player src={src} title={title} />
            <div className={styles.meta}>
                <span className={styles.date}>{date}</span>
                <span className={styles.duration}>Duration: {duration}</span>
            </div>
            <p>{description}</p>
        </PageLayout>
    );
};

export const query = graphql`
    query EpisodeWithCover($slug: String!, $artist: String) {
        episodesJson(slug: { eq: $slug }) {
            ...episodeFullFragment
        }
        artistsJson(name: { eq: $artist }) {
            name
            url
        }
    }
`;

Episode.propTypes = {
    // TODO: update prop types to be fully inline with query
    data: shape({
        episodesJson: shape(episodePropType),
        artistJson: shape({
            name: string,
            url: string
        })
    })
};

export default Episode;
