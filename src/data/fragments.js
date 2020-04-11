import { graphql } from 'gatsby';

export const episodeFullFragment = graphql`
    fragment episodeFullFragment on EpisodesJson {
        slug
        title
        date
        description
        duration
        num
        src
        topics
        links {
            text
            url
        }
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
`;

export const episodePreviewFragment = graphql`
    fragment episodePreviewFragment on EpisodesJson {
        slug
        title
        date
        num
        cover {
            image {
                childImageSharp {
                    fluid(maxWidth: 250) {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    }
`;
