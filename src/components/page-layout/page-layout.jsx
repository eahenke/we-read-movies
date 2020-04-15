import React from 'react';
import { node } from 'prop-types';
import Container from '../layout/container';
import Header from '../header';

const PageLayout = ({ children }) => (
    <div className="page-layout">
        <Header />
        <main>
            <Container>{children}</Container>
        </main>
        <footer>
            <Container>© {new Date().getFullYear()}</Container>
        </footer>
    </div>
);

PageLayout.propTypes = {
    children: node.isRequired
};

export default PageLayout;
