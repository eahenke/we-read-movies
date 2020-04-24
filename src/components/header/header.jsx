import React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Nav from '../nav';
import SocialLink from '../navigation/social-link';
import styles from './header.module.css';
import Container from '../layout/container';

const Header = () => {
    const data = useStaticQuery(
        graphql`
            query {
                site {
                    siteMetadata {
                        title
                        social {
                            name
                            url
                        }
                    }
                }
            }
        `
    );

    const { siteMetadata } = data.site;
    const socialMedia = siteMetadata.social.filter(s => !!s.url);

    return (
        <header className={styles.header}>
            <div className={styles.innerHeader}>
                <Container>
                    <span className={styles.siteTitle}>
                        <Link to="/">{siteMetadata.title}</Link>
                    </span>
                    <div className={styles.logoContainer}>
                        {socialMedia.map(({ name, url }) => (
                            <SocialLink key={name} platform={name} url={url} />
                        ))}
                    </div>
                </Container>
            </div>
            <Container>
                <Nav />
            </Container>
        </header>
    );
};

export default Header;
