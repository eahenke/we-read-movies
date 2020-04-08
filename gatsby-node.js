/* eslint-disable import/no-commonjs */
/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require('path');

async function createEpisodePages({ actions, graphql }) {
    const results = await graphql(`
        {
            allEpisodesJson {
                edges {
                    node {
                        slug
                    }
                }
            }
        }
    `);

    results.data.allEpisodesJson.edges.forEach(({ node }) =>
        actions.createPage({
            path: `episodes/${node.slug}`,
            component: path.resolve('./src/templates/episode/episode.jsx'),
            context: {
                slug: node.slug
            }
        })
    );
}

exports.createPages = async ({ actions, graphql }) => {
    await createEpisodePages({ actions, graphql });
};
