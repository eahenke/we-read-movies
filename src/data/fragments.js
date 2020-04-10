import { graphql } from 'gatsby';

export const episodeFullFragment = graphql`
    fragment episodeFullFragment on EpisodesJson {
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
`;
