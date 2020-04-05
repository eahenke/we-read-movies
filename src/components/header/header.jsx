import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

import styles from './header.module.css';
import Container from '../container';
import Logo from '../logo';
import Nav from '../nav';
import SocialLink from '../social-link';
import { SOCIAL_PLATFORMS } from '../../constants';

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        description
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
        <header>
            <Container>
                <div className={styles.header}>
                    <div className={styles.logoContainer}>
                        <SocialLink platform={SOCIAL_PLATFORMS.FACEBOOK} url={siteMetadata.social.FACEBOOK} />
                        <SocialLink platform={SOCIAL_PLATFORMS.INSTAGRAM} url={siteMetadata.social.INSTAGRAM} />
                        <Logo />
                        <SocialLink platform={SOCIAL_PLATFORMS.TWITTER} url={siteMetadata.social.TWITTER} />
                        <SocialLink platform={SOCIAL_PLATFORMS.ITUNES} url={siteMetadata.social.ITUNES} />
                    </div>
                    <p className={styles.description}>{siteMetadata.description}</p>
                    <div className={styles.navContainer}>
                        <Nav />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
