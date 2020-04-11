import React from 'react';
import { node } from 'prop-types';
import styles from './content-container.module.css';

const ContentContainer = ({ children }) => <div className={styles.contentContainer}>{children}</div>;

ContentContainer.propTypes = {
    children: node.isRequired
};

export default ContentContainer;
