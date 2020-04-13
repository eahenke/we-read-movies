import { string, shape } from 'prop-types';

// TODO: update prop types to match query results
export default {
    artist: string,
    image: shape({}).isRequired
};
