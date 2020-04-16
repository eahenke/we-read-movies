import React from 'react';
import { node } from 'prop-types';
import Container from '../layout/container';
import Header from '../header';
import styles from './page-layout.module.css';
import ColorPicker from '../dev-only/color-picker';

const PageLayout = ({ children }) => (
    <div className={styles.pageLayout}>
        <Header />
        <main>
            <Container>
                <ColorPicker />
                {children}
            </Container>
        </main>
        <footer className={styles.footer}>© {new Date().getFullYear()}</footer>
    </div>
);

PageLayout.propTypes = {
    children: node.isRequired
};

export default PageLayout;
