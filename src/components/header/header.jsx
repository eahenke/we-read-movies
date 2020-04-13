import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { SOCIAL_PLATFORMS } from '../../constants';
import Nav from '../nav';
import SocialLink from '../navigation/social-link';
import styles from './header.module.css';

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        social {
                            FACEBOOK
                            INSTAGRAM
                            TWITTER
                            ITUNES
                        }
                    }
                }
            }
        `
    );

    const { siteMetadata } = data.site;

    return (
        <header className={styles.header}>
            <div className={styles.innerHeader}>
                <span className={styles.siteTitle}>{siteMetadata.title}</span>
                <div className={styles.logoContainer}>
                    <SocialLink platform={SOCIAL_PLATFORMS.FACEBOOK} url={siteMetadata.social.FACEBOOK} />
                    <SocialLink platform={SOCIAL_PLATFORMS.INSTAGRAM} url={siteMetadata.social.INSTAGRAM} />
                    <SocialLink platform={SOCIAL_PLATFORMS.TWITTER} url={siteMetadata.social.TWITTER} />
                    <SocialLink platform={SOCIAL_PLATFORMS.ITUNES} url={siteMetadata.social.ITUNES} />
                </div>
            </div>
            <div className={styles.navContainer}>
                <Nav />
            </div>
        </header>
    );
};

export default Header;
