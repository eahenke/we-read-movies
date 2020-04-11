import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import ExternalLink from '../navigation/external-link';

const LinksDiscussed = ({ links = [] }) => {
    if (!links || !links.length) return null;

    return (
        <>
            <p className="paragraph-heading">Links Discussed</p>
            <ul className="body-text">
                {links.map((link, idx) => (
                    <li key={idx}>
                        <ExternalLink href={link.url}>{link.text ? link.text : link.url}</ExternalLink>
                    </li>
                ))}
            </ul>
        </>
    );
};

LinksDiscussed.propTypes = {
    links: arrayOf(
        shape({
            text: string,
            url: string
        })
    )
};

export default LinksDiscussed;
