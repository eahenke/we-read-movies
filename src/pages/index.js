import React from 'react';
import PageLayout from '../components/page-layout';
import Seo from '../components/seo';
import List from '../components/list';
import CurrentEpisode from '../components/current-episode';
import EPISODES from '../data/episodes';

const IndexPage = () => (
    <PageLayout>
        <Seo title="Home" />
        <h1>Episodes</h1>
        <List>
            {EPISODES.map(ep => (
                <CurrentEpisode key={ep.title} {...ep} />
            ))}
        </List>
    </PageLayout>
);

export default IndexPage;
