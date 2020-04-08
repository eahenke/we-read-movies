import { number, shape, string } from 'prop-types';
import movieInfoPropType from './movie-info';
import coverArtPropType from './cover-art';

const episodePropType = {
    num: number.isRequired,
    title: string.isRequired,
    description: string.isRequired,
    date: string.isRequired,
    duration: string.isRequired,
    src: string.isRequired,
    hosting: string,
    movieInfo: shape(movieInfoPropType),
    coverArt: shape(coverArtPropType)
};

export default episodePropType;
