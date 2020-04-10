import React from 'react';
import { graphql } from 'gatsby';
import { arrayOf, shape } from 'prop-types';
import PageLayout from '../components/page-layout';
import Seo from '../components/seo';
import CurrentEpisode from '../components/current-episode';
import { episodePropType } from '../prop-types';
import { withFlattenedQuery } from '../hocs';

const IndexPage = ({ data }) => {
    const currentEpisode = data.currentEpisodes[0];

    return (
        <PageLayout>
            <Seo title="Home" />
            <h1>Current Episode</h1>
            <CurrentEpisode {...currentEpisode} />
        </PageLayout>
    );
};

IndexPage.propTypes = {
    data: shape({
        currentEpisodes: arrayOf(shape(episodePropType))
    })
};

// TODO: add preview query, fragments
export const IndexPageQuery = graphql`
    query CurrentEpisode {
        currentEpisodes: allEpisodesJson(sort: { fields: [date], order: DESC }, limit: 1) {
            edges {
                node {
                    ...episodeFullFragment
                }
            }
        }
    }
`;

export default withFlattenedQuery(IndexPage);
