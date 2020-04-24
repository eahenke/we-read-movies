import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const withLogo = C => props => {
    const data = useStaticQuery(graphql`
        query LogoQuery {
            file(relativePath: { eq: "logo/logo.jpg" }) {
                childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                }
            }
        }
    `);

    return <C {...props} logo={data.file.childImageSharp.fluid} />;
};

export default withLogo;
