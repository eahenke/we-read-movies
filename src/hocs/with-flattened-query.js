import React from 'react';

function getNodes(json) {
    return json.edges ? json.edges.map(edge => edge.node) : [];
}

const withFlattenedQuery = Component => props => {
    const dataProps = Object.keys(props.data).reduce((data, key) => {
        const flattened = getNodes(props.data[key]);
        data[key] = flattened;

        return data;
    }, {});

    return <Component {...props} data={dataProps} />;
};

export default withFlattenedQuery;
