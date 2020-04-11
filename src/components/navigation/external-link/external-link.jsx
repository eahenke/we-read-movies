import React from 'react';
import { string, node } from 'prop-types';

const ExternalLink = ({ children, className = '', href }) => (
    <a className={className} href={href} rel="noopener noreferrer" target="_blank">
        {children}
    </a>
);

ExternalLink.propTypes = {
    children: node.isRequired,
    className: string,
    href: string.isRequired
};

export default ExternalLink;
