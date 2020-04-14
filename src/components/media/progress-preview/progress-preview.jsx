import React from 'react';
import { number } from 'prop-types';
import { secondsToTimestamp } from '../../../util';

const ProgressPreview = ({ value }) => <span>{secondsToTimestamp(value)}</span>;

ProgressPreview.propTypes = {
    value: number
};
export default ProgressPreview;
