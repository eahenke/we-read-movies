import { oneOf, string } from 'prop-types';
import { SOCIAL_PLATFORMS } from '../constants';

export default {
    platform: oneOf(Object.values(SOCIAL_PLATFORMS)),
    url: string
};
