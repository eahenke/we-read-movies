import React from 'react';

import HOSTS from '../data/hosts';
import Layout from '../components/layout';
import Seo from '../components/seo';
import Bio from '../components/bio';
import List from '../components/list';

const SecondPage = () => (
    <Layout>
        <Seo title="About" />
        <h2 className="section-heading">Your Beautiful Hosts</h2>
        <List>
            {HOSTS.map(({ name, imageSrc, text, social }) => (
                <Bio imageSrc={imageSrc} key={name} name={name} socialPlatforms={social} text={text} />
            ))}
        </List>
    </Layout>
);

export default SecondPage;
