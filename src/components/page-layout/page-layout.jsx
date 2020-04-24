import React from 'react';
import { node } from 'prop-types';
import Container from '../layout/container';
import Header from '../header';
import styles from './page-layout.module.css';

const PageLayout = ({ children }) => (
    <div className={styles.pageLayout}>
        <Header />
        <main>
            <Container>{children}</Container>
        </main>
        <footer className={styles.footer}>© {new Date().getFullYear()}</footer>
    </div>
);

PageLayout.propTypes = {
    children: node.isRequired
};

export default PageLayout;
