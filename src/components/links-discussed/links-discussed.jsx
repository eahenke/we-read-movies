import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import cx from 'classnames';
import ExternalLink from '../navigation/external-link';
import styles from './links-discussed.module.css';

const LinksDiscussed = ({ links = [] }) => {
    if (!links || !links.length) return null;

    return (
        <>
            <p className="paragraph-heading">Links Discussed</p>
            <ul className={cx('body-text', styles.linksDiscussed)}>
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
