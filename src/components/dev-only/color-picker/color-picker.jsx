import React, { useState, useEffect } from 'react';
import { ChromePicker } from 'react-color';
import { Palette } from '../../icons';

const ColorPicker = () => {
    const [show, setShow] = useState(false);
    const [color, setColor] = useState();
    useEffect(() => {
        if (!color) return;
        const body = document.getElementsByTagName('body')[0];
        body.setAttribute('style', `--color-primary: ${color}`);
    }, [color]);

    const colorProps = {
        onChange: col => {
            setColor(col.hex);
        }
    };
    if (color) colorProps.color = color;

    return (
        <div style={{ position: 'relative', zIndex: 1000 }}>
            <button
                onClick={() => {
                    setShow(!show);
                }}
            >
                <Palette />
            </button>
            <div style={{ position: 'absolute', top: 40, left: 40 }}>{show && <ChromePicker {...colorProps} />}</div>
        </div>
    );
};

export default ColorPicker;
