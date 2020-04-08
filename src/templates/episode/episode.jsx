import React from 'react';

import { shape } from 'prop-types';
import { graphql } from 'gatsby';
import { episodePropType } from '../../prop-types';
import PageLayout from '../../components/page-layout';
import EpisodeTitle from '../../components/episode-title';
import Player from '../../components/player';
import ImageWithAttribution from '../../components/image-with-attribution';
import styles from './episode.module.css';

function getFluidImage(image) {
    return image.childImageSharp.fluid;
}

const Episode = ({ data }) => {
    const { title, num, description, src, date, duration, cover } = data.episodesJson;

    // TODO: move attribution to episode data query
    return (
        <PageLayout>
            <h1 className={styles.title}>
                <EpisodeTitle num={num} title={title} />
            </h1>

            <ImageWithAttribution
                src={getFluidImage(cover.image)}
                text={'Isabel Anderson'}
                url={'https://instagram.com/iamibo'}
            />
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
    query Episode($slug: String!) {
        episodesJson(slug: { eq: $slug }) {
            title
            date
            description
            duration
            num
            src
            cover {
                image {
                    childImageSharp {
                        fluid(maxWidth: 500) {
                            ...GatsbyImageSharpFluid
                        }
                    }
                }
            }
        }
    }
`;

Episode.propTypes = {
    // TODO: update prop types to be fully inline with query
    data: shape({
        episodesJson: episodePropType
    })
};

export default Episode;
