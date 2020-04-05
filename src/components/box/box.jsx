import React from 'react';
import { string, node, oneOf } from 'prop-types';
import cx from 'classnames';

const Box = ({ children, className = '', inset = 'xs' }) => (
    <div className={cx(`inset-${inset}`, className)}>{children}</div>
);

Box.propTypes = {
    children: node,
    className: string,
    inset: oneOf(['none', 'xs', 'sm', 'md', 'lg', 'xl'])
};

export default Box;
