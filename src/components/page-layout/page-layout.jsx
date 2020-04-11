/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Container from '../layout/container';
import Header from '../header';

const PageLayout = ({ children }) => (
    <>
        <Header />
        <Container>
            <main>{children}</main>
            <footer>© {new Date().getFullYear()}</footer>
        </Container>
    </>
);

PageLayout.propTypes = {
    children: PropTypes.node.isRequired
};

export default PageLayout;
