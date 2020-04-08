/* eslint-disable import/no-commonjs */
module.exports = {
    siteMetadata: {
        title: 'We Read Movies',
        description: 'A podcast about bad gay movies',
        author: 'Eric Henke',
        social: {
            FACEBOOK: 'http://facebook.com',
            TWITTER: 'http://twitter.com',
            INSTAGRAM: 'http://instagram.com',
            ITUNES: 'http://itunes.com'
        }
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/src/images`
            }
        },
        'gatsby-transformer-json',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'data',
                path: `${__dirname}/src/data`
            }
        },
        'gatsby-transformer-sharp',
        'gatsby-plugin-sharp',
        {
            resolve: 'gatsby-plugin-manifest',
            options: {
                name: 'we-read-movies',
                short_name: 'we-read-movies',
                start_url: '/',
                background_color: '#663399',
                theme_color: '#663399',
                display: 'minimal-ui',
                icon: 'src/images/gatsby-icon.png' // This path is relative to the root of the site.
            }
        },
        {
            resolve: 'gatsby-plugin-prefetch-google-fonts',
            options: {
                fonts: [
                    {
                        family: 'Montserrat',
                        variants: ['400', '600']
                    },
                    {
                        family: 'Lora',
                        variants: ['400']
                    }
                ]
            }
        }
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ]
};
