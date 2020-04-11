import React from 'react';
import { arrayOf, string } from 'prop-types';

const TopicsDiscussed = ({ topics = [] }) => {
    if (!topics || !topics.length) return null;

    return (
        <>
            <p className="paragraph-heading">Topics Discussed</p>
            <ul className="body-text">
                {topics.map((topic, idx) => (
                    <li key={idx}>{topic}</li>
                ))}
            </ul>
        </>
    );
};

TopicsDiscussed.propTypes = {
    topics: arrayOf(string)
};

export default TopicsDiscussed;
