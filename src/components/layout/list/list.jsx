import React from 'react';
import { node } from 'prop-types';
import Divider from '../divider';

const List = ({ children }) => (
    <div>
        {React.Children.map(children, (child, idx) => (
            <>
                {idx > 0 && <Divider />}
                {child}
            </>
        ))}
    </div>
);

List.propTypes = {
    children: node.isRequired
};

export default List;
