import React from 'react';
import { graphql } from 'gatsby';
import { arrayOf, shape, string } from 'prop-types';
import PageLayout from '../components/page-layout';
import ContentContainer from '../components/layout/content-container';
import Seo from '../components/seo';
import Bio from '../components/bio';
import List from '../components/layout/list';
import { withFlattenedQuery } from '../hocs';

const AboutPage = ({ data }) => {
    const { hosts } = data;

    return (
        <PageLayout>
            <Seo title="About" />
            <ContentContainer>
                <h1>About</h1>
                <p>
                    We Read Movies is dolor sit amet, consectetur adipiscing elit. Aenean eu lacus et dolor varius
                    auctor nec id metus. Phasellus nec elementum neque. Class aptent taciti sociosqu ad litora torquent
                    per conubia nostra, per inceptos himenaeos. Praesent maximus quis ligula vitae vestibulum. Nullam
                    eget ligula molestie.
                </p>
                <h2 className="section-heading">Your Beautiful Hosts</h2>
                <List>
                    {hosts.map(({ name, imageSrc, text, social = [] }) => (
                        <Bio imageSrc={imageSrc} key={name} name={name} socialPlatforms={social} text={text} />
                    ))}
                </List>
            </ContentContainer>
        </PageLayout>
    );
};

AboutPage.propTypes = {
    data: shape({
        hosts: arrayOf(
            shape({
                imageSrc: string,
                name: string.isRequired,
                text: string.isRequired,
                social: arrayOf(
                    shape({
                        platform: string.isRequired,
                        url: string.isRequired
                    })
                )
            })
        )
    })
};

export const AboutPageQuery = graphql`
    query Hosts {
        hosts: allHostsJson {
            edges {
                node {
                    imageSrc
                    name
                    text
                    social {
                        platform
                        url
                    }
                }
            }
        }
    }
`;

export default withFlattenedQuery(AboutPage);
