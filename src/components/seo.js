/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { arrayOf, object, string } from 'prop-types';
import Helmet from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({ description, lang, meta, title, image }) {
    const { site } = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        description
                        author
                    }
                }
            }
        `
    );

    const metaDescription = description || site.siteMetadata.description;

    const imageMeta = image
        ? [
              {
                  name: 'image',
                  content: image
              },
              {
                  name: 'og:image',
                  content: image
              },
              {
                  name: 'twitter:image',
                  content: image
              }
          ]
        : [];
    const metaData = [
        {
            name: 'description',
            content: metaDescription
        },
        {
            property: 'og:title',
            content: title
        },
        {
            property: 'og:description',
            content: metaDescription
        },
        {
            property: 'og:type',
            content: 'website'
        },
        {
            name: 'twitter:card',
            content: 'summary'
        },
        {
            name: 'twitter:creator',
            content: site.siteMetadata.author
        },
        {
            name: 'twitter:title',
            content: title
        },
        {
            name: 'twitter:description',
            content: metaDescription
        }
    ].concat(meta, imageMeta);

    return (
        <Helmet
            htmlAttributes={{
                lang
            }}
            meta={metaData}
            title={title}
            titleTemplate={`%s | ${site.siteMetadata.title}`}
        />
    );
}

SEO.defaultProps = {
    lang: 'en',
    meta: [],
    description: '',
    image: ''
};

SEO.propTypes = {
    description: string,
    image: string,
    lang: string,
    meta: arrayOf(object),
    title: string.isRequired
};

export default SEO;
