/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';

const Layout = ({ children }) => (
    <Container>
        <main>{children}</main>
        <footer>© {new Date().getFullYear()}</footer>
    </Container>
);

Layout.propTypes = {
    children: PropTypes.node.isRequired
};

export default Layout;
