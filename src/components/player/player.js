import React from 'react';
import { string } from 'prop-types';

const Player = ({ src, title }) => (
    <div>
        <iframe
            frameBorder="0"
            height="190"
            scrolling="no"
            seamless={true}
            src={src}
            style={{ width: '100vw', maxWidth: '100%', height: '190px' }}
            title={title}
            width="100%"
        />
    </div>
);

Player.propTypes = {
    src: string.isRequired,
    title: string.isRequired
};

export default Player;
